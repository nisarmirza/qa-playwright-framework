import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";

setup("authenticate", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login("standard_user", "secret_sauce");
  await inventory.expectOnInventory();

  await page.context().storageState({ path: "storageState.json" });
});
