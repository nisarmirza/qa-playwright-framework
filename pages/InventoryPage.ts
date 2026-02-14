import { Page, expect } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  private title = this.page.locator(".title");
  private cartBadge = this.page.locator(".shopping_cart_badge");

  itemAddBtn(itemName: string) {
    return this.page.locator(".inventory_item").filter({ hasText: itemName })
      .locator("button").filter({ hasText: /add to cart/i });
  }

  async expectOnInventory() {
    await expect(this.title).toHaveText("Products");
  }

  async addItem(itemName: string) {
    await this.itemAddBtn(itemName).click();
  }

  async openCart() {
    await this.page.locator(".shopping_cart_link").click();
  }

  async expectCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}
