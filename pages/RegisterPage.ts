import { Page, Locator } from '@playwright/test';
import { User } from '../types/user';

export class RegisterPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.locator('input#first_name')
    this.lastNameInput = page.locator('input#last_name');
    this.emailInput = page.locator('input#email');
    this.passwordInput = page.locator('div#password input');
  }

  async fillForm(user: User) {
    await this.firstNameInput.fill(user.firstName); 
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
  }

  async submitForm() {
    await this.page.locator('input[type="submit"][value="Create"]').click({force: true});
  }
}