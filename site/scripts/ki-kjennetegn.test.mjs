// Guards against the best-known look of AI-generated pages (see CLAUDE.md, "Ikke KI-preg"). Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const files = (dir, ext) => fs.readdirSync(dir, { recursive: true }).filter((f) => ext.test(f)).map((f) => path.join(dir, f));
const sources = [...files('src', /\.(css|astro)$/), ...files('profiles', /\.yml$/)];
const hits = (re) => sources.flatMap((f) => fs.readFileSync(f, 'utf8').split('\n').map((l, i) => re.test(l) && `${f}:${i + 1}: ${l.trim()}`).filter(Boolean));

// A coloured edge thicker than 1px on one side only (border-left/right, inline-start/end, or an inset shadow stripe).
const SIDE_STRIPE = /border-(left|right|inline-start|inline-end)(-width)?\s*:\s*(?!none|0\b)(?:[2-9]|\d{2,}|\d*\.\d*[1-9])\s*(px|rem|em)|box-shadow\s*:\s*inset\s+-?[2-9]\d*px\s+0\b/;
// A small tracked-caps label above a heading.
const EYEBROW = /class="[^"]*\b(eyebrow|kicker-label|overline)\b|^\s*eyebrow\s*:/;

test('the patterns catch what they should', () => {
  for (const s of ['border-left: 6px solid red', 'border-inline-start: 4px solid var(--x)', 'border-right-width: 3px', 'box-shadow: inset 4px 0 0 blue']) assert.match(s, SIDE_STRIPE, s);
  for (const s of ['border-left: none', 'border-left: 1px solid #ccc', 'border-left: 0', 'border-top: 3px solid red']) assert.doesNotMatch(s, SIDE_STRIPE, s);
  assert.match('<p class="eyebrow">', EYEBROW);
});

test('no side stripes on cards, callouts or list items', () => assert.deepEqual(hits(SIDE_STRIPE), []));
test('no eyebrow labels above headings', () => assert.deepEqual(hits(EYEBROW), []));
