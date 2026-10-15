import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const width = 1200;
const height = 630;
const outputRoot = resolve('public');
const mark = await sharp(resolve('public/images/sastrava-mark.webp'))
  .resize({ width: 330, height: 400, fit: 'contain' })
  .png()
  .toBuffer();

const socialCards = [
  { file: 'images/sastrava-social-card.png', lines: ['Business consulting', 'Digital growth'], subline: 'Tadepalli · Andhra Pradesh · India' },
  { file: 'images/og/sastrava-services.png', lines: ['Strategy and', 'technology services'], subline: 'Consulting · AI · Software · Marketing' },
  { file: 'images/og/sastrava-about.png', lines: ['Business and', 'technology, connected'], subline: 'Meet SASTRAVA' },
  { file: 'images/og/sastrava-portfolio.png', lines: ['People behind', 'the capabilities'], subline: 'Team profiles · SASTRAVA' },
  { file: 'images/og/sastrava-contact.png', lines: ['Talk through', 'your next step'], subline: 'Contact SASTRAVA · Tadepalli' },
  { file: 'images/og/sastrava-insights.png', lines: ['Practical guides', 'for business growth'], subline: 'AI · Security · Marketing · Startups' },
  { file: 'images/og/sastrava-marketing.png', lines: ['Brand and', 'performance growth'], subline: 'Search · Content · Campaigns' },
  { file: 'images/og/sastrava-consulting.png', lines: ['Business clarity', 'for the next step'], subline: 'Consulting · Innovation · Incubation' },
  { file: 'images/og/sastrava-software.png', lines: ['Build useful', 'digital products'], subline: 'Websites · Software · Integrations' },
  { file: 'images/og/sastrava-learning.png', lines: ['Practical digital', 'learning and skills'], subline: 'Workshops · Mentoring · Technology' },
  { file: 'images/og/sastrava-ai.png', lines: ['AI and workflow', 'automation'], subline: 'Use cases · Pilots · Evaluation' },
  { file: 'images/og/sastrava-security.png', lines: ['Security reviews', 'with clear next steps'], subline: 'Assess · Remediate · Retest' },
];

for (const card of socialCards) {
  const text = card.lines.map((line, index) => `<text x="78" y="${250 + index * 72}" fill="#F7F6F1" font-family="Arial,sans-serif" font-size="54" font-weight="700">${line}</text>`).join('');
  const background = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#070B13"/><stop offset="1" stop-color="#102530"/></linearGradient>
      <radialGradient id="glow"><stop stop-color="#08796E" stop-opacity=".42"/><stop offset="1" stop-color="#08796E" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <ellipse cx="930" cy="315" rx="390" ry="340" fill="url(#glow)"/>
    <path d="M76 488H632" stroke="#DFA62E" stroke-width="3"/>
    <circle cx="1085" cy="95" r="5" fill="#DFA62E"/><circle cx="1120" cy="131" r="3" fill="#1ECDB0"/>
    <text x="78" y="105" fill="#E7B941" font-family="Arial,sans-serif" font-size="23" font-weight="700" letter-spacing="7">SASTRAVA</text>
    ${text}
    <text x="79" y="446" fill="#CBD5D9" font-family="Arial,sans-serif" font-size="19" letter-spacing="1">${card.subline}</text>
    <text x="79" y="540" fill="#E5B744" font-family="Arial,sans-serif" font-size="17" letter-spacing="2">SASTRAVA.COM</text>
  </svg>`);
  const output = resolve(outputRoot, card.file);
  await mkdir(dirname(output), { recursive: true });
  await sharp(background).composite([{ input: mark, left: 780, top: 108 }]).png().toFile(output);
  console.log(`Generated ${output} (${width} × ${height}).`);
}
