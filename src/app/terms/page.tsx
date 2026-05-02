import type { Metadata } from "next";
import Link from "next/link";
import Logo from "../Logo";

export const metadata: Metadata = {
  title: "Terms of Use — srvn",
  description: "srvn waitlist terms and conditions.",
};

export default function Terms() {
  return (
    <div className="container">
      <nav>
        <Link className="nav-logo" href="/">
          srvn
        </Link>
        <Link className="back-link" href="/">
          ← Back
        </Link>
      </nav>

      <article className="legal">
        <header className="legal-header">
          <h1>Waitlist — Terms &amp; Conditions</h1>
          <p className="legal-meta">
            Last updated: April 2026 · srvn Digital Inc.
          </p>
        </header>

        <section>
          <h2>Who We Are</h2>
          <p>
            SRVN Digital Inc. (&ldquo;srvn&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates a dining discovery and
            decision platform. For any privacy or communications enquiries,
            please contact us at:{" "}
            <a href="mailto:privacy@srvnapp.com">privacy@srvnapp.com</a>.
          </p>
        </section>

        <section>
          <h2>What You&rsquo;re Signing Up For</h2>
          <p>
            By submitting your details to the srvn waitlist, you consent to srvn
            contacting you via email and/or phone (including SMS/text message),
            depending on the contact information you provide, about:
          </p>
          <ul>
            <li>Your waitlist position and early access invitations</li>
            <li>Product updates, launch announcements, and new feature news</li>
            <li>Relevant promotions, offers, or events from srvn</li>
          </ul>
        </section>

        <section>
          <h2>Your Consent &amp; Legal Basis</h2>
          <p>
            Your submission constitutes your express consent to receive these
            communications. Depending on your jurisdiction, this consent
            satisfies the requirements of:
          </p>
          <ul>
            <li>
              Canada&rsquo;s Anti-Spam Legislation (CASL) — express consent to
              receive commercial electronic messages
            </li>
            <li>
              EU/UK General Data Protection Regulation (GDPR/UK GDPR) — consent
              as the lawful basis for processing
            </li>
            <li>
              California Consumer Privacy Act (CCPA) — consent to collection and
              use of personal information
            </li>
            <li>US CAN-SPAM Act — opt-in consent for commercial email</li>
            <li>
              Other applicable Canadian provincial and international privacy
              laws
            </li>
          </ul>
        </section>

        <section>
          <h2>Withdrawing Consent (Unsubscribe / Opt-Out)</h2>
          <p>You may withdraw your consent at any time, free of charge, by:</p>
          <ul>
            <li>
              Clicking the &ldquo;Unsubscribe&rdquo; link in any email we send
              you
            </li>
            <li>Replying STOP to any SMS/text message we send you</li>
            <li>
              Emailing us directly at:{" "}
              <a href="mailto:privacy@srvnapp.com">privacy@srvnapp.com</a>
            </li>
          </ul>
          <p>
            We will process your request promptly. Withdrawal of consent does
            not affect the lawfulness of any communications sent prior to your
            request.
          </p>
        </section>

        <section>
          <h2>How We Handle Your Data</h2>
          <p>
            The only personal data we collect through the waitlist is:
          </p>
          <ul>
            <li>
              <strong>Your email address</strong> — retained only until you
              unsubscribe or ask us to remove it, after which it is deleted
              promptly
            </li>
          </ul>
          <p>While we hold your email, we will:</p>
          <ul>
            <li>
              Store it securely, encrypted in transit and at rest, on protected
              servers
            </li>
            <li>
              Use it solely for the communications described in Section 2
            </li>
            <li>
              Never sell, rent, or share it with third parties for their own
              marketing purposes, except as needed to operate the waitlist
              (e.g., our email service provider) or as required by law
            </li>
          </ul>
          <p>
            For questions about how we collect, use, protect, or delete your
            data — or to request deletion at any time — contact us at{" "}
            <a href="mailto:privacy@srvnapp.com">privacy@srvnapp.com</a>.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, delete, or port your personal data, and to lodge a
            complaint with your local data protection authority. To exercise any
            of these rights, contact us at{" "}
            <a href="mailto:privacy@srvnapp.com">privacy@srvnapp.com</a>.
          </p>
        </section>

        <section>
          <h2>Applicable Law</h2>
          <p>
            These terms are governed by the laws of the Province of Ontario and
            the federal laws of Canada applicable therein. srvn is committed to
            compliance with applicable privacy and anti-spam laws across all
            jurisdictions in which it operates.
          </p>
          <p>
            By submitting this form, you confirm that you are 13 years of age or
            older and that you have read and agree to these Terms &amp;
            Conditions.
          </p>
        </section>
      </article>

      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/terms">Terms of Use</Link> &nbsp;&middot;&nbsp;
        <a href="mailto:privacy@srvnapp.com">Contact</a>
      </footer>
    </div>
  );
}
