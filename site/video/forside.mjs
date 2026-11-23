// Forsidevideoen: "Alt starter med én kloss". node site/video/forside.mjs lager site/video/build/forside/.
// Front-page film, storyline A: one block becomes everything.
// A wall of course tiles; the camera travels through it (whip pans along a row, zoom out/in between
// rows), each tile has motion inside it, then the camera pulls out to the whole wall.
import fs from 'node:fs';
import { B, SUF } from './merke.mjs';
import path from 'node:path';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const REPO = path.resolve(HERE, '..', '..');
const ASSETS = path.join(HERE, 'assets');
const src = (p) => (p.startsWith('a:') ? path.join(ASSETS, p.slice(2)) : path.join(REPO, 'src', p));

// visit order; grid position follows a snake through a 3x3 wall
const TILES = [
  { label: 'Scratch', img: 'scratch/astrokatt/astrokatt.png', nat: [480, 360], fx: 'scratch' },
  { label: 'Python', kind: 'koch', fx: 'koch' },
  { label: 'micro:bit', img: 'microbit/pxt_hermegaasa/hermegaasa.png', nat: [2500, 1875], fx: 'blink' },
  { label: 'Roboter', img: 'a:dash.jpg', nat: [1600, 1082], fx: 'glow', glow: [0.66, 0.33, '0, 230, 60'] },
  { label: 'Minecraft', img: 'minecraft_mod/oppforsel/08-rubinstav-lyn.png', nat: [854, 480], fx: 'flash' },
  { label: 'Spill', img: 'a:jafsefisk_clean.png', nat: [962, 708], fx: 'shark' },
  { label: 'Nettsider', kind: 'html', fx: 'type' },
  { label: 'Animasjon', img: 'scratch/julekort/julekort.png', nat: [470, 344], fx: 'snow' },
  { label: 'Elektronikk', img: 'arduino/blinkende_lysdiode/blinker.png', nat: [1960, 775], fx: 'glow', glow: [0.70, 0.22, '40, 255, 90'] },
];
// Koch snowflake, level 3: what the turtle draws in the Python lesson skilpaddefraktaler
function koch(level) {
  let pts = [[0, 0], [1, 0], [0.5, -Math.sqrt(3) / 2], [0, 0]].map(([x, y]) => [x, -y]);
  for (let l = 0; l < level; l++) {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
      const dx = (bx - ax) / 3, dy = (by - ay) / 3;
      const p1 = [ax + dx, ay + dy], p3 = [ax + 2 * dx, ay + 2 * dy];
      const c = Math.cos(-Math.PI / 3), sn = Math.sin(-Math.PI / 3);
      const p2 = [p1[0] + dx * c - dy * sn, p1[1] + dx * sn + dy * c];
      out.push([ax, ay], p1, p2, p3);
    }
    out.push(pts[pts.length - 1]);
    pts = out;
  }
  return pts;
}
const HTML_LINES = [
  ['&lt;h1&gt;Hei, verden!&lt;/h1&gt;', 21],
  ['&lt;p&gt;Dette er min første nettside.&lt;/p&gt;', 39],
  ['&lt;button&gt;Trykk her&lt;/button&gt;', 26],
];
const SNAKE = [[0, 0], [1, 0], [2, 0], [2, 1], [1, 1], [0, 1], [0, 2], [1, 2], [2, 2]];
const TW = 1920, TH = 1080, GAP = 140;
const BOX = { x: 80, y: 190, w: 1760, h: 820 }; // image box inside a tile
const HOLD_S = 0.9; // camera scale while a tile is in view (its edges and neighbours show)
const r2 = (x) => Math.round(x * 100) / 100;

const dir = path.join(HERE, 'build', 'forside' + SUF);
fs.rmSync(dir, { recursive: true, force: true });
fs.mkdirSync(path.join(dir, 'assets', 'fonts'), { recursive: true });
for (const f of ['baloo-2-latin-700-normal.woff2', 'inter-latin-wght-normal.woff2'])
  fs.copyFileSync(path.join(REPO, 'site/public/fonts', f), path.join(dir, 'assets/fonts', f));
