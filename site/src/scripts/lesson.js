// Lesson page behaviour: checklists, print button, "Åpne på mobilen", wake lock, Scratch blocks and micro:bit blocks.
import { PARAM, encode, decode, merge } from './progress-link.js';

const content = document.querySelector('.lesson-content');
const lang = content?.dataset.lang || 'nb';

// ---------- Checklists, stored per page in localStorage ----------
const key = content?.dataset.key;
const boxes = [...(content?.querySelectorAll('input[type="checkbox"]') ?? [])];
const labelOf = (box) => (box.nextElementSibling?.textContent || box.id).trim();

function load() {
  try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; }
}
function save(state) {
  try { localStorage.setItem(key, JSON.stringify(state)); } catch { /* private mode or blocked storage: works without saving */ }
}
function showProgress() {
  const done = boxes.filter((b) => b.checked).length;
  document.getElementById('progress').hidden = done === 0;
  document.getElementById('progress-bar').value = boxes.length ? done / boxes.length : 0;
  document.getElementById('progress-text').textContent = `${done} av ${boxes.length} punkter er ferdige${done === boxes.length ? ' ★' : ''}`;
}

if (key && boxes.length) {
  let state = load();
  // Progress from a QR code or link made on another device: merge it in once, then clean the address bar.
  const fromLink = decode(location.hash, boxes.length);
  if (fromLink) {
    state = merge(state, fromLink.map((i) => labelOf(boxes[i])));
    save(state);
    history.replaceState(history.state, '', location.pathname + location.search);
    document.getElementById('sync-status').textContent = 'Fremdriften fra den andre enheten er hentet.';
  }
  for (const box of boxes) {
    box.checked = !!state[labelOf(box)];
    box.addEventListener('change', () => {
      const s = load();
      if (box.checked) s[labelOf(box)] = true; else delete s[labelOf(box)];
      save(s);
      showProgress();
    });
  }
  document.getElementById('reset').addEventListener('click', () => {
    boxes.forEach((b) => (b.checked = false));
    save({});
    showProgress();
  });
  showProgress();
}

// ---------- Print / save as PDF (shown only when JS runs) ----------
const printButton = document.getElementById('print');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}

// ---------- "Åpne på mobilen": QR code and link to this page, with the checked boxes in the fragment ----------
const qrOpen = document.getElementById('qr-open');
const qrDialog = document.getElementById('qr-dialog');
if (qrOpen && qrDialog?.showModal) {
  const urlField = document.getElementById('qr-url');
  const copyStatus = document.getElementById('qr-copy-status');
  qrOpen.hidden = false;
  qrOpen.addEventListener('click', async () => {
    const code = encode(boxes.map((b) => b.checked));
    const url = location.origin + location.pathname + location.search + (code ? `#${PARAM}=${code}` : '');
    const { default: qrcode } = await import('qrcode-generator');
    const qr = qrcode(0, 'M');
    qr.addData(url); // location gives a percent-encoded ASCII URL, so byte mode is safe
    qr.make();
    // White background and black modules from the library, 4-module quiet zone.
    document.getElementById('qr-code').innerHTML = qr.createSvgTag({ cellSize: 1, margin: 4, scalable: true, title: 'QR-kode med lenke til denne siden' });
    urlField.value = url;
    copyStatus.textContent = '';
    qrDialog.showModal();
  });
  document.getElementById('qr-close').addEventListener('click', () => qrDialog.close());
  qrDialog.addEventListener('close', () => qrOpen.focus());
  document.getElementById('qr-copy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(urlField.value);
      copyStatus.textContent = 'Lenken er kopiert.';
    } catch {
      urlField.focus();
      urlField.select();
      copyStatus.textContent = 'Lenken er merket. Kopier den med Ctrl+C.';
    }
  });
}

// ---------- "Hold skjermen på" (Screen Wake Lock), only where the browser supports it ----------
// Not saved between pages: a lock that follows you around drains the battery, so it is a choice per page.
const wakeButton = document.getElementById('wake');
if (wakeButton && 'wakeLock' in navigator) {
  let wanted = false;
  let lock = null;
  const setWanted = (on) => { wanted = on; wakeButton.setAttribute('aria-pressed', String(on)); };
  async function acquire() {
    try {
      lock = await navigator.wakeLock.request('screen');
      lock.addEventListener('release', () => { lock = null; });
      if (!wanted) lock.release(); // switched off while the request was pending
    } catch {
      setWanted(false); // refused, e.g. low battery
    }
  }
  wakeButton.hidden = false;
  wakeButton.addEventListener('click', () => {
    setWanted(!wanted);
    if (wanted) acquire(); else lock?.release();
  });
  // The browser releases the lock when the tab is hidden; take it again when the page is back.
  document.addEventListener('visibilitychange', () => {
    if (wanted && !lock && document.visibilityState === 'visible') acquire();
  });
}

