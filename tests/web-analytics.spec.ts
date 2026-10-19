import { expect, test } from "@playwright/test";
import { filterAnalyticsEvent } from "../src/lib/web-analytics";

for (const path of [
  "/s/review/private-token", "/s/profile/private-token", "/s/restaurant/private-token",
  "/s/dish/private-token", "/s/event/private-token", "/s", "/unknown/private-token",
]) {
  test(`analytics rejects ${path}`, () => {
    expect(filterAnalyticsEvent({ type: "pageview", url: `https://srvnapp.com${path}?token=secret#secret` })).toBeNull();
  });
}

test("public page analytics strips query strings and fragments", () => {
  expect(filterAnalyticsEvent({ type: "pageview", url: "https://srvnapp.com/waitlist?email=private%40example.com#secret" }))
    .toEqual({ type: "pageview", url: "https://srvnapp.com/waitlist" });
  expect(filterAnalyticsEvent({ type: "event", url: "https://srvnapp.com/?share_token=secret" }))
    .toEqual({ type: "event", url: "https://srvnapp.com/" });
  expect(filterAnalyticsEvent({ type: "pageview", url: "invalid URL" })).toBeNull();
});

test("the root integration registers a filter and records public navigation", async ({ page }) => {
  // Substitute only Vercel's hosted collector; exercise the real installed SDK.
  await page.route("**/_vercel/insights/script.js", (route) => route.fulfill({
    contentType: "application/javascript",
    body: `
      window.testAnalyticsEvents = [];
      let beforeSend;
      window.va = (type, value) => {
        if (type === 'beforeSend') beforeSend = value;
        if (type === 'pageview' && beforeSend) {
          const event = beforeSend({ type: 'pageview', url: location.href });
          if (event) window.testAnalyticsEvents.push(event);
        }
      };
      for (const args of window.vaq || []) window.va(...args);
    `,
  }));
  await page.goto("/?email=private%40example.com#secret");
  const events = () => page.evaluate(() => (window as unknown as { testAnalyticsEvents: unknown[] }).testAnalyticsEvents);
  await expect.poll(events).toEqual([{ type: "pageview", url: "http://127.0.0.1:3187/" }]);
  await page.getByRole("link", { name: "Terms of Use", exact: true }).click();
  await expect(page).toHaveURL(/\/terms$/);
  await expect.poll(events).toEqual([
    { type: "pageview", url: "http://127.0.0.1:3187/" },
    { type: "pageview", url: "http://127.0.0.1:3187/terms" },
  ]);

  // The collector can persist after client navigation; its installed filter must
  // still reject a shared URL even after the React component has unmounted.
  await page.evaluate(() => {
    history.pushState(null, "", "/s/dish/private-token?token=secret");
    window.va?.("pageview", {});
  });
  expect((await events()).length).toBe(2);
});

test("a direct share visit does not load the analytics collector", async ({ page }) => {
  const collectorRequests: string[] = [];
  page.on("request", (request) => {
    if (/insights|vercel-scripts/.test(request.url())) collectorRequests.push(request.url());
  });
  await page.goto("/s/dish/private-token");
  // A hydration-dependent action demonstrates that the client has mounted.
  const open = page.getByRole("link", { name: "Open SRVN" });
  await open.evaluate((element) => element.addEventListener("click", (event) => event.preventDefault()));
  await open.click();
  await expect(page.getByRole("status")).toContainText("If SRVN didn't open");
  expect(collectorRequests).toEqual([]);
  expect(await page.evaluate(() => typeof window.va)).toBe("undefined");
});
