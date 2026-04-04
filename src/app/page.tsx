import Link from "next/link";
import WaitlistForm from "./WaitlistForm";

const FEATURES = [
  {
    num: "01",
    title: "Search",
    desc: "Find the perfect restaurant for any mood or occasion",
  },
  {
    num: "02",
    title: "Review",
    desc: "Share honest dining experiences with people you trust",
  },
  {
    num: "03",
    title: "Navigate",
    desc: "Track where you've been and discover what's next",
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
          SRVN
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
          Discover the restaurants your city is talking about. Read real reviews,
          track your dining adventures, and get recommendations that actually
          know your taste.
        </p>

        <div className="smart-pill">
          <span className="smart-icon">✦</span>
          <span className="smart-text">
            The more you use SRVN, the smarter it gets.
          </span>
        </div>
      </div>

      {/* Waitlist Form (client component) */}
      <WaitlistForm />

      {/* Social Proof */}
      <div className="proof">
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
      </div>

      {/* Divider */}
      <div className="divider">
        <div className="divider-line" />
        <span className="divider-label">What SRVN does</span>
        <div className="divider-line" />
      </div>

      {/* Features */}
      <div className="features">
        {FEATURES.map((f) => (
          <div key={f.num} className="feature">
            <div className="feature-num">{f.num}</div>
            <span className="feature-title">{f.title}</span>
            <span className="feature-desc">{f.desc}</span>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="quote">
        <div className="quote-text">
          &ldquo;The best restaurant recommendations come from people who eat
          the way you do — not algorithms that don&apos;t know you.&rdquo;
        </div>
        <div className="quote-author">— The idea behind SRVN</div>
      </div>

      {/* Footer */}
      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/privacy">Privacy</Link> &nbsp;&middot;&nbsp;
        <a href="mailto:hello@srvn.com">Contact</a>
      </footer>
    </div>
  );
}
