import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  private username = this.page.locator('[data-test="username"]');
  private password = this.page.locator('[data-test="password"]');
  private loginBtn = this.page.locator('[data-test="login-button"]');
  private error = this.page.locator('[data-test="error"]');

  async goto() {
    await this.page.goto("/");
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async expectErrorContains(text: string) {
  await this.error.waitFor({ state: "visible" });
  const msg = (await this.error.textContent())?.toLowerCase() || "";
  // flexible check
  if (!msg.includes(text.toLowerCase())) {
    throw new Error(`Expected error to include "${text}" but got: ${msg}`);
  }
}

}