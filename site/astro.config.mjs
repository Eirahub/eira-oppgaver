import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getCourses, SRC } from './src/lib/content.js';
import profile, { PROFILE_DIR } from './src/lib/profile.js';

// Lesson images and other files live next to the markdown in ../src, and the profile's
// logo, favicon and CNAME in profiles/<name>/public. They are served from there in dev
// and copied into dist on build, except markdown/yaml, excluded lessons and folders
// that are not courses. Returns a map from URL path (no leading slash) to file.
function assetPaths() {
  const out = new Map();
  const walk = (dir, rel, skip, base) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (skip.has(r)) continue;
      if (e.isDirectory()) walk(path.join(dir, e.name), r, skip, base);
      else if (!/\.(md|ya?ml)$/i.test(e.name)) out.set(r, path.join(base, r));
    }
  };
  for (const c of getCourses()) {
    walk(path.join(SRC, c.course), c.course, new Set(c.excluded.map((l) => `${c.course}/${l.lesson}`)), SRC);
  }
  const pub = path.join(PROFILE_DIR, 'public');
  if (fs.existsSync(pub)) walk(pub, '', new Set(), pub);
  return out;
}

// shortcut: dev server only knows these types, others go out without Content-Type; add more if a file type shows up wrong in dev.
const TYPES = { '.html': 'text/html; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.pdf': 'application/pdf', '.mp4': 'video/mp4', '.webm': 'video/webm', '.vtt': 'text/vtt' };

const lessonAssets = {
  name: 'lesson-assets',
  hooks: {
    'astro:server:setup': ({ server }) => {
      const allowed = assetPaths();
      server.middlewares.use((req, res, next) => {
        const rel = decodeURIComponent((req.url || '').split('?')[0]).replace(/^\//, '');
        if (!allowed.has(rel)) return next();
        const type = TYPES[path.extname(rel).toLowerCase()];
        if (type) res.setHeader('Content-Type', type);
        res.setHeader('Cache-Control', 'no-cache');
        fs.createReadStream(allowed.get(rel)).pipe(res);
      });
    },
    'astro:build:done': ({ dir, logger }) => {
      const dist = fileURLToPath(dir);
      const files = assetPaths();
      for (const [rel, from] of files) {
        const to = path.join(dist, rel);
        fs.mkdirSync(path.dirname(to), { recursive: true });
        fs.copyFileSync(from, to);
      }
      logger.info(`Kopierte ${files.size} filer fra ../src og profilen "${profile.name}"`);
    },
  },
};

export default defineConfig({
  site: profile.url,
  // index.astro -> /kurs/index.html, [file].astro -> /kurs/mappe/fil.html (same URLs as the old site)
  build: { format: 'preserve' },
  integrations: [lessonAssets],
  devToolbar: { enabled: false },
});