fs.copyFileSync(path.join(REPO, 'site/profiles/lkk/public/lkk-logo.png'), path.join(dir, 'assets/lkk-logo.png'));
fs.copyFileSync(path.join(ASSETS, 'sk0.png'), path.join(dir, 'assets/block.png'));

const center = ([c, r]) => ({ x: c * (TW + GAP) + TW / 2, y: r * (TH + GAP) + TH / 2 });
const cam = (p, s) => ({ x: Math.round(960 - s * p.x), y: Math.round(540 - s * p.y), scale: s });
const fit = (nat) => {
  const k = Math.min(BOX.w / nat[0], BOX.h / nat[1]);
  const w = nat[0] * k, h = nat[1] * k;
  return { w: Math.round(w), h: Math.round(h), x: Math.round(BOX.x + (BOX.w - w) / 2), y: Math.round(BOX.y + (BOX.h - h) / 2), k };
};

const tiles = [];
TILES.forEach((t, i) => {
  const [c, r] = SNAKE[i];
  const extra = [];
  if (t.kind) {
    let body = '';
    if (t.kind === 'koch') {
      const pts = koch(3);
      const xs = pts.map((q) => q[0]), ys = pts.map((q) => q[1]);
      const minX = Math.min(...xs), minY = Math.min(...ys), sc = 760 / (Math.max(...ys) - minY);
      const w = (Math.max(...xs) - minX) * sc;
      const ox = BOX.x + (BOX.w - w) / 2, oy = BOX.y + 30;
      const d = pts.map((q, j) => `${j ? 'L' : 'M'}${r2(ox + (q[0] - minX) * sc)} ${r2(oy + (q[1] - minY) * sc)}`).join(' ') + ' Z';
      let len = 0; for (let j = 1; j < pts.length; j++) len += Math.hypot(pts[j][0] - pts[j - 1][0], pts[j][1] - pts[j - 1][1]) * sc;
      body = `<svg class="koch" width="${TW}" height="${TH}" viewBox="0 0 ${TW} ${TH}"><path id="koch" d="${d}" fill="none" stroke="${B.primary}" stroke-width="7" stroke-linejoin="round" stroke-dasharray="${Math.ceil(len)}" stroke-dashoffset="${Math.ceil(len)}" data-len="${Math.ceil(len)}"/></svg>`;
    } else {
      body = `<div class="code" style="left:${BOX.x}px;top:${BOX.y}px;width:${BOX.w * 0.56}px;height:${BOX.h}px">${HTML_LINES.map(([l], j) => `<div class="cl" id="cl${j}">${l}</div>`).join('')}</div>
          <div class="result" style="left:${BOX.x + BOX.w * 0.58}px;top:${BOX.y}px;width:${BOX.w * 0.42}px;height:${BOX.h}px">
            <h1 id="r0">Hei, verden!</h1><p id="r1">Dette er min første nettside.</p><button id="r2">Trykk her</button></div>`;
    }
    tiles.push(`<div class="tile" id="tile${i}" style="left:${c * (TW + GAP)}px;top:${r * (TH + GAP)}px">
          <div class="label" id="label${i}">${t.label}</div>
          ${body}
        </div>`);
    return;
  }
  const name = `t${i}${path.extname(t.img)}`;
  fs.copyFileSync(src(t.img), path.join(dir, 'assets', name));
  const f = fit(t.nat);
  if (t.fx === 'scratch') {
    // the cat is cut out as a sprite; a black patch hides where it stood
    const [cx, cy, cw, ch] = [8, 14, 236, 346];
    extra.push(`<div class="patch" style="left:${f.x + cx * f.k}px;top:${f.y + cy * f.k}px;width:${cw * f.k}px;height:${ch * f.k}px;background:#000"></div>`);
    extra.push(`<div class="sprite" id="cat" style="left:${f.x + cx * f.k}px;top:${f.y + cy * f.k}px;width:${cw * f.k}px;height:${ch * f.k}px;background-image:url(assets/${name});background-size:${f.w}px ${f.h}px;background-position:-${cx * f.k}px -${cy * f.k}px"></div>`);
  }
  if (t.fx === 'flash') extra.push(`<div class="flash" id="flash${i}" style="left:${f.x}px;top:${f.y}px;width:${f.w}px;height:${f.h}px"></div>`);
  if (t.fx === 'shark') {
    const [sx, sy, sw, sh, cdx] = [78, 330, 318, 218, 290];
    // the base image is inpainted where the shark was (pilot-assets/jafsefisk_clean.png)
    fs.copyFileSync(path.join(ASSETS, 'shark.png'), path.join(dir, 'assets', 'shark.png'));
    extra.push(`<div class="sprite" id="shark" style="left:${f.x + 92 * f.k}px;top:${f.y + 342 * f.k}px;width:${294 * f.k}px;height:${196 * f.k}px;background-image:url(assets/shark.png);background-size:100% 100%"></div>`);
  }
  if (t.fx === 'snow') {
    let seed = 11; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let j = 0; j < 40; j++) { const sz = 8 + Math.round(rnd() * 12); extra.push(`<div class="flake" id="fl${j}" data-fall="${r2(2.2 + rnd() * 2)}" data-delay="${r2(rnd() * 1.2)}" data-drift="${Math.round((rnd() - 0.5) * 80)}" style="left:${Math.round(f.x + rnd() * f.w)}px;top:${f.y - 10}px;width:${sz}px;height:${sz}px"></div>`); }
  }
  if (t.glow) {
    const [gx, gy, col] = t.glow;
    extra.push(`<div class="glow" id="glow${i}" style="left:${f.x + gx * f.w}px;top:${f.y + gy * f.h}px;background:radial-gradient(circle, rgba(${col},0.8) 0%, rgba(${col},0.35) 35%, rgba(${col},0) 70%)"></div>`);
  }
  tiles.push(`<div class="tile" id="tile${i}" style="left:${c * (TW + GAP)}px;top:${r * (TH + GAP)}px">
          <div class="label" id="label${i}">${t.label}</div>
          <div class="pic" id="pic${i}" style="left:${f.x}px;top:${f.y}px;width:${f.w}px;height:${f.h}px"><img id="img${i}" src="assets/${name}" alt="" /></div>
          ${extra.join('\n          ')}
        </div>`);
});
const WORLD_W = 3 * TW + 2 * GAP, WORLD_H = 3 * TH + 2 * GAP;

