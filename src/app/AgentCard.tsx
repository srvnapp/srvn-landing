"use client";

import { useState } from "react";

type Pill = { cls: "orange" | "cream" | "mint"; label: string };
type Scenario = { title: string; quote: string; pills: Pill[] };

const SCENARIOS: Scenario[] = [
  {
    title: "Best fit tonight",
    quote:
      "Your group tends to like lively but not loud places, shared plates, and budgets under $45. This spot is central, has three dishes that match saved taste, and two friends rated it highly.",
    pills: [
      { cls: "mint", label: "group taste match" },
      { cls: "cream", label: "budget fit" },
      { cls: "orange", label: "dish-level signal" },
    ],
  },
  {
    title: "Solo Tuesday lunch",
    quote:
      "You usually go for something quick and warm on rainy weekdays. This noodle bar is a 6-minute walk, has the chili oil dumplings you saved last month, and is quietest 12:15–12:45.",
    pills: [
      { cls: "orange", label: "past taste hit" },
      { cls: "cream", label: "short walk" },
      { cls: "mint", label: "low-crowd window" },
    ],
  },
  {
    title: "First date in a new city",
    quote:
      "Lively but not loud, easy to talk over, not too pricey for a first date. Two friends with similar taste rated it highly. The natural-wine bar across the street is a clean second-stop if it goes well.",
    pills: [
      { cls: "mint", label: "date-night vibe" },
      { cls: "orange", label: "friend signal" },
      { cls: "cream", label: "second-stop option" },
    ],
  },
  {
    title: "Friday dinner with the in-laws",
    quote:
      "Your father-in-law avoids spice, your sister is vegetarian. This spot has both — strong pasta menu, three vegetarian mains rated 4.6+, calm room, parking on the block. Best window: 7:30, back-corner table.",
    pills: [
      { cls: "cream", label: "group constraints" },
      { cls: "mint", label: "dietary fit" },
      { cls: "orange", label: "reservation timing" },
    ],
  },
];

export default function AgentCard() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const s = SCENARIOS[idx];

  function cycle() {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setIdx((i) => (i + 1) % SCENARIOS.length);
      setFading(false);
    }, 200);
  }

  const fadeStyle = { opacity: fading ? 0 : 1 };

  return (
    <div className="agent-card">
      <div className="agent-label">Agent Response</div>
      <div className="agent-title" style={fadeStyle}>
        {s.title}
      </div>
      <div className="agent-quote" style={fadeStyle}>
        &ldquo;{s.quote}&rdquo;
      </div>
      <div className="agent-pill-row" style={fadeStyle}>
        {s.pills.map((p, i) => (
          <span key={i} className={`pill ${p.cls}`}>
            {p.label}
          </span>
        ))}
      </div>
      <button className="agent-cta" type="button" onClick={cycle}>
        Choose this place
      </button>
      <div className="agent-cycle-hint">
        Tap <kbd>Choose this place</kbd> to see another scenario
      </div>
    </div>
  );
}
