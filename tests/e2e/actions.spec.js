import { expect, test } from '@playwright/test';

test('primary CTA navigates to the contact journey', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /talk through your next move/i }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole('heading', { name: /get in touch/i }).first()).toBeVisible();
});

test('home digital learning capability opens learning services', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Explore digital learning services' }).click();
  await expect(page).toHaveURL(/\/learn$/);
  await expect(page.getByRole('heading', { name: /learn: master in-demand skills/i })).toBeVisible();
});

test('home omits the team section and primary navigation reaches all core pages', async ({ page, isMobile }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /people behind the work/i })).toHaveCount(0);

  const destinations = [
    ['About', /about sastrava/i],
    ['Services', /practical services for your next step/i],
    ['Portfolio', /business consulting/i],
    ['Contact', /get in touch/i],
  ];

  for (const [label, heading] of destinations) {
    if (isMobile) {
      const toggle = page.getByRole('button', { name: /toggle navigation menu/i });
      if (await toggle.getAttribute('aria-expanded') !== 'true') await toggle.click();
    }
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: label, exact: true }).click();
    await expect(page.getByRole('heading', { name: heading }).first()).toBeVisible();
  }

  await page.goto('/portfolio');
  await expect(page.getByRole('heading', { name: /people behind the work/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /view siri perumalla portfolio/i })).toBeVisible();
});

test('route navigation resets the viewport to the top', async ({ page, isMobile }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 1200));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(500);
  if (isMobile) await page.getByRole('button', { name: /toggle navigation menu/i }).click();
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
});

test('scrolled primary navigation has an opaque background', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 200));
  const nav = page.getByRole('navigation', { name: 'Primary' });
  await expect(nav).toHaveClass(/bg-navy-950\/95/);
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
  await expect(page.getByText(/last\s*name is required/i)).toBeVisible();
  await expect(page.getByText(/email is required/i)).toBeVisible();
  await expect(page.getByText(/phone is required/i)).toBeVisible();
  await expect(page.getByText(/message is required/i)).toBeVisible();
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
  await expect(page.getByRole('link', { name: 'Email neeraj@sastrava.com', exact: true })).toHaveAttribute('href', 'mailto:neeraj@sastrava.com');
});

test('courses stay out of navigation and the retired URL redirects to learning services', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Courses', exact: true })).toHaveCount(0);
  await page.goto('/courses');
  await expect(page).toHaveURL(/\/learn$/);
});

test('research summary opens and closes from a keyboard-accessible control', async ({ page }) => {
  await page.goto('/research');
  const readButton = page.getByRole('button', { name: /read summary/i }).first();
  await readButton.focus();
  await page.keyboard.press('Enter');
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: /close research summary/i }).click();
  await expect(dialog).toHaveCount(0);
});

test('case study preview opens details and its consultation action works', async ({ page }) => {
  await page.goto('/case-studies');
  await page.getByRole('button', { name: /view case study/i }).first().click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('heading', { level: 2 })).toBeVisible();
  await dialog.getByRole('button', { name: /discuss a similar project/i }).click();
  await expect(page).toHaveURL(/\/contact$/);
});

test('home content and calls to action fit narrow mobile viewports', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Narrow viewport check runs in the mobile project.');

  for (const width of [320, 360, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const overflow = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
      controls: [...document.querySelectorAll('main a, main button, main input, main textarea')]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          return rect.width > 0 && (rect.left < -1 || rect.right > document.documentElement.clientWidth + 1);
        })
        .map((element) => ({ text: element.textContent.trim(), right: Math.round(element.getBoundingClientRect().right) })),
    }));

    expect(overflow.document, `Horizontal page overflow at ${width}px`).toBeLessThanOrEqual(width);
    expect(overflow.controls, `Interactive controls overflow at ${width}px: ${JSON.stringify(overflow.controls)}`).toEqual([]);
  }
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

test('services page separates offerings into icon-led groups with working category links', async ({ page }) => {
  await page.goto('/services');

  await expect(page.getByRole('heading', { name: /decide where to go/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /make useful ideas work in the real world/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /build confidence into the systems and skills/i })).toBeVisible();
  await expect(page.locator('#service-offerings article')).toHaveCount(7);

  const categoryNavigation = page.getByRole('navigation', { name: 'Service categories' });
  await categoryNavigation.getByRole('link', { name: 'Protect & enable' }).click();
  await expect(page).toHaveURL(/\/services#security-learning$/);
  await expect(page.getByRole('heading', { name: /build confidence into the systems and skills/i })).toBeVisible();

  await page.getByRole('link', { name: 'Explore digital learning services' }).click();
  await expect(page).toHaveURL(/\/learn$/);
});

test('about page groups its story, purpose, work, and approach into clear sections', async ({ page }) => {
  await page.goto('/about');

  await expect(page.getByRole('heading', { name: /practical thinking, shaped around real needs/i })).toBeVisible();
  await expect(page.locator('#our-purpose article')).toHaveCount(3);
  await expect(page.locator('#our-work article')).toHaveCount(5);
  await expect(page.locator('#our-approach article')).toHaveCount(3);

  const sectionNavigation = page.getByRole('navigation', { name: 'About page sections' });
  await sectionNavigation.getByRole('link', { name: 'Our work' }).click();
  await expect(page).toHaveURL(/\/about#our-work$/);
  await expect(page.getByRole('heading', { name: /a connected set of capabilities/i })).toBeVisible();

  await page.getByRole('link', { name: /contact sastrava/i }).click();
  await expect(page).toHaveURL(/\/contact$/);
});
