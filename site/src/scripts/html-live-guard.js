// Loop guard for "Prøv selv" (like JS Bin): every for, while and do loop in <script> contents and inline
// handlers gets a call to LOOP_GUARD first in its body. The guard in the console bridge (html-live-doc.js)
// stops a loop that keeps the frame busy for over a second. No DOM here, so node --test can run it.
// Loaded with import() only when the code has JavaScript, so acorn is not downloaded otherwise.
import { parse } from 'acorn';
import { LOOP_GUARD } from './html-live-doc.js';

const LOOPS = new Set(['ForStatement', 'ForInStatement', 'ForOfStatement', 'WhileStatement', 'DoWhileStatement']);
const JS_TYPES = /^\s*(|text\/javascript|application\/javascript|module)\s*$/i;

// Returns js with guard calls added; `offset` is where js starts in the document, for line numbers.
// Throws if acorn cannot parse it (the caller then leaves that code as it is).
function guardJs(js, doc, offset, options) {
  const edits = [];
  (function walk(node) {
    if (LOOPS.has(node.type)) {
      const line = doc.slice(0, offset + node.start).split('\n').length;
      const call = `${LOOP_GUARD}(${line});`; // no quotes or line breaks: safe inside attributes, line numbers stay
      const body = node.body;
      if (body.type === 'BlockStatement') edits.push([body.start + 1, call]);
      else edits.push([body.start, `{${call}`], [body.end, '}']);
    }
    for (const value of Object.values(node)) {
      for (const child of Array.isArray(value) ? value : [value]) {
        if (child && typeof child.type === 'string') walk(child);
      }
    }
  })(parse(js, { ecmaVersion: 'latest', ...options }));
  edits.sort((a, b) => b[0] - a[0]);
  for (const [at, text] of edits) js = js.slice(0, at) + text + js.slice(at);
  return js;
}

function tryGuard(js, doc, offset, options) {
  try { return guardJs(js, doc, offset, options); } catch { return js; } // the browser will not run it either
}

// One pass over the document: whole <script> elements (so their text is not read as tags), and other start tags.
// shortcut: handler values with & (HTML entities) are left unguarded; decode them if lessons need that.
export function guardLoops(doc) {
  return doc.replace(/(<script\b([^>]*)>)([\s\S]*?)(?=<\/script\s*>)|<[a-z][^>]*>/gi, (m, open, attrs, js, at) => {
    if (open !== undefined) {
      const type = /\stype\s*=\s*["']?([^"'\s>]*)/i.exec(attrs)?.[1] ?? '';
      if (/\ssrc\s*=/i.test(attrs) || !JS_TYPES.test(type)) return m;
      const sourceType = /^module$/i.test(type) ? 'module' : 'script';
      return open + tryGuard(js, doc, at + open.length, { sourceType });
    }
    return m.replace(/(\son[a-z]+\s*=\s*)(?:"([^"&]*)"|'([^'&]*)')/gi, (a, name, dq, sq, i) => {
      const js = dq ?? sq;
      const q = dq !== undefined ? '"' : "'";
      return `${name}${q}${tryGuard(js, doc, at + i + name.length + 1, { allowReturnOutsideFunction: true })}${q}`;
    });
  });
}
