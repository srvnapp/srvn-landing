import type { Metadata } from "next";
import Link from "next/link";
import SupportForm from "./SupportForm";

export const metadata: Metadata = {
  title: "Support — SRVN",
  description: "Get help with the SRVN app.",
};

// This is the page App Store Connect's Support URL points at — keep the
// /support path stable.
export default function Support() {
  return (
    <div className="container">
      <nav>
        <Link className="nav-logo" href="/">
          SRVN
        </Link>
        <Link className="back-link" href="/">
          ← Back
        </Link>
      </nav>

      <main className="legal">
        <header className="legal-header">
          <h1>Support</h1>
          <p>
            Have a question, found a bug, or want to share feedback? Send us a
            message below. We aim to reply within 2 business days.
          </p>
          <p>
            You can also email <a href="mailto:support@srvnapp.com">support@srvnapp.com</a>.
          </p>
        </header>

        <SupportForm />

        <section>
          <h2>I didn&rsquo;t receive my sign-in code</h2>
          <p>
            Codes can take up to a minute to arrive. Check that your phone
            number or email address is correct, and check your spam folder for
            email codes. The app shows when you can request a new code.
          </p>
        </section>

        <section>
          <h2>How do I control location access?</h2>
          <p>
            SRVN only uses your location while you&rsquo;re using the app, to
            show restaurants near you. You can turn it off under your device
            Settings → SRVN → Location, and browse by city instead.
          </p>
        </section>

        <section>
          <h2>How do I edit or remove a review?</h2>
          <p>Open the review from your profile to edit or delete it.</p>
        </section>

        <section>
          <h2>How do I delete my account?</h2>
          <p>
            In the app: <strong>Profile → Settings → Delete Account</strong>.
            You&rsquo;ll confirm with a one-time code, and your account data is
            removed from the service. If you can no longer access the app,
            email{" "}
            <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> from
            the address on your account.
          </p>
        </section>

        <section>
          <h2>A restaurant&rsquo;s details are wrong</h2>
          <p>
            Restaurant information comes from third-party sources and the
            restaurants themselves. Tell us at{" "}
            <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> and
            we&rsquo;ll look into it.
          </p>
        </section>
      </main>

      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/terms">Terms of Use</Link> &nbsp;&middot;&nbsp;
        <Link href="/privacy">Privacy Policy</Link> &nbsp;&middot;&nbsp;
        <Link href="/support">Contact</Link>
      </footer>
    </div>
  );
}
