import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 5_000 },
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
  ["list"],
  ["html", { open: "never" }],
  ["allure-playwright"],
  ],


  use: {
    baseURL: "https://www.saucedemo.com",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 10_000
  },

  projects: [
  {
    name: "setup",
    testMatch: /.*\.setup\.ts/,
  },
  {
    name: "chromium",
    dependencies: ["setup"],
    use: { ...devices["Desktop Chrome"], storageState: "storageState.json" },
  },
  {
    name: "firefox",
    dependencies: ["setup"],
    use: { ...devices["Desktop Firefox"], storageState: "storageState.json" },
  },
  ]
});
