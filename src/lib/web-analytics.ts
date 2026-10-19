import type { BeforeSendEvent } from "@vercel/analytics/next";

// Keep opaque share links and unknown paths out of analytics, including 404s.
const PUBLIC_PAGES = new Set(["/", "/demo", "/privacy", "/support", "/terms", "/waitlist"]);

export function isAnalyticsPage(pathname: string): boolean {
  return PUBLIC_PAGES.has(pathname);
}

export function filterAnalyticsEvent(event: BeforeSendEvent): BeforeSendEvent | null {
  let url: URL;
  try {
    url = new URL(event.url);
  } catch {
    return null;
  }
  if (!isAnalyticsPage(url.pathname)) return null;
  url.search = "";
  url.hash = "";
  return { ...event, url: url.href };
}
