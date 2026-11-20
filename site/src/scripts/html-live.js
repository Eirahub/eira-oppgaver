// "Prøv selv": turns ```html-live code blocks into an editor with a live result.
// The markdown pipeline (lib/content.js) renders them as <pre class="html-live">, which stays as the
// no-JS and print version. The result runs in <iframe sandbox="allow-scripts allow-modals"> with srcdoc:
// no allow-same-origin, so the reader's code gets an opaque origin and cannot reach this page or its storage.
// Code with JavaScript only runs on "Kjør" (and on load), so a half-typed loop is not run while typing.
// shortcut: no infinite-loop protection, so a `while (true)` run with "Kjør" can still hang the tab until reload; add a loop-guard transform (like JS Bin) if that bites in class.
import { withConsole, hasScript } from './html-live-doc.js';

const blocks = [...document.querySelectorAll('.lesson-content pre.html-live')];
const MAX_LINES = 200; // console lines kept, so a log in a loop cannot grow the page forever
const consoles = new Map(); // result frame window -> console list

const storageKey = (i) => `html-live:${location.pathname}:${i}`;
const load = (i) => { try { return localStorage.getItem(storageKey(i)); } catch { return null; } };
const store = (i, code) => { try { localStorage.setItem(storageKey(i), code); } catch { /* blocked storage: works without saving */ } };
const forget = (i) => { try { localStorage.removeItem(storageKey(i)); } catch { /* same */ } };

blocks.forEach((pre, i) => {
  const original = pre.textContent;
  const id = `html-live-${i}`;
  const box = document.createElement('div');
  box.className = 'live-editor';
  box.setAttribute('role', 'group');
  box.setAttribute('aria-label', 'Prøv selv');
  box.lang = 'nb';
  box.innerHTML = `
    <div class="live-toolbar">
      <button type="button" class="button" data-run>Kjør</button>
      <button type="button" class="button secondary" data-reset>Tilbakestill</button>
      <button type="button" class="button secondary" data-download>Last ned som fil</button>
    </div>
    <div class="live-panes">
      <div class="live-pane">
        <label class="live-label" for="${id}">Koden din</label>
        <textarea id="${id}" class="live-code" spellcheck="false" autocapitalize="off" autocomplete="off" aria-describedby="${id}-hint"></textarea>
        <p id="${id}-hint" class="sr-only">Tab setter inn to mellomrom. Trykk Esc og så Tab for å gå ut av kodefeltet, eller slå Tab-innrykk av og på med Ctrl+M. Resultatet oppdateres mens du skriver, men kode med JavaScript kjøres først når du trykker Kjør.</p>
      </div>
      <div class="live-pane">
        <span class="live-label" aria-hidden="true">Resultat</span>
        <p class="live-hint" aria-live="polite"></p>
        <iframe class="live-result" title="Resultat" sandbox="allow-scripts allow-modals"></iframe>
        <div class="live-console" hidden>
          <span class="live-label" id="${id}-console">Konsoll</span>
          <ol role="log" aria-labelledby="${id}-console"></ol>
        </div>
      </div>
    </div>`;
  const area = box.querySelector('textarea');
  const frame = box.querySelector('iframe');
  const consoleBox = box.querySelector('.live-console');
  const list = consoleBox.querySelector('ol');
  const hint = box.querySelector('.live-hint');

  area.value = load(i) ?? original;
  area.rows = Math.min(Math.max(area.value.split('\n').length + 1, 12), 30);

  function run() {
    list.replaceChildren();
    consoleBox.hidden = true;
    hint.textContent = '';
    frame.srcdoc = withConsole(area.value);
  }
  let timer;
  area.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      store(i, area.value);
      if (!hasScript(area.value)) run();
      else if (!hint.textContent) hint.textContent = 'Trykk Kjør for å kjøre koden.';
    }, 600);
  });

  // Tab indents. Esc lets the next Tab leave the field; Ctrl+M turns indenting off and on. Shift+Tab always leaves.
  let tabIndents = true;
  let escaped = false;
  area.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { escaped = true; return; }
    if (e.key === 'm' && e.ctrlKey && !e.altKey && !e.metaKey) { e.preventDefault(); tabIndents = !tabIndents; return; }
    if (e.key === 'Tab' && !e.shiftKey && !e.ctrlKey && !e.altKey && tabIndents && !escaped) {
      e.preventDefault();
      // insertText keeps the browser's undo history; setRangeText is the fallback.
      if (!document.execCommand('insertText', false, '  ')) {
        area.setRangeText('  ', area.selectionStart, area.selectionEnd, 'end');
        area.dispatchEvent(new Event('input'));
      }
    }
    if (e.key !== 'Escape') escaped = false;
  });
  area.addEventListener('blur', () => { escaped = false; });

  box.querySelector('[data-run]').addEventListener('click', () => { clearTimeout(timer); store(i, area.value); run(); });
  box.querySelector('[data-reset]').addEventListener('click', () => {
    clearTimeout(timer);
    area.value = original;
    forget(i);
    run();
  });
  box.querySelector('[data-download]').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([area.value], { type: 'text/html' }));
    a.download = 'index.html';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  pre.classList.add('enhanced'); // kept for print and as the original
  pre.after(box);
  consoles.set(frame.contentWindow, { consoleBox, list });
  // The lesson's own code is trusted; saved edits with JavaScript wait for "Kjør" (they may hold the loop that hung the tab).
  if (area.value === original || !hasScript(area.value)) run();
  else hint.textContent = 'Trykk Kjør for å kjøre koden.';
});

// Console messages from the result frames. Only frames we made are listened to, and text is shown as text.
if (blocks.length) {
  window.addEventListener('message', (e) => {
    const target = consoles.get(e.source);
    if (!target || e.data?.htmlLive !== 1) return;
    const li = document.createElement('li');
    li.className = `live-${e.data.type}`;
    li.textContent = String(e.data.text);
    target.list.append(li);
    while (target.list.children.length > MAX_LINES) target.list.firstElementChild.remove();
    target.consoleBox.hidden = false;
    target.list.scrollTop = target.list.scrollHeight;
  });
}
