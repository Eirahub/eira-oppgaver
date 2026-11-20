// Tests for the "Prøv selv" helpers (src/scripts/html-live-doc.js). Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { withConsole, CONSOLE_BRIDGE } from '../src/scripts/html-live-doc.js';

test('bridge goes right after <head>', () => {
  const doc = '<!DOCTYPE html>\n<html>\n<head lang="nb">\n<title>x</title></head><body></body></html>';
  const out = withConsole(doc);
  assert.ok(out.startsWith('<!DOCTYPE html>\n<html>\n<head lang="nb">' + CONSOLE_BRIDGE));
  assert.equal(out.replace(CONSOLE_BRIDGE, ''), doc);
});

test('without <head>: after the doctype, never before it', () => {
  assert.equal(withConsole('<!doctype html><p>hei</p>'), `<!doctype html>${CONSOLE_BRIDGE}<p>hei</p>`);
  assert.equal(withConsole('<p>hei</p>'), `${CONSOLE_BRIDGE}<p>hei</p>`);
  assert.equal(withConsole('<header>x</header>'), `${CONSOLE_BRIDGE}<header>x</header>`); // <header> is not <head>
});

test('bridge adds no line breaks, so error line numbers match the code', () => {
  assert.ok(!CONSOLE_BRIDGE.includes('\n'));
});

test('bridge forwards console calls and errors as text', () => {
  const sent = [];
  const listeners = {};
  const context = {
    console: { log() {}, info() {}, warn() {}, error() {} },
    parent: { postMessage: (msg) => sent.push(msg) },
    addEventListener: (type, fn) => { listeners[type] = fn; },
  };
  vm.runInNewContext(CONSOLE_BRIDGE.replace(/^<script>|<\/script>$/g, ''), context);
  vm.runInNewContext('console.log("hei", 2, {a: 1}, undefined); console.error(new TypeError("feil"))', context);
  listeners.error({ message: 'x is not defined', lineno: 7 });
  assert.deepEqual(sent.map((m) => [m.htmlLive, m.type, m.text]), [
    [1, 'log', 'hei 2 {"a":1} undefined'],
    [1, 'error', 'TypeError: feil'],
    [1, 'error', 'x is not defined (linje 7)'],
  ]);
});
