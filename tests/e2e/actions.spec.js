import { expect, test } from '@playwright/test';

test('primary CTA navigates to the contact journey', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /start with your challenge/i }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole('heading', { name: /get in touch/i }).first()).toBeVisible();
});

test('mobile menu opens and closes with keyboard', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile navigation only applies to the mobile project.');
  await page.goto('/');
  const toggle = page.getByRole('button', { name: /toggle navigation menu/i });
  await expect(toggle).toBeVisible();
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('contact form reports validation errors without submitting data', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: /^submit$/i }).first().click();
  await expect(page.getByText(/first\s*name is required/i)).toBeVisible();
});

test('contact form handles a successful server response', async ({ page }) => {
  await page.route('**/api/contact', async (route) => route.fulfill({ status: 202, contentType: 'application/json', body: JSON.stringify({ ok: true, message: 'Thank you. We will be in touch shortly.' }) }));
  await page.goto('/contact');
  await page.getByLabel(/first name/i).first().fill('Test');
  await page.getByLabel(/last name/i).first().fill('User');
  await page.getByLabel(/email/i).first().fill('test@example.com');
  await page.getByLabel(/phone/i).first().fill('7981576083');
  await page.getByLabel(/message/i).first().fill('Synthetic test message.');
  await page.getByRole('button', { name: /^submit$/i }).first().click();
  await expect(page.getByText(/thank you\. we will be in touch shortly/i)).toBeVisible();
});

test('contact form exposes a safe delivery failure', async ({ page }) => {
  await page.route('**/api/contact', async (route) => route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ error: 'The contact service is not configured. Please email neeraj@sastrava.com.' }) }));
  await page.goto('/contact');
  await page.getByLabel(/first name/i).first().fill('Test');
  await page.getByLabel(/last name/i).first().fill('User');
  await page.getByLabel(/email/i).first().fill('test@example.com');
  await page.getByLabel(/phone/i).first().fill('7981576083');
  await page.getByLabel(/message/i).first().fill('Synthetic test message.');
  await page.getByRole('button', { name: /^submit$/i }).first().click();
  await expect(page.getByText(/contact service is not configured/i)).toBeVisible();
});
test('pillar CTAs always lead to the contact journey', async ({ page }) => {
  const ctas = [
    ['/learn', /enroll now/i],
    ['/build', /start project/i],
    ['/grow', /start growth plan/i],
    ['/secure', /get security audit/i],
  ];

  for (const [route, name] of ctas) {
    await page.goto(route);
    await page.getByRole('button', { name }).first().click();
    await expect(page).toHaveURL(/\/contact$/);
  }
});

test('services hub primary and featured CTAs lead to contact', async ({ page }) => {
  await page.goto('/services-hub');
  await page.getByRole('button', { name: /^explore learning paths$/i }).nth(1).click();
  await expect(page).toHaveURL(/\/contact$/);

  await page.goto('/services-hub');
  await page.getByRole('button', { name: /enroll now/i }).first().click();
  await expect(page).toHaveURL(/\/contact$/);
});
