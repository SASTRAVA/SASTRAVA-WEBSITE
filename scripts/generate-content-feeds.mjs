import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { insights } from '../src/config/insights.js';
import { researchBlueprints } from '../src/config/researchBlueprints.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDirectory = path.join(root, 'public');
const escapeXml = (value = '') => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
const cdata = (value = '') => `<![CDATA[${String(value).replaceAll(']]>', ']]]]><![CDATA[>')}]]>`;
const toPubDate = (date) => new Date(`${date}T00:00:00Z`).toUTCString();

const items = [
  ...insights.map((article) => ({
    title: article.title,
    url: `https://sastrava.com/blog#${article.slug}`,
    description: article.summary,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    category: 'Field guide',
    body: article.sections.map((section) => `<h2>${escapeXml(section.heading)}</h2><p>${escapeXml(section.text)}</p>`).join(''),
  })),
  ...researchBlueprints.map((guide) => ({
    title: guide.title,
    url: `https://sastrava.com/research#${guide.slug}`,
    description: guide.problem,
    publishedAt: guide.publishedAt,
    updatedAt: guide.updatedAt,
    category: 'Research guide',
    body: `<p><strong>Approach:</strong> ${escapeXml(guide.anatomy)}</p><p><strong>Useful outputs:</strong> ${escapeXml(guide.deliverables)}</p><p><strong>Review:</strong> ${escapeXml(guide.verification)}</p>`,
  })),
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title));

for (const item of items) {
  if (!item.publishedAt || Number.isNaN(Date.parse(`${item.publishedAt}T00:00:00Z`))) {
    throw new Error(`A valid publishedAt date is required for feed item: ${item.title}`);
  }
}

const rssItems = items.map((item) => `
  <item>
    <title>${escapeXml(item.title)}</title>
    <link>${escapeXml(item.url)}</link>
    <description>${cdata(item.description)}</description>
    <pubDate>${toPubDate(item.publishedAt)}</pubDate>
    <atom:updated>${new Date(`${item.updatedAt || item.publishedAt}T00:00:00Z`).toISOString()}</atom:updated>
    <guid isPermaLink="true">${escapeXml(item.url)}</guid>
    <category>${escapeXml(item.category)}</category>
    <content:encoded>${cdata(item.body)}</content:encoded>
  </item>`).join('');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>SASTRAVA Insights &amp; Research</title>
  <link>https://sastrava.com/</link>
  <description>Practical SASTRAVA guides on business discovery, AI, cybersecurity, workflow automation, and digital growth.</description>
  <language>en-IN</language>
  <atom:link href="https://sastrava.com/rss.xml" rel="self" type="application/rss+xml" />
  <lastBuildDate>${toPubDate(new Date().toISOString().slice(0, 10))}</lastBuildDate>${rssItems}
</channel>
</rss>
`;

await mkdir(publicDirectory, { recursive: true });
await Promise.all([
  writeFile(path.join(publicDirectory, 'rss.xml'), rss, 'utf8'),
  writeFile(path.join(publicDirectory, 'feed.xml'), rss, 'utf8'),
]);
console.log(`Generated RSS feeds with ${items.length} dated SASTRAVA guides.`);
