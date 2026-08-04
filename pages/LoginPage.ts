import { Page, Locator } from "@playwright/test";


export interface User {
    email: string;
    password: string;
  }

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Username or E-mail' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.submitButton = page.getByRole('button', { name: 'Login' })
  }

  async fillForm(user: User) {
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}
