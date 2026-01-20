import SidebarItem from "./SidebarItem";
import { TrendingUp, Globe, Clock } from "lucide-react";
import { CATEGORIES } from "../data/markets";

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <aside className="w-64 border-r bg-white p-6 hidden lg:block">
      <div className="space-y-2 mb-8">
        <SidebarItem icon={<Globe />} text="Browse" active />
        <SidebarItem icon={<TrendingUp />} text="Trending" />
        <SidebarItem icon={<Clock />} text="New" />
      </div>

      <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase">
        Categories
      </h4>

      <div className="space-y-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`w-full flex items-center gap-3 p-2 rounded-lg font-semibold ${
              selectedCategory === cat.name
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>
    </aside>
  );
}
