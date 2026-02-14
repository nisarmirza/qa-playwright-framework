import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";

const cases = [
  {
    name: "@smoke valid login",
    user: "standard_user",
    pass: "secret_sauce",
    expect: "success",
  },
  {
    name: "locked out user shows error",
    user: "locked_out_user",
    pass: "secret_sauce",
    expect: "error",
    errorContains: "locked out",
  },
];

test.describe("Auth (data-driven)", () => {
  for (const tc of cases) {
    test(tc.name, async ({ page }) => {
      const login = new LoginPage(page);
      const inventory = new InventoryPage(page);

      await login.goto();
      await login.login(tc.user, tc.pass);

      if (tc.expect === "success") {
        await inventory.expectOnInventory();
      } else {
        await login.expectErrorContains(tc.errorContains!);
      }
    });
  }
});