// Tests for the loop guard in "Prøv selv" (src/scripts/html-live-guard.js and the bridge). Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { guardLoops } from '../src/scripts/html-live-guard.js';
import { CONSOLE_BRIDGE, LOOP_GUARD, LOOP_STOPPED } from '../src/scripts/html-live-doc.js';

const G = (line) => `${LOOP_GUARD}(${line});`;

// Runs the bridge and then the guarded script in one sandbox; returns the messages sent to the page.
function runGuarded(doc) {
  const sent = [];
  const context = {
    console: { log() {}, info() {}, warn() {}, error() {} },
    parent: { postMessage: (msg) => sent.push(msg) },
    addEventListener() {},
    setTimeout() {}, // never fires: the code below is one long task
  };
  vm.runInNewContext(CONSOLE_BRIDGE.replace(/^<script>|<\/script>$/g, ''), context);
  const js = /<script>([\s\S]*)<\/script>/.exec(guardLoops(doc))[1];
  let thrown;
  try { vm.runInNewContext(js, context, { timeout: 5000 }); } catch (e) { thrown = e; }
  return { sent, thrown, context };
}

test('while (true) {} gets a guard and stops with a friendly message', () => {
  const doc = '<p>hei</p>\n<script>\nwhile (true) {}\n</script>';
  assert.equal(guardLoops(doc), `<p>hei</p>\n<script>\nwhile (true) {${G(3)}}\n</script>`);
  const { sent, thrown } = runGuarded(doc);
  assert.equal(thrown?.message, LOOP_STOPPED);
  assert.deepEqual(sent.map((m) => [m.type, m.text]), [['error', `${LOOP_STOPPED} (linje 3)`]]);
});

test('all loop kinds, also without braces, and nested', () => {
  const js = 'for(;;);for(const x of a)f(x);for(k in o){}do i++;while(i<3);a:for(;;){while(b)continue a}';
  assert.equal(guardLoops(`<script>${js}</script>`), `<script>${[
    `for(;;){${G(1)};}`, `for(const x of a){${G(1)}f(x);}`, `for(k in o){${G(1)}}`,
    `do {${G(1)}i++;}while(i<3);`, `a:for(;;){${G(1)}while(b){${G(1)}continue a}}`,
  ].join('')}</script>`);
});

test('normal code behaves the same', () => {
  const doc = '<script>let s = 0; for (let i = 1; i <= 10; i++) s += i; let j = 0; while (j < 5) j++; console.log(s, j);</script>';
  const { sent, thrown } = runGuarded(doc);
  assert.equal(thrown, undefined);
  assert.deepEqual(sent.map((m) => m.text), ['55 5']);
});

test('strings, comments and plain HTML that say for( are left alone', () => {
  const doc = '<p>while(true) for(;;)</p><script>const s = "for(;;) {}"; // while(x)\nconst t = `do {} while(1)`;</script>';
  assert.equal(guardLoops(doc), doc);
});

test('inline handlers are guarded, the quotes stay valid', () => {
  assert.equal(guardLoops('<button onclick="while(1){}">x</button>'), `<button onclick="while(1){${G(1)}}">x</button>`);
  assert.equal(guardLoops("<body\nonload='for(;;)go()'>"), `<body\nonload='for(;;){${G(2)}go()}'>`);
});

test('code that does not parse, external and non-JS scripts run as before', () => {
  const docs = [
    '<script>while (true) {</script>',
    '<script src="x.js">while(1){}</script>',
    '<script type="text/template">while(1){}</script>',
    '<button onclick="while(1){} &amp;">x</button>',
  ];
  for (const doc of docs) assert.equal(guardLoops(doc), doc);
  assert.equal(guardLoops('<script type="module">for await (const x of y) {}</script>'),
    `<script type="module">for await (const x of y) {${G(1)}}</script>`);
});
