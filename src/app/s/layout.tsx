import type { Metadata } from "next";
import { getSharingConfig } from "@/lib/sharing-config";

export const dynamic = "force-dynamic";

/** Every preview is generic: no token resolution or content is needed on the website. */
export function generateMetadata(): Metadata {
  const { origin } = getSharingConfig();
  const title = "Someone shared something with you — SRVN";
  const description = "Open SRVN and sign in or create an account to view what was shared. After installing, return to the original message and tap the same link again.";
  return {
    metadataBase: new URL(origin),
    title,
    description,
    referrer: "no-referrer",
    robots: { index: false, follow: false, nocache: true },
    openGraph: { title, description, type: "website", siteName: "SRVN" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function SharingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
