import { androidAssociation, associationResponse } from "@/lib/share-associations";
import { getSharingConfig } from "@/lib/sharing-config";

export const dynamic = "force-dynamic";

export function GET() {
  const config = getSharingConfig();
  return associationResponse(androidAssociation(config), config.androidFingerprints.length > 0);
}
