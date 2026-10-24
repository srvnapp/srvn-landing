import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { parseShareDestination } from "@/lib/sharing";
import { getSharingConfig } from "@/lib/sharing-config";
import SharePage from "../../SharePage";

type Props = {
  params: Promise<{ kind: string; token: string }>;
};

const previewTitles = {
  profile: "View this profile on SRVN",
  review: "Read this review on SRVN",
  restaurant: "Explore this restaurant on SRVN",
  dish: "Check out this dish on SRVN",
} as const;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { kind, token } = await params;
  const destination = parseShareDestination(kind, token);
  if (!destination) notFound();

  // Keep previews generic, including for unknown or expired tokens. Never resolve content here.
  const title = previewTitles[destination.kind];
  const inherited = await parent;
  return {
    title,
    openGraph: { ...inherited.openGraph, title },
    twitter: { ...inherited.twitter, title },
  };
}

export default async function SharedLinkPage({ params }: Props) {
  const { kind, token } = await params;
  const destination = parseShareDestination(kind, token);
  if (!destination) notFound();
  return <SharePage destination={destination} config={getSharingConfig()} />;
}
