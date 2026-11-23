// Lager HyperFrames-prosjekter for introvideoene fra site/video/kurs/<kurs>.yml.
//
//   node site/video/lag.mjs [kurs ...]          lag prosjekt i site/video/build/<kurs>/
//   node site/video/lag.mjs --render [kurs ...] lag og rendre til site/video/build/out/<kurs>.mp4
//
// Uten kurs lages alle som har manus. Skuddtypene og feltene står i site/video/MANUS.md.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import YAML from 'yaml';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const REPO = path.resolve(HERE, '..', '..');
const BUILD = path.join(HERE, 'build');
const HF = process.env.HYPERFRAMES ?? 'hyperframes';

// Eira-profilen (palett A "Fjord & Ember"). LKK-profilen kommer når den trengs.
const B = {
  canvas: '#F5F2ED', ink: '#1B1B1F', ink2: '#3D3D42', primary: '#1E3A8A', accent: '#FF8A4C', accentInk: '#4A1A00',
  mark: 'eira', kicker: 'Ryfylke · Kodeklubb', url: 'eirahub.no',
};

// ---- små hjelpere ----
const r1 = (x) => Math.round(x * 100) / 100;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const resolveSrc = (p) => (p.startsWith('assets/') ? path.join(HERE, p) : path.join(REPO, p));

// bredde og høyde fra filhodet (PNG og JPEG)
function imageSize(file) {
  const b = fs.readFileSync(file);
  if (b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      const m = b[i + 1], len = b.readUInt16BE(i + 2);
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      i += 2 + len;
    }
  }
  throw new Error(`Kan ikke lese størrelsen på ${file} (bare PNG og JPEG)`);
}

// lesetempo fra RESEARCH.md: 7 tegn/s når kurset har barneskoletrinn, ellers 9
function tempo(kurs) {
  const grades = new Set();
  const add = (f) => { try { (YAML.parse(fs.readFileSync(f, 'utf8'))?.tags?.grade ?? []).forEach((g) => grades.add(g)); } catch {} };
  add(path.join(REPO, 'src', kurs, 'course.yml'));
  if (!grades.size && fs.existsSync(path.join(REPO, 'src', kurs))) for (const d of fs.readdirSync(path.join(REPO, 'src', kurs))) add(path.join(REPO, 'src', kurs, d, 'lesson.yml'));
  return grades.has('primary') || grades.has('secondary') ? 7 : 9;
}

const WORD_IN = 0.13, WORD_GAP = 0.067, ENTER = 0.35, TEXT_OUT = 0.18;
const readTime = (s, cps) => (s.kind === 'end' ? 5 : Math.min(7, Math.max(3, s.text.length / cps) + (s.look ? 1 : 0) + (s.term ? 1 : 0)));
const ENTERS = ['whip', 'zoom', 'whip', 'whip', 'zoom', 'blur', 'blur'];
const CURSOR = '<path d="M4 2 L4 20 L9 15 L12 22 L15 21 L12 14 L19 14 Z" fill="#fff" stroke="#1B1B1F" stroke-width="1.6" stroke-linejoin="round"/>';

