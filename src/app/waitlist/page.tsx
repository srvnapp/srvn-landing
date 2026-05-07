import type { Metadata } from "next";
import Link from "next/link";
import AgentCard from "../AgentCard";
import WaitlistForm from "../WaitlistForm";

export const metadata: Metadata = {
  title: "Join the waitlist — Srvn",
  description:
    "Reserve your spot. Srvn learns your taste, understands your group, and helps you choose where to eat — in seconds, not hours.",
};

export default function WaitlistPage() {
  return (
    <div className="page-doc">
      {/* Nav */}
      <nav className="nav-top">
        <div className="nav-inner">
          <Link className="wordmark" href="/">
            Srvn
          </Link>
          <div className="nav-links">
            <Link className="nav-link" href="/">
              How it works
            </Link>
            <div className="nav-badge">
              <span className="nav-dot" />
              Coming Soon
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-eyebrow">AI Powered Dining experience</div>

                <h1>
                  Your <em>AI Dining</em>
                  <br />
                  Agent.
                </h1>

                <p className="subtitle">
                  Srvn learns your taste, understands your group, and helps you
                  choose where to eat — in seconds, not hours.
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
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/terms">Terms of Use</Link> &nbsp;&middot;&nbsp;
        <a href="mailto:hello@srvn.com">Contact</a>
      </footer>
    </div>
  );
}
