import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Expect h1 to contain text
  const heading = page.locator('h1');
  await expect(heading).toContainText('Example Domain');
});

test('has title', async ({ page }) => {
  await page.goto('https://example.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Example/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://example.com');

  // Click the link text
  await page.getByRole('link', { name: 'Learn more' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Learn' })).toBeVisible();
});