function shotHtml(i, s, file, dir) {
  const id = `sh${i}`;
  if (s.kind === 'end') {
    return `<div class="shot" id="${id}">
        <div class="end-bar" id="${id}-bar"></div>
        <div class="end-logos" id="${id}-logos">
          <div class="lockup"><div class="lockrow"><span class="mark">${B.mark}</span><span class="kicker">${B.kicker}</span></div><span class="lockurl">${B.url}</span></div>
          <div class="sep"></div>
          <img class="lkk" src="assets/lkk-logo.png" alt="Lær Kidsa Koding" />
        </div>
      </div>`;
  }
  if (s.kind === 'code') {
    const lines = s.code.replace(/\n+$/, '').split('\n');
    const size = Math.min(46, Math.floor(560 / (lines.length * 1.45)), Math.floor(1500 / (0.6 * Math.max(...lines.map((l) => l.length)))));
    return `<div class="shot" id="${id}">
        <div class="code" style="font-size:${size}px">${lines.map((l, j) => `<div class="cl" id="${id}-l${j}">${esc(l) || '&nbsp;'}</div>`).join('')}</div>
      </div>`;
  }
  if (s.kind === 'snap') {
    const sa = imageSize(resolveSrc(s.a)), sb = imageSize(resolveSrc(s.b));
    const wa = sa[0] * s.scale / 2, ha = sa[1] * s.scale / 2, wb = sb[0] * s.scale / 2, hb = sb[1] * s.scale / 2;
    return `<div class="shot" id="${id}">
        <div class="snapbox" style="width:${wb}px;height:${ha + s.dy * s.scale / 2 + 40}px">
          <img id="${id}-a" src="assets/${file.a}" style="position:absolute;left:0;top:0;width:${wa}px;height:${ha}px" alt="" />
          <img id="${id}-b" src="assets/${file.b}" style="position:absolute;left:0;top:${s.dy * s.scale / 2}px;width:${wb}px;height:${hb}px" alt="" />
          <div class="term" id="${id}-term" style="left:${wb + 30}px;top:${ha * 0.5}px"><span>← ${esc(s.term)}</span></div>
        </div>
      </div>`;
  }
  const nat = s.nat;
  const H = s.H ?? 560;
  const W = Math.round(nat[0] * (H / nat[1]));
  const panned = !!s.pan;
  const frameW = panned ? 1400 : W + (s.plain ? 0 : 64);
  const frameH = panned ? H : H + (s.plain ? 0 : 40);
  const imgW = panned ? Math.round(1400 * s.pan.scale) : W;
  const imgH = panned ? Math.round(imgW * nat[1] / nat[0]) : H;
  const kk = imgH / nat[1];
  const over = [];
  (s.sprites ?? []).forEach((sp, j) => {
    const [x, y, w, h] = sp.rect;
    fs.copyFileSync(resolveSrc(sp.cut), path.join(dir, 'assets', path.basename(sp.cut)));
    over.push(`<div class="sprite" id="${id}-sp${j}" style="left:${x * kk}px;top:${y * kk}px;width:${w * kk}px;height:${h * kk}px;background-image:url(assets/${path.basename(sp.cut)})"></div>`);
  });
  if (s.snow) {
    let seed = 7 + i; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    s._snow = [];
    for (let j = 0; j < s.snow; j++) {
      const sz = 6 + Math.round(rnd() * 10);
      s._snow.push({ fall: 2.6 + rnd() * 2.4, delay: rnd() * 2.5, drift: Math.round((rnd() - 0.5) * 60) });
      over.push(`<div class="flake" id="${id}-f${j}" style="left:${Math.round(rnd() * imgW)}px;top:-20px;width:${sz}px;height:${sz}px"></div>`);
    }
  }
  if (s.glow) over.push(`<div class="glow" id="${id}-glow" style="left:${s.glow.x * imgW}px;top:${s.glow.y * imgH}px;background:radial-gradient(circle, rgba(${s.glow.color},0.75) 0%, rgba(${s.glow.color},0.35) 35%, rgba(${s.glow.color},0) 70%)"></div>`);
  (s.pieces ?? []).forEach((pc, j) => {
    const d = pc.map(([x0, y0, x1, y1]) => `M ${r1(x0 * kk)} ${r1(y0 * kk)} H ${r1(x1 * kk)} V ${r1(y1 * kk)} H ${r1(x0 * kk)} Z`).join(' ');
    over.push(`<div class="piece" id="${id}-pc${j}"><img src="assets/${file.src}" style="width:${imgW}px;height:${imgH}px;clip-path:path('${d}')" alt="" /><svg class="cursor" id="${id}-cu${j}" style="left:${pc[0][0] * kk + 40}px;top:${pc[0][1] * kk + 34}px" viewBox="0 0 24 24" width="44" height="44">${CURSOR}</svg></div>`);
  });
  if (s.term) over.push(`<div class="term" id="${id}-term" style="left:${s.term.x * imgW}px;top:${s.term.y * imgH}px"><span>${s.term.up ? '↑' : '←'} ${esc(s.term.word)}</span></div>`);
  return `<div class="shot" id="${id}">
        <div class="frame${s.plain ? ' plain' : ''}" id="${id}-frame" style="width:${frameW}px;height:${frameH}px">
          <div class="cam" id="${id}-cam" style="width:${imgW}px;height:${imgH}px${panned ? ';position:absolute;left:0;top:0' : ''}">
            <img id="${id}-img" src="assets/${file.src}" style="width:${imgW}px;height:${imgH}px" alt="" />
            ${over.join('\n            ')}
          </div>
        </div>
      </div>`;
}

