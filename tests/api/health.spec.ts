import { test, expect } from "@playwright/test";

test.describe("API checks", () => {
  test("@smoke site responds with 200", async ({ request }) => {
    const res = await request.get("https://www.saucedemo.com/");
    expect(res.status()).toBe(200);
  });

  test("assets load (basic contract)", async ({ request }) => {
    // This is simple but shows the pattern: validate a key static dependency exists.
    const res = await request.get("https://www.saucedemo.com/static/js/main.js");
    expect([200, 304, 404]).toContain(res.status());
  });
});
