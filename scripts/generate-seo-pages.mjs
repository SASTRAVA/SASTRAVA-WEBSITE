import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { buildStructuredData, seoRoutes } from '../src/config/seoRoutes.js';
import { homeCapabilities } from '../src/config/homeCapabilities.js';
import { googleMapsListingAddress, googleMapsListingName, googleMapsListingUrl } from '../src/config/businessProfile.js';

const outputDirectory = resolve('dist');
const template = await readFile(resolve(outputDirectory, 'index.html'), 'utf8');
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const googleMapsHref = googleMapsListingUrl.replaceAll('&', '&amp;');
const crawlableLinks = [
  ['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact'],
  ['/blog', 'Insights'],
];
const linkList = (items) => items.map(([href, label]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`).join('');
const staticHeader = `<header class="static-header"><a class="static-brand" href="/" aria-label="SASTRAVA home">SASTRAVA</a><nav aria-label="Main navigation"><ul>${linkList(crawlableLinks)}</ul></nav></header>`;
const staticFooter = `<footer class="static-footer"><p>SASTRAVA · Business consulting, innovation, and incubation · Tadepalli, Andhra Pradesh, India</p><nav aria-label="Footer navigation"><ul>${linkList([['/about', 'About SASTRAVA'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact'], ['/privacy', 'Privacy'], ['/terms', 'Terms']])}</ul></nav><p><a href="${googleMapsHref}" aria-label="Find ${escapeHtml(googleMapsListingName)} on Google Maps">Find SASTRAVA on Google Maps</a></p></footer>`;
const homeBody = `<main><section class="static-hero"><p class="static-eyebrow">Strategy · Innovation · Delivery</p><h1>Business consulting and digital growth for what comes next</h1><p class="static-lede">SASTRAVA is a business consultant and innovator in Tadepalli, providing startup incubation support, software, AI automation, security reviews, brand and performance marketing, and digital learning. We help founders and organizations choose practical next steps and deliver useful work.</p><p class="static-location">Serving teams across India · <a href="${googleMapsHref}" aria-label="Find ${escapeHtml(googleMapsListingName)} on Google Maps">Find us on Google Maps</a></p><div class="static-actions"><a class="static-primary" href="/contact">Talk through your next move</a><a class="static-secondary" href="/services">Explore services</a></div></section><section class="static-section" id="capabilities"><p class="static-eyebrow">What we do</p><h2>Business consulting, digital learning and technology for growth</h2><p>Choose a service area or combine capabilities around the outcome you need.</p><div class="static-grid">${homeCapabilities.map(({ number, title, description, href, label }) => `<article class="static-card"><p class="static-number">${escapeHtml(number)}</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><a href="${href}">${escapeHtml(label)}</a></article>`).join('')}</div></section><section class="static-section"><p class="static-eyebrow">How we work</p><h2>Listen, shape, deliver</h2><div class="static-grid static-steps"><article class="static-card"><h3>Listen</h3><p>Understand the people, process, challenge, and opportunity behind the brief.</p></article><article class="static-card"><h3>Shape</h3><p>Agree priorities, scope, and a practical route forward before work begins.</p></article><article class="static-card"><h3>Deliver</h3><p>Build, learn, and refine with the people who will use or maintain the result.</p></article></div><p class="static-cta"><a href="/about">Learn about SASTRAVA</a> · <a href="/portfolio">View capabilities and portfolios</a> · <a href="/contact">Contact our team</a></p></section></main>`;
const sectionHtml = (section) => `<section class="static-section"><h2>${escapeHtml(section.heading)}</h2><p>${escapeHtml(section.paragraph)}</p>${section.items?.length ? `<ul class="static-link-list">${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}</section>`;
const pageHeading = (entry) => entry.pageHeading ?? entry.title.replace(/\s*[|–—]\s*SASTRAVA.*$/i, '').trim();
const teamHtml = (members = []) => members.length
  ? `<section class="static-section"><h2>Meet the SASTRAVA team</h2><ul class="static-link-list">${members.map((member) => `<li><a href="${member.profile}">${escapeHtml(member.name)} — ${escapeHtml(member.designation)}</a></li>`).join('')}</ul></section>`
  : '';
const articlesHtml = (articles = []) => articles.map((article) => `<article id="${escapeHtml(article.slug)}" class="static-section"><p class="static-eyebrow">${escapeHtml(article.readTime)}</p><h2>${escapeHtml(article.title)}</h2><p>${escapeHtml(article.summary)}</p>${article.sections.map((section) => `<section><h3>${escapeHtml(section.heading)}</h3><p>${escapeHtml(section.text)}</p></section>`).join('')}<p><a href="${article.serviceHref}">${escapeHtml(article.serviceLabel)}</a></p></article>`).join('');
const contactActions = `<section class="static-section"><h2>Contact SASTRAVA</h2><p>Based in Tadepalli, Andhra Pradesh. Visit or message the team to discuss your inquiry.</p><address>${escapeHtml(googleMapsListingAddress)}</address><ul class="static-link-list">${linkList([['mailto:neeraj@sastrava.com', 'Email SASTRAVA'], ['tel:+917981576083', 'Call +91 7981 576083'], ['https://wa.me/917981576083?text=Hi%20SASTRAVA%2C%20I%20would%20like%20to%20discuss%20a%20project.', 'Message on WhatsApp'], [googleMapsHref, `View ${googleMapsListingName} on Google Maps`]])}</ul></section>`;
const standardBody = (route, entry) => `<main class="static-standard"><p class="static-eyebrow">SASTRAVA · ${route === '/contact' ? 'Tadepalli, Andhra Pradesh' : 'Consulting · Technology · Growth'}</p><h1>${escapeHtml(pageHeading(entry))}</h1><p class="static-lede">${escapeHtml(entry.intro ?? entry.description)}</p>${entry.sections?.map(sectionHtml).join('') ?? ''}${entry.articles?.length ? articlesHtml(entry.articles) : ''}${teamHtml(entry.teamProfiles)}${entry.process?.length ? `<section class="static-section"><h2>How we work</h2><ol class="static-link-list">${entry.process.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ol></section>` : ''}${entry.faqs?.length ? `<section class="static-faq"><h2>Common questions</h2><dl>${entry.faqs.map(([question, answer]) => `<div><dt>${escapeHtml(question)}</dt><dd>${escapeHtml(answer)}</dd></div>`).join('')}</dl></section>` : ''}${route === '/contact' ? contactActions : `<section class="static-section"><h2>Discuss the right next step</h2><p>${escapeHtml(entry.ctaText ?? 'Share your goal and context. SASTRAVA will discuss scope, fit, and practical options before an engagement is agreed.')}</p><p class="static-cta"><a class="static-primary" href="/contact">${escapeHtml(entry.ctaLabel ?? 'Contact SASTRAVA')}</a>${route !== '/portfolio' ? ` · <a href="/portfolio">Meet the team and view portfolios</a>` : ''}</p></section>`}<nav aria-label="Related pages"><ul>${linkList([['/services', 'Explore SASTRAVA services'], ['/about', 'About SASTRAVA'], ['/contact', 'Contact SASTRAVA']])}</ul></nav></main>`;
const xmlEscape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

for (const [route, entry] of Object.entries(seoRoutes)) {
  const canonical = `https://sastrava.com${route === '/' ? '/' : route}`;
  const description = escapeHtml(entry.description);
  const title = escapeHtml(entry.title);
  const image = `https://sastrava.com${entry.ogImage ?? '/images/sastrava-social-card.png'}`;
  const imageAlt = escapeHtml(entry.ogImageAlt ?? 'SASTRAVA business consulting, technology, and digital growth');
  const robots = entry.noindex
    ? '<meta name="robots" content="noindex, nofollow" />'
    : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />';
  const schema = `<script id="sastrava-json-ld" type="application/ld+json">${JSON.stringify(buildStructuredData(route)).replaceAll('<', '\\u003c')}</script>`;
  const staticPage = entry.noindex ? '' : `<div class="static-site-fallback">${staticHeader}${route === '/' ? homeBody : standardBody(route, entry)}${staticFooter}</div>`;
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/i, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/i, `<meta property="og:title" content="${escapeHtml(entry.ogTitle ?? entry.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/i, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:image" content="[^"]*"\s*\/>/i, `<meta property="og:image" content="${image}" />`)
    .replace(/<meta property="og:image:alt" content="[^"]*"\s*\/>/i, `<meta property="og:image:alt" content="${imageAlt}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/i, `<meta property="og:url" content="${canonical}" />`)
    .replace('<!--SEO_JSON_LD-->', `${robots}\n    ${schema}`)
    .replace('<div id="root"></div>', `<div id="root">${staticPage}</div>`)
    .replace(/<meta name="twitter:image" content="[^"]*"\s*\/>/i, `<meta name="twitter:image" content="${image}" />`)
    .replace('</head>', `    <meta name="twitter:title" content="${escapeHtml(entry.title)}" />\n    <meta name="twitter:description" content="${description}" />\n    <meta name="twitter:image:alt" content="${imageAlt}" />\n  </head>`);

  if (!entry.noindex && !html.includes('<div id="root"><div class="static-site-fallback">')) {
    throw new Error(`Generated page is missing crawlable body content: ${route}`);
  }
  if (!entry.noindex && !html.includes('<nav aria-label="Main navigation">')) {
    throw new Error(`Generated page is missing crawlable navigation links: ${route}`);
  }
  if (route === '/' && homeCapabilities.some(({ title, href }) => !html.includes(`<h3>${escapeHtml(title)}</h3>`) || !html.includes(`href="${href}"`))) {
    throw new Error('Generated homepage is missing a linked service capability.');
  }

  const pageDirectory = route === '/' ? outputDirectory : resolve(outputDirectory, route.slice(1));
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(resolve(pageDirectory, 'index.html'), html);
}

const sitemapLastmod = new Date().toISOString().slice(0, 10);
const sitemapUrls = Object.entries(seoRoutes)
  .filter(([, entry]) => !entry.noindex)
  .map(([route]) => `  <url><loc>${xmlEscape(`https://sastrava.com${route === '/' ? '/' : route}`)}</loc><lastmod>${sitemapLastmod}</lastmod></url>`)
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
await writeFile(resolve(outputDirectory, 'sitemap.xml'), sitemap);
await writeFile(resolve('public', 'sitemap.xml'), sitemap);

console.log(`Generated static SEO metadata for ${Object.keys(seoRoutes).length} routes.`);
