// Videoene til nettsiden. De ligger som filer på GitHub-releasen «videoer», ikke i git.
// Filnavnet er <kurs>-<hash>.mp4 (<kurs>-lkk-<hash>.mp4 med SITE_PROFILE=lkk) (og .jpg for plakaten). Hashen regnes av manuset, alle
// bildene det bruker, generatoren og HyperFrames-versjonen, så en endring gir et nytt navn.
//
//   node site/video/videoer.mjs            rendre og laste opp det som mangler, hente alt
//   node site/video/videoer.mjs --hent     bare hente det som finnes (PR fra fork, lokal test)
//   node site/video/videoer.mjs --plan     skriv ut filnavnene uten å gjøre noe
//
// Henter til site/public/video/ og skriver site/src/data/videoer.json, som kurssidene leser.
// Begge er utenfor git. Uten gh-tilgang eller uten release bygges siden uten video.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import YAML from 'yaml';
import { PROFIL, SUF } from './merke.mjs';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const REPO = path.resolve(HERE, '..', '..');
const SITE = path.join(REPO, 'site');
const PUBLIC = path.join(SITE, 'public', 'video');
const DATA = path.join(SITE, 'src', 'data', 'videoer.json');
const RELEASE = 'videoer';
const HF_VERSION = '0.9.81';
const HF = process.env.HYPERFRAMES ?? `npx --yes hyperframes@${HF_VERSION}`;
const onlyFetch = process.argv.includes('--hent');

const resolveSrc = (p) => (p.startsWith('assets/') ? path.join(HERE, p) : path.join(REPO, p));
const read = (f) => fs.readFileSync(f);
const gh = (args, opts = {}) => execFileSync('gh', args, { cwd: REPO, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opts });

// alle filene et manus bruker
function filesOf(manus) {
  const out = [];
  for (const s of manus.skudd) {
    if (s.kind === 'logo') out.push(`src/${s.course}/logo-black.png`);
    for (const k of ['src', 'a', 'b']) if (s[k]) out.push(s[k]);
    for (const sp of s.sprites ?? []) out.push(sp.cut);
  }
  return out;
}

const common = [path.join(HERE, 'lag.mjs'), path.join(HERE, 'merke.mjs'), path.join(SITE, 'profiles/lkk/public/lkk-logo.png'),
  path.join(SITE, 'public/fonts/baloo-2-latin-700-normal.woff2'), path.join(SITE, 'public/fonts/inter-latin-wght-normal.woff2')];

function hashOf(files, extra = '') {
  const h = crypto.createHash('sha256').update(`hyperframes@${HF_VERSION}\n${PROFIL}\n${extra}`);
  for (const f of files) h.update(path.relative(REPO, f)).update(read(f));
  return h.digest('hex').slice(0, 10);
}

// kursvideoene og forsidevideoen
const videos = [];
for (const f of fs.readdirSync(path.join(HERE, 'kurs')).filter((f) => f.endsWith('.yml')).sort()) {
  const kurs = f.replace(/\.yml$/, '');
  const manusFile = path.join(HERE, 'kurs', f);
  const manus = YAML.parse(fs.readFileSync(manusFile, 'utf8'));
  const files = [manusFile, ...common, ...filesOf(manus).map(resolveSrc)];
  videos.push({
    id: kurs, key: `${kurs}${SUF}-${hashOf(files)}`,
    tekst: [...manus.skudd.map((s) => s.text), 'Hva vil du lage?'],
    kreditt: manus.kreditt ?? null,
    render: () => execFileSync('node', [path.join(HERE, 'lag.mjs'), '--render', kurs], { cwd: REPO, stdio: 'inherit', env: { ...process.env, HYPERFRAMES: HF } }),
    out: path.join(HERE, 'build', 'out', `${kurs}${SUF}.mp4`),
  });
}
{
  const src = fs.readFileSync(path.join(HERE, 'forside.mjs'), 'utf8');
  const imgs = [...src.matchAll(/img: '([^']+)'/g)].map(([, p]) => (p.startsWith('a:') ? path.join(HERE, 'assets', p.slice(2)) : path.join(REPO, 'src', p)));
  const files = [path.join(HERE, 'forside.mjs'), ...common.slice(1), path.join(HERE, 'assets/sk0.png'), path.join(HERE, 'assets/shark.png'), ...imgs];
  videos.push({
    id: 'forside', key: `forside${SUF}-${hashOf(files)}`, poster: 8,
    tekst: ['Alt starter med én kloss.', 'Scratch, Python, micro:bit, roboter, Minecraft, spill, nettsider, animasjon og elektronikk.', 'Hva vil du lage?'],
    kreditt: '«Dash & Dot Robots», Texas State Library and Archives Commission, CC BY 2.0, beskåret.',
    render: () => {
      execFileSync('node', [path.join(HERE, 'forside.mjs')], { cwd: REPO, stdio: 'inherit' });
      const dir = path.join(HERE, 'build', 'forside' + SUF), raw = path.join(HERE, 'build', 'out', `forside${SUF}.raw.mp4`);
      fs.mkdirSync(path.dirname(raw), { recursive: true });
      execFileSync(HF.split(' ')[0], [...HF.split(' ').slice(1), 'render', '--quality', 'looks', '-o', raw], { cwd: dir, stdio: 'inherit' });
      execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', raw, '-c:v', 'libx264', '-crf', '28', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', path.join(HERE, 'build', 'out', `forside${SUF}.mp4`)]);
      fs.rmSync(raw);
    },
    out: path.join(HERE, 'build', 'out', `forside${SUF}.mp4`),
  });
}

