import { expect, test } from '@playwright/test';

const publicRoutes = [
  '/', '/about', '/domains', '/services', '/learn', '/build', '/grow', '/secure',
  '/portfolio', '/blog', '/careers', '/contact', '/privacy', '/terms', '/security',
  '/faq', '/support', '/success-stories', '/case-studies', '/research', '/publications',
  '/open-source', '/achievements', '/cybersecurity', '/cybersecurity/penetration-testing',
  '/cybersecurity/security-audits', '/ai', '/ai/genai', '/digital-marketing', '/digital-marketing/seo',
  '/tools/seo-aeo-checker', '/tools/ai-roi-calculator', '/tools/security-checklist',
];
const staticDocument = (route) => route === '/' ? '/index.html' : `${route}/index.html`;

for (const route of publicRoutes) {
  test(`Generated SEO document has route-specific metadata: ${route}`, async ({ request }) => {
    const response = await request.get(staticDocument(route));
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toMatch(/<title>[^<]+<\/title>/);
    expect(html).toMatch(/<meta name="description" content="[^"]+"\s*\/>/);
    expect(html).toContain(`<link rel="canonical" href="https://sastrava.com${route === '/' ? '/' : route}" />`);
    expect(html).toMatch(/<meta property="og:image" content="https:\/\/sastrava\.com\/images\/[^>]+/);
    const schemaMatch = html.match(/<script id="sastrava-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/);
    expect(schemaMatch).not.toBeNull();
    expect(JSON.parse(schemaMatch[1])['@graph'].some((entry) => Array.isArray(entry['@type'])
      ? entry['@type'].includes('Organization')
      : entry['@type'] === 'Organization')).toBe(true);
    expect(html).toMatch(/<div id="root"><div class="static-site-fallback">[\s\S]*?<main(?:\s[^>]*)?><[\s\S]*?<h1>/);
  });
}

test('SEO service pages publish visible answer-first questions and matching FAQ schema', async ({ request }) => {
  for (const route of ['/faq', '/ai', '/ai/genai', '/cybersecurity', '/cybersecurity/penetration-testing', '/cybersecurity/security-audits', '/digital-marketing']) {
    const response = await request.get(staticDocument(route));
    const html = await response.text();
    expect(html).toContain('Common questions');
    const schemaMatch = html.match(/<script id="sastrava-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/);
    const graph = JSON.parse(schemaMatch[1])['@graph'];
    expect(graph.some((entry) => entry['@type'] === 'FAQPage')).toBe(true);
  }
});

test('Google Search Console ownership file is served from the site root', async ({ request }) => {
  const response = await request.get('/googlef0da80dfb3341284.html');
  expect(response.status()).toBe(200);
  expect((await response.text()).trim()).toBe('google-site-verification: googlef0da80dfb3341284.html');
});

test('homepage browser tab title identifies SASTRAVA as a business consultant', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle(/Business Consultant & SEO in Tadepalli \| SASTRAVA/);
});

test('homepage publishes the SASTRAVA favicon and platform icon set', async ({ request }) => {
  const homeResponse = await request.get('/');
  const homeHtml = await homeResponse.text();
  expect(homeHtml.indexOf('href="/sastrava-favicon.png?v=20261019"')).toBeLessThan(homeHtml.indexOf('href="/favicon.svg?v=20261019"'));
  for (const href of [
    '/sastrava-favicon.png?v=20261019',
    '/favicon.ico?v=20261019',
    '/favicon.png?v=20261019',
    '/favicon-48x48.png?v=20261019',
    '/favicon-32x32.png?v=20261019',
    '/favicon-16x16.png?v=20261019',
    '/apple-touch-icon.png?v=20261019',
    '/favicon.svg?v=20261019',
    '/site.webmanifest?v=20261019',
  ]) {
    expect(homeHtml).toContain(`href="${href}"`);
  }

  const svgResponse = await request.get('/favicon.svg?v=20261019');
  expect(svgResponse.status(), 'SVG favicon should be served').toBe(200);
  expect(svgResponse.headers()['content-type']).toContain('image/svg+xml');
  expect(await svgResponse.text()).toContain('href="/logo.png?v=20261019"');

  const icoResponse = await request.get('/favicon.ico');
  expect(icoResponse.status(), 'legacy favicon URL should be served').toBe(200);
  const icoBytes = await icoResponse.body();
  expect([...icoBytes.subarray(0, 6)]).toEqual([0, 0, 1, 0, 3, 0]);

  for (const path of [
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/favicon-48x48.png',
    '/favicon.png',
    '/apple-touch-icon.png',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
  ]) {
    const response = await request.get(path);
    expect(response.status(), `${path} should be served`).toBe(200);
    expect(response.headers()['content-type']).toContain('image/png');
  }

  const manifestResponse = await request.get('/site.webmanifest?v=20261019');
  const manifest = await manifestResponse.json();
  expect(manifest.name).toBe('SASTRAVA');
  expect(manifest.icons.map(({ src }) => src)).toEqual([
    '/android-chrome-192x192.png?v=20261019',
    '/android-chrome-512x512.png?v=20261019',
  ]);
});

test('primary favicon uses the supplied square SASTRAVA logo asset', async ({ request }) => {
  const response = await request.get('/sastrava-favicon.png?v=20261019');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('image/png');
  const { default: sharp } = await import('sharp');
  const { width, height } = await sharp(await response.body()).metadata();
  expect(width).toBe(512);
  expect(height).toBe(512);
});

test('SEO, AEO, and GEO answer is visible on the SEO page', async ({ request }) => {
  const response = await request.get(staticDocument('/digital-marketing/seo'));
  const html = await response.text();
  expect(html).toContain('What is the difference between SEO, AEO, and GEO?');
  const schemaMatch = html.match(/<script id="sastrava-json-ld" type="application\/ld\+json">([\s\S]*?)<\/script>/);
  const graph = JSON.parse(schemaMatch[1])['@graph'];
  const faq = graph.find((entry) => entry['@type'] === 'FAQPage');
  expect(faq.mainEntity.some(({ name }) => name === 'What is the difference between SEO, AEO, and GEO?')).toBe(true);
});

test('private account routes receive noindex before JavaScript', async ({ request }) => {
  for (const route of ['/login', '/student-dashboard']) {
    const response = await request.get(staticDocument(route));
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('<meta name="robots" content="noindex, nofollow" />');
  }
});

test('hidden courses page is noindex and redirects visitors to learning services', async ({ request, page }) => {
  const response = await request.get(staticDocument('/courses'));
  expect(response.status()).toBe(200);
  expect(await response.text()).toContain('<meta name="robots" content="noindex, nofollow" />');
  await page.goto('/courses', { waitUntil: 'networkidle' });
  await expect(page).toHaveURL(/\/learn$/);
});

test('service conversion button opens the contact page', async ({ page }) => {
  await page.goto('/digital-marketing/seo', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Discuss an SEO assessment' }).click();
  await expect(page).toHaveURL(/\/contact$/);
});
