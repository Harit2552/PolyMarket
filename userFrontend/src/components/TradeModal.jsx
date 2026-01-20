export default function TradeModal({ market, outcome, onClose }) {
  if (!market) return null;

  const price =
    outcome === "yes" ? market.yesPrice : market.noPrice;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6">
        <h2 className="font-bold text-lg mb-2">
          {market.question}
        </h2>

        <p className="mb-4 text-sm text-gray-500">
          You selected:{" "}
          <span className="font-bold uppercase">{outcome}</span>
        </p>

        <p className="mb-4 font-bold">
          Price: {Math.round(price * 100)}¢
        </p>

        {/* amount input + trade button (already added earlier) */}

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 py-2 rounded font-bold"
        >
          Close
        </button>
      </div>
    </div>
  );
}
