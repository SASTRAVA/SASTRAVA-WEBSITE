import { expect, test } from '@playwright/test';

const routes = [
  '/', '/about', '/domains', '/services', '/learn', '/build', '/grow', '/secure',
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

test('every internal link target resolves to an application page', async ({ page, request }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const links = await page.locator('a[href^="/"]').evaluateAll((anchors) => [...new Set(anchors.map((anchor) => anchor.getAttribute('href')).filter(Boolean))]);
  for (const href of links) {
    const response = await request.get(href);
    expect(response.status(), `${href} should resolve`).toBeLessThan(400);
  }
});
