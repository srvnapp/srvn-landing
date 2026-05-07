import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../Reveal";
import WaitlistForm from "../WaitlistForm";

export const metadata: Metadata = {
  title: "How it works — Srvn",
  description:
    "Srvn is an AI dining agent built on a personal taste graph. Here's how it decides where you should eat.",
};

const PROBLEMS = [
  {
    num: "Problem 01",
    name: "Anonymous ratings",
    desc: "Generic scores don't explain whether a place fits your taste.",
  },
  {
    num: "Problem 02",
    name: "TikTok / Instagram",
    desc: "Great for inspiration, weak at turning desire into a dinner decision.",
  },
  {
    num: "Problem 03",
    name: "Google nearby",
    desc: "Shows what's close or popular, not what this person or group should choose.",
  },
  {
    num: "Problem 04",
    name: "Group chats",
    desc: "Endless back-and-forth with no memory of the last meal.",
  },
] as const;

const CHIPS: {
  x: number;
  y: number;
  w: number;
  label: string;
  accent?: boolean;
}[] = [
  { x: 440, y: 70, w: 120, label: "Dish notes" },
  { x: 640, y: 90, w: 120, label: "Photos", accent: true },
  { x: 240, y: 90, w: 120, label: "Reviews" },
  { x: 800, y: 150, w: 120, label: "Ratings" },
  { x: 80, y: 150, w: 120, label: "Saves", accent: true },
  { x: 840, y: 290, w: 120, label: "Friends" },
  { x: 20, y: 290, w: 160, label: "Occasion + context" },
  { x: 770, y: 458, w: 160, label: "What was chosen", accent: true },
  { x: 80, y: 458, w: 140, label: "Group events", accent: true },
  { x: 630, y: 500, w: 140, label: "Who suggested" },
  { x: 250, y: 500, w: 120, label: "Attendance" },
];

function TasteGraphSvg() {
  const inter = "var(--font-inter), -apple-system, sans-serif";
  const playfair = "var(--font-playfair), Georgia, serif";

  return (
    <svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="centerGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(247, 141, 81, 0.20)" />
          <stop offset="100%" stopColor="rgba(247, 141, 81, 0)" />
        </radialGradient>
      </defs>

      <g stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none">
        {CHIPS.map((c, i) => {
          const targetX = c.x + c.w / 2;
          const targetY = c.y + 22;
          return (
            <line
              key={i}
              x1="500"
              y1="300"
              x2={targetX}
              y2={targetY}
            />
          );
        })}
      </g>

      <circle cx="500" cy="300" r="140" fill="url(#centerGrad)" />

      <g>
        <ellipse
          cx="500"
          cy="300"
          rx="110"
          ry="76"
          fill="#121212"
          stroke="#f78d51"
          strokeWidth="1.5"
        />
        <text
          x="500"
          y="295"
          textAnchor="middle"
          fill="#F5F5F4"
          fontWeight="700"
          fontSize="28"
          style={{ fontFamily: playfair }}
        >
          Taste
        </text>
        <text
          x="500"
          y="325"
          textAnchor="middle"
          fill="#F5F5F4"
          fontWeight="700"
          fontSize="28"
          style={{ fontFamily: playfair }}
        >
          Graph
        </text>
      </g>

      {CHIPS.map((c, i) => (
        <g key={i} transform={`translate(${c.x}, ${c.y})`}>
          <rect
            x="0"
            y="0"
            width={c.w}
            height="44"
            rx="22"
            fill={c.accent ? "rgba(247, 141, 81, 0.06)" : "#1e1e1e"}
            stroke={c.accent ? "#f78d51" : "rgba(255,255,255,0.14)"}
          />
          <text
            x={c.w / 2}
            y="28"
            textAnchor="middle"
            fill={c.accent ? "#f78d51" : "#F5F5F4"}
            fontWeight="600"
            fontSize="14"
            style={{ fontFamily: inter }}
          >
            {c.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="page-doc">
      <nav className="nav-top">
        <div className="nav-inner">
          <Link href="/" className="wordmark">
            Srvn<span className="wordmark-dot">.</span>
          </Link>
          <Link href="#join" className="nav-cta">
            Join waitlist
          </Link>
        </div>
      </nav>

      <main>
        <section className="page-hero">
          <div className="container">
            <div className="hero-eyebrow">How it works</div>
            <h1>
              Most apps show what&rsquo;s <em>popular</em>.
              <br />
              Srvn learns what you&rsquo;d <em>actually like</em>.
            </h1>
            <p>
              An AI dining agent built on a personal taste graph that compounds
              with every meal.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <Reveal>
              <div className="section-eyebrow">
                The State of Restaurant Choice
              </div>
              <h2 className="section-title">
                Restaurant choice is still broken.
              </h2>
              <p className="section-sub">
                The issue is not a lack of places. It is scattered, low-trust,
                non-personal information.
              </p>
            </Reveal>
            <Reveal className="problem-grid">
              {PROBLEMS.map((p) => (
                <div key={p.num} className="problem-card">
                  <div className="problem-num">{p.num}</div>
                  <div className="problem-name">{p.name}</div>
                  <p className="problem-desc">{p.desc}</p>
                </div>
              ))}
            </Reveal>
            <Reveal className="insight-callout">
              <h3>
                The problem is not{" "}
                <span className="strike">discovery</span>. It&rsquo;s{" "}
                <span className="accent">decision-making</span>.
              </h3>
            </Reveal>
          </div>
        </section>

        <section className="inputs">
          <div className="container">
            <Reveal>
              <div className="section-eyebrow">How the Agent Decides</div>
              <h2 className="section-title">It reads the full picture.</h2>
              <p className="inputs-line">
                <span className="term">Personal taste signals</span>
                <span className="plus">+</span>
                <span className="term">friend &amp; group context</span>
                <span className="plus">+</span>
                <span className="term">restaurant and dish data</span>
                <span className="plus">+</span>
                <span className="term">
                  occasion, budget, location, vibe
                </span>
                <span className="plus">+</span>
                <span className="term">past decisions</span>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="moat">
          <div className="container">
            <Reveal>
              <div className="section-eyebrow">The Moat</div>
              <h2 className="section-title">
                The first real taste graph for food.
              </h2>
              <p className="section-sub">
                The moat isn&rsquo;t the interface. It&rsquo;s the compounding
                memory created from repeated dining decisions.
              </p>
            </Reveal>
            <Reveal className="graph-wrap">
              <TasteGraphSvg />
            </Reveal>
            <Reveal className="moat-footer">
              Every outing makes the agent{" "}
              <span className="accent">smarter</span>.
            </Reveal>
          </div>
        </section>

        <section className="final-cta" id="join">
          <div className="container">
            <Reveal>
              <h2>Join the waitlist.</h2>
              <p>
                Get early access to the first AI dining agent that learns your
                taste. We&rsquo;re rolling out invites in waves.
              </p>
              <WaitlistForm buttonLabel="Get early access" showMeta={false} />
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/terms">Terms of Use</Link> &nbsp;&middot;&nbsp;
        <a href="mailto:hello@srvn.com">Contact</a>
      </footer>
    </div>
  );
}
