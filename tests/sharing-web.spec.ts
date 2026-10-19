import { expect, test } from "@playwright/test";
import { SHARE_KINDS } from "../src/lib/sharing";

const releasedSite = "http://127.0.0.1:3188";
const token = "test-share_token-123";

for (const kind of SHARE_KINDS) {
  test(`the ${kind} landing is private, pre-release, and preserves the original target`, async ({ page, request }) => {
    const requests: string[] = [];
    page.on("request", (event) => requests.push(event.url()));
    const path = `/s/${kind}/${token}`;
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["referrer-policy"]).toBe("no-referrer");
    expect(response?.headers()["x-robots-tag"]).toContain("noindex");
    expect(response?.headers()["cache-control"]).toContain("no-store");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(`Someone shared a ${kind} with you on SRVN.`);
    await expect(page.getByText("To view it, open SRVN and sign in or create an account.")).toBeVisible();
    await expect(page.getByRole("heading", { name: "SRVN is coming soon" })).toBeVisible();
    await expect(page.locator('a[href="/waitlist"]')).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Open SRVN" })).toHaveAttribute("href", `srvn-dev://s/${kind}/${token}`);
    await expect(page.getByText(/then return to the original message and tap this link again/)).toBeVisible();
    await expect(page.locator('a[href*="apps.apple.com"], a[href*="play.google.com"]')).toHaveCount(0);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator('meta[name="referrer"]')).toHaveAttribute("content", "no-referrer");
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", /sign in or create an account/);
    expect(requests.every((url) => new URL(url).origin === "http://127.0.0.1:3187")).toBe(true);
    expect(requests.some((url) => /\/socials\/|\/spots\/|\/users\//.test(url))).toBe(false);
    expect(page.url()).toBe(`http://127.0.0.1:3187${path}`);
    expect((await request.get(path)).status()).toBe(200); // Previewing never consumes anything.
  });
}

test("unknown but well-formed tokens get the same generic shell without existence or expiry claims", async ({ page }) => {
  await page.goto("/s/review/unknown-but-valid");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Someone shared a review with you on SRVN.");
  await expect(page.getByRole("main")).not.toContainText(/expired|not found|invalid token/i);
});

for (const path of ["/s", "/s/review", "/s/event/abc", "/s/Review/abc", "/s/dish/a/extra", "/s/dish/a%2Fb", "/s/dish/%252F", "/s/dish/" + "a".repeat(65)]) {
  test(`malformed link ${path} shows a safe invalid state`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
    expect(response?.headers()["x-robots-tag"]).toContain("noindex");
    await expect(page.getByRole("heading", { name: "That link isn't valid." })).toBeVisible();
    await expect(page.getByRole("link", { name: "Open SRVN" })).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Go to SRVN home" })).toHaveAttribute("href", "/");
  });
}

test("query parameters and an untrusted Host do not override the path's destination", async ({ page, request }) => {
  await page.goto(`/s/dish/${token}?kind=event&token=other&returnTo=https://evil.test`);
  await expect(page.getByRole("link", { name: "Open SRVN" })).toHaveAttribute("href", `srvn-dev://s/dish/${token}`);
  const response = await request.get(`/s/dish/${token}`, { headers: { host: "untrusted.test" } });
  expect(await response.text()).not.toContain("untrusted.test");
});

test("opening the app requires a click and leaves manual recovery guidance", async ({ page }) => {
  await page.goto(`/s/dish/${token}`);
  await expect(page.getByRole("status")).toHaveCount(0);
  const open = page.getByRole("link", { name: "Open SRVN" });
  // Prevent a desktop test from launching a real native app; React still sees the click.
  await open.evaluate((element) => element.addEventListener("click", (event) => event.preventDefault()));
  await open.click();
  await expect(page.getByRole("status")).toContainText("If SRVN didn't open");
  await expect(page.getByRole("status")).toContainText("original message");
});

test("desktop release rendering offers both configured store choices without leaking the referrer", async ({ page }) => {
  await page.goto(`${releasedSite}/s/restaurant/${token}`);
  for (const label of ["Download for iPhone", "Download for Android"]) {
    await expect(page.getByRole("link", { name: label })).toBeVisible();
    await expect(page.getByRole("link", { name: label })).toHaveAttribute("rel", "noreferrer noopener");
    await expect(page.getByRole("link", { name: label })).toHaveAttribute("referrerpolicy", "no-referrer");
  }
  await expect(page.getByRole("link", { name: "Open SRVN" })).toHaveAttribute("href", `srvn://s/restaurant/${token}`);
});

for (const [width, height] of [[390, 844], [1280, 1000]]) {
  test(`the sharing shell fits ${width}px and supports keyboard focus`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height });
    await page.goto(`/s/dish/${token}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "SRVN home", exact: true })).toBeFocused();
    await page.screenshot({ path: testInfo.outputPath(`sharing-${width}.png`), fullPage: true });
  });
}

for (const site of ["", releasedSite]) {
  test(`association documents at ${site || "development"} are direct JSON responses`, async ({ request }) => {
    const apple = await request.get(`${site}/.well-known/apple-app-site-association`, { maxRedirects: 0 });
    const android = await request.get(`${site}/.well-known/assetlinks.json`, { maxRedirects: 0 });
    for (const response of [apple, android]) {
      expect(response.status()).toBe(200);
      expect(response.headers()["location"]).toBeUndefined();
      expect(response.headers()["content-type"]).toContain("application/json");
      expect(response.headers()["x-content-type-options"]).toBe("nosniff");
      expect(await response.text()).not.toContain("event");
    }
    if (site) {
      const appleBody = await apple.json();
      expect(appleBody.applinks.details[0].appIDs).toEqual(["TESTTEAM01.com.srvnapp.srvn"]);
      expect(appleBody.applinks.details[0].components).toHaveLength(4);
      const [statement] = await android.json();
      expect(statement.target.package_name).toBe("com.srvnapp.srvn");
      expect(statement.target.sha256_cert_fingerprints).toHaveLength(1);
      expect(apple.headers()["cache-control"]).toContain("max-age=300");
    } else {
      expect(await apple.json()).toEqual({ applinks: { details: [] } });
      expect(await android.json()).toEqual([]);
      expect(apple.headers()["cache-control"]).toContain("no-store");
    }
  });
}
