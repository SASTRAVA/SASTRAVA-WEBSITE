import { readFileSync } from 'node:fs';
import { allLearningDomains } from '../../src/config/learningCatalog.js';
import { expect, test } from '@playwright/test';

test('service system-stage explorer changes content with keyboard navigation', async ({ page }) => {
  await page.goto('/build');
  const tabs = page.getByRole('tablist', { name: 'Select a system stage' });
  const activeTab = tabs.getByRole('tab', { selected: true });
  const before = (await activeTab.locator('span').nth(1).textContent()).trim();
  await activeTab.focus();
  await page.keyboard.press('ArrowRight');
  const nextTab = tabs.getByRole('tab', { selected: true });
  const nextTitle = (await nextTab.locator('span').nth(1).textContent()).trim();
  expect(nextTitle).not.toBe(before);
  await expect(page.getByRole('tabpanel').getByRole('heading', { level: 3 })).toHaveText(nextTitle);
});

test('learning domains are grouped in their own interactive catalog', async ({ page }) => {
  await page.goto('/domains');
  const topics = page.getByRole('tablist', { name: 'Choose a topic' }).getByRole('tab');
  await expect(topics).toHaveCount(22);
  await topics.nth(1).focus();
  await page.keyboard.press('ArrowRight');
  await expect(topics.nth(2)).toHaveAttribute('aria-selected', 'true');
});

test('FAQ search narrows answers and provides an empty state', async ({ page }) => {
  await page.goto('/faq');
  const search = page.getByRole('searchbox', { name: 'Search questions' });
  await search.fill('SASTRAVA');
  await expect(page.locator('main details').first()).toBeVisible();
  await search.fill('no question should match this phrase');
  await expect(page.getByText(/No matching questions/i)).toBeVisible();
});

test('lead contact form can route the inquiry by department', async ({ page }) => {
  await page.goto('/contact');
  const routing = page.getByRole('group', { name: 'Choose a department' });
  await expect(routing).toBeVisible();
  await routing.getByRole('button', { name: /digital learning & college workshops/i }).click();
  await expect(page.getByRole('link', { name: /visit @sastrava_edutech/i })).toBeVisible();
});


test('canonical section owners are unique across the site', async ({ page }) => {
  const routes = ['/', '/about', '/services', '/learn', '/domains', '/case-studies', '/grow', '/build', '/secure', '/cybersecurity', '/digital-marketing', '/ai', '/portfolio', '/contact', '/success-stories', '/publications'];
  const content = new Map();
  for (const route of routes) {
    await page.goto(route);
    content.set(route, await page.locator('main').innerText());
  }

  const hasPhrase = (route, phrase) => content.get(route).includes(phrase);
  expect(routes.filter((route) => hasPhrase(route, 'A scope shaped around your goals'))).toEqual(['/services']);
  expect(routes.filter((route) => hasPhrase(route, 'How an engagement works'))).toEqual(['/case-studies']);
  for (const label of ['Listen', 'Shape', 'Deliver']) {
    const owners = [];
    for (const route of routes) {
      await page.goto(route);
      if (await page.getByRole('heading', { name: label, exact: true }).count()) owners.push(route);
    }
    expect(owners, `${label} stage should be exclusive to the homepage`).toEqual(['/']);
  }

  const teamNames = ['Neeraj Kumar', 'Siri Perumalla', 'Jaya Surya Krishna', 'Krishna Sai', 'Suhas Raj'];
  const teamOwners = routes.filter((route) => teamNames.every((name) => content.get(route).includes(name)));
  expect(teamOwners).toEqual(['/about']);

  for (const route of routes) {
    const domainCount = allLearningDomains.filter((domain) => content.get(route).includes(domain.name)).length;
    expect(domainCount === allLearningDomains.length, `${route} must not duplicate the complete domain catalog`).toBe(['/learn', '/domains'].includes(route));
  }
});

test('static SEO portfolio content belongs to project examples, with team profiles only on About', async () => {
  const aboutHtml = readFileSync(new URL('../../dist/about/index.html', import.meta.url), 'utf8');
  const portfolioHtml = readFileSync(new URL('../../dist/portfolio/index.html', import.meta.url), 'utf8');
  expect(aboutHtml).toContain('Neeraj Kumar');
  expect(portfolioHtml).toContain('Explore project blueprints and interactive demos');
  expect(portfolioHtml).not.toContain('Neeraj Kumar');
  expect(portfolioHtml).not.toContain('A multidisciplinary team portfolio');
  expect(portfolioHtml).not.toContain('Meet the team and view portfolios');
});

test('all sitemap URLs return HTTP 200 and Vercel declares permanent legacy redirects', async ({ request }) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  expect(locations).toHaveLength(33);
  for (const pathname of locations) {
    const response = await request.get(pathname, { maxRedirects: 0 });
    expect(response.status(), `${pathname} should resolve from the sitemap`).toBe(200);
  }

  const redirectResponse = await request.get('/services-hub/learn', { maxRedirects: 0 });
  // Local Vite preview does not apply Vercel redirects; confirm the deployed redirect table is permanent.
  expect([200, 301]).toContain(redirectResponse.status());
  const config = JSON.parse(readFileSync(new URL('../../vercel.json', import.meta.url), 'utf8'));
  for (const [source, destination] of [['/services-hub', '/services'], ['/services-hub/learn', '/learn'], ['/services-hub/build', '/build'], ['/services-hub/grow', '/grow'], ['/services-hub/secure', '/cybersecurity']]) {
    expect(config.redirects).toContainEqual({ source, destination, statusCode: 301 });
  }
});
