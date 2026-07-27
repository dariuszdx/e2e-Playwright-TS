import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RegisterPage } from '../pages/RegisterPage';

test.beforeEach(async ({ page }) => {
  await page.goto('/account/register');
});

test('Correct user registration form', async ({ page }) => {
const registerPage = new RegisterPage(page);

const user = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};
await registerPage.fillForm(user);
// await registerPage.submitForm();
});

