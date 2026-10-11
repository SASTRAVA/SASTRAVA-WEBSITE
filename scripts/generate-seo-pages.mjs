import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { buildStructuredData, seoRoutes } from '../src/config/seoRoutes.js';
import { homeCapabilities } from '../src/config/homeCapabilities.js';

const outputDirectory = resolve('dist');
const template = await readFile(resolve(outputDirectory, 'index.html'), 'utf8');
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const crawlableLinks = [
  ['/about', 'About'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact'],
  ['/services-hub', 'Explore all services'], ['/blog', 'Insights'],
];
const linkList = (items) => items.map(([href, label]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`).join('');
const homeSections = `<section><h2>Business, technology, and growth services</h2><p>Work with SASTRAVA on business consulting, startup incubation, digital products, AI automation, cybersecurity, digital marketing, and digital learning.</p><ul>${homeCapabilities.map(({ title, description, href }) => `<li><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><a href="${href}">Explore ${escapeHtml(title.toLowerCase())}</a></li>`).join('')}</ul></section><section><h2>How we work</h2><p>We listen to understand the challenge, shape an agreed scope and practical plan, then deliver and refine with the people who will use the result.</p><p><a href="/services">Explore our services</a> · <a href="/contact">Talk with SASTRAVA</a></p></section>`;

for (const [route, entry] of Object.entries(seoRoutes)) {
  const canonical = `https://sastrava.com${route === '/' ? '/' : route}`;
  const description = escapeHtml(entry.description);
  const title = escapeHtml(entry.title);
  const robots = entry.noindex ? '<meta name="robots" content="noindex, nofollow" />' : '';
  const schema = `<script id="sastrava-json-ld" type="application/ld+json">${JSON.stringify(buildStructuredData(route)).replaceAll('<', '\\u003c')}</script>`;
  const fallback = entry.noindex ? '' : `<noscript><nav aria-label="Main navigation"><a href="/">SASTRAVA home</a><ul>${linkList(crawlableLinks)}</ul></nav><main><h1>${escapeHtml(entry.title)}</h1><p>${description}</p>${route === '/' ? homeSections : ''}${entry.faqs?.length ? `<section><h2>Common questions</h2><dl>${entry.faqs.map(([question, answer]) => `<div><dt>${escapeHtml(question)}</dt><dd>${escapeHtml(answer)}</dd></div>`).join('')}</dl></section>` : ''}</main><footer><p>SASTRAVA — consulting, innovation, and incubation.</p><nav aria-label="Footer navigation"><ul>${linkList([['/about', 'About SASTRAVA'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact'], ['/privacy', 'Privacy'], ['/terms', 'Terms']])}</ul></nav></footer></noscript>`;
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/i, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/i, `<meta property="og:title" content="${escapeHtml(entry.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/i, `<meta property="og:description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/i, `<meta property="og:url" content="${canonical}" />`)
    .replace('<!--SEO_JSON_LD-->', `${robots}\n    ${schema}`)
    .replace('<div id="root"></div>', `<div id="root"></div>${fallback}`)
    .replace('</head>', `    <meta name="twitter:title" content="${escapeHtml(entry.title)}" />\n    <meta name="twitter:description" content="${description}" />\n  </head>`);

  const pageDirectory = route === '/' ? outputDirectory : resolve(outputDirectory, route.slice(1));
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(resolve(pageDirectory, 'index.html'), html);
}

console.log(`Generated static SEO metadata for ${Object.keys(seoRoutes).length} routes.`);
