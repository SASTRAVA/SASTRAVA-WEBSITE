import { readFile, writeFile } from 'node:fs/promises';

const file = 'vercel.json';
const source = await readFile(file, 'utf8');
if (!source.includes('Content-Security-Policy-Report-Only')) {
  throw new Error('CSP is already enforced or the report-only policy is missing.');
}
await writeFile(file, source.replace('Content-Security-Policy-Report-Only', 'Content-Security-Policy'));
console.log('CSP is now enforced. Deploy only after reviewing CSP reports in Vercel logs.');