import { SHARE_PATHS } from "./sharing";
import type { SharingConfig } from "./sharing-config";

/** Modern AASA components authorize only the four public sharing path families. */
export function appleAssociation(config: SharingConfig) {
  return {
    applinks: {
      details: config.appleAppIdPrefix ? [{
        appIDs: [`${config.appleAppIdPrefix}.${config.appId}`],
        components: SHARE_PATHS.map((path) => ({ "/": path })),
      }] : [],
    },
  };
}

/** Older Android versions also need the matching path filters in the native manifest. */
export function androidAssociation(config: SharingConfig) {
  if (!config.androidFingerprints.length) return [];
  return [{
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: config.appId,
      sha256_cert_fingerprints: config.androidFingerprints,
    },
    relation_extensions: {
      "delegate_permission/common.handle_all_urls": {
        dynamic_app_link_components: [
          ...SHARE_PATHS.map((path) => ({ "/": path })),
          { "/": "*", exclude: true },
        ],
      },
    },
  }];
}

export function associationResponse(body: unknown, configured: boolean) {
  return Response.json(body, {
    headers: {
      "Cache-Control": configured ? "public, max-age=300" : "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
