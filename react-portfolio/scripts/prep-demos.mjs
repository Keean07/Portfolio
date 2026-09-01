// Copies the standalone project demos (which live at the repo root) into
// react-portfolio/public/ so Vite bundles them into dist/ on build and serves
// them in `npm run dev`. The copies are git-ignored (see .gitignore) — the repo
// root remains the single source of truth.
import { cpSync, existsSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const appRoot = join(here, '..');
const repoRoot = join(appRoot, '..');
const publicDir = join(appRoot, 'public');

// <folder at repo root> -> copied verbatim into public/<folder>
const DEMOS = ['DrawingApp', 'P5JS', 'DigitClassification', 'LocalCommunityWebsite'];

let copied = 0;
for (const demo of DEMOS) {
  const src = join(repoRoot, demo);
  const dest = join(publicDir, demo);
  if (!existsSync(src)) {
    console.warn(`[prep-demos] WARNING: ${demo} not found at repo root — skipping`);
    continue;
  }
  rmSync(dest, { recursive: true, force: true });
  cpSync(src, dest, { recursive: true });
  copied++;
  console.log(`[prep-demos] ${demo} -> public/${demo}`);
}
console.log(`[prep-demos] done (${copied}/${DEMOS.length})`);
