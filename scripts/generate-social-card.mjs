import sharp from 'sharp';
import { resolve } from 'node:path';

const width = 1200;
const height = 630;
const card = resolve('public/images/sastrava-social-card.png');
const mark = await sharp(resolve('public/images/sastrava-mark.webp'))
  .resize({ width: 330, height: 400, fit: 'contain' })
  .png()
  .toBuffer();
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
  <text x="76" y="235" fill="#F7F6F1" font-family="Arial,sans-serif" font-size="55" font-weight="700">Build what</text>
  <text x="76" y="302" fill="#F7F6F1" font-family="Arial,sans-serif" font-size="55" font-weight="700">moves you</text>
  <text x="76" y="369" fill="#F7F6F1" font-family="Arial,sans-serif" font-size="55" font-weight="700">forward.</text>
  <text x="79" y="446" fill="#CBD5D9" font-family="Arial,sans-serif" font-size="19" letter-spacing="1">AI  ·  CYBERSECURITY  ·  DIGITAL GROWTH</text>
  <text x="79" y="540" fill="#E5B744" font-family="Arial,sans-serif" font-size="17" letter-spacing="2">SASTRAVA.COM</text>
</svg>`);

await sharp(background)
  .composite([{ input: mark, left: 780, top: 108 }])
  .png()
  .toFile(card);
console.log(`Generated ${card} (${width} × ${height}).`);
