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
    //Lokatory do poprawy -> Nie działają
    this.firstNameInput = page.getByLabel('First Name'); 
    this.lastNameInput = page.getByLabel('Last Name');
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Password');
  }

  async fillForm(user: User) {
    await this.firstNameInput.fill(user.firstName); 
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
  }
}