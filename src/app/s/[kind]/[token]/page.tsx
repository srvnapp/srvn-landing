import { notFound } from "next/navigation";
import { parseShareDestination } from "@/lib/sharing";
import { getSharingConfig } from "@/lib/sharing-config";
import SharePage from "../../SharePage";

export default async function SharedLinkPage({
  params,
}: {
  params: Promise<{ kind: string; token: string }>;
}) {
  const { kind, token } = await params;
  const destination = parseShareDestination(kind, token);
  if (!destination) notFound();
  return <SharePage destination={destination} config={getSharingConfig()} />;
}
