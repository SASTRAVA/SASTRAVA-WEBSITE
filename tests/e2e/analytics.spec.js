import { expect, test } from '@playwright/test';

const measurementId = process.env.VITE_GA_MEASUREMENT_ID?.trim() || 'G-744LFGFCXQ';

test('GA4 initializes with the configured stream only after analytics consent', async ({ page }) => {
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

  await page.goto('/tools/seo-aeo-checker', { waitUntil: 'networkidle' });
  await page.getByRole('checkbox').first().check();
  const toolEvents = await page.evaluate(() => window.dataLayer);
  expect(toolEvents.some(([type, name, details]) => type === 'event'
    && name === 'page_view'
    && details.page_path === '/tools/seo-aeo-checker')).toBe(true);
  expect(toolEvents).toContainEqual(['event', 'tool_interaction_start', { tool_name: 'seo-aeo-checker' }]);
  expect(toolEvents).toContainEqual(['event', 'tool_result_generated', { tool_name: 'seo-aeo-checker', score_or_tier: 'score-10' }]);
});

test('homepage, About, and Services link to case studies and learning stories', async ({ page }) => {
  for (const route of ['/', '/about', '/services']) {
    await page.goto(route, { waitUntil: 'networkidle' });
    await expect(page.getByRole('link', { name: /project case studies|explore case studies/i }).first()).toHaveAttribute('href', '/case-studies');
    await expect(page.getByRole('link', { name: /learning stories/i }).first()).toHaveAttribute('href', '/success-stories');
  }
});