const s_kochLen = (tiles.join('').match(/data-len="(\d+)"/) || [])[1];
const flakeData = [...tiles.join('').matchAll(/id="fl(\d+)" data-fall="([\d.]+)" data-delay="([\d.]+)" data-drift="(-?\d+)"/g)];
function document_snow(js, at) {
  for (const [, j, fall, delay, drift] of flakeData)
    js.push(`tl.fromTo("#fl${j}", { y: 0, x: 0, opacity: 1 }, { y: 820, x: ${drift}, duration: ${fall}, ease: "none", repeat: 1 }, ${r2(at - 0.6 + +delay)});`);
}
// ---- timeline ----
const js = [];
const p0 = center(SNAKE[0]);
const c0 = cam(p0, HOLD_S);
js.push(`tl.set("#world", ${JSON.stringify(c0)}, 0);`);
// intro: an empty frame; one block is dragged in and clicks into place
js.push(`tl.fromTo("#blockwrap", { x: -1300, y: 160, rotation: -6 }, { x: 0, y: 0, rotation: 0, duration: 0.9, ease: "power3.out" }, 0.3);`);
js.push(`tl.fromTo("#bcursor", { opacity: 1 }, { opacity: 0, duration: 0.15 }, 1.35);`);
// the block is clicked three times; each click the cat takes a step (gå 10 steg)
for (let k = 0; k < 3; k++) {
  const at = 2.3 + k * 0.55;
  js.push(`tl.fromTo("#blockimg", { filter: "brightness(1)" }, { filter: "brightness(1.35)", duration: 0.12, yoyo: true, repeat: 1 }, ${r2(at)});`);
  js.push(`tl.to("#cat", { x: ${(k + 1) * 70}, duration: 0.25, ease: "power2.out" }, ${r2(at + 0.05)});`);
}
// the tile builds around the block
js.push(`tl.fromTo(["#tile0 .bg", "#pic0", "#tile0 .patch", "#cat"], { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.5, ease: "expo.out" }, 1.6);`);
js.push(`tl.fromTo("#label0", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: "expo.out" }, 1.9);`);
// the block flies into its corner of the tile as the camera leaves
js.push(`tl.to("#blockwrap", { opacity: 0, duration: 0.3 }, 4.6);`);

