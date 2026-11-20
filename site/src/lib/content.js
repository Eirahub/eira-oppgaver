// Reads the lesson repo (../src and ../filtertags) and renders markdown.
// Paths are relative to the working directory, so Astro must run from site/.
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import MarkdownIt from 'markdown-it';
import mdAttrs from 'markdown-it-attrs';
import mdSections from 'markdown-it-header-sections';
import mdFigures from 'markdown-it-implicit-figures';
import mdTaskCheckbox from 'markdown-it-task-checkbox';
import hljs from 'highlight.js';
import profile from './profile.js';

export const REPO = path.resolve(process.cwd(), '..');
export const SRC = path.join(REPO, 'src');
const FILTERTAGS = path.join(REPO, 'filtertags');
const DEFAULT_LICENSE = '[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.no)';
// Lessons under this license are left out of the build if the profile says so (exclude.license).
const EXCLUDED_LICENSE = profile.exclude?.license?.toLowerCase();
const isExcluded = (license) => !!EXCLUDED_LICENSE && license.toLowerCase().includes(EXCLUDED_LICENSE);

const readYaml = (file) => YAML.parse(fs.readFileSync(file, 'utf8')) || {};
const isDir = (p) => fs.existsSync(p) && fs.statSync(p).isDirectory();

export const filterKeys = (() => {
  const keys = readYaml(path.join(FILTERTAGS, 'keys.yml'));
  return Object.fromEntries(Object.entries(keys).map(([g, tags]) => [g.toLowerCase(), tags.map((t) => String(t).toLowerCase())]));
})();
export const LANGUAGES = filterKeys.language;
export const translation = readYaml(path.join(FILTERTAGS, 'translation_nb.yml'));
export const tagName = (group, tag) => translation[group]?.TAGS?.[tag]?.NAME || tag;
export const groupName = (group) => translation[group]?.NAME || group;

function parseFrontMatter(text, file) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(text);
  if (!m) return { data: {}, body: text };
  try {
    return { data: YAML.parse(m[1]) || {}, body: text.slice(m[0].length) };
  } catch (e) {
    console.warn(`Ugyldig front matter i ${file}: ${e.message}`);
    return { data: {}, body: text.slice(m[0].length) };
  }
}

// Same rules as codeclub-viewer: only known groups and tags, lower case, lists.
function cleanTags(tags) {
  const result = {};
  for (const [group, value] of Object.entries(tags || {})) {
    const g = group.toLowerCase();
    if (!filterKeys[g]) continue;
    const list = (Array.isArray(value) ? value : String(value ?? '').split(/,\s*/))
      .map((t) => String(t).toLowerCase())
      .filter((t) => filterKeys[g].includes(t));
    if (list.length) result[g] = list;
  }
  return result;
}

function readMd(file) {
  const { data, body } = parseFrontMatter(fs.readFileSync(file, 'utf8'), file);
  return { data, body, language: String(data.language || '').toLowerCase() };
}

// Pick the entry for language `lang`, else bokmål, else the first one.
export const pickLang = (items, lang = 'nb') =>
  items.find((i) => i.language === lang) || items.find((i) => i.language === 'nb') || items[0];

function loadLesson(course, lesson, dir) {
  const yml = readYaml(path.join(dir, 'lesson.yml'));
  const files = [];
  for (const name of fs.readdirSync(dir).filter((n) => n.endsWith('.md')).sort()) {
    const { data, body, language } = readMd(path.join(dir, name));
    if (!LANGUAGES.includes(language)) continue; // same as codeclub-viewer: needs a known language
    const file = name.slice(0, -3);
    files.push({
      course, lesson, file, language, body,
      isReadme: file.startsWith('README'),
      title: String(data.title || lesson),
      author: data.author ? String(data.author) : '',
      translator: data.translator ? String(data.translator) : '',
      external: data.external ? String(data.external) : '',
      license: data.license ? String(data.license) : '',
      url: `/${course}/${lesson}/${file}`,
      source: `${course}/${lesson}/${name}`,
    });
  }
  const license = String(yml.license || files.find((f) => f.license)?.license || '');
  return {
    course, lesson, files,
    level: Number(yml.level) || 0,
    tags: cleanTags(yml.tags),
    indexed: yml.indexed !== false,
    license: license || DEFAULT_LICENSE,
    excluded: isExcluded(license) || files.some((f) => isExcluded(f.license)),
  };
}

