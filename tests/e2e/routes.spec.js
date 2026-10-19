import { expect, test } from '@playwright/test';

const routes = [
  '/', '/about', '/domains', '/services', '/learn', '/build', '/grow', '/secure',
  '/courses', '/portfolio', '/blog', '/careers', '/contact', '/privacy', '/terms', '/security',
  '/faq', '/support', '/login', '/success-stories', '/case-studies', '/research', '/publications',
  '/open-source', '/achievements', '/cybersecurity', '/cybersecurity/penetration-testing',
  '/cybersecurity/security-audits', '/ai', '/ai/genai', '/digital-marketing', '/digital-marketing/seo',
  '/tools/seo-aeo-checker', '/tools/ai-roi-calculator', '/tools/security-checklist',
];

for (const route of routes) {
  test(`route loads: ${route}`, async ({ page }) => {
    const errors = [];
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    await page.goto(route, { waitUntil: 'networkidle' });
    await expect(page.getByRole('heading').first()).toBeVisible();
    await expect(page).toHaveTitle(/SASTRAVA/i);
    await expect(page).not.toHaveTitle(/Page not found/i);
    expect(errors.filter((message) => !message.includes('favicon'))).toEqual([]);
  });
}

test('legacy service hub routes redirect to canonical pages', async ({ page }) => {
  const redirects = [
    ['/services-hub', '/services'],
    ['/services-hub/learn', '/learn'],
    ['/services-hub/build', '/build'],
    ['/services-hub/grow', '/grow'],
    ['/services-hub/secure', '/secure'],
  ];
  for (const [legacyPath, canonicalPath] of redirects) {
    await page.goto(legacyPath, { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(new RegExp(`${canonicalPath.replaceAll('/', '\\/')}\\/?$`));
  }
});

test('open source page does not list or link to the website repository', async ({ page }) => {
  await page.goto('/open-source', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { name: 'Selected projects coming soon' })).toBeVisible();
  await expect(page.locator('a[href*="github.com/SASTRAVA/SASTRAVA-WEBSITE"]')).toHaveCount(0);
});

test('free planning tools provide working browser-based estimates and checklists', async ({ page }) => {
  await page.goto('/tools/seo-aeo-checker', { waitUntil: 'networkidle' });
  await page.getByRole('checkbox').first().check();
  await expect(page.getByText(/10\s*\/\s*100/)).toBeVisible();
  await expect(page.getByRole('button', { name: /copy action checklist/i })).toBeVisible();

  await page.goto('/tools/ai-roi-calculator', { waitUntil: 'networkidle' });
  await page.getByLabel('People doing this workflow').fill('10');
  await page.getByLabel('Hours spent per person each week').fill('2');
  await expect(page.getByText('30.3 hours')).toBeVisible();

  await page.goto('/tools/security-checklist', { waitUntil: 'networkidle' });
  for (let index = 0; index < 8; index += 1) {
    await page.getByRole('radio', { name: 'No', exact: true }).nth(index).check();
  }
  await expect(page.getByText('Critical gaps to address')).toBeVisible();
  await expect(page.getByText(/does not scan, test, or transmit/i)).toBeVisible();
});

test('every internal link target resolves to an application page', async ({ page, request }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const links = await page.locator('a[href^="/"]').evaluateAll((anchors) => [...new Set(anchors.map((anchor) => anchor.getAttribute('href')).filter(Boolean))]);
  for (const href of links) {
    const response = await request.get(href);
    expect(response.status(), `${href} should resolve`).toBeLessThan(400);
  }
});
