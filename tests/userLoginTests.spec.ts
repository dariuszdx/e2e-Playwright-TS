import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    delete (navigator as any).__proto__.webdriver;
  });

  await page.goto("login/");
});

test("Correct user login form", async ({ page }) => {
  const loginPage = new LoginPage(page);
  
 
  const user = {
    email: process.env.USER_LOGIN!,
    password: process.env.USER_PASSWORD!,
  };

  await loginPage.fillForm(user);
  await loginPage.submitForm();
  await page.waitForTimeout(1000);
});