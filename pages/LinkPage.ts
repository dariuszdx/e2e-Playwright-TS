import { Page, Locator } from "@playwright/test";



export class LinkPage {
  readonly page: Page;
  readonly homepage: Locator;
  readonly shopPage: Locator;
  readonly memberspage: Locator;
  readonly loginpage: Locator;
  readonly userpage: Locator;
  readonly accountpage: Locator;
  readonly registerpage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.homepage = page.getByRole('link', { name: 'Homepage' })
    this.shopPage = page.getByRole('link', { name: 'Shop' })
    this.memberspage = page.getByRole('link', { name: 'Members' })
    this.loginpage = page.getByRole('link', { name: 'Login' })
    this.userpage = page.getByRole('link', { name: 'User' })
    this.accountpage = page.getByRole('link', { name: 'Account' })
    this.registerpage = page.getByRole('link', { name: 'Register' })
  }
}
