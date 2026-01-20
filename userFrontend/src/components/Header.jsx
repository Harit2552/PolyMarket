import { Wallet, Plus } from "lucide-react";
import { useWallet } from "../context/WalletContext";

export default function Header({ onCreateMarket }) {
  const { address, connectWallet } = useWallet();

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <h1 className="font-black text-xl">POLYCLONE</h1>

      <div className="flex items-center gap-3">
        <button
          onClick={onCreateMarket}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded font-bold"
        >
          <Plus size={16} />
          Create Market
        </button>

        <button
          onClick={connectWallet}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded font-bold"
        >
          <Wallet size={16} />
          {address ? address.slice(0, 6) + "..." : "Connect"}
        </button>
      </div>
    </header>
  );
}
