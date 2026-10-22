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
  expect(await page.evaluate(() => window.dataLayer.every((command) => Object.prototype.toString.call(command) === '[object Arguments]'))).toBe(true);

  const dataLayer = await page.evaluate(() => window.dataLayer.map((command) => Array.from(command)));
  expect(dataLayer).toContainEqual(['config', measurementId, expect.objectContaining({
    send_page_view: true,
    page_path: '/',
    page_location: 'http://127.0.0.1:4173/',
    page_title: expect.stringMatching(/SASTRAVA/i),
  })]);

  await page.getByRole('link', { name: /SEO, AEO & GEO readiness/ }).first().click();
  await expect(page).toHaveURL(/\/tools\/seo-aeo-checker$/);
  await page.getByRole('checkbox').first().check();
  const toolEvents = await page.evaluate(() => window.dataLayer.map((command) => Array.from(command)));
  expect(toolEvents.some(([type, name, details]) => type === 'event'
    && name === 'page_view'
    && details.page_path === '/tools/seo-aeo-checker')).toBe(true);
  expect(toolEvents).toContainEqual(['event', 'tool_interaction_start', { tool_name: 'seo-aeo-checker' }]);
  expect(toolEvents).toContainEqual(['event', 'tool_result_generated', { tool_name: 'seo-aeo-checker', result: 'completed' }]);
});

test('accepting analytics consent sends a GA4 collect beacon successfully', async ({ page }) => {
  const cspErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error' && /content security policy|refused to connect/i.test(message.text())) {
      cspErrors.push(message.text());
    }
  });

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const collectResponse = page.waitForResponse((response) => {
    const url = new URL(response.url());
    return url.pathname.endsWith('/g/collect') && url.searchParams.get('tid') === measurementId;
  }, { timeout: 15000 });
  await page.getByRole('button', { name: 'Allow analytics' }).click();

  const response = await collectResponse;
  expect([200, 204]).toContain(response.status());
  expect(cspErrors).toEqual([]);
});

test('homepage, About, and Services link to case studies and learning stories', async ({ page }) => {
  for (const route of ['/', '/about', '/services']) {
    await page.goto(route, { waitUntil: 'networkidle' });
    await expect(page.getByRole('link', { name: /project case studies|explore case studies/i }).first()).toHaveAttribute('href', '/case-studies');
    await expect(page.getByRole('link', { name: /learning stories/i }).first()).toHaveAttribute('href', '/success-stories');
  }
});
