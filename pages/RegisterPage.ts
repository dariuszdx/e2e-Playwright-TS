import { Page, Locator } from '@playwright/test';
import { User } from '../types/user';

export class RegisterPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly genderCheckbox: Locator;
  readonly birthDateInput: Locator;
  readonly countrySelect: Locator; 
  readonly phoneNumberInput: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userNameInput = page.getByRole('textbox', { name: 'Username' })
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' })
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' })
    this.emailInput = page.getByRole('textbox', { name: 'E-mail Address' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password', exact: true })
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password', exact: true })
    this.genderCheckbox = page.getByText('Male', { exact: true })
    this.birthDateInput = page.getByRole('textbox', { name: 'Birth Date' })
    this.countrySelect = page.locator('#select2-country-container');
    this.phoneNumberInput = page.getByRole('textbox', { name: 'Phone Number' })
  }

  async fillForm(user: User) {
    await this.userNameInput.fill(user.userName)
    await this.firstNameInput.fill(user.firstName); 
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.confirmPasswordInput.fill(user.password);
    if (user.gender) {
      await this.page.getByText(user.gender, { exact: true }).click();
    }
    if (user.birthDate) {
      await this.birthDateInput.evaluate((el: HTMLInputElement, val) => {
        el.removeAttribute('readonly');
        el.value = val;
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }, user.birthDate);
    }
    if (user.country) {
      await this.countrySelect.click();
      const searchInput = this.page.locator('.select2-search__field');
      await searchInput.fill(user.country);
      await searchInput.press('Enter');
    }
    if (user.phoneNumber) {
      await this.phoneNumberInput.fill(user.phoneNumber);
    }
  }

  async submitForm() {
    await this.page.getByRole('button', { name: 'Register' }).click({force: true});
  }
}