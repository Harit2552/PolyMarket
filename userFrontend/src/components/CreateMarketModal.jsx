import { X } from "lucide-react";
import { useState } from "react";
import { useWallet } from "../context/WalletContext";

const CATEGORIES = [
  "Politics",
  "Crypto",
  "Sports",
  "Pop Culture",
];

export default function CreateMarketModal({ onClose, onCreate }) {
  const { address } = useWallet();

  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("Politics");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = () => {
    if (!question || !endTime) {
      alert("All fields are required");
      return;
    }

    onCreate({
      question,
      category,
      endTime,
      yesPrice: 0.5,
      noPrice: 0.5,
      volume: "$0",
      participants: 0,
      trending: false,
      creator: address,
    });

    onClose();
  };

  if (!address) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl">
          <p className="font-bold mb-4">
            Connect wallet to create a market
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-lg font-bold mb-4">
          Create New Market
        </h2>

        <label className="block text-sm font-semibold mb-1">
          Market Question
        </label>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Will ETH hit $5,000 by June?"
          className="w-full border rounded p-2 mb-4"
        />

        <label className="block text-sm font-semibold mb-1">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded p-2 mb-4"
        >
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <label className="block text-sm font-semibold mb-1">
          End Time
        </label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="w-full border rounded p-2 mb-6"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded font-bold"
        >
          Create Market
        </button>
      </div>
    </div>
  );
}
