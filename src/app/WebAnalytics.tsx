"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { filterAnalyticsEvent, isAnalyticsPage } from "@/lib/web-analytics";

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then((module) => module.Analytics),
  { ssr: false },
);

export default function WebAnalytics() {
  const pathname = usePathname();
  if (!isAnalyticsPage(pathname)) return null;

  // The filter also protects navigation after the script was loaded elsewhere.
  return <Analytics beforeSend={filterAnalyticsEvent} />;
}
