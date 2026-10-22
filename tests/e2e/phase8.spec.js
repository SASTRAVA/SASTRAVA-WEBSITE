import { expect, test } from '@playwright/test';

const preferredSourceLabel = 'Add SASTRAVA as a Preferred Source on Google';

test('preferred source link is available on editorial and service pages', async ({ page }) => {
  for (const route of ['/blog', '/research', '/publications', '/digital-marketing/seo', '/tools/seo-aeo-checker']) {
    await page.goto(route);
    const link = page.getByRole('link', { name: preferredSourceLabel }).first();
    await expect(link, `${route} should include a Preferred Source link`).toHaveAttribute('href', 'https://www.google.com/preferences/source?q=sastrava.com');
    await expect(link).toHaveAttribute('rel', /noopener/);
  }
});

test('RSS feeds are built and discoverable in the document head', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.locator('link[rel="alternate"][type="application/rss+xml"]')).toHaveAttribute('href', 'https://sastrava.com/rss.xml');
  for (const feed of ['/rss.xml', '/feed.xml']) {
    const response = await request.get(feed);
    expect(response.ok(), `${feed} should be served`).toBeTruthy();
    const text = await response.text();
    expect(text).toContain('<rss version="2.0"');
    expect(text).toContain('<atom:updated>');
    expect(text).toContain('SASTRAVA Insights &amp; Research');
  }
});

test('privacy notice explains data use and provides a working preference control', async ({ page }) => {
  await page.goto('/privacy');
  await expect(page.getByRole('heading', { name: /privacy & data protection notice/i })).toBeVisible();
  await expect(page.getByText(/Digital Personal Data Protection Act, 2023 \(DPDP Act\)/i)).toBeVisible();
  await expect(page.getByText(/Data Principal rights and privacy contact/i)).toBeVisible();
  await expect(page.getByText(/siri@sastrava.com/i).first()).toBeVisible();
  await page.getByRole('button', { name: 'Cookie & Analytics Preferences' }).first().click();
  const panel = page.getByRole('region', { name: 'Cookie and analytics preferences' });
  await expect(panel).toBeVisible();
  await panel.getByRole('button', { name: 'Reject optional analytics' }).click();
  await expect.poll(() => page.evaluate(() => localStorage.getItem('sastrava-analytics-consent'))).toBe('rejected');
});

test('contact consent is required and personal form values stay out of analytics events', async ({ page }) => {
  let submittedBody;
  await page.addInitScript(() => localStorage.setItem('sastrava-analytics-consent', 'accepted'));
  await page.route('https://www.googletagmanager.com/**', (route) => route.abort());
  await page.route('**/api/contact', async (route) => {
    submittedBody = route.request().postDataJSON();
    await route.fulfill({ status: 202, contentType: 'application/json', body: JSON.stringify({ ok: true, message: 'Thank you. We will be in touch shortly.' }) });
  });
  await page.goto('/contact');
  await page.getByLabel(/first name/i).first().fill('Test');
  await page.getByLabel(/last name/i).first().fill('User');
  await page.getByLabel(/email/i).first().fill('test@example.com');
  await page.getByLabel(/phone/i).first().fill('7981576083');
  await page.getByLabel(/message/i).first().fill('Synthetic test message.');
  await page.getByRole('button', { name: /^submit$/i }).first().click();
  await expect(page.getByText(/please consent to the use of your details/i)).toBeVisible();
  await expect.poll(() => submittedBody).toBeUndefined();
  await page.getByRole('checkbox', { name: /i agree that sastrava may use the contact details/i }).check();
  await page.getByRole('button', { name: /^submit$/i }).first().click();
  await expect(page.getByText(/thank you\. we will be in touch shortly/i)).toBeVisible();
  expect(submittedBody.privacyConsent).toBe(true);
  expect(submittedBody.message).toBe('Synthetic test message.');
  const analyticsQueue = await page.evaluate(() => JSON.stringify(window.dataLayer || []));
  expect(analyticsQueue).not.toContain('test@example.com');
  expect(analyticsQueue).not.toContain('Synthetic test message.');
});

test('security disclosure text file uses current published contacts', async ({ request }) => {
  const response = await request.get('/.well-known/security.txt');
  expect(response.ok()).toBeTruthy();
  const text = await response.text();
  expect(text).toContain('Contact: mailto:neeraj@sastrava.com');
  expect(text).toContain('Contact: mailto:siri@sastrava.com');
  expect(text).not.toContain('security@sastrava.com');
});
