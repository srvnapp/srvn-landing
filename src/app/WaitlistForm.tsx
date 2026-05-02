"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (new FormData(form).get("email") as string)?.trim();

    if (!email || !email.includes("@")) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/waitlist/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      if (res.ok) {
        setStatus("success");
        return;
      }

      if (res.status === 422) {
        setStatus("error");
        setErrorMsg("Please enter a valid email address.");
        return;
      }

      if (res.status === 429) {
        setStatus("error");
        setErrorMsg("Too many requests. Please try again in a moment.");
        return;
      }

      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="celebrate">
        <div className="celebrate-brand">srvn</div>
        <div className="celebrate-tag">Social Restaurant Venue Network</div>
        <div className="celebrate-check" aria-hidden="true">
          ✓
        </div>
        <h2 className="celebrate-title">You&rsquo;re on the list.</h2>
        <p className="celebrate-text">
          Check your inbox for a confirmation from SRVN.
        </p>
        <p className="celebrate-text">
          We&rsquo;ll be in touch when we&rsquo;re ready to launch.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

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
            disabled={submitting}
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "Joining…" : "Join waitlist"}
          </button>
        </div>
      </form>
      <p className="form-note">
        No spam, ever. First access goes to the waitlist — we&apos;ll reach out
        when we&apos;re ready.
      </p>
      {status === "error" && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
}
