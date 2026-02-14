import { test } from "../../fixtures/authedTest";
import { LoginPage } from "../../pages/LoginPage";

test("@smoke add item updates cart badge", async ({ page, inventory }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login("standard_user", "secret_sauce");

  await page.goto("/inventory.html");
  await inventory.addItem("Sauce Labs Backpack");
  await inventory.expectCartCount(1);
});
