import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — srvn",
  description: "How srvn collects, uses, and protects your information.",
};

// This is the page App Store Connect's Privacy Policy URL points at, and the
// page the mobile app's in-app "View full Privacy Policy" link opens — keep the
// /privacy path stable.
export default function Privacy() {
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
          <h1>Privacy Policy</h1>
          <p className="legal-meta">
            Effective: August 12, 2026 · srvn Digital Inc.
          </p>
        </header>

        <section>
          <h2>Who We Are</h2>
          <p>
            SRVN Digital Inc. (&ldquo;srvn&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the srvn mobile
            application and website. This policy explains what we collect, why
            we collect it, and the choices you have. For any privacy enquiry,
            contact{" "}
            <a href="mailto:privacy@srvnapp.com">privacy@srvnapp.com</a>.
          </p>
        </section>

        <section>
          <h2>What We Collect</h2>
          <ul>
            <li>
              <strong>Account information</strong> — your phone number and/or
              email address, verified with a one-time code when you sign in.
              You may also add a name and profile photo.
            </li>
            <li>
              <strong>Content you create</strong> — reviews, comments, photos
              you attach to reviews, and the restaurants you save. Reviews you
              publish are visible to other users.
            </li>
            <li>
              <strong>Location</strong> — with your permission, your
              device&rsquo;s location is used to show restaurants near you and
              their distance from you, only while you are using the app. We do
              not collect location in the background. You can browse by city
              instead, or disable location access at any time in your device
              settings.
            </li>
            <li>
              <strong>Camera and photo library</strong> — with your
              permission, accessed only when you choose to add a photo to a
              review or your profile.
            </li>
            <li>
              <strong>Usage and device data</strong> — basic information about
              your device and how the app performs, including crash reports
              and diagnostics, so we can fix problems.
            </li>
          </ul>
        </section>

        <section>
          <h2>What We Don&rsquo;t Do</h2>
          <ul>
            <li>We do not sell your personal information.</li>
            <li>We do not collect your location in the background.</li>
            <li>
              We do not access your contacts, microphone, or health data.
            </li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>
            To operate the service: authenticate you, show nearby restaurants,
            personalize recommendations to your tastes, display your reviews,
            and keep your saved places in sync. To improve the service:
            understand which features are used and diagnose crashes. To
            communicate with you: send verification codes and service
            messages.
          </p>
        </section>

        <section>
          <h2>Restaurant Information</h2>
          <p>
            Restaurant details, ratings, and review excerpts shown in srvn
            come from third-party sources, including Google. That content
            belongs to its original authors and platforms and is attributed
            where it is shown.
          </p>
        </section>

        <section>
          <h2>Sharing</h2>
          <p>
            We share data only with service providers who help us run srvn —
            such as cloud hosting and crash reporting (Sentry) — under
            agreements that limit how they may use it, and when required by
            law. If srvn is involved in a merger or acquisition, your data may
            transfer with the service; we will notify you before a materially
            different policy applies to it.
          </p>
        </section>

        <section>
          <h2>Retention &amp; Deletion</h2>
          <p>
            We keep your data while your account is active. You can delete
            your account at any time in the app under{" "}
            <strong>Profile → Settings → Delete Account</strong>; deletion is
            confirmed with a one-time code and removes your account data from
            the service. You can also request deletion, or a copy of your
            data, by emailing{" "}
            <a href="mailto:privacy@srvnapp.com">privacy@srvnapp.com</a>.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, export, or delete your personal information, to withdraw
            consent, and to lodge a complaint with your local data protection
            authority. Contact{" "}
            <a href="mailto:privacy@srvnapp.com">privacy@srvnapp.com</a> and
            we will respond to verified requests.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            srvn is not directed to children under 13, and we do not knowingly
            collect their information.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We will post any changes to this policy on this page and update
            the effective date above. Material changes will be announced in
            the app.
          </p>
        </section>
      </article>

      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/terms">Terms of Use</Link> &nbsp;&middot;&nbsp;
        <Link href="/support">Support</Link> &nbsp;&middot;&nbsp;
        <a href="mailto:privacy@srvnapp.com">Contact</a>
      </footer>
    </div>
  );
}
