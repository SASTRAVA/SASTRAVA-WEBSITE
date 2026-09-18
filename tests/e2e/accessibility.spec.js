import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

for (const route of ['/', '/contact', '/security']) {
  test(`accessibility scan: ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'networkidle' });
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    const blocking = results.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact));
    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  });
}