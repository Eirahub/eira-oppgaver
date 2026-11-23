// Report: how many goals in the teacher guides (src/**/README*.md) are linked to LK20, and why the rest are not.
// Run from site/: npm run rapport:kompetansemaal  (add --alle to list every unlinked goal, not just the first 15 per reason)
import fs from 'node:fs';
import path from 'node:path';
import { parseGoals, linkGoal, makeIndex, goalLabel } from '../src/lib/kompetansemaal.js';

const REPO = path.resolve(import.meta.dirname, '..', '..');
const data = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '..', 'src', 'data', 'kompetansemaal.json'), 'utf8'));
const index = makeIndex(data);
const all = process.argv.includes('--alle');

const files = fs.globSync('src/*/*/README*.md', { cwd: REPO }).sort();
let linked = 0;
let viaOld = 0;
const unlinked = {};
let guides = 0;
for (const file of files) {
  const items = parseGoals(fs.readFileSync(path.join(REPO, file), 'utf8'));
  if (items.length) guides += 1;
  for (const item of items) {
    const r = linkGoal(item, index);
    if (r.goal) { linked += 1; if (r.via) viaOld += 1; continue; }
    const hint = r.near ? ` (nærmest ${r.near.kode} ${goalLabel(r.near)}: «${r.near.nb}»)`
      : r.old ? ` (fra ${r.old.plan})` : '';
    (unlinked[r.reason] ||= []).push(`${file}:${item.line + 1}  ${item.label}: ${item.text.slice(0, 90)}${hint}`);
  }
}
const total = linked + Object.values(unlinked).flat().length;
console.log(`${files.length} lærerveiledninger, ${guides} med kompetansemål. ${total} mål.`);
console.log(`Koblet: ${linked} (${viaOld} av dem via utgått plan med nesten lik tekst i ny plan)`);
console.log(`Ukoblet: ${total - linked}`);
for (const [reason, list] of Object.entries(unlinked).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n## ${reason}: ${list.length}`);
  for (const l of all ? list : list.slice(0, 15)) console.log(`  ${l}`);
  if (!all && list.length > 15) console.log(`  ... og ${list.length - 15} til (--alle viser alle)`);
}
