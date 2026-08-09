import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { RegisterPage } from "../pages/RegisterPage";
import { User } from "../types/user";

test.describe("User Registration Form", () => {
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      delete (navigator as any).__proto__.webdriver;
    });

    registerPage = new RegisterPage(page);
    await page.goto("register/");
  });

  test("Correct user registration form", async ({ page }) => {
    const user: User = {
      userName: faker.internet.username(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: "Password123!",
      gender: "Male",
      birthDate: "1991-05-15",
      country: "Poland",
      phoneNumber: faker.phone.number(),
    };

    await registerPage.fillForm(user);
    await registerPage.submitForm();

    await expect(page).toHaveURL(/.*user/);
  });

  test("Incorrect user registration with an invalid email format", async ({ page }) => {
    const invalidUser: User = {
      userName: faker.internet.username(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: "invalid-email-format",
      password: "Password123!",
    };

    await registerPage.fillForm(invalidUser);
    await registerPage.submitForm();

    await expect(page).toHaveURL(/.*register/);
    await expect(page.getByText('The email you entered is incorrect')).toBeVisible();
  });

  test("Passwords do not match", async ({ page }) => {
    const userWithMismatchedPasswords: User = {
      userName: faker.internet.username(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: "Password123!",
    };

    await registerPage.fillForm(userWithMismatchedPasswords);
    await registerPage.confirmPasswordInput.fill("DifferentPassword123!");
    await registerPage.submitForm();

    await expect(page).toHaveURL(/.*register/);
    await expect(page.getByText('Your passwords do not match')).toBeVisible();
  });

  test("Required fields are empty", async ({ page }) => {
    await registerPage.submitForm();

    await expect(page).toHaveURL(/.*register/);
    await expect(page.getByText('Username is required')).toBeVisible();
    await expect(page.getByText('E-mail Address is required')).toBeVisible();
  });
});