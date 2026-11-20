// Scans dist/ for internal links, images and video files (src, href, poster) that point to nothing,
// and checks that some known pages exist. Run after `npm run build`.
//
// Broken links inside lesson/course text (between data-content and data-content-end),
// or in HTML files copied as-is from ../src, come from ../src and are reported as content errors. They do not fail the check
// unless --strict is given, since src/ is kept identical to upstream.
// Broken links anywhere else are site bugs and fail the check.
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(import.meta.dirname, '..', 'dist');
const SRC = path.resolve(import.meta.dirname, '..', '..', 'src');
const strict = process.argv.includes('--strict');

const MUST_EXIST = [
  '/', '/404', '/om-oppgavene',
  '/scratch/', '/scratch/astrokatt/astrokatt', '/scratch/astrokatt/README', '/scratch/astrokatt/astrokatt_nn',
  '/python/', '/microbit/', '/minecraft_foreldre/',
  '/codeling/', '/java/', '/minecraft_mod/', '/ki_veiledere/', '/datamaskin/',
];

if (!fs.existsSync(DIST)) {
  console.error('Fant ikke dist/. Kjør npm run build først.');
  process.exit(1);
}

// A URL path exists if it is a file, a .html file, or a folder with index.html.
function exists(urlPath) {
  const p = path.join(DIST, urlPath);
  if (urlPath.endsWith('/')) return fs.existsSync(path.join(p, 'index.html'));
  return (fs.existsSync(p) && fs.statSync(p).isFile()) || fs.existsSync(`${p}.html`) || fs.existsSync(path.join(p, 'index.html'));
}

const htmlFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
})(DIST);

const siteErrors = [];
const contentErrors = [];
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = '/' + path.relative(DIST, file).split(path.sep).join('/');
  const pageUrl = new URL(rel.replace(/index\.html$/, '').replace(/\.html$/, ''), 'https://x.invalid');
  const start = html.indexOf('data-content');
  const end = html.indexOf('data-content-end');
  for (const m of html.matchAll(/\s(?:href|src|poster)="([^"]*)"/g)) {
    const raw = m[1].replace(/&amp;/g, '&');
    if (!raw || /^(#|[a-z][a-z0-9+.-]*:)/i.test(raw)) continue; // anchors, http:, mailto:, data: ...
    let target;
    try { target = new URL(raw, pageUrl); } catch { continue; }
    if (target.origin !== 'https://x.invalid') continue;
    let p;
    try { p = decodeURIComponent(target.pathname); } catch { p = target.pathname; }
    if (exists(p)) continue;
    // HTML files copied as-is from ../src are content too.
    const inContent = (start >= 0 && m.index > start && m.index < end) || fs.existsSync(path.join(SRC, rel));
    (inContent ? contentErrors : siteErrors).push(`${rel}: ${raw}`);
  }
}

const missing = MUST_EXIST.filter((p) => !exists(p));

console.log(`Sjekket ${htmlFiles.length} HTML-filer.`);
if (contentErrors.length) {
  console.log(`\nInnholdsfeil (lenker i src/ som ikke peker noe sted): ${contentErrors.length}`);
  for (const e of contentErrors) console.log(`  ${e}`);
}
if (siteErrors.length) {
  console.log(`\nFeil i siden (utenfor innholdet): ${siteErrors.length}`);
  for (const e of siteErrors) console.log(`  ${e}`);
}
if (missing.length) console.log(`\nSider som mangler: ${missing.join(', ')}`);

const failed = siteErrors.length > 0 || missing.length > 0 || (strict && contentErrors.length > 0);
console.log(failed ? '\nFEIL' : '\nOK');
process.exit(failed ? 1 : 0);
