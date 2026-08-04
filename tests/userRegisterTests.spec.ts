import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { RegisterPage } from "../pages/RegisterPage";
import { waitForDebugger } from "node:inspector";

test.beforeEach(async ({ page }) => {
  await page.goto("register/");
});

test("Correct user registration form", async ({ page }) => {
  await page.addInitScript(() => {
    delete (navigator as any).__proto__.webdriver;
  });
  const registerPage = new RegisterPage(page);

  const user = {
    firstName: faker.person.firstName(),
  //   lastName: faker.person.lastName(),
  //   email: faker.internet.email(),
  //   password: faker.internet.password(),
  };
  await registerPage.fillForm(user);
  // await registerPage.submitForm();
});
