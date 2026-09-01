// GitHub Pages has no server-side rewrites, so a hard refresh on any client
// route 404s. Serving a copy of index.html as 404.html lets the SPA boot and
// let React Router resolve the path.
import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const index = join(distDir, 'index.html');

if (!existsSync(index)) {
  console.error('[postbuild] dist/index.html missing — did the build run?');
  process.exit(1);
}

copyFileSync(index, join(distDir, '404.html'));
console.log('[postbuild] dist/404.html written');
