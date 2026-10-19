import { defineConfig, devices } from "@playwright/test";

// These signing values and store links are test fixtures, never release settings.
const fingerprint = Array(32).fill("AA").join(":");
const commonEnv = {
  APPLE_APP_ID_PREFIX: "",
  ANDROID_SHA256_CERT_FINGERPRINTS: "",
  SRVN_IOS_STORE_URL: "",
  SRVN_ANDROID_STORE_URL: "",
};

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  forbidOnly: Boolean(process.env.CI),
  reporter: "list",
  use: { baseURL: "http://127.0.0.1:3187", trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: [
    {
      command: "npm run start -- --hostname 127.0.0.1 --port 3187",
      url: "http://127.0.0.1:3187/support",
      reuseExistingServer: false,
      env: { ...commonEnv, SHARE_APP_ENV: "development", SHARE_BASE_URL: "http://127.0.0.1:3187" },
    },
    {
      command: "npm run start -- --hostname 127.0.0.1 --port 3188",
      url: "http://127.0.0.1:3188/support",
      reuseExistingServer: false,
      env: {
        ...commonEnv,
        SHARE_APP_ENV: "production",
        SHARE_BASE_URL: "https://srvnapp.com",
        APPLE_APP_ID_PREFIX: "TESTTEAM01",
        ANDROID_SHA256_CERT_FINGERPRINTS: fingerprint,
        SRVN_IOS_STORE_URL: "https://apps.apple.com/app/id1234567890",
        SRVN_ANDROID_STORE_URL: "https://play.google.com/store/apps/details?id=com.srvnapp.srvn",
      },
    },
  ],
});
