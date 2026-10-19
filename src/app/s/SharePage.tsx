import Link from "next/link";
import Logo from "../Logo";
import { buildAppShareUrl, type ShareDestination } from "@/lib/sharing";
import type { SharingConfig } from "@/lib/sharing-config";
import OpenAppLink from "./OpenAppLink";
import styles from "./sharing.module.css";

function ShareFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className="nav-logo" aria-label="SRVN home" prefetch={false}>
          <Logo size={30} /> <span aria-hidden="true">srvn</span>
        </Link>
        <Link className={styles.supportLink} href="/support" prefetch={false}>Need help?</Link>
      </nav>
      <main className={styles.card}>{children}</main>
      <footer className={styles.footer}>
        <span>© 2026 SRVN Digital Inc.</span>
        <div>
          <Link href="/privacy" prefetch={false}>Privacy</Link>
          <Link href="/terms" prefetch={false}>Terms</Link>
        </div>
      </footer>
    </div>
  );
}

export default function SharePage({
  destination,
  config,
}: {
  destination: ShareDestination;
  config: SharingConfig;
}) {
  const { kind } = destination;
  const hasStore = Boolean(config.iosStoreUrl || config.androidStoreUrl);
  return (
    <ShareFrame>
      <div className={styles.shareMark} aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="m8 10 8-5M8 14l8 5" />
          <circle cx="5" cy="12" r="3" /><circle cx="19" cy="4" r="3" /><circle cx="19" cy="20" r="3" />
        </svg>
      </div>
      <p className={styles.eyebrow}>Shared on SRVN</p>
      <h1 className={styles.heading}>
        Someone shared <em>a {kind}</em> with you on SRVN.
      </h1>
      <p className={styles.intro}>
        To view it, open SRVN and sign in or create an account.
      </p>

      <OpenAppLink href={buildAppShareUrl(config.appScheme, destination)} />
      <p className={styles.browserHelp}>
        Opening this inside a messaging app? Use its menu to open the link in
        your device&apos;s browser.
      </p>

      <section className={styles.downloadSection} aria-labelledby="download-heading">
        <h2 id="download-heading">{hasStore ? "Get SRVN" : "SRVN is coming soon"}</h2>
        {!hasStore && (
          <p>Download links will appear here when the app is available.</p>
        )}
        {hasStore && (
          <div className={styles.downloadActions}>
            {config.iosStoreUrl && (
              <a className={styles.primaryLink} href={config.iosStoreUrl} rel="noreferrer noopener" referrerPolicy="no-referrer">
                Download for iPhone <span aria-hidden="true">↗</span>
              </a>
            )}
            {config.androidStoreUrl && (
              <a className={styles.primaryLink} href={config.androidStoreUrl} rel="noreferrer noopener" referrerPolicy="no-referrer">
                Download for Android <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
        {hasStore && (!config.iosStoreUrl || !config.androidStoreUrl) && (
          <p className={styles.availability}>
            {!config.iosStoreUrl ? "The iPhone" : "The Android"} download link is coming soon.
          </p>
        )}
      </section>

      <section className={styles.stepsSection} aria-labelledby="return-heading">
        <h2 id="return-heading">Keep the original message.</h2>
        <p className={styles.returnInstruction}>
          Install SRVN{!hasStore && " when it's available"}, then return to
          the original message and tap this link again.
        </p>
        <ol className={styles.steps}>
          <li><span>1</span><p>Install SRVN on your phone.</p></li>
          <li><span>2</span><p>Return to the message where this link was shared.</p></li>
          <li><span>3</span><p>Tap the same link, then sign in or create an account.</p></li>
        </ol>
      </section>

    </ShareFrame>
  );
}

export function InvalidSharePage() {
  return (
    <ShareFrame>
      <p className={styles.eyebrow}>Shared on SRVN</p>
      <h1 className={styles.heading}>That link isn&apos;t valid.</h1>
      <p className={styles.intro}>
        Check the link in the original message, or ask the sender for a new one.
      </p>
      <Link className={styles.primaryLink} href="/" prefetch={false}>Go to SRVN home</Link>
    </ShareFrame>
  );
}
