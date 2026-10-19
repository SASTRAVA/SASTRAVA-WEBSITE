import { expect, test } from '@playwright/test';

const measurementId = process.env.VITE_GA_MEASUREMENT_ID?.trim();

test('GA4 initializes with the configured stream only after analytics consent', async ({ page }) => {
  test.skip(!measurementId, 'Set VITE_GA_MEASUREMENT_ID to test the configured GA4 stream.');

  await page.route('https://www.googletagmanager.com/gtag/js**', (route) => route.fulfill({
    status: 200,
    contentType: 'application/javascript',
    body: '/* Analytics loader stubbed for consent-gate test. */',
  }));

  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('complementary', { name: 'Analytics choice' })).toBeVisible();
  await expect(page.locator('script[data-sastrava-analytics="true"]')).toHaveCount(0);
  expect(await page.evaluate(() => window.dataLayer ?? [])).toEqual([]);

  await page.getByRole('button', { name: 'Allow analytics' }).click();
  const analyticsScript = page.locator('script[data-sastrava-analytics="true"]');
  await expect(analyticsScript).toHaveAttribute('src', new RegExp(`id=${measurementId}`));

  const { dataLayer, title } = await page.evaluate(() => ({ dataLayer: window.dataLayer, title: document.title }));
  expect(dataLayer).toContainEqual(['config', measurementId, { send_page_view: false }]);
  expect(dataLayer.some(([type, name, details]) => type === 'event'
    && name === 'page_view'
    && details.page_path === '/'
    && details.page_title === title)).toBe(true);
});
