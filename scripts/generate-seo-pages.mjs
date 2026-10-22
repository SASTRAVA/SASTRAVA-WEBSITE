import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { buildStructuredData, seoRoutes } from '../src/config/seoRoutes.js';
import { learningDomainGroups, edutechInstagramUrl } from '../src/config/learningCatalog.js';
import { homeCapabilities } from '../src/config/homeCapabilities.js';
import { googleMapsListingAddress, googleMapsListingName, googleMapsListingUrl, googleMapsReviewUrl } from '../src/config/businessProfile.js';
import { downloadTemplates } from '../src/config/downloadTemplates.js';
import { primaryNavigation, footerSections } from '../src/config/siteNavigation.js';

const outputDirectory = resolve('dist');
const template = await readFile(resolve(outputDirectory, 'index.html'), 'utf8');
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const googleMapsHref = googleMapsListingUrl.replaceAll('&', '&amp;');
const crawlableLinks = primaryNavigation.map(({ href, name }) => [href, name]);
const linkList = (items) => items.map(([href, label]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`).join('');
const staticHeader = `<header class="static-header"><a class="static-brand" href="/" aria-label="SASTRAVA home">SASTRAVA</a><nav aria-label="Main navigation"><ul>${linkList(crawlableLinks)}</ul></nav></header>`;
const staticFooter = `<footer class="static-footer"><div class="static-footer-brand"><a href="/" aria-label="SASTRAVA home">SASTRAVA</a><p>Applied Knowledge &amp; Transformation</p><p>Business consulting, innovation, and incubation based in Tadepalli, Guntur District, near Vijayawada and Amaravati. Working with teams across India.</p><address>${escapeHtml(googleMapsListingAddress)}<br><a href="tel:+917981576083">+91 7981 576083</a><br><a href="mailto:neeraj@sastrava.com,siri@sastrava.com">neeraj@sastrava.com · siri@sastrava.com</a><br><a href="${googleMapsHref}">Find ${escapeHtml(googleMapsListingName)} on Google Maps</a></address><p><a href="${googleMapsReviewUrl}">Read or leave an honest review on Google</a></p><p><a href="https://www.instagram.com/sastrava_edutech/">Sastrava Edutech · @sastrava_edutech</a></p></div><div class="static-footer-grid">${footerSections.map(({ title, links }) => `<section><h2>${escapeHtml(title)}</h2><ul>${linkList(links.map(({ href, name }) => [href, name]))}</ul></section>`).join('')}</div><p>© ${new Date().getFullYear()} SASTRAVA</p></footer>`;
const homeBody = `<main><section class="static-hero"><p class="static-eyebrow">Applied Knowledge &amp; Transformation</p><h1>Business consulting, AI &amp; digital growth in Tadepalli and across India</h1><p class="static-lede">SASTRAVA is a business consultant, innovator, and incubation partner based in Tadepalli, Guntur District, near Vijayawada and Amaravati. We help founders and organizations connect practical strategy with software, AI automation, cybersecurity, brand and performance marketing, and digital learning.</p><p class="static-location">Local collaboration and nationwide delivery · <a href="${googleMapsHref}" aria-label="Find ${escapeHtml(googleMapsListingName)} on Google Maps">Find SASTRAVA on Google Maps</a></p><div class="static-actions"><a class="static-primary" href="/contact">Talk through your next move</a><a class="static-secondary" href="/services">Explore services</a></div></section><section class="static-section" id="capabilities"><p class="static-eyebrow">What we do</p><h2>Business consulting, digital learning and technology for growth</h2><p>Choose a service area or combine capabilities around the outcome you need. SASTRAVA works with teams locally and across India, with scope and delivery agreed for each engagement.</p><div class="static-grid">${homeCapabilities.map(({ number, title, description, href, label }) => `<article class="static-card"><p class="static-number">${escapeHtml(number)}</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><a href="${href}">${escapeHtml(label)}</a></article>`).join('')}</div></section><section class="static-section"><p class="static-eyebrow">Growth and discovery</p><h2>Make your business easier to understand and find</h2><p>Business consulting and startup incubation begin with the customer, the problem, and the assumptions that shape a decision. SASTRAVA can help clarify positioning, review a business model, plan a product or service, and choose practical next steps. The work is designed around evidence and available resources rather than generic growth promises.</p><p>Brand and performance marketing connect a clear offer with the right channels. Work can include keyword and intent research, technical and local SEO, answer-focused content, campaign planning, conversion journeys, and measurement. Organic search and paid media have different timelines and costs; campaign activity should have an agreed objective, budget, and approval before launch.</p></section><section class="static-section"><p class="static-eyebrow">Technology and trust</p><h2>Build useful systems with security considered early</h2><p>Software and digital product projects can include websites, applications, prototypes, and integrations. AI and automation work starts by mapping a recurring process, the data it uses, the cost of errors, and the people who review the result. A small, measurable pilot can help establish whether a solution is useful before a broader rollout.</p><p>Cybersecurity services include authorized reviews, vulnerability testing, security audits, patch and remediation guidance, and retesting within an agreed scope. Written permission and defined testing boundaries are required before security testing begins. Digital learning can support learners, teams, and institutions through workshops, mentoring, and project-based practice in software, AI, data, automation, and cybersecurity.</p></section><section class="static-section"><p class="static-eyebrow">Free planning tools</p><h2>Start with a useful self-check</h2><div class="static-grid">${[['/tools/seo-aeo-checker','SEO, AEO & GEO readiness checker','Review crawlability, page clarity, local search signals, and measurement.'],['/tools/ai-roi-calculator','AI automation ROI calculator','Estimate time returned and labor value using assumptions you can adjust.'],['/tools/security-checklist','Website security checklist','Review foundational controls and choose practical follow-up actions.']].map(([href,title,description])=>`<article class="static-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><a href="${href}">Open the free tool</a></article>`).join('')}</div><p>These tools run in the browser and do not submit user answers to SASTRAVA. Their scores and estimates are planning aids, not guarantees, audits, or forecasts.</p></section><section class="static-section"><p class="static-eyebrow">How we work</p><h2>Listen, shape, deliver</h2><div class="static-grid static-steps"><article class="static-card"><h3>Listen</h3><p>Understand the people, process, challenge, and opportunity behind the brief.</p></article><article class="static-card"><h3>Shape</h3><p>Agree priorities, scope, responsibilities, and a practical route forward before work begins.</p></article><article class="static-card"><h3>Deliver</h3><p>Build, learn, review, and refine with the people who will use or maintain the result.</p></article></div><p class="static-cta"><a href="/about">Learn about SASTRAVA</a> · <a href="/portfolio">View team profiles and capabilities</a> · <a href="/contact">Contact our team</a></p></section></main>`;
const sectionHtml = (section) => `<section class="static-section"><h2>${escapeHtml(section.heading)}</h2><p>${escapeHtml(section.paragraph)}</p>${section.items?.length ? `<ul class="static-link-list">${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}</section>`;
const pageHeading = (entry) => entry.pageHeading ?? entry.title.replace(/\s*[|–—]\s*SASTRAVA.*$/i, '').trim();
const breadcrumbHtml = (route) => {
  if (route === '/') return '';
  const parts = route.split('/').filter(Boolean);
  const routes = ['/'];
  parts.forEach((_, index) => {
    const path = `/${parts.slice(0, index + 1).join('/')}`;
    if (seoRoutes[path]) routes.push(path);
  });
  const crumbs = routes.map((path, index) => {
    const label = path === '/' ? 'Home' : pageHeading(seoRoutes[path]);
    return index === routes.length - 1
      ? `<span aria-current="page">${escapeHtml(label)}</span>`
      : `<a href="${path}">${escapeHtml(label)}</a>`;
  }).join(' <span aria-hidden="true">/</span> ');
  return `<nav class="static-breadcrumb" aria-label="Breadcrumb">${crumbs}</nav>`;
};
const relatedRoutes = {
  '/grow': ['/ai', '/build', '/digital-marketing', '/case-studies', '/tools/ai-roi-calculator'],
  '/build': ['/ai', '/cybersecurity', '/case-studies', '/portfolio'],
  '/learn': ['/ai', '/cybersecurity', '/portfolio', '/success-stories'],
  '/secure': ['/cybersecurity', '/cybersecurity/security-audits', '/cybersecurity/penetration-testing', '/tools/security-checklist'],
  '/cybersecurity': ['/cybersecurity/security-audits', '/cybersecurity/penetration-testing', '/tools/security-checklist', '/case-studies'],
  '/ai': ['/ai/genai', '/build', '/tools/ai-roi-calculator', '/blog'],
  '/digital-marketing': ['/digital-marketing/seo', '/tools/seo-aeo-checker', '/blog', '/case-studies'],
  '/digital-marketing/seo': ['/digital-marketing', '/tools/seo-aeo-checker', '/blog', '/case-studies'],
  '/ai/genai': ['/ai', '/build', '/tools/ai-roi-calculator'],
  '/cybersecurity/security-audits': ['/cybersecurity', '/cybersecurity/penetration-testing', '/tools/security-checklist'],
  '/cybersecurity/penetration-testing': ['/cybersecurity', '/cybersecurity/security-audits', '/tools/security-checklist'],
};
const teamHtml = (members = []) => members.length
  ? `<section class="static-section"><h2>Meet the SASTRAVA team</h2><ul class="static-link-list">${members.map((member) => `<li><a href="${member.profile}">${escapeHtml(member.name)} — ${escapeHtml(member.designation)}</a></li>`).join('')}</ul></section>`
  : '';
const articlesHtml = (articles = []) => articles.map((article) => `<article id="${escapeHtml(article.slug)}" class="static-section"><p class="static-eyebrow">${escapeHtml(article.readTime)}</p><h2>${escapeHtml(article.title)}</h2><p>${escapeHtml(article.summary)}</p>${article.sections.map((section) => `<section><h3>${escapeHtml(section.heading)}</h3><p>${escapeHtml(section.text)}</p></section>`).join('')}<p><a href="${article.serviceHref}">${escapeHtml(article.serviceLabel)}</a></p></article>`).join('');
const contactActions = `<section class="static-section"><h2>Contact SASTRAVA</h2><p>Based in Tadepalli, Andhra Pradesh. Visit or message the team to discuss your inquiry.</p><address>${escapeHtml(googleMapsListingAddress)}</address><ul class="static-link-list">${linkList([['mailto:neeraj@sastrava.com', 'Email SASTRAVA'], ['tel:+917981576083', 'Call +91 7981 576083'], ['https://wa.me/917981576083?text=Hi%20SASTRAVA%2C%20I%20would%20like%20to%20discuss%20a%20project.', 'Message on WhatsApp'], [googleMapsHref, `View ${googleMapsListingName} on Google Maps`], [googleMapsReviewUrl, 'Read or leave an honest review on Google']])}</ul></section>`;
const localSummary = (entry) => entry.localSummaryTelugu ? `<details class="static-section" lang="te"><summary>${escapeHtml(entry.localSummaryHeading ?? 'స్థానిక వ్యాపారాల కోసం తెలుగు సారాంశం')}</summary><p>${escapeHtml(entry.localSummaryTelugu)}</p></details>` : '';
const learningCatalogHtml = (route) => ['/learn', '/domains'].includes(route) ? `<section class="static-section"><h2>22 SASTRAVA Edutech learning domains</h2>${learningDomainGroups.map((group) => `<section><h3>${escapeHtml(group.title)}</h3><p>${escapeHtml(group.description)}</p><ul class="static-link-list">${group.domains.map(({ number, name, href }) => `<li><a href="${href}">${number}. ${escapeHtml(name)}</a></li>`).join('')}</ul></section>`).join('')}<p><a href="${edutechInstagramUrl}">Follow @sastrava_edutech on Instagram</a></p></section>` : '';
const internalToolsHtml = (route) => ['/portfolio', '/case-studies', '/open-source'].includes(route) ? `<section class="static-section"><h2>Free browser tools</h2><ul class="static-link-list">${[['/tools/seo-aeo-checker','SEO, AEO & GEO readiness checker'],['/tools/ai-roi-calculator','AI automation ROI calculator'],['/tools/security-checklist','Website security checklist']].map(([href,label])=>`<li><a href="${href}">${label}</a></li>`).join('')}</ul><p>Representative delivery blueprints describe possible approaches, not completed client results.</p></section>` : '';
const downloadsHtml = (route, entry) => {
  const resources = route === '/blog' ? downloadTemplates : (entry.downloads ?? []);
  if (!resources.length) return '';
  const heading = route === '/blog' ? 'Downloadable checklists &amp; frameworks' : 'Free practical worksheet';
  const intro = route === '/blog'
    ? 'These text worksheets help teams plan local search, prepare an authorized security review, and scope an automation pilot. Downloads do not submit your information.'
    : 'Use this free worksheet to organize your next steps. Downloading does not submit your information.';
  return `<section class="static-section"><p class="static-eyebrow">Free resources</p><h2>${heading}</h2><p>${intro}</p><ul class="static-link-list">${resources.map((template) => `<li><a href="${template.href}" download="${escapeHtml(template.filename)}">${escapeHtml(template.title)} — ${escapeHtml(template.summary)}</a></li>`).join('')}</ul></section>`;
};
const standardBody = (route, entry) => `<main class="static-standard">${breadcrumbHtml(route)}<p class="static-eyebrow">SASTRAVA · ${route === '/contact' ? 'Tadepalli, Andhra Pradesh' : 'Consulting · Technology · Growth'}</p><h1>${escapeHtml(pageHeading(entry))}</h1><p class="static-lede">${escapeHtml(entry.intro ?? entry.description)}</p>${entry.sections?.map(sectionHtml).join('') ?? ''}${learningCatalogHtml(route)}${internalToolsHtml(route)}${localSummary(entry)}${downloadsHtml(route, entry)}${entry.articles?.length ? articlesHtml(entry.articles) : ''}${teamHtml(entry.teamProfiles)}${entry.process?.length ? `<section class="static-section"><h2>How we work</h2><ol class="static-link-list">${entry.process.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ol></section>` : ''}${entry.faqs?.length ? `<section class="static-faq"><h2>Common questions</h2><dl>${entry.faqs.map(([question, answer]) => `<div><dt>${escapeHtml(question)}</dt><dd>${escapeHtml(answer)}</dd></div>`).join('')}</dl></section>` : ''}${route === '/contact' ? contactActions : `<section class="static-section">${route === '/success-stories' ? `<p><a href="${googleMapsReviewUrl}">Read or leave an honest review on Google</a></p><p><a href="${edutechInstagramUrl}">Follow Sastrava Edutech on Instagram</a></p>` : ''}<h2>Discuss the right next step</h2><p>${escapeHtml(entry.ctaText ?? 'Share your goal and context. SASTRAVA will discuss scope, fit, and practical options before an engagement is agreed.')}</p><p class="static-cta"><a class="static-primary" href="/contact">${escapeHtml(entry.ctaLabel ?? 'Contact SASTRAVA')}</a>${route !== '/portfolio' ? ` · <a href="/portfolio">Meet the team and view portfolios</a>` : ''}</p></section>`}<nav aria-label="Related pages"><ul>${linkList((relatedRoutes[route] ?? ['/services', '/about', '/contact']).map((path) => [path, pageHeading(seoRoutes[path])]))}</ul></nav></main>`;
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
