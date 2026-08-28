import { Page, Locator } from '@playwright/test';

export class ShopPage {
  readonly page: Page;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartIcon = page.getByRole('link', { name: 'Cart' });
  }


  getAddToCartButton(productName: string): Locator {
    return this.page.getByRole('button', { name: `Add to cart: “${productName}”` });
  }

 
  async addProductToCart(productName: string): Promise<void> {
    await this.getAddToCartButton(productName).click();
  }
}