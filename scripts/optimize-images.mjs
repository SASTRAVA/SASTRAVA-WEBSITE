import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assets = [
  ['src/assets/sastrava/neon-innovation-cycle.png', 1024],
  ['src/assets/sastrava/business-growth-cycle-light.png', 1024],
  ['src/assets/sastrava/build-innovate-grow-together.png', 1280],
];

for (const [input, width] of assets) {
  const output = input.replace(/\.png$/, '.webp');
  await mkdir(path.dirname(output), { recursive: true });
  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(output);
  const [before, after] = await Promise.all([stat(input), stat(output)]);
  const saved = Math.round((1 - after.size / before.size) * 100);
  console.log(`${input} -> ${output}: ${before.size}B to ${after.size}B (${saved}% smaller)`);
}