export const MARKETS = [
  {
    id: 1,
    category: "Politics",
    question: "Who will win the 2024 US Presidential Election?",
    yesPrice: 0.52,
    noPrice: 0.48,
    volume: "$245.2M",
    participants: 12400,
    trending: true,
  },
  {
    id: 2,
    category: "Crypto",
    question: "Will Bitcoin reach $100,000 by June 2024?",
    yesPrice: 0.15,
    noPrice: 0.85,
    volume: "$12.1M",
    participants: 5200,
    trending: false,
  },
];

export const CATEGORIES = [
  { name: "All", icon: "globe" },
  { name: "Politics", icon: "vote" },
  { name: "Crypto", icon: "bitcoin" },
  { name: "Sports", icon: "trophy" },
  { name: "Pop Culture", icon: "zap" },
];
