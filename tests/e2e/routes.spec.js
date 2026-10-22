import { expect, test } from '@playwright/test';
import { allLearningDomains } from '../../src/config/learningCatalog.js';

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
    ['/services-hub/secure', '/cybersecurity'],
  ];
  for (const [legacyPath, canonicalPath] of redirects) {
    await page.goto(legacyPath, { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(new RegExp(`${canonicalPath.replaceAll('/', '\\/')}\\/?$`));
  }
});

test('open source page does not list or link to the website repository', async ({ page }) => {
  await page.goto('/open-source', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { name: /Free tools and community resources/i })).toBeVisible();
  await expect(page.locator('a[href*="github.com/SASTRAVA/SASTRAVA-WEBSITE"]')).toHaveCount(0);
});

test('learning catalog lists every domain and has non-duplicated service copy', async ({ page }) => {
  await page.goto('/domains', { waitUntil: 'networkidle' });
  const domainTabs = page.getByRole('tablist', { name: 'Choose a topic' }).getByRole('tab');
  await expect(domainTabs).toHaveCount(allLearningDomains.length);
  for (const domain of allLearningDomains) await expect(domainTabs.filter({ hasText: domain.name })).toHaveCount(1);
  await expect(page.getByRole('heading', { name: /currently under development/i })).toHaveCount(0);
  for (const route of ['/learn', '/grow', '/build']) {
    await page.goto(route, { waitUntil: 'networkidle' });
    const descriptions = await page.locator('main h4').evaluateAll((headings) => headings.map((heading) => heading.nextElementSibling?.textContent?.trim()).filter(Boolean));
    expect(new Set(descriptions).size, `${route} card descriptions should be unique`).toBe(descriptions.length);
  }
});

test('modern navigation and complete contact footer appear on public routes', async ({ page, isMobile }) => {
  const publicRoutes = routes.filter((route) => !['/courses', '/login'].includes(route));
  for (const route of publicRoutes) {
    await page.goto(route, { waitUntil: 'networkidle' });
    if (isMobile) {
      await expect(page.getByRole('button', { name: /toggle navigation menu/i })).toBeVisible();
    } else {
      await expect(page.locator('nav[aria-label="Primary"] a[href="/blog"]').first()).toHaveAttribute('href', '/blog');
    }
    await expect(page.getByText('+91 7981 576083 · neeraj@sastrava.com · siri@sastrava.com', { exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Instagram / @sastrava_edutech' })).toBeVisible();
  }
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
