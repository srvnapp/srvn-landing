import Link from "next/link";
import AgentCard from "./AgentCard";
import WaitlistForm from "./WaitlistForm";

export default function Home() {
  return (
    <div className="home-shell">
      {/* Nav */}
      <nav>
        <Link className="nav-logo" href="/">
          Srvn
        </Link>
        <div className="nav-links">
          <Link className="nav-link" href="/how-it-works">
            How it works
          </Link>
          <div className="nav-badge">
            <span className="nav-dot" />
            Coming Soon
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">AI Powered Dining experience</div>

          <h1>
            Your <em>AI Dining</em>
            <br />
            Agent.
          </h1>

          <p className="subtitle">
            Srvn learns your taste, understands your group, and helps you choose
            where to eat — in seconds, not hours.
          </p>

          <div className="smart-pill">
            <span className="smart-icon">✦</span>
            <span className="smart-text">
              The more you use srvn, the smarter it gets.
            </span>
          </div>

          <div className="pill-row">
            <span className="pill orange">AI dining agent</span>
            <span className="pill cream">taste graph</span>
            <span className="pill mint">group-aware</span>
          </div>

          <WaitlistForm />
        </div>

        <div className="hero-card">
          <AgentCard />
        </div>
      </section>

      {/* Footer */}
      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/terms">Terms of Use</Link> &nbsp;&middot;&nbsp;
        <a href="mailto:hello@srvn.com">Contact</a>
      </footer>
    </div>
  );
}
