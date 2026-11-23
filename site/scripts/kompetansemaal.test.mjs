// Tests for linking teacher-guide goals to LK20 (src/lib/kompetansemaal.js). Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { norm, parseGoals, makeIndex, linkGoal, linkGoals } from '../src/lib/kompetansemaal.js';

const goal = (kode, plan, fag, trinn, nb, nn = nb) => ({ kode, plan, fag, fagNn: fag, trinn, nb, nn, url: `https://www.udir.no/lk20/x#${kode}` });
const index = makeIndex({
  maal: [
    goal('KM1', 'NAT01-05', 'Naturfag', '7. trinn', 'utforske, lage og programmere teknologiske systemer', 'utforske, lage og programmere teknologiske system'),
    goal('KM2', 'KHV01-03', 'Kunst og håndverk', '7. trinn', 'utforske, lage og programmere teknologiske systemer'),
    goal('KM3', 'MAT01-06', 'Matematikk', '3. trinn', 'lage og følge regler og trinnvise instruksjoner i lek og spill knyttet til koordinatsystemet'),
  ],
  utgatte: [
    { ...goal('KM9', 'MAT01-05', 'Matematikk', '3. trinn', 'lage og følge regler og trinnvise instruksjoner i lek og spel knyttet til koordinatsystemet'), ny: 'KM3' },
    { ...goal('KM8', 'MAT01-05', 'Matematikk', '3. trinn', 'eksperimentere med og forklare plasseringer i koordinatsystemet'), ny: null },
  ],
});

const README = `# Lærerveiledning

## Kompetansemål {.challenge}

- [ ]  __Naturfag, 7.trinn__: utforske, lage og programmere
       teknologiske systemer

- [ ] __Kunst og håndtverk, 7. trinn:__ utforske, lage og programmere teknologiske systemer

- [ ] __Matematikk, 3. trinn__: eksperimentere med og forklare plasseringer i koordinatsystemet

- [ ] __IT1, VG2__: planlegge og implementere brukergrensesnitt

## Neste {.flag}

- [ ] __Ikke et mål__: utforske, lage og programmere teknologiske systemer
`;

test('norm ignores case, punctuation, spacing and "håndtverk"', () => {
  assert.equal(norm(' Kunst og  Håndtverk, 7.trinn: '), 'kunst og håndverk 7 trinn');
});

test('parses only the Kompetansemål section, with continuation lines', () => {
  const items = parseGoals(README);
  assert.equal(items.length, 4);
  assert.deepEqual([items[0].line, items[0].end, items[0].label], [4, 6, 'Naturfag, 7.trinn']);
  assert.equal(items[0].text, 'utforske, lage og programmere teknologiske systemer');
  assert.equal(items[1].label, 'Kunst og håndtverk, 7. trinn');
});

test('links exact text, picks the set that matches the label, sorts the rest by reason', () => {
  const [nat, khv, mat, it] = parseGoals(README).map((i) => linkGoal(i, index));
  assert.equal(nat.goal.kode, 'KM1');
  assert.equal(khv.goal.kode, 'KM2');
  assert.equal(mat.reason, 'utgått plan uten match');
  assert.equal(it.reason, 'LK06');
  const viaOld = linkGoal({ label: 'Matematikk, 3. trinn', text: 'lage og følge regler og trinnvise instruksjoner i lek og spel knyttet til koordinatsystemet' }, index);
  assert.equal(viaOld.via, 'utgått');
  assert.equal(viaOld.goal.kode, 'KM3');
});

test('linkGoals rewrites linked items only and keeps the checkbox count', () => {
  const { body, codes } = linkGoals(README, index, 'nn');
  assert.deepEqual(codes, ['KM1', 'KM2']);
  assert.match(body, /- \[ \] {2}__Naturfag, 7\. trinn__: utforske, lage og programmere teknologiske system <a class="km-udir" href="https:\/\/www\.udir\.no\/lk20\/x\?lang=nno#KM1">KM1 hos Udir<\/a>/);
  assert.match(body, /__Matematikk, 3\. trinn__: eksperimentere/);
  assert.equal(body.match(/- \[ \]/g).length, README.match(/- \[ \]/g).length);
});

test('the data file has goals with code, subject, year, text and Udir link', () => {
  const data = JSON.parse(fs.readFileSync(new URL('../src/data/kompetansemaal.json', import.meta.url), 'utf8'));
  assert.ok(data.maal.length > 300);
  for (const g of data.maal) {
    assert.match(g.kode, /^KM\d+$/);
    assert.ok(g.fag && g.trinn && g.nb && g.nn, g.kode);
    assert.match(g.url, /^https:\/\/www\.udir\.no\/lk20\/[a-z0-9-]+\/kompetansemaal-og-vurdering\/kv\d+#KM\d+$/);
  }
  const codes = new Set(data.maal.map((g) => g.kode));
  for (const g of data.utgatte) if (g.ny) assert.ok(codes.has(g.ny), `${g.kode} -> ${g.ny}`);
});
