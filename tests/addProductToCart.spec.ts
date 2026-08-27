import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LinkPage } from "../pages/LinkPage";

test.describe("Add product to cart flow", () => {
  let loginPage: LoginPage;
  let linkPage: LinkPage;

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      delete (navigator as any).__proto__.webdriver;
    });

    loginPage = new LoginPage(page);
    linkPage = new LinkPage(page);
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
    });
  });
});