export function build(kurs) {
  const manus = YAML.parse(fs.readFileSync(path.join(HERE, 'kurs', `${kurs}.yml`), 'utf8'));
  const cps = manus.tempo ?? tempo(kurs);
  const shots = manus.skudd.map((s) => ({ ...s }));
  if (shots.at(-1)?.kind !== 'end') shots.push({ kind: 'end', text: 'Hva vil du lage?' });
  const dir = path.join(BUILD, kurs);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(path.join(dir, 'assets', 'fonts'), { recursive: true });
  for (const f of ['baloo-2-latin-700-normal.woff2', 'inter-latin-wght-normal.woff2'])
    fs.copyFileSync(path.join(REPO, 'site/public/fonts', f), path.join(dir, 'assets/fonts', f));
  fs.copyFileSync(path.join(REPO, 'site/profiles/lkk/public/lkk-logo.png'), path.join(dir, 'assets/lkk-logo.png'));

  const html = [], caps = [], js = [], starts = [];
  let t = 0;
  shots.forEach((s, i) => {
    if (i > 0 && !s.enter) s.enter = ENTERS[(i - 1) % ENTERS.length];
    if (s.kind === 'logo') { s.kind = 'image'; s.src = `src/${s.course}/logo-black.png`; s.plain = true; s.H = s.H ?? 340; }
    if (!s.kind) s.kind = 'image';
    const file = {};
    const copy = (p, name) => { fs.copyFileSync(resolveSrc(p), path.join(dir, 'assets', name)); return name; };
    if (s.src) { file.src = copy(s.src, `sh${i}${path.extname(s.src)}`); s.nat = imageSize(resolveSrc(s.src)); }
    if (s.a) { file.a = copy(s.a, `sh${i}a.png`); file.b = copy(s.b, `sh${i}b.png`); }
    html.push(shotHtml(i, s, file, dir));
    const words = s.text.split(' ');
    caps.push(`<div class="cap${s.kind === 'end' ? ' endq' : ''}" id="cap${i}">${words.map((w) => `<span class="w">${esc(w)}</span>`).join(' ')}</div>`);
    const textAt = i === 0 ? 0.2 : ENTER;
    const landed = textAt + WORD_GAP * (words.length - 1) + WORD_IN;
    let dur = landed + readTime(s, cps) + 0.25;
    // kode og klosser skal rekke å bli ferdige før teksten går
    if (s.kind === 'code') dur = Math.max(dur, 0.5 + s.code.length * 0.022 + 2.2);
    if (s.pieces) dur = Math.max(dur, 0.6 + s.pieces.length * 0.55 + 2.0);
    starts.push({ t, dur: r1(dur), textAt, s, i });
    t = r1(t + dur);
  });
  const total = t;

  starts.forEach(({ t, dur, textAt, s, i }, n) => {
    const id = `#sh${i}`;
    const next = starts[n + 1];
    js.push(`// ${i}: ${s.text}`);
    js.push(`tl.set("${id}", { opacity: ${i === 0 ? 1 : 0} }, 0);`);
    if (i > 0) {
      if (s.enter === 'whip') js.push(`tl.fromTo("${id}", { opacity: 1, x: 1500, filter: "blur(18px)" }, { x: 0, filter: "blur(0px)", duration: 0.45, ease: "expo.out" }, ${t});`);
      else if (s.enter === 'zoom') js.push(`tl.fromTo("${id}", { opacity: 0, scale: 0.82, filter: "blur(10px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "expo.out" }, ${r1(t + 0.12)});`);
      else js.push(`tl.fromTo("${id}", { opacity: 0, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.25, ease: "power2.out" }, ${r1(t + 0.1)});`);
    }
    js.push(`tl.fromTo("#cap${i} .w", { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: ${WORD_IN}, stagger: ${WORD_GAP}, ease: "power2.out" }, ${r1(t + textAt)});`);
    if (next) {
      js.push(`tl.to("#cap${i}", { opacity: 0, filter: "blur(8px)", duration: ${TEXT_OUT}, ease: "power2.in" }, ${r1(next.t - TEXT_OUT)});`);
      const at = next.t;
      if (next.s.enter === 'whip') js.push(`tl.to("${id}", { x: -1500, filter: "blur(18px)", duration: 0.3, ease: "power3.in" }, ${r1(at - 0.15)});`);
      else if (next.s.enter === 'zoom') js.push(`tl.to("${id}", { scale: 1.7, opacity: 0, filter: "blur(14px)", duration: 0.4, ease: "power3.in" }, ${at});`);
      else js.push(`tl.to("${id}", { opacity: 0, filter: "blur(8px)", duration: 0.2, ease: "power2.in" }, ${at});`);
      js.push(`tl.set("${id}", { opacity: 0 }, ${r1(at + 0.45)});`);
    }
    const T0 = t + (i === 0 ? 0 : 0.4);
    const k = s.pan ? (1400 * s.pan.scale) / s.nat[0] : (s.H ?? 560) / (s.nat?.[1] ?? 1);
    (s.sprites ?? []).forEach((sp, j) => {
      const sel = `${id}-sp${j}`;
      if (sp.fly) {
        let at = T0 + (sp.start ?? 0.3);
        for (let m = 0; m < sp.fly; m++) {
          js.push(`tl.to("${sel}", { y: ${-Math.round(70 * k)}, rotation: -18, duration: 0.28, ease: "power2.out" }, ${r1(at)});`);
          js.push(`tl.to("${sel}", { y: ${Math.round(10 * k)}, rotation: 22, duration: 0.42, ease: "power2.in" }, ${r1(at + 0.28)});`);
          at += 0.7;
        }
      } else if (sp.hop) {
        js.push(`tl.fromTo("${sel}", { y: 0 }, { y: -${Math.round(sp.hop * k)}, duration: 0.32, ease: "power2.out", yoyo: true, repeat: 5 }, ${r1(T0 + (sp.start ?? 0.5))});`);
      } else {
        let at = T0 + (sp.start ?? 0.4);
        js.push(`tl.set("${sel}", { x: 0, y: 0 }, ${r1(t)});`);
        for (const [dx, dy] of sp.path) {
          js.push(`tl.to("${sel}", { x: ${Math.round(dx * k)}, y: ${Math.round(dy * k)}${sp.spin ? ', rotation: 540' : ''}, duration: ${sp.seg ?? 0.9}, ease: "${sp.spin ? 'power2.out' : 'power1.inOut'}" }, ${r1(at)});`);
          at += sp.seg ?? 0.9;
        }
      }
    });
    (s._snow ?? []).forEach(({ fall, delay, drift }, j) => {
      const h = Math.round(s.nat[1] * k) + 40;
      js.push(`tl.fromTo("${id}-f${j}", { y: 0, x: 0 }, { y: ${h}, x: ${drift}, duration: ${r1(fall)}, ease: "none", repeat: ${Math.ceil(dur / fall)} }, ${r1(t + delay * 0.4)});`);
    });
    if (s.pieces) {
      const DRAG = 0.6, GAP = 0.55;
      js.push(`tl.set("${id}-img", { opacity: 0 }, ${r1(t)});`);
      s.pieces.forEach((pc, j) => {
        const at = r1(T0 + 0.1 + j * GAP);
        js.push(`tl.set("${id}-pc${j}", { opacity: 0 }, ${r1(t)});`);
        js.push(`tl.fromTo("${id}-pc${j}", { opacity: 1, x: -1100, y: 90, rotation: -4, scale: 1.04, filter: "drop-shadow(0px 16px 14px rgba(0,0,0,0.28))" }, { x: 0, y: 0, rotation: 0, scale: 1, filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))", duration: ${DRAG}, ease: "power3.out", immediateRender: false }, ${at});`);
        js.push(`tl.to("${id}-cu${j}", { opacity: 0, duration: 0.15 }, ${r1(at + DRAG + 0.05)});`);
      });
      const done = r1(T0 + 0.1 + (s.pieces.length - 1) * GAP + DRAG + 0.1);
      js.push(`tl.set("${id}-img", { opacity: 1 }, ${done});`);
      js.push(`tl.set("${id} .piece", { opacity: 0 }, ${done});`);
    }
    if (s.pan) {
      const imgW = 1400 * s.pan.scale, imgH = imgW * s.nat[1] / s.nat[0], H = s.H ?? 560;
      const pos = ([fx, fy]) => ({ x: Math.round(700 - fx * imgW), y: Math.round(H / 2 - fy * imgH) });
      const a = pos(s.pan.from), b = pos(s.pan.to);
      js.push(`tl.fromTo("${id}-cam", { x: ${a.x}, y: ${a.y} }, { x: ${b.x}, y: ${b.y}, duration: ${s.pan.duration ?? 1.6}, ease: "power2.inOut" }, ${r1(T0 + 0.2)});`);
    }
    if (s.glow) js.push(`tl.fromTo("${id}-glow", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1.15, duration: 0.45, ease: "power2.inOut", yoyo: true, repeat: 5 }, ${r1(T0 + 0.6)});`);
    if (s.kind === 'snap') {
      js.push(`tl.fromTo("${id}-a", { x: -260, y: -60, rotation: -6 }, { x: 0, y: 0, rotation: 0, duration: 0.7, ease: "expo.out" }, ${r1(T0)});`);
      js.push(`tl.fromTo("${id}-b", { x: 420, y: 160, rotation: 8 }, { x: 0, y: 0, rotation: 0, duration: 0.6, ease: "back.out(1.4)" }, ${r1(T0 + 0.9)});`);
    }
    if (s.kind === 'code') {
      let at = T0 + 0.1;
      s.code.replace(/\n+$/, '').split('\n').forEach((l, j) => {
        const n = Math.max(l.length, 1);
        // a film that opens on code shows its first line at frame 0, so the poster is not empty
        if (i === 0 && j === 0) { js.push(`tl.set("${id}-l0", { clipPath: "inset(0% 0% 0% 0%)" }, 0);`); return; }
        js.push(`tl.fromTo("${id}-l${j}", { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: ${r1(n * 0.022)}, ease: "steps(${n})" }, ${r1(at)});`);
        at += n * 0.022 + 0.08;
      });
    }
    if (s.term) js.push(`tl.fromTo("${id}-term span", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" }, ${r1(T0 + (s.kind === 'snap' ? 1.7 : 1.0))});`);
    if (s.kind === 'end') {
      js.push(`tl.fromTo("${id}-bar", { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: "expo.out" }, ${r1(t + 0.5)});`);
      js.push(`tl.fromTo("${id}-logos", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, ${r1(t + 0.8)});`);
    }
  });

  fs.writeFileSync(path.join(dir, 'index.html'), `<!doctype html>
<html lang="nb">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
    <style>
      @font-face { font-family: "Baloo 2"; font-weight: 700; src: url("assets/fonts/baloo-2-latin-700-normal.woff2") format("woff2"); }
      @font-face { font-family: "Inter"; font-weight: 100 900; src: url("assets/fonts/inter-latin-wght-normal.woff2") format("woff2"); }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body { margin: 0; width: 1920px; height: 1080px; overflow: hidden; background: ${B.canvas}; }
      #root { position: relative; width: 1920px; height: 1080px; overflow: hidden; font-family: "Inter", sans-serif; background: ${B.canvas}; }
      .shot { position: absolute; left: 0; top: 70px; width: 1920px; height: 660px; display: flex; align-items: center; justify-content: center; }
      .frame { position: relative; overflow: hidden; border-radius: 32px; background: #fff; box-shadow: 0 10px 34px rgba(30,58,138,0.18); display: flex; align-items: center; justify-content: center; }
      .frame.plain { background: transparent; box-shadow: none; border-radius: 0; overflow: visible; }
      .cam { position: relative; flex: none; }
      .cam img { display: block; }
      .sprite { position: absolute; background-repeat: no-repeat; background-size: 100% 100%; }
      .flake { position: absolute; border-radius: 50%; background: #fff; box-shadow: 0 0 6px rgba(255,255,255,0.9); }
      .glow { position: absolute; width: 360px; height: 360px; margin: -180px 0 0 -180px; border-radius: 50%; mix-blend-mode: screen; }
      .piece { position: absolute; left: 0; top: 0; transform-origin: 20% 20%; }
      .piece img { display: block; }
      .cursor { position: absolute; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.35)); }
      .snapbox { position: relative; }
      .term { position: absolute; transform: translate(0, -50%); white-space: nowrap; }
      .term span { display: inline-block; padding: 10px 26px; border-radius: 999px; background: ${B.accent}; color: ${B.accentInk}; font: 700 44px/1.2 "Baloo 2", sans-serif; box-shadow: 0 6px 18px rgba(0,0,0,0.18); }
      .code { max-width: 1600px; padding: 50px 60px; border-radius: 28px; background: #1B1B1F; box-shadow: 0 10px 34px rgba(30,58,138,0.18); }
      .cl { font-family: "DejaVu Sans Mono", monospace; font-weight: 600; line-height: 1.45; color: #FFD7BF; white-space: pre; clip-path: inset(0% 100% 0% 0%); }
      .cap { position: absolute; left: 192px; right: 192px; top: 800px; text-align: center; font: 700 76px/1.3 "Baloo 2", sans-serif; color: ${B.ink}; }
      .cap.endq { top: 240px; font-size: 128px; }
      .w { display: inline-block; opacity: 0; }
      .end-bar { position: absolute; left: 860px; top: 340px; width: 200px; height: 12px; border-radius: 6px; background: ${B.accent}; }
      .end-logos { position: absolute; left: 192px; right: 192px; top: 430px; display: flex; align-items: center; justify-content: center; gap: 96px; }
      .lockup { display: flex; flex-direction: column; gap: 14px; color: ${B.primary}; }
      .lockrow { display: flex; align-items: baseline; gap: 22px; }
      .mark { font: 700 132px/1 "Baloo 2", sans-serif; letter-spacing: -0.015em; }
      .kicker { font: 700 30px/1 "Inter", sans-serif; letter-spacing: 0.28em; text-transform: uppercase; color: ${B.ink2}; padding-bottom: 14px; }
      .lockurl { font: 500 40px/1.2 "Inter", sans-serif; color: ${B.ink2}; }
      .sep { width: 4px; height: 150px; background: ${B.ink2}; opacity: 0.25; border-radius: 2px; }
      .lkk { height: 210px; width: auto; display: block; }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="${total}" data-width="1920" data-height="1080">
      ${html.join('\n      ')}
      ${caps.join('\n      ')}
    </div>
    <script>
      const tl = gsap.timeline({ paused: true });
      ${js.join('\n      ')}
      tl.set({}, {}, ${total});
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
`);
  fs.writeFileSync(path.join(dir, 'hyperframes.json'), JSON.stringify({ $schema: 'https://hyperframes.heygen.com/schema/hyperframes.json', paths: { assets: 'assets' } }, null, 2));
  fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify({ id: kurs, name: `intro-${kurs}` }));
  // tekstversjonen til kurssiden: de samme setningene som i videoen
  fs.writeFileSync(path.join(dir, 'tekst.txt'), shots.map((s) => s.text).join('\n') + '\n');
  return { dir, total };
}

const args = process.argv.slice(2);
const render = args.includes('--render');
const list = args.filter((a) => !a.startsWith('--'));
const all = fs.readdirSync(path.join(HERE, 'kurs')).filter((f) => f.endsWith('.yml')).map((f) => f.replace(/\.yml$/, '')).sort();
for (const kurs of list.length ? list : all) {
  const { dir, total } = build(kurs);
  console.log(`${kurs}: ${total} s`);
  if (render) {
    fs.mkdirSync(path.join(BUILD, 'out'), { recursive: true });
    const raw = path.join(BUILD, 'out', `${kurs}.raw.mp4`), out = path.join(BUILD, 'out', `${kurs}.mp4`);
    execFileSync(HF, ['render', '--quality', 'looks', '-o', raw], { cwd: dir, stdio: 'inherit', shell: HF.includes(' ') });
    // web: H.264, uten lyd, faststart
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', raw, '-c:v', 'libx264', '-crf', '28', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', out]);
    fs.rmSync(raw);
  }
}
