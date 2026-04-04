"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email") as string;

    if (!email || !email.includes("@")) return;

    // ── Wire up your email capture here ──────────────────────────
    // Example with Loops:
    // fetch('https://app.loops.so/api/v1/contacts/create', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer YOUR_LOOPS_API_KEY'
    //   },
    //   body: JSON.stringify({ email, source: 'waitlist' })
    // });
    // ─────────────────────────────────────────────────────────────

    setSubmitted(true);
  }

  return (
    <div className="form-card">
      <div className="form-header">
        <div className="form-dot" />
        <span className="form-label">Reserve your spot — launching soon</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            required
            disabled={submitted}
          />
          <button
            type="submit"
            className={submitted ? "success" : ""}
            disabled={submitted}
          >
            {submitted ? "Joined!" : "Join waitlist"}
          </button>
        </div>
      </form>
      <p className="form-note">
        No spam, ever. First access goes to the waitlist — we&apos;ll reach out
        when we&apos;re ready.
      </p>
      {submitted && (
        <p className="success-msg">
          &#10003; You&apos;re on the list — we&apos;ll be in touch soon.
        </p>
      )}
    </div>
  );
}