if (process.argv.includes('--plan')) {
  // id og filnavn, for å laste opp videoer som er rendret lokalt
  console.log(JSON.stringify(Object.fromEntries(videos.map((v) => [v.id, v.key])), null, 2));
  process.exit(0);
}

// hva finnes på releasen?
let have = null;
try {
  have = new Set(JSON.parse(gh(['release', 'view', RELEASE, '--json', 'assets'])).assets.map((a) => a.name));
} catch (e) {
  console.log(`Fant ikke releasen «${RELEASE}» eller gh mangler tilgang. Bygger uten video.`);
}

if (have && !onlyFetch) {
  const missing = videos.filter((v) => !have.has(`${v.key}.mp4`));
  if (missing.length) {
    // Chrome til HyperFrames hentes bare når noe skal rendres
    try { execFileSync(HF.split(' ')[0], [...HF.split(' ').slice(1), 'browser', 'ensure'], { cwd: REPO, stdio: 'inherit' }); } catch {}
  }
  for (const v of missing) {
    console.log(`Rendrer ${v.key}`);
    try {
      v.render();
      const mp4 = path.join(HERE, 'build', 'out', `${v.key}.mp4`), jpg = path.join(HERE, 'build', 'out', `${v.key}.jpg`);
      fs.renameSync(v.out, mp4);
      // plakaten er et bilde tidlig i filmen, ca. 50 kB
      execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', String(v.poster ?? 1.5), '-i', mp4, '-frames:v', '1', '-vf', 'scale=1280:-1', '-q:v', '6', jpg]);
      gh(['release', 'upload', RELEASE, mp4, jpg, '--clobber']);
      have.add(`${v.key}.mp4`); have.add(`${v.key}.jpg`);
    } catch (e) {
      console.log(`Kunne ikke rendre eller laste opp ${v.key}: ${e.message.split('\n')[0]}`);
    }
  }
}

const data = {};
if (have) {
  fs.rmSync(PUBLIC, { recursive: true, force: true });
  fs.mkdirSync(PUBLIC, { recursive: true });
  const ready = videos.filter((v) => have.has(`${v.key}.mp4`) && have.has(`${v.key}.jpg`));
  if (ready.length) gh(['release', 'download', RELEASE, '-D', PUBLIC, ...ready.flatMap((v) => ['-p', `${v.key}.mp4`, '-p', `${v.key}.jpg`])]);
  for (const v of ready) data[v.id] = { src: `/video/${v.key}.mp4`, poster: `/video/${v.key}.jpg`, tekst: v.tekst, kreditt: v.kreditt };
}
fs.mkdirSync(path.dirname(DATA), { recursive: true });
fs.writeFileSync(DATA, JSON.stringify(data, null, 2) + '\n');
console.log(`${Object.keys(data).length} av ${videos.length} videoer klare.`);
