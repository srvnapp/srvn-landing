import type { Metadata } from "next";
import Link from "next/link";
import DemoFlow from "../DemoFlow";

export const metadata: Metadata = {
  title: "See it in action — Srvn",
  description:
    "Watch the recommend-by-intent flow as Maya sees it. Type a vibe, get a personalized shortlist of nine spots, ranked first by the database and then re-ranked by the AI agent in seconds.",
};

export default function DemoPage() {
  return (
    <div className="page-doc">
      <nav className="nav-top">
        <div className="nav-inner">
          <Link href="/" className="wordmark">
            Srvn
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">
              How it works
            </Link>
            <Link href="/waitlist" className="nav-cta">
              Join waitlist
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="demo-page">
          <div className="demo-intro">
            <div className="demo-intro-mark">
              SRVN <span className="demo-intro-mark-dot" aria-hidden />
            </div>
            <h1>
              Search → results,
              <br />
              <em>as Maya sees it</em>.
            </h1>
            <p>
              A live walkthrough of the recommend-by-intent flow. The database
              returns nine candidates in proximity order in under half a
              second; the agent re-ranks them in the next second, watching for
              matches your saved spots reveal about your taste.
            </p>
            <div className="demo-persona">
              <b>Maya</b> · Tuesday 6:47pm, Brooklyn · anniversary tomorrow.
              Returning user — location granted, taste profile established
              (Italian + Japanese, $$$, saves speakeasies &amp; listening
              rooms).
            </div>
            <p>
              The flow auto-plays on load. Tap{" "}
              <span className="demo-accent">Date night</span> to replay Maya’s
              solo anniversary search, or{" "}
              <span className="demo-accent">Friends night</span> to watch the
              same nine spots get re-ranked for a group of four with a vegan
              and a peanut allergy.
            </p>
          </div>

          <DemoFlow />
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
