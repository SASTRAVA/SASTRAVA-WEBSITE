import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'vercel.json',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/.well-known/security.txt',
  'public/404.html',
  'api/contact.js',
];
const requiredRoutes = ['/', '/about', '/services', '/courses', '/portfolio', '/contact', '/privacy', '/terms', '/security'];
const fail = (message) => {
  console.error(`Release verification failed: ${message}`);
  process.exitCode = 1;
};

for (const file of requiredFiles) {
  if (!existsSync(file)) fail(`missing ${file}`);
}

const vercel = JSON.parse(readFileSync('vercel.json', 'utf8'));
const rewritten = new Set((vercel.rewrites ?? []).map(({ source }) => source));
for (const route of requiredRoutes.filter((route) => route !== '/')) {
  if (!rewritten.has(route)) fail(`Vercel rewrite missing for ${route}`);
}

const sitemap = readFileSync('public/sitemap.xml', 'utf8');
for (const route of requiredRoutes) {
  if (!sitemap.includes(`https://sastrava.com${route}`)) fail(`sitemap missing ${route}`);
}

const robots = readFileSync('public/robots.txt', 'utf8');
if (!robots.includes('Sitemap: https://sastrava.com/sitemap.xml')) fail('robots.txt does not declare sitemap');

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
