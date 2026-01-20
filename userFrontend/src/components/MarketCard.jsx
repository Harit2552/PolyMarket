import { BarChart3, User, TrendingUp } from "lucide-react";
import { useWallet } from "../context/WalletContext";

export default function MarketCard({ market, onSelect }) {
  const { address } = useWallet();

  const handleClick = (outcome) => {
    if (!address) {
      alert("Connect MetaMask to trade");
      return;
    }
    onSelect(market, outcome);
  };

  return (
    <div className="bg-white border rounded-2xl p-4 hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-bold uppercase text-gray-500">
          {market.category}
        </span>
        {market.trending && (
          <TrendingUp size={16} className="text-orange-500" />
        )}
      </div>

      {/* Question */}
      <h3 className="font-bold text-gray-900 mb-4 leading-snug">
        {market.question}
      </h3>

      {/* YES / NO buttons (Polymarket style) */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={() => handleClick("yes")}
          className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-3 text-left transition"
        >
          <span className="block text-xs font-bold text-green-600 uppercase">
            Yes
          </span>
          <span className="text-xl font-black text-green-700">
            {Math.round(market.yesPrice * 100)}¢
          </span>
        </button>

        <button
          onClick={() => handleClick("no")}
          className="bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl p-3 text-left transition"
        >
          <span className="block text-xs font-bold text-red-600 uppercase">
            No
          </span>
          <span className="text-xl font-black text-red-700">
            {Math.round(market.noPrice * 100)}¢
          </span>
        </button>
      </div>

      {/* Footer stats */}
      <div className="flex justify-between text-xs text-gray-500 font-medium">
        <span className="flex items-center gap-1">
          <BarChart3 size={14} />
          {market.volume}
        </span>
        <span className="flex items-center gap-1">
          <User size={14} />
          {market.participants.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
