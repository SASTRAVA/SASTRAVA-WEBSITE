import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const input = 'src/assets/sastrava/sastrava-mark-source.png';
const webpOutput = 'public/images/sastrava-mark.webp';
const schemaOutput = 'public/logo.png';
const faviconOutput = 'public/favicon.png';
const faviconSizes = [
  [faviconOutput, 128],
  ['public/favicon-32x32.png', 32],
  ['public/favicon-48x48.png', 48],
  ['public/apple-touch-icon.png', 180],
  ['public/android-chrome-192x192.png', 192],
  ['public/android-chrome-512x512.png', 512],
];

await mkdir(path.dirname(webpOutput), { recursive: true });

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const pixels = info.width * info.height;
const queue = new Int32Array(pixels);
let head = 0;
let tail = 0;

function isNearWhite(index) {
  const offset = index * info.channels;
  const red = data[offset];
  const green = data[offset + 1];
  const blue = data[offset + 2];
  return Math.min(red, green, blue) >= 238
    && Math.max(red, green, blue) - Math.min(red, green, blue) <= 14
    && data[offset + 3] > 0;
}

function enqueueIfBackground(index) {
  if (!isNearWhite(index)) return;
  data[index * info.channels + 3] = 0;
  queue[tail++] = index;
}

for (let x = 0; x < info.width; x += 1) {
  enqueueIfBackground(x);
  enqueueIfBackground((info.height - 1) * info.width + x);
}
for (let y = 1; y < info.height - 1; y += 1) {
  enqueueIfBackground(y * info.width);
  enqueueIfBackground(y * info.width + info.width - 1);
}

while (head < tail) {
  const index = queue[head++];
  const x = index % info.width;
  const y = Math.floor(index / info.width);
  if (x > 0) enqueueIfBackground(index - 1);
  if (x + 1 < info.width) enqueueIfBackground(index + 1);
  if (y > 0) enqueueIfBackground(index - info.width);
  if (y + 1 < info.height) enqueueIfBackground(index + info.width);
}

const cutout = sharp(data, { raw: info }).trim({
  background: { r: 0, g: 0, b: 0, alpha: 0 },
  threshold: 0,
});
const cutoutBuffer = await cutout.png().toBuffer();
const mark = sharp(cutoutBuffer);

await Promise.all([
  mark.clone().resize({ width: 464, withoutEnlargement: true }).webp({ quality: 84, effort: 6, smartSubsample: true }).toFile(webpOutput),
  mark.clone().resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(schemaOutput),
  ...faviconSizes.map(([output, size]) => {
    const innerSize = Math.round(size * 0.86);
    const inset = Math.floor((size - innerSize) / 2);
    const trailingInset = size - innerSize - inset;
    return mark.clone()
      .resize(innerSize, innerSize, {
        fit: 'contain',
        background: { r: 11, g: 15, b: 26, alpha: 1 },
      })
      .extend({
        top: inset,
        bottom: trailingInset,
        left: inset,
        right: trailingInset,
        background: { r: 11, g: 15, b: 26, alpha: 1 },
      })
      .png()
      .toFile(output);
  }),
]);

const [before, after] = await Promise.all([stat(input), stat(webpOutput)]);
const saved = Math.round((1 - after.size / before.size) * 100);
console.log(`${input} -> ${webpOutput}: ${before.size}B to ${after.size}B (${saved}% smaller)`);
