import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/specs",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: "https://www.saucedemo.com",
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    testIdAttribute: "data-test",
  },
  reporter: [
    ["list"],
    ["html", { open: "never", outputFolder: "playwright-report" }],
    ["json", { outputFile: "test-results.json" }],
  ],
});
