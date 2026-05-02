import Link from "next/link";
import Logo from "./Logo";
import WaitlistForm from "./WaitlistForm";

const FEATURES = [
  {
    letter: "S",
    title: "Search",
    desc: "Find the perfect restaurant for any mood, cuisine, or occasion",
  },
  {
    letter: "R",
    title: "Review",
    desc: "Share honest dining experiences with people whose taste you trust",
  },
  {
    letter: "V",
    title: "Visit",
    tag: "Events",
    desc: "Create and discover dining events — from supper clubs to group reservations",
  },
  {
    letter: "N",
    title: "Navigate",
    desc: "Track where you've been and discover what's next on your dining map",
  },
] as const;

const AVATARS = [
  { initials: "JR", color: "#c84b2f" },
  { initials: "AM", color: "#3d1f0d" },
  { initials: "SK", color: "#2d6a4f" },
  { initials: "PL", color: "#6d4c9e" },
] as const;

export default function Home() {
  return (
    <div className="container">
      {/* Nav */}
      <nav>
        <Link className="nav-logo" href="#">
          srvn
        </Link>
        <div className="nav-badge">
          <span className="nav-dot" />
          Coming Soon
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <div className="eyebrow">
          <div className="eyebrow-line" />
          <span className="eyebrow-text">Social Restaurant Venue Network</span>
          <div className="eyebrow-line" />
        </div>

        <h1>
          Where great
          <br />
          meals <em>begin.</em>
        </h1>

        <p className="subtitle">
          Discover the restaurants your city is talking about. Read real
          reviews, track your dining adventures, and get recommendations that
          actually know your taste.
        </p>

        <div className="smart-pill">
          <span className="smart-icon">✦</span>
          <span className="smart-text">
            The more you use srvn, the smarter it gets.
          </span>
        </div>
      </div>

      {/* Waitlist Form (client component) */}
      {/* <WaitlistForm /> */}

      {/* Social Proof */}
      {/* <div className="proof">
        <div className="proof-avatars">
          {AVATARS.map((a) => (
            <div
              key={a.initials}
              className="avatar"
              style={{ background: a.color }}
            >
              {a.initials}
            </div>
          ))}
        </div>
        <span className="proof-text">
          <strong>Food lovers</strong> already on the list
        </span>
      </div> */}

      {/* Divider */}
      <div className="divider">
        <div className="divider-line" />
        <span className="divider-label">what srvn does</span>
        <div className="divider-line" />
      </div>

      {/* Features */}
      <div className="features">
        {FEATURES.map((f) => (
          <div key={f.letter} className="feat">
            <div className="feat-letter">{f.letter}</div>
            <div>
              <span className="feat-title">
                {f.title}
                {"tag" in f && <span className="feat-new">{f.tag}</span>}
              </span>
              <span className="feat-desc">{f.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="quote">
        <div className="quote-text">
          &ldquo;The best restaurant recommendations come from people who eat
          the way you do — not algorithms that don&apos;t know you.&rdquo;
        </div>
        <div className="quote-author">— The idea behind srvn</div>
      </div>

      {/* Footer */}
      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/terms">Terms of Use</Link> &nbsp;&middot;&nbsp;
        <a href="mailto:hello@srvn.com">Contact</a>
      </footer>
    </div>
  );
}
