// Links the "## Kompetansemål" items in teacher guides to LK20 goals (src/data/kompetansemaal.json,
// made by scripts/kompetansemaal.py). No file access, so node --test can run it.
// The parsing follows .claude/skills/gjennomga-kurs/sjekk_kurs.py (norm, KM, kompetansemaal).

export const norm = (s) => s.toLowerCase().replaceAll('håndtverk', 'håndverk')
  .replace(/[^a-zæøå0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

const KM = /^(\s*-\s*\[ \]\s*)(?:__|\*\*)\s*(.+?)\s*:?\s*(?:__|\*\*)\s*:?\s*(.+)/;

// Items in the first "## Kompetansemål" section: { line (0-based), end (exclusive), indent, label, text }.
export function parseGoals(text) {
  const lines = text.split('\n');
  const items = [];
  let n = lines.findIndex((l) => l.startsWith('## Kompetansemål'));
  if (n < 0) return items;
  for (n += 1; n < lines.length && !lines[n].startsWith('#');) {
    const m = KM.exec(lines[n]);
    if (!m) { n += 1; continue; }
    const item = { line: n, indent: m[1], label: m[2].replace(/[\s:]+$/, ''), text: m[3] };
    for (n += 1; n < lines.length && lines[n].trim() && !lines[n].trimStart().startsWith('- '); n += 1) {
      item.text += ` ${lines[n].trim()}`;
    }
    item.end = n;
    items.push(item);
  }
  return items;
}

export function makeIndex(data) {
  const byCode = new Map(data.maal.map((g) => [g.kode, g]));
  const current = new Map();
  const expired = new Map();
  const add = (map, key, v) => map.set(key, [...(map.get(key) || []), v]);
  for (const g of data.maal) for (const t of new Set([g.nb, g.nn])) add(current, norm(t), g);
  for (const g of data.utgatte) for (const t of new Set([g.nb, g.nn])) add(expired, norm(t), g);
  return { byCode, current, expired, all: data.maal };
}

// Prefer the goal whose subject and year match the label, when the same text is in several sets.
function best(goals, label) {
  const l = norm(label);
  const score = (g) => (l.includes(norm(g.fag)) || l.includes(norm(g.fagNn)) ? 2 : 0) + (l.includes(norm(g.trinn)) ? 1 : 0);
  return goals.reduce((a, b) => (score(b) > score(a) ? b : a));
}

// Character bigram overlap (Dice), only to sort unlinked goals into "ikke ordrett" or "ukjent".
const bigrams = (s) => { const b = new Set(); for (let i = 0; i < s.length - 1; i += 1) b.add(s.slice(i, i + 2)); return b; };
const dice = (a, b) => { let x = 0; for (const g of a) if (b.has(g)) x += 1; return (2 * x) / (a.size + b.size || 1); };
const LK06 = /\b(IT ?[12]|VG ?[1-3])\b/; // LK06 labels: "IT1, VG2". LK20 writes "Vg1".

// { goal, via?: 'utgått' } when linked, else { reason: 'LK06' | 'utgått plan uten match' | 'ikke ordrett' | 'ukjent', near? }.
export function linkGoal(item, index) {
  const t = norm(item.text);
  const hit = index.current.get(t);
  if (hit) return { goal: best(hit, item.label) };
  const old = index.expired.get(t);
  if (old) {
    const o = best(old, item.label);
    return o.ny ? { goal: index.byCode.get(o.ny), via: 'utgått', old: o } : { reason: 'utgått plan uten match', old: o };
  }
  if (LK06.test(item.label)) return { reason: 'LK06' };
  const b = bigrams(t);
  let near = null;
  let score = 0.8; // shortcut: rough threshold for "ikke ordrett"; the report shows the nearest goal so a person decides
  for (const g of index.all) {
    const s = dice(b, bigrams(norm(g.nb)));
    if (s > score) { score = s; near = g; }
  }
  return near ? { reason: 'ikke ordrett', near } : { reason: 'ukjent' };
}

export const goalLabel = (g, lang) => {
  const fag = lang === 'nn' ? g.fagNn : g.fag;
  return g.trinn.toLowerCase().startsWith(fag.toLowerCase()) ? g.trinn : `${fag}, ${g.trinn}`;
};
export const goalUrl = (g, lang) => (lang === 'nn' ? g.url.replace('#', '?lang=nno#') : g.url);
const escapeMd = (s) => s.replace(/([\\`*_[\]<>])/g, '\\$1');

// Teacher guide body with every linked goal rewritten: official label and text, and a link to Udir.
// Unlinked goals are left as they are. Returns { body, codes }.
export function linkGoals(body, index, lang) {
  const items = parseGoals(body);
  if (!items.length) return { body, codes: [] };
  const lines = body.split('\n');
  const codes = [];
  for (const item of items.reverse()) {
    const { goal } = linkGoal(item, index);
    if (!goal) continue;
    codes.push(goal.kode);
    const text = lang === 'nn' ? goal.nn : goal.nb;
    const link = `<a class="km-udir" href="${goalUrl(goal, lang)}">${goal.kode} hos Udir</a>`;
    lines.splice(item.line, item.end - item.line, `${item.indent}__${escapeMd(goalLabel(goal, lang))}__: ${escapeMd(text)} ${link}`);
  }
  return { body: lines.join('\n'), codes: codes.reverse() };
}
