import { expect, test } from '@playwright/test';

const routes = [
  '/', '/about', '/domains', '/services', '/services-hub', '/learn', '/build', '/grow', '/secure',
  '/courses', '/portfolio', '/blog', '/careers', '/contact', '/privacy', '/terms', '/security',
  '/faq', '/support', '/login', '/success-stories', '/case-studies', '/research', '/publications',
  '/open-source', '/achievements', '/cybersecurity', '/cybersecurity/penetration-testing',
  '/cybersecurity/security-audits', '/ai', '/ai/genai', '/digital-marketing', '/digital-marketing/seo',
];

for (const route of routes) {
  test(`route loads: ${route}`, async ({ page }) => {
    const errors = [];
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    await page.goto(route, { waitUntil: 'networkidle' });
    await expect(page.getByRole('heading').first()).toBeVisible();
    await expect(page).toHaveTitle(/SASTRAVA|Page not found/i);
    expect(errors.filter((message) => !message.includes('favicon'))).toEqual([]);
  });
}

test('every internal link target resolves to an application page', async ({ page, request }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const links = await page.locator('a[href^="/"]').evaluateAll((anchors) => [...new Set(anchors.map((anchor) => anchor.getAttribute('href')).filter(Boolean))]);
  for (const href of links) {
    const response = await request.get(href);
    expect(response.status(), `${href} should resolve`).toBeLessThan(400);
  }
});