import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LinkPage } from "../pages/LinkPage";
import { ShopPage } from "../pages/ShopPage";

test.describe("Add product to cart flow", () => {
  let loginPage: LoginPage;
  let linkPage: LinkPage;
  let shopPage: ShopPage;

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      delete (navigator as any).__proto__.webdriver;
    });

    loginPage = new LoginPage(page);
    linkPage = new LinkPage(page);
    shopPage = new ShopPage(page);
    await page.goto("login/");
  });

  test("User adds product to cart", async ({ page }) => {
    await test.step("User login", async () => {
      const user = {
        email: process.env.USER_LOGIN!,
        password: process.env.USER_PASSWORD!,
      };

      await loginPage.fillForm(user);
      await loginPage.submitForm();
      await expect(page).toHaveURL(/\/shop\/user\/dd2\/?$/);
    });

    await test.step("Click on shop link", async () => {
      await linkPage.shopPage.click();
      await expect(page).toHaveURL(/.*shop/);
    });
    await test.step("Click on product and add to the cart", async () => {
        await shopPage.addProductToCart('Album');
  });
});
})
