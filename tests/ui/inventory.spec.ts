import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { test1 } from "../../fixtures/authedTest";


test("@smoke add item updates cart badge", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login("standard_user", "secret_sauce");
  await inventory.expectOnInventory();

  await inventory.addItem("Sauce Labs Backpack");
  await inventory.expectCartCount(1);
});

test1("@smoke add item updates cart badge", async ({ page, inventory }) => {
  await page.goto("/inventory.html");
  await inventory.addItem("Sauce Labs Backpack");
  await inventory.expectCartCount(1);
});