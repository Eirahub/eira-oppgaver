// Tests for the progress fragment used by "Åpne på mobilen". Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import { encode, decode, merge } from '../src/scripts/progress-link.js';

test('encode and decode round trip', () => {
  const checked = Array.from({ length: 70 }, (_, i) => i % 3 === 0);
  const code = encode(checked);
  assert.match(code, /^[0-9a-z]+$/);
  assert.deepEqual(decode(`#fremdrift=${code}`, 70), checked.flatMap((on, i) => (on ? [i] : [])));
});

test('nothing checked gives no code', () => {
  assert.equal(encode([false, false]), '');
  assert.equal(decode('#fremdrift=0', 5), null);
});

test('decode rejects malformed input and out-of-range boxes', () => {
  for (const hash of ['', '#steg-1', '#fremdrift=', '#fremdrift=AB', '#fremdrift=1-2', '#fremdrift=1&x=2', `#fremdrift=${'z'.repeat(65)}`]) {
    assert.equal(decode(hash, 10), null, hash);
  }
  assert.equal(decode(`#fremdrift=${encode([false, false, true])}`, 2), null); // box 2 does not exist on a 2-box page
  assert.equal(decode('#fremdrift=1', 0), null);
  assert.deepEqual(decode('#fremdrift=5', 3), [0, 2]);
});

test('merge keeps boxes checked on either device', () => {
  assert.deepEqual(merge({ a: true }, ['b', 'a']), { a: true, b: true });
  const state = { a: true };
  merge(state, ['c']);
  assert.deepEqual(state, { a: true }); // input is not changed
});