// ---------- Scratch blocks ----------
async function renderScratch() {
  const [{ default: sb }, nb, nn, is, uk] = await Promise.all([
    import('scratchblocks'),
    import('scratchblocks/locales/nb.json'),
    import('scratchblocks/locales/nn.json'),
    import('scratchblocks/locales/is.json'),
    import('scratchblocks/locales/uk.json'),
  ]);
  sb.loadLanguages({ nb: nb.default, nn: nn.default, is: is.default, uk: uk.default });
  // Like codeclub-viewer, all languages are allowed (many nynorsk lessons use bokmål block names),
  // but the page language is tried first.
  const pageLang = lang === 'ua' ? 'uk' : lang;
  const languages = [...new Set([pageLang, 'en', 'nb', 'nn', 'is', 'uk'])];
  for (const [selector, inline] of [['pre.blocks', false], ['code.b', true]]) {
    for (const el of content.querySelectorAll(selector)) {
      const code = inline ? el.textContent.replace(/\n/g, ' ') : el.textContent;
      try {
        const options = { style: 'scratch3', scale: inline ? 0.7 : 0.9, inline, languages };
        const svg = sb.render(sb.parse(code, options), options);
        svg.setAttribute('viewBox', `0 0 ${svg.getAttribute('width')} ${svg.getAttribute('height')}`);
        svg.setAttribute('aria-hidden', 'true');
        el.setAttribute('role', 'img');
        el.setAttribute('aria-label', `Scratch-kode: ${code.trim()}`);
        el.replaceChildren(svg);
        el.classList.add('rendered');
      } catch (e) {
        console.warn('Kunne ikke tegne Scratch-kode', e); // the plain text stays visible
      }
    }
  }
}
if (content?.querySelector('pre.blocks, code.b')) renderScratch();

// ---------- micro:bit blocks, rendered by MakeCode in a hidden iframe (as codeclub-viewer did) ----------
const microbit = [...(content?.querySelectorAll('pre.microbit') ?? [])];
if (microbit.length) {
  const MAKECODE = 'https://makecode.microbit.org';
  const LANGS = { nb: 'nb', nn: 'nn-NO', en: 'en', is: 'is' };
  // MakeCode extensions loaded for code that uses their namespace (namespace: name=github:owner/repo).
  const EXTENSIONS = { wonderbot: 'wonderbot=github:teenne/pxt-wonderbot' };
  const frame = document.createElement('iframe');
  frame.src = `${MAKECODE}/--docs?render=1&lang=${LANGS[lang] || 'nb'}`;
  frame.title = 'MakeCode-tegner';
  frame.setAttribute('aria-hidden', 'true');
  frame.tabIndex = -1;
  frame.style.cssText = 'position:absolute;width:1px;height:1px;left:-9999px;border:0';
  microbit.forEach((pre, i) => (pre.id = `microbit-${i}`));
  let pending = microbit.length;
  window.addEventListener('message', (e) => {
    if (e.origin !== MAKECODE || e.data?.source !== 'makecode') return;
    if (e.data.type === 'renderready') {
      for (const pre of microbit) {
        const code = pre.textContent;
        const pkg = Object.keys(EXTENSIONS).filter((ns) => code.includes(`${ns}.`)).map((ns) => EXTENSIONS[ns]).join(',');
        frame.contentWindow.postMessage({ type: 'renderblocks', id: pre.id, code, options: pkg ? { package: pkg } : {} }, MAKECODE);
      }
    } else if (e.data.type === 'renderblocks') {
      const pre = document.getElementById(e.data.id);
      if (pre && e.data.uri) {
        const img = document.createElement('img');
        img.src = e.data.uri;
        img.width = e.data.width;
        img.height = e.data.height;
        img.alt = `micro:bit-kode: ${pre.textContent.trim()}`;
        img.className = 'microbit-render';
        pre.replaceWith(img);
      }
      if (--pending <= 0) frame.remove();
    }
  });
  document.body.append(frame);
}
