import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("User Login Form", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      delete (navigator as any).__proto__.webdriver;
    });

    loginPage = new LoginPage(page);
    await page.goto("login/");
  });

  test("Correct user login form", async ({ page }) => {
    const user = {
      email: process.env.USER_LOGIN!,
      password: process.env.USER_PASSWORD!,
    };

    await loginPage.fillForm(user);
    await loginPage.submitForm();
    await expect(page).toHaveURL(/\/shop\/user\/dd2\/?$/);
  });

  test("Fail login with invalid password", async ({ page }) => {
    const user = {
      email: process.env.USER_LOGIN!,
      password: "WrongPassword123!",
    };

    await loginPage.fillForm(user);
    await loginPage.submitForm();

    
    await expect(page).toHaveURL(/.*login/);
    await expect(page.getByText('Password is incorrect. Please')).toBeVisible();
  });
});