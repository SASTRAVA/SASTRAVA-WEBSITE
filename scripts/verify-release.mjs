import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'vercel.json',
  'public/robots.txt',
  'public/llms.txt',
  'public/sitemap.xml',
  'public/.well-known/security.txt',
  'public/404.html',
  'public/images/sastrava-mark.webp',
  'scripts/generate-social-card.mjs',
  'public/logo.png',
  'public/favicon.png',
  'public/favicon-32x32.png',
  'public/favicon-48x48.png',
  'public/apple-touch-icon.png',
  'public/android-chrome-192x192.png',
  'public/android-chrome-512x512.png',
  'public/site.webmanifest',
  'api/contact.js',
  'src/config/seoRoutes.js',
  'scripts/generate-seo-pages.mjs',
];
const publicRoutes = [
  '/', '/about', '/domains', '/services', '/services-hub', '/services-hub/learn', '/services-hub/build',
  '/services-hub/grow', '/services-hub/secure', '/learn', '/build', '/grow', '/secure',
  '/portfolio', '/blog', '/careers', '/contact', '/privacy', '/terms', '/security',
  '/faq', '/support', '/success-stories', '/case-studies', '/research', '/publications',
  '/open-source', '/achievements', '/cybersecurity', '/cybersecurity/penetration-testing',
  '/cybersecurity/security-audits', '/ai', '/ai/genai', '/digital-marketing', '/digital-marketing/seo',
];
const fail = (message) => {
  console.error(`Release verification failed: ${message}`);
  process.exitCode = 1;
};

for (const file of requiredFiles) {
  if (!existsSync(file)) fail(`missing ${file}`);
}

const htmlHead = readFileSync('index.html', 'utf8');
for (const asset of [
  '/favicon-32x32.png',
  '/favicon-48x48.png',
  '/favicon.png',
  '/apple-touch-icon.png',
  '/site.webmanifest',
]) {
  if (!htmlHead.includes(`href="${asset}"`)) fail(`home page head does not reference ${asset}`);
}
const webManifest = JSON.parse(readFileSync('public/site.webmanifest', 'utf8'));
for (const icon of ['/android-chrome-192x192.png', '/android-chrome-512x512.png']) {
  if (!webManifest.icons?.some(({ src }) => src === icon)) fail(`web manifest missing ${icon}`);
}

const vercel = JSON.parse(readFileSync('vercel.json', 'utf8'));
const rewritten = new Map((vercel.rewrites ?? []).map(({ source, destination }) => [source, destination]));
for (const route of publicRoutes.filter((route) => route !== '/')) {
  const destination = rewritten.get(route);
  if (!destination) fail(`Vercel rewrite missing for ${route}`);
  else if (destination !== `${route}/index.html`) fail(`Vercel route ${route} does not serve its route-specific HTML metadata`);
}
if (rewritten.get('/login/:role') !== '/login/index.html') fail('login role route must use the noindex login metadata page');
if (rewritten.get('/courses') !== '/courses/index.html') fail('hidden courses route must serve its noindex metadata before client redirect');
for (const pillar of ['learn', 'build', 'grow', 'secure']) {
  if (rewritten.get(`/services-hub/${pillar}`) !== `/services-hub/${pillar}/index.html`) fail(`service hub route is missing page-specific metadata for ${pillar}`);
}
if (rewritten.get('/services-hub/:pillar') !== '/services-hub/index.html') fail('unknown service hub pillar route must use the service hub metadata page');

const sitemap = readFileSync('public/sitemap.xml', 'utf8');
const sitemapRoutes = new Set([...sitemap.matchAll(/<loc>https:\/\/sastrava\.com(\/[^<]*)?<\/loc>/g)].map(([, route = '/']) => route));
for (const route of publicRoutes) {
  if (!sitemapRoutes.has(route)) fail(`sitemap missing ${route}`);
}
for (const route of sitemapRoutes) {
  if (!publicRoutes.includes(route)) fail(`sitemap contains non-public or unknown route ${route}`);
}
if (sitemapRoutes.has('/courses')) fail('sitemap must not advertise the hidden courses page');

const robots = readFileSync('public/robots.txt', 'utf8');
if (!robots.includes('Sitemap: https://sastrava.com/sitemap.xml')) fail('robots.txt does not declare sitemap');
const seoSource = readFileSync('src/config/seoRoutes.js', 'utf8');
if (seoSource.includes("name=\"keywords\"")) fail('SEO route config must not rely on the ignored meta keywords tag');
if (!seoSource.includes("['What is the difference between SEO, AEO, and GEO?'")) fail('SEO page is missing answer-first AEO/GEO guidance');
for (const route of publicRoutes) {
  if (!seoSource.includes(`'${route}':`)) fail(`SEO metadata missing for ${route}`);
}
if (!/\/courses':\s*\{[^}]*noindex:\s*true/.test(seoSource)) fail('hidden courses route must publish noindex metadata');

const contact = readFileSync('api/contact.js', 'utf8');
for (const unsafePattern of ['localStorage', 'api.ipify.org']) {
  if (contact.includes(unsafePattern)) fail(`contact handler contains ${unsafePattern}`);
}

const cspReportEndpoint = 'api/csp-report.js';
if (!existsSync(cspReportEndpoint)) fail(`missing ${cspReportEndpoint}`);
if (!JSON.stringify(vercel.headers ?? []).includes('report-uri /api/csp-report')) fail('CSP reporting endpoint is not configured');

const portfolioFiles = [
  '01_A_Geetha_Krishna_Sai.html',
  '02_K_Jaya_Surya_Krishna.html',
  '03_Y_Suhas_Raj.html',
  '05_P_Prasanna_Siri.html',
  '06_S_Neeraj_Kumar.html',
];
const portfolioPage = readFileSync('src/pages/Portfolio.jsx', 'utf8');
if (!existsSync('public/portfolios/sastrava-portfolio.css')) fail('missing shared portfolio stylesheet');
for (const portfolioFile of portfolioFiles) {
  if (!existsSync(`public/portfolios/${portfolioFile}`)) fail(`missing public portfolio ${portfolioFile}`);
  const portfolioHtml = readFileSync(`public/portfolios/${portfolioFile}`, 'utf8');
  const portfolioScript = portfolioFile.replace(/\.html$/, '.js');
  if (!existsSync(`public/portfolios/${portfolioScript}`)) fail(`missing external portfolio script ${portfolioScript}`);
  if (/<script>([\s\S]*?)<\/script>/.test(portfolioHtml)) fail(`inline portfolio script remains in ${portfolioFile}`);
  if (!portfolioPage.includes(`/portfolios/${portfolioFile}`)) fail(`team profile link missing for ${portfolioFile}`);
}

for (const optimizedAsset of [
  'src/assets/sastrava/neon-innovation-cycle.webp',
  'src/assets/sastrava/business-growth-cycle-light.webp',
  'src/assets/sastrava/build-innovate-grow-together.webp',
]) {
  if (!existsSync(optimizedAsset)) fail(`missing optimized asset ${optimizedAsset}`);
}
if (!process.exitCode) console.log('Release verification passed.');
