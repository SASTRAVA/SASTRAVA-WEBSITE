import { expect, test } from '@playwright/test';

const coreRoutes = ['/', '/services', '/about', '/portfolio', '/contact'];

test('core client journey fits mobile viewports without horizontal scrolling', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile layout check runs in the mobile project.');

  for (const width of [320, 360, 390, 430, 768]) {
    await page.setViewportSize({ width, height: 844 });

    for (const route of coreRoutes) {
      const response = await page.goto(route, { waitUntil: 'networkidle' });
      expect(response?.status(), `${route} should load at ${width}px`).toBeLessThan(400);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

      const metrics = await page.evaluate(() => {
        const viewportWidth = document.documentElement.clientWidth;
        const controlsOutsideViewport = [...document.querySelectorAll('main a, main button, main input, main textarea, main select')]
          .filter((element) => !element.closest('[aria-hidden="true"]'))
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.width > 0 && (rect.left < -1 || rect.right > viewportWidth + 1);
          })
          .map((element) => ({ tag: element.tagName, type: element.getAttribute('type'), className: typeof element.className === 'string' ? element.className.trim().slice(0, 140) : '', label: element.innerText?.trim() || element.getAttribute('aria-label') || element.getAttribute('name'), left: Math.round(element.getBoundingClientRect().left), right: Math.round(element.getBoundingClientRect().right), transform: getComputedStyle(element).transform }));
        return {
          viewportWidth,
          documentWidth: document.documentElement.scrollWidth,
          controlsOutsideViewport,
        };
      });

      expect(metrics.documentWidth, `${route} page overflow at ${width}px`).toBeLessThanOrEqual(width);
      expect(metrics.controlsOutsideViewport, `${route} controls overflow at ${width}px`).toEqual([]);
    }
  }
});

test('mobile navigation exposes all core pages and closes after selection', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile navigation check runs in the mobile project.');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const menuButton = page.getByRole('button', { name: /toggle navigation menu/i });
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

  const primaryNavigation = page.getByRole('navigation', { name: 'Primary' });
  for (const label of ['Home', 'About', 'Services', 'Portfolio', 'Insights', 'Contact']) {
    await expect(primaryNavigation.getByRole('link', { name: label, exact: true })).toBeVisible();
  }

  await primaryNavigation.getByRole('link', { name: 'Services', exact: true }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});
