import { createContext, useContext, useEffect, useState } from "react";

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Connect wallet
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not installed");
      return;
    }

    try {
      setLoading(true);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const chain = await window.ethereum.request({
        method: "eth_chainId",
      });

      setAddress(accounts[0]);
      setChainId(chain);
    } catch (err) {
      console.error(err);
      alert("Wallet connection rejected");
    } finally {
      setLoading(false);
    }
  };

  // Disconnect (frontend-only)
  const disconnectWallet = () => {
    setAddress(null);
    setChainId(null);
  };

  // Auto reconnect
  useEffect(() => {
    if (!window.ethereum) return;

    window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
      if (accounts.length) setAddress(accounts[0]);
    });

    window.ethereum.on("accountsChanged", (accounts) => {
      setAddress(accounts.length ? accounts[0] : null);
    });

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
  }, []);

  return (
    <WalletContext.Provider
      value={{ address, chainId, connectWallet, disconnectWallet, loading }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);
