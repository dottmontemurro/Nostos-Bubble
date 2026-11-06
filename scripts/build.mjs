import { mkdirSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const out = new URL('dist/', root);
mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'Index.html']) {
  copyFileSync(new URL(file, root), new URL(file, out));
}
console.log('Asset pronti in ' + fileURLToPath(out));
