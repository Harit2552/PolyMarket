import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MarketCard from "./components/MarketCard";
import TradeModal from "./components/TradeModal";
import CreateMarketModal from "./components/CreateMarketModal";
import { MARKETS as INITIAL_MARKETS } from "./data/markets";

export default function App() {
  const [markets, setMarkets] = useState(INITIAL_MARKETS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCreateMarket, setShowCreateMarket] = useState(false);
  const [activeMarket, setActiveMarket] = useState(null);
  const [selectedOutcome, setSelectedOutcome] = useState(null);


  const filteredMarkets = markets.filter(
    (m) => selectedCategory === "All" || m.category === selectedCategory
  );

  const addMarket = (newMarket) => {
    setMarkets((prev) => [
      { id: Date.now(), ...newMarket },
      ...prev,
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCreateMarket={() => setShowCreateMarket(true)} />

      <div className="flex">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredMarkets.map((m) => (
            <MarketCard
              key={m.id}
              market={m}
              onSelect={(market, outcome) => {
                setActiveMarket(market);
                setSelectedOutcome(outcome);
              }}
            />
          ))}
        </main>
      </div>

      {activeMarket && (
        <TradeModal
          market={activeMarket}
          outcome={selectedOutcome}
          onClose={() => {
            setActiveMarket(null);
            setSelectedOutcome(null);
          }}
        />
      )}

      {showCreateMarket && (
        <CreateMarketModal
          onClose={() => setShowCreateMarket(false)}
          onCreate={addMarket}
        />
      )}
    </div>
  );
}
