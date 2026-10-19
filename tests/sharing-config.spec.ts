import { expect, test } from "@playwright/test";
import { SHARE_KINDS, SHARE_PATHS, buildAppShareUrl, parseShareDestination } from "../src/lib/sharing";
import { getSharingConfig } from "../src/lib/sharing-config";
import { androidAssociation, appleAssociation } from "../src/lib/share-associations";

const production = { NODE_ENV: "production", SHARE_BASE_URL: "https://srvnapp.com" };
const fingerprint = Array(32).fill("AB").join(":");

for (const kind of SHARE_KINDS) {
  for (const token of ["a".repeat(32), "AB_cd-Ef".repeat(5), "Z".repeat(64)]) {
    test(`parses the exact ${kind} destination (${token.length} characters)`, () => {
      const destination = parseShareDestination(kind, token);
      expect(destination).toEqual({ kind, token });
      expect(buildAppShareUrl("srvn", destination!)).toBe(`srvn://s/${kind}/${token}`);
      expect(buildAppShareUrl("srvn-dev", destination!)).toBe(`srvn-dev://s/${kind}/${token}`);
    });
  }
}

for (const [kind, token] of [
  ["event", "abc"], ["Review", "abc"], ["unknown", "abc"], ["dish", ""],
  ["dish", "a".repeat(65)], ["dish", "a/b"], ["dish", "a\\b"], ["dish", ".."],
  ["dish", "%2F"], ["dish", "%252F"], ["dish", "token?x=1"], ["dish", "a b"],
  ["dish", "<script>"], ["dish", "café"],
]) {
  test(`rejects malformed destination ${JSON.stringify([kind, token])}`, () => {
    expect(parseShareDestination(kind, token)).toBeNull();
  });
}

test("production uses the release app, without fabricated release credentials or stores", () => {
  const config = getSharingConfig(production);
  expect(config.origin).toBe("https://srvnapp.com");
  expect(config.appId).toBe("com.srvnapp.srvn");
  expect(config.appScheme).toBe("srvn");
  expect(config.iosStoreUrl).toBeNull();
  expect(config.androidStoreUrl).toBeNull();
  expect(appleAssociation(config)).toEqual({ applinks: { details: [] } });
  expect(androidAssociation(config)).toEqual([]);
});

test("development has a local default and separate native identity", () => {
  const config = getSharingConfig({ NODE_ENV: "development" });
  expect(config.origin).toBe("http://localhost:3000");
  expect(config.appId).toBe("com.srvnapp.srvn.dev");
  expect(config.appScheme).toBe("srvn-dev");
});

for (const origin of ["", "http://srvnapp.com", "https://srvnapp.com/path", "https://srvnapp.com/../", "https://srvnapp.com?", "https://srvnapp.com#", "https://user:pass@srvnapp.com", "https://srvnapp.com\n"]) {
  test(`rejects invalid production website origin ${JSON.stringify(origin)}`, () => {
    expect(() => getSharingConfig({ ...production, SHARE_BASE_URL: origin })).toThrow("SHARE_BASE_URL");
  });
}

test("normalizes a valid website origin", () => {
  expect(getSharingConfig({ ...production, SHARE_BASE_URL: "https://SRVNAPP.com/" }).origin).toBe("https://srvnapp.com");
});

test("an unsupported app environment fails configuration", () => {
  expect(() => getSharingConfig({ ...production, SHARE_APP_ENV: "typo" })).toThrow("SHARE_APP_ENV");
});

for (const hostname of ["srvnapp.com", "www.srvnapp.com"]) {
  test(`a development deployment cannot claim ${hostname}`, () => {
    expect(() => getSharingConfig({ SHARE_APP_ENV: "development", SHARE_BASE_URL: `https://${hostname}` })).toThrow("separate host");
  });
}

test("development cannot install a production store app for a development link", () => {
  expect(() => getSharingConfig({ NODE_ENV: "development", SRVN_IOS_STORE_URL: "https://apps.apple.com/app/id1234567890" })).toThrow("production app stores");
});

for (const badPrefix of ["TEAM", "teamid1234", "TEAMID1234.com.srvnapp.srvn", "../TEAMID1234"]) {
  test(`rejects malformed Apple prefix ${JSON.stringify(badPrefix)}`, () => {
    expect(() => getSharingConfig({ ...production, APPLE_APP_ID_PREFIX: badPrefix })).toThrow("APPLE_APP_ID_PREFIX");
  });
}

test("iOS associations authorize only the configured environment and four share types", () => {
  const config = getSharingConfig({ NODE_ENV: "development", APPLE_APP_ID_PREFIX: "TESTTEAM01" });
  expect(appleAssociation(config)).toEqual({ applinks: { details: [{
    appIDs: ["TESTTEAM01.com.srvnapp.srvn.dev"],
    components: SHARE_PATHS.map((path) => ({ "/": path })),
  }] } });
  expect(JSON.stringify(appleAssociation(config))).not.toContain("event");
});

test("Android supports certificate rotation and narrows dynamic matching to share paths", () => {
  const other = Array(32).fill("CD").join(":");
  const config = getSharingConfig({ ...production, ANDROID_SHA256_CERT_FINGERPRINTS: `${fingerprint.toLowerCase()}, ${other}\n${fingerprint}` });
  const [association] = androidAssociation(config);
  expect(association.target).toEqual({ namespace: "android_app", package_name: "com.srvnapp.srvn", sha256_cert_fingerprints: [fingerprint, other] });
  expect(association.relation_extensions["delegate_permission/common.handle_all_urls"].dynamic_app_link_components).toEqual([
    ...SHARE_PATHS.map((path) => ({ "/": path })), { "/": "*", exclude: true },
  ]);
});

for (const value of ["AA:BB", Array(20).fill("AB").join(":"), "GG:".repeat(31) + "GG", "not-a-fingerprint"]) {
  test(`rejects invalid Android certificate ${value.slice(0, 20)}`, () => {
    expect(() => getSharingConfig({ ...production, ANDROID_SHA256_CERT_FINGERPRINTS: value })).toThrow("SHA-256");
  });
}

test("store availability is configured independently", () => {
  const ios = "https://apps.apple.com/ca/app/srvn/id1234567890";
  const android = "https://play.google.com/store/apps/details?id=com.srvnapp.srvn";
  const config = getSharingConfig({ ...production, SRVN_IOS_STORE_URL: ios, SRVN_ANDROID_STORE_URL: android });
  expect(config.iosStoreUrl).toBe(ios);
  expect(config.androidStoreUrl).toBe(android);
  expect(getSharingConfig({ ...production, SRVN_IOS_STORE_URL: ios }).androidStoreUrl).toBeNull();
});

for (const [key, value] of [
  ["SRVN_IOS_STORE_URL", "https://evil.test/app/id1234"],
  ["SRVN_IOS_STORE_URL", "http://apps.apple.com/app/id1234"],
  ["SRVN_IOS_STORE_URL", "https://apps.apple.com/not-an-app"],
  ["SRVN_ANDROID_STORE_URL", "https://play.google.com/store/apps/details?id=com.other.app"],
  ["SRVN_ANDROID_STORE_URL", "https://play.google.com/store/apps/details?id=com.srvnapp.srvn&id=com.other"],
  ["SRVN_ANDROID_STORE_URL", "javascript:alert(1)"],
]) {
  test(`rejects an invalid store listing ${value}`, () => {
    expect(() => getSharingConfig({ ...production, [key]: value })).toThrow(key);
  });
}
