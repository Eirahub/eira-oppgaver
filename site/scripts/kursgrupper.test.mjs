// Tests for the course groups on the front page (src/lib/kursgrupper.js). Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import YAML from 'yaml';
import { groupCourses } from '../src/lib/kursgrupper.js';

const c = (course) => ({ course });
const names = (groups) => groups.map((g) => [g.title, g.courses.map((x) => x.course)]);

test('listed order, unknown names skipped, the rest in the open group, empty groups dropped', () => {
  const courses = ['arduino', 'diverse', 'python', 'scratch', 'scratchjr'].map(c);
  const groups = [
    { title: 'Scratch', courses: ['scratchjr', 'scratch', 'finnes_ikke'] },
    { title: 'Andre' },
    { title: 'Java', courses: ['java'] },
    { title: 'Python', courses: ['python'] },
  ];
  assert.deepEqual(names(groupCourses(courses, groups)), [
    ['Scratch', ['scratchjr', 'scratch']],
    ['Andre', ['arduino', 'diverse']],
    ['Python', ['python']],
  ]);
});

test('without an open group the rest goes to "Andre" last', () => {
  assert.deepEqual(names(groupCourses([c('a'), c('b')], [{ title: 'A', courses: ['a'] }])), [['A', ['a']], ['Andre', ['b']]]);
});

test('the shared data file is valid and names only real course folders', () => {
  const groups = YAML.parse(fs.readFileSync(new URL('../src/data/kursgrupper.yml', import.meta.url), 'utf8'));
  const src = new URL('../../src/', import.meta.url);
  for (const g of groups) {
    assert.equal(typeof g.title, 'string');
    for (const name of g.courses || []) assert.ok(fs.existsSync(new URL(`${name}/course.yml`, src)), `${name} finnes ikke i src/`);
  }
  assert.equal(groups.filter((g) => !g.courses).length, 1);
});