function loadCourse(course) {
  const dir = path.join(SRC, course);
  const yml = readYaml(path.join(dir, 'course.yml'));
  const infos = fs.readdirSync(dir).filter((n) => /^index.*\.md$/.test(n)).map((n) => {
    const { data, body, language } = readMd(path.join(dir, n));
    return { language, title: String(data.title || course), external: data.external ? String(data.external) : '', body };
  }).filter((i) => LANGUAGES.includes(i.language));
  const lessons = [];
  const excluded = [];
  for (const name of fs.readdirSync(dir).sort()) {
    const lessonDir = path.join(dir, name);
    if (!fs.existsSync(path.join(lessonDir, 'lesson.yml'))) continue;
    const lesson = loadLesson(course, name, lessonDir);
    (lesson.excluded ? excluded : lessons).push(lesson);
  }
  const byName = new Map(lessons.map((l) => [l.lesson, l]));
  const playlistDir = path.join(dir, 'playlists');
  const playlists = isDir(playlistDir)
    ? fs.readdirSync(playlistDir).filter((n) => n.endsWith('.yml')).map((n) => {
      const p = readYaml(path.join(playlistDir, n));
      return {
        id: n.slice(0, -4),
        sortindex: Number(p.sortindex) || 0,
        title: p.title?.nb || Object.values(p.title || {})[0] || 'Oppgavesamling',
        lessons: (p.lessons || []).map((l) => byName.get(String(l))).filter(Boolean),
      };
    }).filter((p) => p.lessons.length).sort((a, b) => a.sortindex - b.sortindex)
    : [];
  const info = pickLang(infos) || { title: course, external: '', body: '' };
  return {
    course, lessons, excluded, playlists,
    title: info.title,
    external: info.external,
    infoBody: info.body,
    isExternal: yml.isExternal === true,
    hasLogo: fs.existsSync(path.join(dir, 'logo-black.png')),
  };
}

let cache;
export function getCourses() {
  if (cache) return cache;
  cache = fs.readdirSync(SRC)
    .filter((n) => fs.existsSync(path.join(SRC, n, 'index.md')) && fs.existsSync(path.join(SRC, n, 'course.yml')))
    .map(loadCourse)
    .sort((a, b) => a.title.localeCompare(b.title, 'nb'));
  const excluded = cache.flatMap((c) => c.excluded);
  if (globalThis.siteLogged || !EXCLUDED_LICENSE) return cache; // the config and the pages load this module separately
  globalThis.siteLogged = true;
  console.log(`[${profile.name}] ${excluded.length} oppgaver med "${profile.exclude.license}"-lisens er holdt utenfor bygget.`);
  return cache;
}

export const getCourse = (course) => getCourses().find((c) => c.course === course);

// The lesson file used in lists: the bokmål one, else the first language.
export const mainFile = (lesson) => pickLang(lesson.files.filter((f) => !f.isReadme));
export const lessonLanguages = (lesson) => [...new Set(lesson.files.filter((f) => !f.isReadme).map((f) => f.language))];

// ---------- Markdown ----------

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const HL_ALIASES = { processing: 'java', web: 'html', diverse: '' };

const md = new MarkdownIt({
  html: true,
  highlight(code, lang) {
    lang = (lang || '').toLowerCase();
    if (lang === 'blocks' || lang === 'microbit') {
      // Rendered in the browser (scratchblocks / MakeCode), see src/scripts/lesson.js.
      return `<pre class="${lang}">${escapeHtml(code)}</pre>`;
    }
    lang = HL_ALIASES[lang] ?? lang;
    if (lang && hljs.getLanguage(lang)) return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
    return ''; // plain, escaped by markdown-it
  },
})
  .use(mdAttrs)
  .use(mdSections)
  .use(mdFigures)
  .use(mdTaskCheckbox, { disabled: false });

const ICONS = { check: 'check', flag: 'flag', save: 'save' };

// Links to excluded lessons go to the same path on exclude.linkTo, marked as external.
function linkExcluded(html, pageUrl) {
  if (!EXCLUDED_LICENSE || !pageUrl) return html;
  const excluded = new Set(getCourses().flatMap((c) => c.excluded.map((l) => `${c.course}/${l.lesson}`)));
  return html.replace(/<a href="([^"]*)"/g, (m, href) => {
    if (/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) return m; // anchors, http:, mailto: ...
    const u = new URL(href.replace(/&amp;/g, '&'), `https://x.invalid${pageUrl}`);
    let [, course, lesson] = u.pathname.split('/');
    try { course = decodeURIComponent(course); lesson = decodeURIComponent(lesson ?? ''); } catch { return m; }
    if (!excluded.has(`${course}/${lesson}`)) return m;
    return `<a class="external" href="${profile.exclude.linkTo}${u.pathname}${u.search}${u.hash}"`;
  });
}

// pageUrl is the URL of the page the markdown is shown on, for resolving relative links.
export function renderMarkdown(body, pageUrl) {
  return linkExcluded(md.render(body), pageUrl)
    // <toggle><strong>Hint</strong><hide>...</hide></toggle> becomes a native disclosure.
    .replace(/<toggle>\s*(?:<strong>([\s\S]*?)<\/strong>)?\s*<hide>/g, (_, label) =>
      `<details class="toggle"><summary>${label || 'Hint'}</summary><div>`)
    .replace(/<\/hide>\s*<\/toggle>/g, '</div></details>')
    .replace(/<h2 class="(check|flag|save)">/g, (m, c) => `${m}<img class="heading-icon" src="/graphics/${ICONS[c]}.svg" alt="" width="40" height="40">`);
}

export const renderInline = (text) => md.renderInline(text || '');

// First paragraph as plain text, for <meta name="description">.
export function excerpt(html) {
  const p = /<p>([\s\S]*?)<\/p>/.exec(html);
  return p ? p[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 200) : '';
}
