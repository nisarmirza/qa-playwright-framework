import { test } from "../../fixtures/authedTest";
import { LoginPage } from "../../pages/LoginPage";

test("@smoke add item updates cart badge", async ({ page, inventory }) => {
  await page.goto("/inventory.html");
  await inventory.addItem("Sauce Labs Backpack");
  await inventory.expectCartCount(1);
});