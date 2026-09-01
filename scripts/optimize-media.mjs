// Optimises raw project screenshots (raw-media/*.png, not served) into
// web-ready WebP under public/images/projects/. Run manually after adding
// or replacing a screenshot:  node scripts/optimize-media.mjs
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'raw-media');
const outDir = join(root, 'public', 'images', 'projects');

const MAX_WIDTH = 1400;
const QUALITY = 80;

if (!existsSync(srcDir)) {
  console.error(`[optimize-media] no raw-media/ directory`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

const slug = (name) =>
  name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Za-z])(\d)/g, '$1-$2')
    .toLowerCase();

const files = readdirSync(srcDir).filter((f) => /\.(png|jpe?g)$/i.test(f));
for (const file of files) {
  const out = join(outDir, `${slug(parse(file).name)}.webp`);
  const info = await sharp(join(srcDir, file))
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);
  console.log(
    `[optimize-media] ${file} -> images/projects/${slug(parse(file).name)}.webp  ` +
      `(${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} kB)`,
  );
}
console.log(`[optimize-media] done (${files.length} files)`);