let t = 4.6;
const MOVE_ROW = 0.55, MOVE_ZOOM = 1.2, HOLD = 2.0;
for (let i = 1; i < TILES.length; i++) {
  const sameRow = SNAKE[i][1] === SNAKE[i - 1][1];
  const to = cam(center(SNAKE[i]), HOLD_S);
  if (sameRow) {
    js.push(`tl.to("#world", { x: ${to.x}, y: ${to.y}, duration: ${MOVE_ROW}, ease: "power3.inOut" }, ${r2(t)});`);
    js.push(`tl.fromTo("#world", { filter: "blur(0px)" }, { filter: "blur(14px)", duration: ${MOVE_ROW / 2}, ease: "power2.in", yoyo: true, repeat: 1 }, ${r2(t)});`);
    t += MOVE_ROW;
  } else {
    const a = center(SNAKE[i - 1]), b = center(SNAKE[i]);
    const mid = cam({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, 0.42);
    js.push(`tl.to("#world", { x: ${mid.x}, y: ${mid.y}, scale: ${mid.scale}, duration: ${MOVE_ZOOM / 2}, ease: "power2.in" }, ${r2(t)});`);
    js.push(`tl.to("#world", { x: ${to.x}, y: ${to.y}, scale: ${to.scale}, duration: ${MOVE_ZOOM / 2}, ease: "expo.out" }, ${r2(t + MOVE_ZOOM / 2)});`);
    t += MOVE_ZOOM;
  }
  const fx = TILES[i].fx, at = r2(t - 0.15);
  js.push(`tl.fromTo("#label${i}", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35, ease: "expo.out" }, ${at});`);
  if (fx === 'koch') { const L = s_kochLen; js.push(`tl.fromTo("#koch", { strokeDashoffset: ${'${L}'} }, { strokeDashoffset: 0, duration: 2.0, ease: "power1.inOut" }, ${'${at}'});`.replace('${L}', L).replace('${at}', at)); }
  if (fx === 'flash') js.push(`tl.fromTo("#flash${i}", { opacity: 0 }, { opacity: 0.85, duration: 0.08, yoyo: true, repeat: 3, ease: "none" }, ${r2(at + 0.3)});`);
  if (fx === 'shark') js.push(`tl.to("#shark", { x: 300, y: 25, duration: 1.3, ease: "power2.inOut" }, ${r2(at + 0.1)});`);
  if (fx === 'snow') document_snow(js, at);
  if (fx === 'type') {
    let tt = at;
    HTML_LINES.forEach(([, n], j) => {
      js.push(`tl.fromTo("#cl${j}", { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: ${r2(n * 0.022)}, ease: "steps(${n})" }, ${r2(tt)});`);
      tt += n * 0.022;
      js.push(`tl.fromTo("#r${j}", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3, ease: "expo.out" }, ${r2(tt)});`);
      tt += 0.12;
    });
    js.push(`tl.fromTo("#r2", { scale: 1 }, { scale: 0.92, duration: 0.1, yoyo: true, repeat: 1 }, ${r2(tt + 0.3)});`);
  }
  if (fx === 'draw') js.push(`tl.fromTo("#img${i}", { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(75% at 50% 50%)", duration: 1.4, ease: "power2.inOut" }, ${at});`);
  if (fx === 'blink') js.push(`tl.fromTo("#img${i}", { filter: "brightness(0.85)" }, { filter: "brightness(1.3)", duration: 0.3, yoyo: true, repeat: 5 }, ${at});`);
  if (fx === 'glow') js.push(`tl.fromTo("#glow${i}", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1.15, duration: 0.35, ease: "power2.inOut", yoyo: true, repeat: 5 }, ${at});`);
  if (fx === 'punch') js.push(`tl.fromTo("#img${i}", { scale: 1 }, { scale: 1.3, duration: 0.5, ease: "power3.out" }, ${r2(at + 0.6)});`);
  if (fx === 'hop') js.push(`tl.fromTo("#img${i}", { y: 0 }, { y: -26, duration: 0.22, ease: "power2.out", yoyo: true, repeat: 5 }, ${at});`);
  if (fx === 'wipe') js.push(`tl.fromTo("#img${i}", { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "steps(26)" }, ${at});`);
  if (fx === 'hue') js.push(`tl.fromTo("#img${i}", { filter: "hue-rotate(0deg)" }, { filter: "hue-rotate(140deg)", duration: 1.6, ease: "power1.inOut" }, ${at});`);
  t += HOLD;
}
// pull all the way out: the whole wall
const wall = cam({ x: WORLD_W / 2, y: WORLD_H / 2 }, 0.29);
js.push(`tl.to("#world", { x: ${wall.x}, y: ${wall.y}, scale: ${wall.scale}, duration: 1.4, ease: "power2.inOut" }, ${r2(t)});`);
t += 1.6;
js.push(`tl.to("#world", { opacity: 0.18, filter: "blur(4px)", duration: 0.5, ease: "power2.out" }, ${r2(t)});`);
js.push(`tl.fromTo("#line .w", { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.13, stagger: 0.067, ease: "power2.out" }, ${r2(t + 0.2)});`);
t += 0.2 + 0.067 * 4 + 0.13 + 3.6; // reading time for 25 characters at 7 cps
js.push(`tl.to("#line", { opacity: 0, filter: "blur(8px)", duration: 0.2, ease: "power2.in" }, ${r2(t)});`);
js.push(`tl.to("#world", { opacity: 0, duration: 0.3 }, ${r2(t)});`);
t += 0.25;
js.push(`tl.fromTo("#end-q .w", { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.13, stagger: 0.067, ease: "power2.out" }, ${r2(t)});`);
js.push(`tl.fromTo("#end-bar", { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: "expo.out" }, ${r2(t + 0.4)});`);
js.push(`tl.fromTo("#end-logos", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, ${r2(t + 0.7)});`);
t = r2(t + 5);

const words = (s) => s.split(' ').map((w) => `<span class="w">${w}</span>`).join(' ');
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
      html, body { width: 1920px; height: 1080px; overflow: hidden; background: ${B.canvas}; }
      #root { position: relative; width: 1920px; height: 1080px; overflow: hidden; background: ${B.canvas}; font-family: "Inter", sans-serif; }
      #world { position: absolute; left: 0; top: 0; width: ${WORLD_W}px; height: ${WORLD_H}px; transform-origin: 0 0; }
      .tile { position: absolute; width: ${TW}px; height: ${TH}px; }
      .tile .bg { position: absolute; inset: 0; border-radius: 56px; background: #fff; box-shadow: 0 18px 50px ${B.shadow}0.16); }
      .pic { position: absolute; overflow: hidden; border-radius: 20px; }
      .pic img { display: block; width: 100%; height: 100%; }
      .label { position: absolute; left: 80px; top: 56px; padding: 6px 34px; border-radius: 999px; background: ${B.accent}; color: ${B.accentInk};
        font: 700 72px/1.25 ${B.display}; }
      .patch, .sprite { position: absolute; }
      .patch { -webkit-mask-image: linear-gradient(to right, transparent, #000 7px, #000 calc(100% - 7px), transparent), linear-gradient(transparent, #000 7px, #000 calc(100% - 7px), transparent); -webkit-mask-composite: source-in; mask-composite: intersect; }
      .koch { position: absolute; left: 0; top: 0; }
      .flash { position: absolute; background: #fff; opacity: 0; border-radius: 20px; }
      .flake { position: absolute; border-radius: 50%; background: #fff; box-shadow: 0 0 6px rgba(255,255,255,0.9); }
      .code { position: absolute; border-radius: 20px; background: #1B1B1F; padding: 60px 50px; display: flex; flex-direction: column; gap: 34px; }
      .cl { font: 600 44px/1.3 "DejaVu Sans Mono", monospace; color: #FFD7BF; white-space: nowrap; clip-path: inset(0% 100% 0% 0%); }
      .result { position: absolute; border-radius: 20px; background: #fff; border: 4px solid #E4DFD6; padding: 60px 50px; }
      .result h1 { font: 700 84px/1.1 ${B.display}; color: ${B.primary}; opacity: 0; }
      .result p { margin-top: 28px; font: 500 40px/1.4 "Inter", sans-serif; color: ${B.ink2}; opacity: 0; }
      .result button { margin-top: 44px; padding: 18px 40px; border: 0; border-radius: 16px; background: ${B.accent}; color: ${B.accentInk}; font: 700 44px/1 ${B.display}; opacity: 0; }
      .sprite { background-repeat: no-repeat; }
      .glow { position: absolute; width: 380px; height: 380px; margin: -190px 0 0 -190px; border-radius: 50%; mix-blend-mode: screen; }
      #blockwrap { position: absolute; left: 1180px; top: 520px; }
      #blockimg { display: block; width: 562px; height: 272px; }
      #bcursor { position: absolute; left: 70px; top: 80px; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.35)); }
      .w { display: inline-block; opacity: 0; }
      #line { position: absolute; left: 120px; right: 120px; top: 430px; text-align: center; font: 700 136px/1.15 ${B.display}; color: ${B.ink}; }
      #end-q { position: absolute; left: 192px; right: 192px; top: 240px; text-align: center; font: 700 128px/1.2 ${B.display}; color: ${B.ink}; }
      #end-bar { position: absolute; left: 860px; top: 420px; width: 200px; height: 12px; border-radius: 6px; background: ${B.accent}; transform: scaleX(0); }
      #end-logos { position: absolute; left: 192px; right: 192px; top: 520px; display: flex; align-items: center; justify-content: center; gap: 96px; opacity: 0; }
      .lockup { display: flex; flex-direction: column; gap: 14px; color: ${B.primary}; }
      .lockrow { display: flex; align-items: baseline; gap: 22px; }
      .mark { font: 700 132px/1 ${B.display}; letter-spacing: -0.015em; }
      .kicker { font: 700 30px/1 "Inter", sans-serif; letter-spacing: 0.28em; text-transform: uppercase; color: ${B.ink2}; padding-bottom: 14px; }
      .lockurl { font: 500 40px/1.2 "Inter", sans-serif; color: ${B.ink2}; }
      .sep { width: 4px; height: 150px; background: ${B.ink2}; opacity: 0.25; border-radius: 2px; }
      .lkk { height: ${B.lockup ? 210 : 260}px; width: auto; display: block; }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="${t}" data-width="1920" data-height="1080">
      <div id="world">
        ${tiles.join('\n        ').replace(/(<div class="tile" id="tile\d"[^>]*>)/g, '$1<div class="bg"></div>')}
        <div id="blockwrap"><img id="blockimg" src="assets/block.png" alt="" /><svg id="bcursor" viewBox="0 0 24 24" width="56" height="56"><path d="M4 2 L4 20 L9 15 L12 22 L15 21 L12 14 L19 14 Z" fill="#fff" stroke="#1B1B1F" stroke-width="1.6" stroke-linejoin="round"/></svg></div>
      </div>
      <div id="line">${words('Alt starter med én kloss.')}</div>
      <div id="end-q">${words('Hva vil du lage?')}</div>
      <div id="end-bar"></div>
      <div id="end-logos">
        ${B.lockup ? `<div class="lockup"><div class="lockrow"><span class="mark">${B.mark}</span><span class="kicker">${B.kicker}</span></div><span class="lockurl">${B.url}</span></div>` : ''}
        ${B.lockup ? '<div class="sep"></div>' : ''}
        <img class="lkk" src="assets/lkk-logo.png" alt="Lær Kidsa Koding" />
      </div>
    </div>
    <script>
      const tl = gsap.timeline({ paused: true });
      ${js.join('\n      ')}
      tl.set({}, {}, ${t});
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
`);
fs.writeFileSync(path.join(dir, 'hyperframes.json'), JSON.stringify({ paths: { assets: 'assets' } }));
fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify({ id: 'forside', name: 'intro-forside' }));
console.log(`forside: ${t} s`);
