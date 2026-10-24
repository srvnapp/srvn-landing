import { expect, test } from "@playwright/test";
import { writeFile } from "node:fs/promises";

const previews = [
  ["profile", "View this profile on SRVN"],
  ["review", "Read this review on SRVN"],
  ["restaurant", "Explore this restaurant on SRVN"],
  ["dish", "Check out this dish on SRVN"],
] as const;

for (const [kind, title] of previews) {
  test(`${kind} preview has its own title and shared SRVN branding`, async ({ page, request }) => {
    await page.goto(`/s/${kind}/preview-test-token`);
    await expect(page).toHaveTitle(title);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", title);
    await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute("content", title);
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute("content", "SRVN");
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", /sign in or create an account/);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute("content", "SRVN logo and wordmark");
    await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute("content", "1200");
    await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute("content", "1200");

    for (const selector of ['meta[property="og:image"]', 'meta[name="twitter:image"]']) {
      const image = new URL((await page.locator(selector).getAttribute("content"))!);
      expect(image.origin).toBe("http://127.0.0.1:3187");
      expect(image.pathname).toBe("/s/opengraph-image");
      expect(image.href).not.toContain("preview-test-token");
    }

    // Crawlers do not run JavaScript: metadata must arrive in the initial HTML head.
    const response = await request.get(`/s/${kind}/another-token`, {
      headers: { "user-agent": "facebookexternalhit/1.1" },
    });
    expect(response.status()).toBe(200);
    const head = (await response.text()).split("</head>")[0];
    expect(head).toContain(`<title>${title}</title>`);
    expect(head).toContain(`property="og:title" content="${title}"`);
    expect(head).toContain(`name="twitter:title" content="${title}"`);
    expect(head).toContain('property="og:image" content="http://127.0.0.1:3187/s/opengraph-image');
    expect(head).not.toContain("Someone shared something with you");
    expect(head).not.toContain("Join the waitlist");
  });
}

test("the shared brand image is a public, token-free PNG on the configured production origin", async ({ request }, testInfo) => {
  const response = await request.get("http://127.0.0.1:3188/s/dish/preview-test-token", {
    headers: { "user-agent": "Twitterbot/1.0", host: "untrusted.test" },
  });
  expect(response.status()).toBe(200);
  const head = (await response.text()).split("</head>")[0];
  const image = head.match(/property="og:image" content="([^"]+)"/)?.[1];
  expect(image).toBeDefined();
  const url = new URL(image!);
  expect(url.origin).toBe("https://srvnapp.com");
  expect(url.pathname).toBe("/s/opengraph-image");
  expect(head).toContain('name="twitter:image" content="https://srvnapp.com/s/opengraph-image"');
  expect(head).not.toContain("untrusted.test");

  // Fetch the local equivalent of the advertised production asset, without authentication or redirects.
  const png = await request.get(`http://127.0.0.1:3188${url.pathname}`, { maxRedirects: 0 });
  expect(png.status()).toBe(200);
  expect(png.headers()["content-type"]).toContain("image/png");
  const bytes = await png.body();
  expect(bytes.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
  expect(bytes.readUInt32BE(16)).toBe(1200);
  expect(bytes.readUInt32BE(20)).toBe(1200);
  expect(bytes.length).toBeLessThan(1_000_000);
  await writeFile(testInfo.outputPath("srvn-sharing-preview.png"), bytes);
});
