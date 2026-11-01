import { expect, test, type Page } from "@playwright/test";

async function fillForm(page: Page, username = "", subject = "Restaurant information") {
  await page.getByLabel("First name", { exact: true }).fill("  Jane  ");
  await page.getByLabel("Last name", { exact: true }).fill("  Doe  ");
  await page.getByLabel("Username").fill(username);
  await page.getByLabel("Email address").fill("jane@example.com");
  if (subject) await page.getByLabel("Subject", { exact: true }).selectOption(subject);
  await page.getByLabel("Message", { exact: true }).fill("  Please add my favourite restaurant.  ");
}

for (const username of ["", "  janedoe  "]) {
  test(`sends the support contract with ${username ? "an optional username" : "no username"}`, async ({ page }) => {
    let payload: unknown;
    let endpoint = "";
    await page.route("**/support", async (route) => {
      if (route.request().method() !== "POST") return route.continue();
      payload = route.request().postDataJSON();
      endpoint = route.request().url();
      await route.fulfill({ status: 202, json: { message: "Accepted" } });
    });
    await page.goto("/support");
    await expect(page.getByLabel("Subject", { exact: true })).toHaveValue("General question");
    await fillForm(page, username, username ? "Restaurant information" : "");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByRole("status")).toContainText("Our support team will reply to the email address you provided");
    await expect(page.getByRole("status")).toBeFocused();
    expect(endpoint).toBe("http://127.0.0.1:3190/support");
    expect(payload).toEqual({
      firstName: "Jane", lastName: "Doe", email: "jane@example.com",
      subject: username ? "Restaurant information" : "General question", message: "Please add my favourite restaurant.",
      ...(username ? { username: "janedoe" } : {}),
    });
    await expect(page.getByRole("button", { name: "Send message" })).toHaveCount(0);
  });
}

for (const scenario of [
  { status: 422, body: { errors: { json: { email: ["Enter a valid email address."] } } }, message: "Please check your details and try again." },
  { status: 429, body: { retry_after_seconds: 120 }, message: "Too many messages have been sent. Please try again in 3 minutes." },
  { status: 503, body: { retry_after_seconds: 60 }, message: "Support is temporarily unavailable. Please try again in 1 minute." },
  { status: 500, body: {}, message: "We couldn’t send your message." },
]) {
  test(`preserves input and offers recovery for ${scenario.status}`, async ({ page }) => {
    await page.route("**/support", async (route) => {
      if (route.request().method() !== "POST") return route.continue();
      await route.fulfill({ status: scenario.status, json: scenario.body, headers: scenario.status === 429 ? { "Retry-After": "180", "Access-Control-Expose-Headers": "Retry-After" } : {} });
    });
    await page.goto("/support");
    await fillForm(page);
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByRole("form", { name: "Contact support" }).getByRole("alert")).toContainText(scenario.message);
    await expect(page.getByRole("form", { name: "Contact support" }).getByRole("alert")).toBeFocused();
    await expect(page.getByLabel("Message", { exact: true })).toHaveValue("  Please add my favourite restaurant.  ");
    await expect(page.getByRole("button", { name: "Send message" })).toBeEnabled();
    if (scenario.status === 422) {
      await expect(page.getByLabel("Email address")).toHaveAttribute("aria-invalid", "true");
      await expect(page.getByText("Enter a valid email address.", { exact: true })).toBeVisible();
    }
  });
}

test("network failure keeps the message available", async ({ page }) => {
  await page.route("**/support", (route) => route.request().method() === "POST" ? route.abort() : route.continue());
  await page.goto("/support");
  await fillForm(page);
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("form", { name: "Contact support" }).getByRole("alert")).toContainText("We couldn’t confirm your message was sent.");
  await expect(page.getByLabel("Subject", { exact: true })).toHaveValue("Restaurant information");
});

test("rejects whitespace-only required fields before sending", async ({ page }) => {
  let submissions = 0;
  page.on("request", (request) => { if (request.method() === "POST") submissions++; });
  await page.goto("/support");
  await fillForm(page);
  await page.getByLabel("First name", { exact: true }).fill("   ");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("form", { name: "Contact support" }).getByRole("alert")).toContainText("Please check the highlighted fields.");
  await expect(page.getByLabel("First name", { exact: true })).toHaveAttribute("aria-invalid", "true");
  expect(submissions).toBe(0);
});

test("prevents duplicate submissions while sending", async ({ page }) => {
  let submissions = 0;
  let release!: () => void;
  const gate = new Promise<void>((resolve) => { release = resolve; });
  await page.route("**/support", async (route) => {
    if (route.request().method() !== "POST") return route.continue();
    submissions++;
    await gate;
    await route.fulfill({ status: 202, json: {} });
  });
  await page.goto("/support");
  await fillForm(page);
  await page.getByRole("button", { name: "Send message" }).click();
  try {
    await expect(page.getByRole("button", { name: "Sending…" })).toBeDisabled();
    await page.getByRole("form", { name: "Contact support" }).evaluate((form) => {
      form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    });
    expect(submissions).toBe(1);
  } finally { release(); }
  await expect(page.getByRole("status")).toBeVisible();
});

for (const width of [390, 1280]) {
  test(`support fits ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/support");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.getByRole("button", { name: "Send message" })).toBeVisible();
    await page.screenshot({ path: testInfo.outputPath(`support-${width}.png`), fullPage: true });
  });
}

test("the old contact URL and footer lead to support", async ({ page, request }) => {
  const response = await request.get("/contact", { maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe("/support");
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Contact", exact: true })).toHaveAttribute("href", "/support");
});
