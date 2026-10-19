"use client";

import { useState } from "react";
import styles from "./sharing.module.css";

/** A custom scheme is attempted only by a deliberate click, with no redirect timers. */
export default function OpenAppLink({ href }: { href: string }) {
  const [attempted, setAttempted] = useState(false);
  return (
    <div className={styles.openSection}>
      <p className={styles.smallLabel}>Already installed?</p>
      <a
        className={styles.openLink}
        href={href}
        rel="noreferrer"
        onClick={() => setAttempted(true)}
      >
        Open SRVN <span aria-hidden="true">↗</span>
      </a>
      {attempted && (
        <p className={styles.help} role="status">
          If SRVN didn&apos;t open, use your device&apos;s browser to open this
          link. If you need to install the app, return to the original message
          afterward and tap the same link again.
        </p>
      )}
    </div>
  );
}
