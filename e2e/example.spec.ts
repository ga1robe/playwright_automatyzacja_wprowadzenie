import { test, expect } from '@playwright/test';

test.use({ browserName: 'chromium' }); // lub 'firefox' 'chromium'

test('has title', async ({ page }) => {
  await new Promise((resolve) => setTimeout(resolve, 5 * 1000)); // czekaj 5 sekund przed nawigacją
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible();
});
