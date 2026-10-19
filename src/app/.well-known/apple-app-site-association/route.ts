import { appleAssociation, associationResponse } from "@/lib/share-associations";
import { getSharingConfig } from "@/lib/sharing-config";

export const dynamic = "force-dynamic";

export function GET() {
  const config = getSharingConfig();
  return associationResponse(appleAssociation(config), Boolean(config.appleAppIdPrefix));
}
