import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '/', '/about', '/domains', '/services', '/services-hub', '/learn', '/build', '/grow', '/secure',
  '/courses', '/portfolio', '/blog', '/careers', '/contact', '/privacy', '/terms', '/security',
  '/faq', '/support', '/success-stories', '/case-studies', '/research', '/publications',
  '/open-source', '/achievements', '/cybersecurity', '/cybersecurity/penetration-testing',
  '/cybersecurity/security-audits', '/ai', '/ai/genai', '/digital-marketing', '/digital-marketing/seo',
  '/login/student', '/login/head-1',
];

for (const route of routes) {
  test(`accessibility scan: ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(route, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      const step = Math.max(400, Math.floor(window.innerHeight * 0.75));
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 40));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1400);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    const blocking = results.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact));
    const summary = blocking.flatMap((violation) => violation.nodes.map((node) => ({
      rule: violation.id,
      target: node.target,
      details: node.any?.[0]?.data,
      html: node.html.slice(0, 240),
    })));
    expect(summary, JSON.stringify(summary, null, 2)).toEqual([]);
  });
}

for (const route of ['/login', '/login/student', '/student-dashboard']) {
  test(`private route is excluded from search indexing: ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'networkidle' });
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  });
}
