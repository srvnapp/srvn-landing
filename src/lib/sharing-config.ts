/** Server-side website configuration. Missing release credentials grant no associations. */
type Environment = Record<string, string | undefined>;

export type SharingConfig = {
  origin: string;
  appEnvironment: "production" | "development";
  appScheme: "srvn" | "srvn-dev";
  appId: string;
  appleAppIdPrefix: string | null;
  androidFingerprints: string[];
  iosStoreUrl: string | null;
  androidStoreUrl: string | null;
};

function readUrl(value: string, name: string): URL {
  if (/[\s\\\u0000-\u001f\u007f]/.test(value)) {
    throw new Error(`${name} must be a valid URL`);
  }
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${name} must be a valid URL`);
  }
  if (url.username || url.password || url.hash || value.includes("#")) {
    throw new Error(`${name} cannot contain credentials or a fragment`);
  }
  return url;
}

function readStoreUrl(value: string | undefined, platform: "ios" | "android", appId: string) {
  if (!value) return null;
  const name = platform === "ios" ? "SRVN_IOS_STORE_URL" : "SRVN_ANDROID_STORE_URL";
  const url = readUrl(value, name);
  if (url.protocol !== "https:" || url.port) {
    throw new Error(`${name} must use the store's HTTPS origin`);
  }
  if (platform === "ios") {
    if (
      url.hostname !== "apps.apple.com" ||
      !/^\/(?:[a-z]{2}\/)?app\/(?:[^/]+\/)?id\d+\/?$/.test(url.pathname)
    ) {
      throw new Error(`${name} must be an App Store app listing`);
    }
  } else if (
    url.hostname !== "play.google.com" ||
    url.pathname !== "/store/apps/details" ||
    url.searchParams.getAll("id").length !== 1 ||
    url.searchParams.get("id") !== appId
  ) {
    throw new Error(`${name} must be the matching SRVN Google Play listing`);
  }
  return url.href;
}

/** Read per-deployment identities; development sites always target the dev app. */
export function getSharingConfig(env: Environment = process.env): SharingConfig {
  const appEnvironment = env.SHARE_APP_ENV ||
    (env.NODE_ENV === "development" ? "development" : "production");
  if (appEnvironment !== "production" && appEnvironment !== "development") {
    throw new Error("SHARE_APP_ENV must be production or development");
  }
  const development = appEnvironment === "development";
  const rawOrigin = env.SHARE_BASE_URL || (development ? "http://localhost:3000" : "");
  const origin = readUrl(rawOrigin, "SHARE_BASE_URL");
  if (
    !["https:", ...(development ? ["http:"] : [])].includes(origin.protocol) ||
    origin.pathname !== "/" || origin.search || !/^https?:\/\/[^/?#]+\/?$/i.test(rawOrigin)
  ) {
    throw new Error("SHARE_BASE_URL must be a website origin; production requires HTTPS");
  }
  if (development && ["srvnapp.com", "www.srvnapp.com"].includes(origin.hostname)) {
    throw new Error("Development sharing must use a separate host from srvnapp.com");
  }
  const appId = development ? "com.srvnapp.srvn.dev" : "com.srvnapp.srvn";
  const appleAppIdPrefix = env.APPLE_APP_ID_PREFIX || null;
  if (appleAppIdPrefix && !/^[A-Z0-9]{10}$/.test(appleAppIdPrefix)) {
    throw new Error("APPLE_APP_ID_PREFIX must be the verified 10-character App ID prefix");
  }
  const androidFingerprints = [...new Set(
    (env.ANDROID_SHA256_CERT_FINGERPRINTS || "")
      .split(/[\n,]/).map((value) => value.trim().toUpperCase()).filter(Boolean),
  )];
  if (androidFingerprints.some((value) => !/^(?:[0-9A-F]{2}:){31}[0-9A-F]{2}$/.test(value))) {
    throw new Error("ANDROID_SHA256_CERT_FINGERPRINTS must contain SHA-256 certificate fingerprints");
  }
  if (development && (env.SRVN_IOS_STORE_URL || env.SRVN_ANDROID_STORE_URL)) {
    throw new Error("Development share links cannot send recipients to production app stores");
  }
  return {
    origin: origin.origin,
    appEnvironment,
    appScheme: development ? "srvn-dev" : "srvn",
    appId,
    appleAppIdPrefix,
    androidFingerprints,
    iosStoreUrl: readStoreUrl(env.SRVN_IOS_STORE_URL, "ios", appId),
    androidStoreUrl: readStoreUrl(env.SRVN_ANDROID_STORE_URL, "android", appId),
  };
}
