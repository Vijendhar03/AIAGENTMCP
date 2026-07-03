import { test, expect } from '@playwright/test';

test('login and checkout iPhone X', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.getByLabel('Username:').fill('rahulshettyacademy');
  await page.getByLabel('Password:').fill('Learning@830$3mK2');
  await page.getByLabel('I Agree to the terms and conditions').check();

  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page).toHaveURL(/.*\/angularpractice\/shop/);

  const iphoneCard = page.locator('.card').filter({ has: page.getByRole('heading', { name: 'iphone X' }) });
  await iphoneCard.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('link', { name: 'Checkout' }).click();
  await expect(page.getByText('iphone X')).toBeVisible();
});
