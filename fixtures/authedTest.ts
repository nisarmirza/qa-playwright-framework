import { test as base, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";

type Fixtures = {
  inventory: InventoryPage;
};

export const test = base.extend<Fixtures>({
  inventory: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});

export { expect };
