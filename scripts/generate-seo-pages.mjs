import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { buildStructuredData, seoRoutes } from '../src/config/seoRoutes.js';

const outputDirectory = resolve('dist');
const template = await readFile(resolve(outputDirectory, 'index.html'), 'utf8');
const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

for (const [route, entry] of Object.entries(seoRoutes)) {
  const canonical = `https://sastrava.com${route === '/' ? '/' : route}`;
  const description = escapeAttribute(entry.description);
  const title = entry.title.replaceAll('&', '&amp;');
  const robots = entry.noindex ? '<meta name="robots" content="noindex, nofollow" />' : '';
  const schema = `<script id="sastrava-json-ld" type="application/ld+json">${JSON.stringify(buildStructuredData(route)).replaceAll('<', '\\u003c')}</script>`;
  const fallback = entry.noindex ? '' : `<noscript><main><h1>${escapeAttribute(entry.title)}</h1><p>${description}</p>${entry.faqs?.length ? `<section><h2>Common questions</h2><dl>${entry.faqs.map(([question, answer]) => `<div><dt>${escapeAttribute(question)}</dt><dd>${escapeAttribute(answer)}</dd></div>`).join('')}</dl></section>` : ''}</main></noscript>`;
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/i, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/i, `<meta property="og:title" content="${escapeAttribute(entry.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/i, `<meta property="og:description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/i, `<meta property="og:url" content="${canonical}" />`)
    .replace('<!--SEO_JSON_LD-->', `${robots}\n    ${schema}`)
    .replace('<div id="root"></div>', `<div id="root"></div>${fallback}`)
    .replace('</head>', `    <meta name="twitter:title" content="${escapeAttribute(entry.title)}" />\n    <meta name="twitter:description" content="${description}" />\n  </head>`);

  const pageDirectory = route === '/' ? outputDirectory : resolve(outputDirectory, route.slice(1));
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(resolve(pageDirectory, 'index.html'), html);
}

console.log(`Generated static SEO metadata for ${Object.keys(seoRoutes).length} routes.`);
