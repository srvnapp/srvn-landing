"use client";

import { useEffect, useRef, useState, type SubmitEvent } from "react";
import styles from "./support.module.css";

const subjects = [
  "General question",
  "Bug report",
  "Feedback or suggestion",
  "Account or sign-in help",
  "Restaurant information",
  "Other",
] as const;

const fields = [
  { name: "firstName", label: "First name", maxLength: 80, autoComplete: "given-name" },
  { name: "lastName", label: "Last name", maxLength: 80, autoComplete: "family-name" },
  { name: "username", label: "Username", maxLength: 80, autoComplete: "off" },
  { name: "email", label: "Email address", maxLength: 254, autoComplete: "email" },
  { name: "subject", label: "Subject", maxLength: 200, autoComplete: "off" },
  { name: "message", label: "Message", maxLength: 5000, autoComplete: "off" },
] as const;

type FieldName = (typeof fields)[number]["name"];
type FieldErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

function retryMessage(response: Response, fallbackSeconds: unknown) {
  const seconds = Number(response.headers.get("Retry-After") ?? fallbackSeconds);
  if (!Number.isFinite(seconds) || seconds <= 0) return "Please try again later.";
  const minutes = Math.ceil(seconds / 60);
  return `Please try again in ${minutes} ${minutes === 1 ? "minute" : "minutes"}.`;
}

export default function SupportForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef(false);

  useEffect(() => {
    if (status === "success" || status === "error") resultRef.current?.focus();
  }, [status, errorMessage, fieldErrors]);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pendingRef.current) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(
      fields.map(({ name }) => [name, String(formData.get(name) ?? "").trim()]),
    ) as Record<FieldName, string>;
    const errors: FieldErrors = {};
    for (const field of fields) {
      if (field.name !== "username" && !values[field.name]) {
        errors[field.name] = field.name === "subject"
          ? "Choose a subject."
          : `Enter your ${field.label.toLowerCase()}.`;
      }
    }
    setFieldErrors(errors);
    if (Object.keys(errors).length) {
      setErrorMessage("Please check the highlighted fields.");
      setStatus("error");
      return;
    }

    pendingRef.current = true;
    setStatus("submitting");
    setErrorMessage("");
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/+$/, "");
      if (!apiBaseUrl) throw new Error("Support API is not configured");
      const response = await fetch(`${apiBaseUrl}/support`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, username: values.username || undefined }),
      });
      if (response.status === 202) {
        setStatus("success");
        return;
      }
      const body = await response.json().catch(() => null);
      if (response.status === 422) {
        const validationErrors = body?.errors?.json;
        const nextErrors: FieldErrors = {};
        for (const { name } of fields) {
          const messages = validationErrors?.[name];
          if (Array.isArray(messages) && typeof messages[0] === "string") {
            nextErrors[name] = messages[0];
          }
        }
        setFieldErrors(nextErrors);
        setErrorMessage("Please check your details and try again.");
      } else if (response.status === 429) {
        setErrorMessage(`Too many messages have been sent. ${retryMessage(response, body?.retry_after_seconds)}`);
      } else if (response.status === 503) {
        setErrorMessage(`Support is temporarily unavailable. ${retryMessage(response, body?.retry_after_seconds)}`);
      } else {
        setErrorMessage("We couldn’t send your message. Please try again later or email support@srvnapp.com.");
      }
      setStatus("error");
    } catch {
      setErrorMessage("We couldn’t confirm your message was sent. Check your connection and try again, or email support@srvnapp.com.");
      setStatus("error");
    } finally {
      pendingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status" tabIndex={-1} ref={resultRef}>
        <h2 className={styles.successTitle}>Thanks for reaching out.</h2>
        <p>
          Your message has been accepted. Our support team will reply to the
          email address you provided.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-label="Contact support"
      aria-busy={submitting}
    >
      <p className={styles.note}>All fields are required except username.</p>
      <div className={styles.fields}>
        {fields.map((field) => {
          const error = fieldErrors[field.name];
          const inputProps = {
            id: `support-${field.name}`,
            name: field.name,
            required: field.name !== "username",
            autoComplete: field.autoComplete,
            disabled: submitting,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? `support-${field.name}-error` : undefined,
            className: styles.input,
          };
          return (
            <div
              key={field.name}
              className={field.name === "subject" || field.name === "message" ? styles.wide : undefined}
            >
              <label className={styles.label} htmlFor={inputProps.id}>
                {field.label}
                {field.name === "username" && <span className={styles.optional}> (optional)</span>}
              </label>
              {field.name === "subject" ? (
                <select {...inputProps} defaultValue="General question">
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              ) : field.name === "message" ? (
                <textarea
                  {...inputProps}
                  maxLength={field.maxLength}
                  rows={6}
                  placeholder="Describe your question, the issue you ran into, or your feedback."
                />
              ) : (
                <input
                  {...inputProps}
                  maxLength={field.maxLength}
                  type={field.name === "email" ? "email" : "text"}
                  autoCapitalize={field.name === "email" || field.name === "username" ? "none" : "sentences"}
                  spellCheck={field.name === "email" || field.name === "username" ? false : undefined}
                />
              )}
              {error && <p id={`support-${field.name}-error`} className={styles.error}>{error}</p>}
            </div>
          );
        })}
      </div>
      {status === "error" && (
        <div className={styles.errorSummary} role="alert" tabIndex={-1} ref={resultRef}>
          {errorMessage}
        </div>
      )}
      <button className={styles.button} type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
