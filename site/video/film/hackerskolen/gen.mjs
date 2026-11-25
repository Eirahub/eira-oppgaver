// Skriver index.html og compositions/*.html for «Oppdrag fra K». Kjør: node gen.mjs
// All tekst på skjermene er ekte utdata fra laben (laben i src/hackerskolen, kjørt 25.11.2026).
import fs from 'node:fs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const TOTAL = 45, DESK = 40.5;
const BALOO = `@font-face { font-family: "Baloo 2"; font-weight: 700; src: url("assets/fonts/baloo-2-latin-700-normal.woff2") format("woff2"); }`;

// ---------- terminalen ----------
const P = '<span class="pr">$ </span>';
const cmd = (id, s) => `<div class="ln cmd" id="${id}-ln">${P}<span class="ty" id="${id}">${esc(s)}</span></div>`;
const out = (id, html, cls = '') => `<div class="ln out ${cls}" id="${id}">${html}</div>`;
const hl = (id, s) => `<span class="hl" id="${id}">${esc(s)}</span>`;

const roll = fs.readFileSync('assets/logg_rull.txt', 'utf8').trimEnd().split('\n')
  .map((l) => `<div>${esc(l)}</div>`).join('');

const p1 = `<div class="page" id="d-p1" style="opacity:1">
  ${cmd('d-c1', 'wc -l tilgang.log')}
  ${out('d-o1', '10000 tilgang.log')}
  ${cmd('d-c2', 'cat tilgang.log')}
  <div class="rollwin" id="d-rollwin" data-layout-ignore><div class="roll" id="d-roll">${roll}</div></div>
</div>`;

const p2 = `<div class="page" id="d-p2">
  ${cmd('d-c3', 'grep " 401 " tilgang.log | cut -d " " -f 1 | sort | uniq -c | sort -n')}
  ${out('d-o3a', '     40 203.0.113.12')}
  ${out('d-o3b', hl('d-h1', '    300 203.0.113.66'))}
  ${cmd('d-c4', 'grep -n "203.0.113.66" tilgang.log | tail -3')}
  ${out('d-o4a', `4300:203.0.113.66 - - [14/Nov/2026:11:34:57] "POST /logg-inn HTTP/1.1" ${hl('d-h2', '401')} "curl/8.5"`, 'small')}
  ${out('d-o4b', `4301:203.0.113.66 - - [14/Nov/2026:11:35:00] "POST /logg-inn HTTP/1.1" ${hl('d-h3', '200')} "curl/8.5"`, 'small')}
  ${out('d-o4c', `4302:203.0.113.66 - - [14/Nov/2026:11:35:03] "${hl('d-h4', 'GET /admin')} HTTP/1.1" 200 "curl/8.5"`, 'small')}
</div>`;

const p3 = `<div class="page" id="d-p3">
  ${cmd('d-c5', 'cd ../5_git_lekkasje && git log --oneline')}
  ${out('d-o5a', `<span class="sha">5eebbb0</span> ${hl('d-h5', 'Fjernet hemmelig nøkkel, nå er den borte')}`)}
  ${out('d-o5b', '<span class="sha">f172836</span> Koble til betaling')}
  ${out('d-o5c', '<span class="sha">754d461</span> Første versjon')}
  ${cmd('d-c6', 'git log -p | grep NOKKEL')}
  ${out('d-o6a', `-BETALING_NOKKEL = "${hl('d-h6', 'EIRA{git_glemmer_aldri}')}"`)}
  ${out('d-o6b', `+BETALING_NOKKEL = "${hl('d-h7', 'EIRA{git_glemmer_aldri}')}"`)}
</div>`;

const CHECKS = ['Prisen bestemmes av serveren', 'Antall kan ikke være minus', 'Ingen hemmeligheter i kiosk.js',
  'SQL-injeksjon virker ikke', 'Kari kan fortsatt logge inn', 'Øktnøkkelen har HttpOnly', 'Kommentarer kan ikke kjøre skript'];
const p4 = `<div class="page" id="d-p4">
  ${cmd('d-c7', 'python3 sjekk.py blått')}
  <div id="d-o7">
    <div class="ln">&nbsp;</div>
    <div class="ln">BLÅTT LAG: sjekker Kiosken</div>
    <div class="ln">&nbsp;</div>
    ${CHECKS.map((c, i) => `<div class="ln">  <span class="st" data-layout-allow-overlap>${i === 4 ? '<span class="hu" style="visibility:hidden">[HULL]</span>' : `<span class="hu" id="d-hu${i}">[HULL]</span>`}<span class="ok" id="d-ok${i}"${i === 4 ? ' style="opacity:1"' : ''}>[OK]</span></span>  ${esc(c)}</div>`).join('\n    ')}
    <div class="ln">&nbsp;</div>
    <div class="ln fin"><span id="d-f1">6 hull igjen. Start Kiosken på nytt etter at du har endret koden.</span><span id="d-f2">Alle hull er tettet. Flagget ditt: ${hl('d-h8', 'EIRA{blatt_lag_holder_stand}')}</span></div>
  </div>
</div>`;

// ---------- nettleseren ----------
const CURSOR = '<svg viewBox="0 0 24 24" width="48" height="48"><path d="M4 2 L4 20 L9 15 L12 22 L15 21 L12 14 L19 14 Z" fill="#fff" stroke="#1B1B1F" stroke-width="1.6" stroke-linejoin="round"/></svg>';
const brow = `<div id="d-brow">
  <div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="url">127.0.0.1:8080<span id="d-u1">/logg-inn</span><span id="d-u2">/admin</span></span></div>
  <div class="view">
    <img id="d-k1" src="assets/k_login.png" alt="Kiosken, innlogging" />
    <div id="d-blank"></div>
    <img id="d-k2" src="assets/k_login_fylt.png" alt="Brukernavn admin' --" />
    <img id="d-k3" src="assets/k_innlogget.png" alt="Logget inn som admin" />
    <img id="d-k4" src="assets/k_admin.png" alt="Adminsiden med flagget" />
    <div id="d-ring"></div>
    <div id="d-cur">${CURSOR}</div>
  </div>
</div>`;

// ---------- titler (ett aksentord hver) ----------
const TITLES = [
  ['d-t1', '10 000 linjer. Hvem var *inne?*'],
  ['d-t2', '300 feil passord. Fra *én* adresse.'],
  ['d-t3', 'Feil, feil, feil. Så var den *inne.*'],
  ['d-t4', '«Borte»? Git *glemmer* aldri.'],
  ['d-t5', 'Ingen passord. Rett inn som *admin.*'],
  ['d-t6', 'Seks hull. Du *tetter* dem.'],
];
const titleHtml = TITLES.map(([id, s]) => `<div class="title" id="${id}">${s.split(' ').map((w) =>
  `<span class="w${w.startsWith('*') ? ' acc' : ''}">${esc(w.replace(/\*/g, ''))}</span>`).join(' ')}</div>`).join('\n  ');

const desk = `<template>
<style>
  ${BALOO}
  #root { position: absolute; inset: 0; overflow: hidden; background: #160e08; }
  #d-cam { position: absolute; left: 0; top: 0; width: 4000px; height: 2800px; transform-origin: 0 0; }
  .wood { position: absolute; inset: -1500px; background-color: #3b2818;
    background-image: repeating-linear-gradient(91deg, rgba(0,0,0,0.06) 0 3px, transparent 3px 19px),
      repeating-linear-gradient(89deg, rgba(255,220,170,0.035) 0 2px, transparent 2px 47px); }
  .lamp { position: absolute; inset: 0;
    background: radial-gradient(1900px circle at 1150px 850px, rgba(255,201,138,0.5), rgba(255,201,138,0.12) 55%, rgba(22,14,8,0) 75%),
      radial-gradient(2600px circle at 1500px 1000px, rgba(22,14,8,0) 50%, rgba(22,14,8,0.85) 100%); }
  .spill { position: absolute; left: 1000px; top: 1240px; width: 2000px; height: 700px; border-radius: 50%;
    background: radial-gradient(closest-side, rgba(159,184,255,0.09), rgba(159,184,255,0)); }
  /* laptop */
  #d-lid { position: absolute; left: 1110px; top: 200px; width: 1780px; height: 1040px; border-radius: 28px; background: #1b1c1f;
    box-shadow: 0 30px 60px rgba(0,0,0,0.45); }
  #d-scr { position: absolute; left: 40px; top: 40px; width: 1700px; height: 960px; overflow: hidden; background: #15171a; border-radius: 6px; }
  .deck { position: absolute; left: 960px; top: 1240px; width: 2080px; height: 430px; clip-path: polygon(5% 0, 95% 0, 100% 100%, 0 100%);
    background: linear-gradient(#a3a6ac, #7d8086); }
  .keys { position: absolute; left: 1150px; top: 1270px; width: 1700px; height: 250px; clip-path: polygon(2% 0, 98% 0, 100% 100%, 0 100%);
    background-color: #2a2b2e; background-image: repeating-linear-gradient(90deg, transparent 0 96px, #8d9096 96px 104px),
      repeating-linear-gradient(0deg, transparent 0 54px, #8d9096 54px 62px); opacity: 0.9; }
  .pad { position: absolute; left: 1720px; top: 1545px; width: 560px; height: 100px; border-radius: 10px; background: #8a8d93; }
  /* terminal */
  .tbar { height: 50px; background: #2a2c30; color: #9a978f; font: 400 24px/50px "JetBrains Mono", monospace; padding-left: 24px; }
  .tbody { position: absolute; left: 0; right: 0; top: 50px; bottom: 0; padding: 30px 44px; }
  .page { position: absolute; left: 44px; right: 44px; top: 30px; opacity: 0; }
  .ln { font: 400 34px/47.6px "JetBrains Mono", monospace; color: #d8d4cc; white-space: pre; }
  .ln.small { font-size: 26px; line-height: 40px; }
  .out { opacity: 0; }
  .pr { color: #FF8A4C; }
  .ln.cmd { opacity: 0; }
  .ty { clip-path: inset(0% 100% 0% 0%); }
  .hl { border-radius: 4px; background-color: rgba(255,138,76,0); }
  .sha { color: #e6c07b; }
  .rollwin { height: 640px; overflow: hidden; opacity: 0; margin-top: 8px; }
  .roll { font: 400 22px/30px "JetBrains Mono", monospace; color: #8f8b83; white-space: pre; }
  .st { position: relative; display: inline-block; width: 6ch; }
  .hu { color: #ff6b5b; }
  .ok { position: absolute; left: 0; color: #7bd88f; opacity: 0; }
  #d-o7 { opacity: 0; }
  .fin { position: relative; }
  #d-f2 { position: absolute; left: 0; opacity: 0; }
  /* nettleser */
  #d-brow { position: absolute; inset: 0; background: #fdf8f0; opacity: 0; }
  .bar { height: 64px; background: #e9e6e1; display: flex; align-items: center; gap: 24px; padding-left: 22px; }
  .dots i { display: inline-block; width: 16px; height: 16px; border-radius: 50%; background: #c9c5bf; margin-right: 8px; }
  .url { background: #fff; border-radius: 8px; padding: 6px 18px; font: 400 26px/1.3 "Inter", sans-serif; color: #3d3d42; min-width: 700px; position: relative; }
  #d-u2 { position: absolute; margin-left: -116px; opacity: 0; }
  .view { position: absolute; left: 0; top: 64px; width: 1700px; height: 896px; overflow: hidden; }
  .view img { position: absolute; left: 0; top: 0; width: 1700px; height: 956px; }
  #d-k2 { clip-path: inset(345px 1414px 578px 286px); }
  #d-k3, #d-k4 { opacity: 0; }
  #d-blank { position: absolute; left: 288px; top: 346px; width: 354px; height: 30px; background: #fff; opacity: 0; }
  #d-ring { position: absolute; left: 276px; top: 330px; width: 1150px; height: 103px; border: 5px solid #FF8A4C; border-radius: 12px; opacity: 0; }
  #d-cur { position: absolute; left: 0; top: 0; }
  /* mobil */
  #d-phone { position: absolute; left: 220px; top: 1250px; width: 560px; height: 1140px; border-radius: 70px; background: #111;
    transform: rotate(-6deg); box-shadow: 18px 30px 50px rgba(0,0,0,0.5); }
  #d-ps { position: absolute; inset: 20px; border-radius: 54px; overflow: hidden;
    background: linear-gradient(170deg, #1d2633, #0e1116 70%); color: #F5F2ED; font-family: "Inter", sans-serif; }
  .clock { position: absolute; left: 0; right: 0; top: 120px; text-align: center; font: 900 160px/1 "Inter", sans-serif; letter-spacing: -0.03em; }
  .clock span { position: absolute; left: 0; right: 0; }
  #d-ck2 { opacity: 0; }
  .date { position: absolute; left: 0; right: 0; top: 300px; text-align: center; font: 500 34px/1 "Inter", sans-serif; color: #c9c5bf; }
  .note { position: absolute; left: 22px; right: 22px; border-radius: 30px; background: rgba(245,242,237,0.95); color: #1B1B1F; padding: 22px 26px; }
  .note .app { font: 500 34px/1.2 "Inter", sans-serif; color: #6b6b70; }
  .note .who { font: 700 42px/1.25 "Inter", sans-serif; margin-top: 6px; }
  .note .msg { font: 400 42px/1.25 "Inter", sans-serif; }
  #d-n1 { top: 400px; } #d-m2 { opacity: 0; } #d-n2 { top: 400px; opacity: 0; }
  #d-flood { position: absolute; inset: 0; background: #F5F2ED; opacity: 0; }
  /* kopp og lapp */
  .mug { position: absolute; left: 3150px; top: 1250px; width: 430px; height: 430px; border-radius: 50%;
    background: radial-gradient(circle, #2b1a0e 0 58%, #e9e2d6 59% 100%); box-shadow: 14px 24px 40px rgba(0,0,0,0.45); }
  .handle { position: absolute; left: 3560px; top: 1410px; width: 120px; height: 110px; border-radius: 0 50px 50px 0; border: 26px solid #e9e2d6; border-left: none; }
  .lapp { position: absolute; left: 3000px; top: 1900px; width: 400px; height: 400px; background: #f3d36b; transform: rotate(5deg);
    box-shadow: 8px 14px 24px rgba(0,0,0,0.35); color: #3a2a10; font-family: "Baloo 2", sans-serif; padding: 50px; }
  .lapp b { display: block; font-size: 120px; line-height: 1; } .lapp span { font-size: 46px; }
  /* titler */
  .title { position: absolute; left: 229px; top: 884px; font: 700 64px/1.2 "Baloo 2", sans-serif; color: #F5F2ED;
    background: rgba(21,23,26,0.92); padding: 0 22px; border-radius: 8px; opacity: 0; }
  .title .w { display: inline-block; opacity: 0; }
  .title .acc { color: #FF8A4C; }
</style>
<div id="root" data-composition-id="desk" data-width="1920" data-height="1080">
  <div id="d-cam" data-layout-allow-overflow>
    <div class="wood"></div>
    <div class="lamp" data-layout-ignore></div>
    <div class="spill"></div>
    <div class="deck"></div><div class="keys"></div><div class="pad"></div>
    <div id="d-lid"><div id="d-scr">
      <div id="d-term"><div class="tbar" data-layout-ignore>elev@laben: ~/hackerlab/oppdrag</div><div class="tbody">
  ${p1}
  ${p2}
  ${p3}
  ${p4}
      </div></div>
      ${brow}
    </div></div>
    <div class="mug"></div><div class="handle"></div>
    <div class="lapp"><b>§ 204</b><span>bare med lov!</span></div>
    <div id="d-phone"><div id="d-ps">
      <div class="clock"><span id="d-ck1">23:47</span><span id="d-ck2">00:31</span></div>
      <div class="date">onsdag 25. november</div>
      <div class="note" id="d-n1" data-layout-allow-overlap><div class="app">Byrå 404 · nå</div><div class="who">FRA: K</div><div class="msg">Kiosken er hacket.</div><div class="msg" id="d-m2">Finn ut hvordan.</div></div>
      <div class="note" id="d-n2" data-layout-allow-overlap><div class="app">Byrå 404 · nå</div><div class="who">FRA: K</div><div class="msg">Bra jobba. Byrå 404 søker rekrutter.</div></div>
      <div id="d-flood"></div>
    </div></div>
  </div>
  ${titleHtml}
</div>
<script>
  const tl = gsap.timeline({ paused: true });
  const cam = (wx, wy, s, fx = 960, fy = 540) => ({ x: fx - wx * s, y: fy - wy * s, scale: s });
  const PHONE = cam(500, 1820, 0.82, 760, 540);
  const SCREEN = { x: 229 - 1150 * 0.86, y: 40 - 240 * 0.86, scale: 0.86 };
  const LOGPUNCH = cam(1910, 560, 1.1);
  const LOGIN = cam(1620, 730, 1.4);
  const ADMIN = cam(2000, 690, 1.4);
  const DIVE = cam(500, 1800, 7.5);
  const move = (to, t, d, ease = 'power2.inOut') => tl.to('#d-cam', { ...to, duration: d, ease }, t);
  const type = (sel, t, d) => {
    const n = document.querySelector(sel).textContent.length;
    tl.set(sel + '-ln', { opacity: 1 }, t - 0.25);
    tl.fromTo(sel, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: d, ease: 'steps(' + n + ')' }, t);
  };
  const show = (sel, t) => tl.set(sel, { opacity: 1 }, t);
  const mark = (sel, t) => tl.fromTo(sel, { backgroundColor: 'rgba(255,138,76,0)', color: '#d8d4cc' },
    { backgroundColor: 'rgba(255,138,76,0.9)', color: '#1B1B1F', duration: 0.12, ease: 'power2.out' }, t);
  const swap = (a, b, t) => {
    tl.to(a, { opacity: 0, filter: 'blur(8px)', duration: 0.15, ease: 'power2.in' }, t);
    tl.fromTo(b, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.15, ease: 'power2.out', immediateRender: false }, t + 0.12);
  };
  const title = (id, tin, tout) => {
    const ws = document.querySelectorAll('#' + id + ' .w');
    tl.fromTo('#' + id, { opacity: 0 }, { opacity: 1, duration: 0.12, ease: 'power2.out', immediateRender: false }, tin);
    tl.to('#' + id, { opacity: 0, duration: 0.15, ease: 'power2.in' }, tout + 0.1);
    ws.forEach((w, i) => tl.fromTo(w, { opacity: 0, filter: 'blur(6px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.13, ease: 'power2.out' }, tin + i * 0.067));
    tl.to(ws, { opacity: 0, filter: 'blur(6px)', duration: 0.2, ease: 'power2.in', stagger: 0.03 }, tout);
  };

  // 0-5: mobilen
  tl.set('#d-cam', PHONE, 0);
  tl.fromTo('#d-n1', { y: -60, opacity: 0, filter: 'blur(6px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.45, ease: 'expo.out' }, 0.5);
  tl.fromTo('#d-m2', { opacity: 0, filter: 'blur(6px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.15, ease: 'power2.out' }, 2.4);
  // 5-10.8: til laptopen, loggen
  move(SCREEN, 5.0, 1.2);
  type('#d-c1', 6.3, 0.9); show('#d-o1', 7.3);
  type('#d-c2', 7.6, 0.8); show('#d-rollwin', 8.5);
  tl.fromTo('#d-roll', { y: 0 }, { y: -780, duration: 2.2, ease: 'none' }, 8.5);
  title('d-t1', 8.5, 12.1);
  // 10.8-19.4: hvem?
  swap('#d-p1', '#d-p2', 10.8);
  type('#d-c3', 11.0, 1.6); show('#d-o3a', 12.7); show('#d-o3b', 12.7); mark('#d-h1', 13.0);
  title('d-t2', 12.35, 16.6);
  type('#d-c4', 14.2, 1.0); show('#d-o4a', 15.3); show('#d-o4b', 15.3); show('#d-o4c', 15.3);
  move(LOGPUNCH, 15.3, 0.5, 'power3.out');
  mark('#d-h2', 15.9); mark('#d-h3', 16.4); mark('#d-h4', 16.9);
  title('d-t3', 16.8, 21.0);
  // 19.4-24.9: git
  move(SCREEN, 19.4, 0.6);
  swap('#d-p2', '#d-p3', 19.6);
  type('#d-c5', 19.8, 1.0); show('#d-o5a', 20.9); show('#d-o5b', 20.9); show('#d-o5c', 20.9); mark('#d-h5', 21.2);
  type('#d-c6', 21.6, 0.7); show('#d-o6a', 22.4); show('#d-o6b', 22.4); mark('#d-h6', 22.6); mark('#d-h7', 22.6);
  move(cam(1700, 610, 1.15), 22.5, 0.5, 'power3.out');
  title('d-t4', 21.1, 24.8);
  // 24.9-30.4: Kiosken
  swap('#d-term', '#d-brow', 24.9);
  move(LOGIN, 24.9, 0.6);
  tl.fromTo('#d-cur', { x: 900, y: 700 }, { x: 470, y: 352, duration: 0.5, ease: 'expo.out' }, 25.4);
  tl.fromTo('#d-k2', { clipPath: 'inset(345px 1414px 578px 286px)' }, { clipPath: 'inset(345px 1312px 578px 286px)', duration: 0.7, ease: 'steps(9)' }, 26.1);
  show('#d-blank', 26.1);
  tl.set('#d-k2', { clipPath: 'inset(0px 0px 0px 0px)' }, 26.9); tl.set('#d-blank', { opacity: 0 }, 26.9);
  tl.to('#d-cur', { x: 345, y: 490, duration: 0.4, ease: 'power3.out' }, 27.0);
  show('#d-k3', 27.5);
  tl.to('#d-cur', { x: 800, y: 183, duration: 0.5, ease: 'power3.out' }, 27.8);
  show('#d-k4', 28.4); tl.set('#d-u1', { opacity: 0 }, 28.4); show('#d-u2', 28.4);
  move(ADMIN, 28.4, 0.5);
  tl.fromTo('#d-ring', { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.18, ease: 'expo.out' }, 29.0);
  title('d-t5', 26.0, 30.4);
  // 30.4-35.4: blått lag
  move(SCREEN, 30.4, 0.6);
  swap('#d-brow', '#d-term', 30.4);
  tl.set('#d-p3', { opacity: 0 }, 30.4); tl.set('#d-p4', { opacity: 1 }, 30.4);
  type('#d-c7', 30.7, 0.6); show('#d-o7', 31.4);
  [0, 1, 2, 3, 5, 6].forEach((i, k) => { tl.set('#d-hu' + i, { opacity: 0 }, 32.6 + k * 0.25); tl.set('#d-ok' + i, { opacity: 1 }, 32.6 + k * 0.25); });
  tl.set('#d-f1', { opacity: 0 }, 34.0); show('#d-f2', 34.0); mark('#d-h8', 34.05);
  title('d-t6', 31.6, 35.5);
  // 35.4-40.5: tilbake til mobilen, så gjennom skjermen
  move(PHONE, 35.7, 1.0);
  tl.set('#d-ck1', { opacity: 0 }, 36.1); tl.set('#d-ck2', { opacity: 1 }, 36.1);
  tl.to('#d-n1', { y: 380, duration: 0.45, ease: 'expo.out' }, 36.7);
  tl.fromTo('#d-n2', { y: -60, opacity: 0, filter: 'blur(6px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.45, ease: 'expo.out' }, 36.7);
  move(DIVE, 39.9, 0.6, 'power3.in');
  tl.fromTo('#d-flood', { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.in' }, 40.1);
  tl.set({}, {}, ${DESK});
  window.__timelines["desk"] = tl;
</script>
</template>
`;

// ---------- sluttbilde ----------
const slutt = `<template>
<style>
  ${BALOO}
  #root { position: absolute; inset: 0; background: #F5F2ED; overflow: hidden; }
  .row1 { position: absolute; left: 0; right: 0; top: 200px; display: flex; justify-content: center; align-items: center; gap: 44px; }
  #s-hat { width: 250px; height: 250px; }
  #s-name { font: 700 150px/1 "Baloo 2", sans-serif; color: #1B1B1F; letter-spacing: -0.015em; }
  #s-name span { display: inline-block; opacity: 0; }
  #s-url { font: 500 44px/1.2 "Inter", sans-serif; color: #3D3D42; margin-top: 14px; clip-path: inset(0% 100% 0% 0%); }
  #s-bar { position: absolute; left: 860px; top: 600px; width: 200px; height: 12px; border-radius: 6px; background: #FF8A4C; transform-origin: 50% 50%; }
  .row2 { position: absolute; left: 192px; right: 192px; top: 680px; display: flex; align-items: center; justify-content: center; gap: 80px; opacity: 0; }
  .lockup { display: flex; flex-direction: column; gap: 10px; color: #1E3A8A; }
  .lockrow { display: flex; align-items: baseline; gap: 20px; }
  .mark { font: 700 110px/1 "Baloo 2", sans-serif; letter-spacing: -0.015em; }
  .kicker { font: 700 28px/1 "Inter", sans-serif; letter-spacing: 0.28em; text-transform: uppercase; color: #3D3D42; padding-bottom: 12px; }
  .lockurl { font: 500 36px/1.2 "Inter", sans-serif; color: #3D3D42; }
  .sep { width: 4px; height: 130px; background: #3D3D42; opacity: 0.25; border-radius: 2px; }
  .lkk { height: 170px; width: auto; display: block; }
</style>
<div id="root" data-composition-id="slutt" data-width="1920" data-height="1080">
  <div class="row1">
    <img id="s-hat" src="assets/logo-black.png" alt="Hackerskolen-logo: en hatt med >_" />
    <div><div id="s-name">${[...'Hackerskolen'].map((c) => `<span>${c}</span>`).join('')}</div>
    <div id="s-url">oppgaver.eirahub.no/hackerskolen</div></div>
  </div>
  <div id="s-bar"></div>
  <div class="row2" id="s-row2">
    <div class="lockup"><div class="lockrow"><span class="mark">eira</span><span class="kicker">Ryfylke · Kodeklubb</span></div><span class="lockurl">eirahub.no</span></div>
    <div class="sep"></div>
    <img class="lkk" src="assets/lkk-logo.png" alt="Lær Kidsa Koding" />
  </div>
</div>
<script>
  const tl = gsap.timeline({ paused: true });
  tl.fromTo('#s-hat', { y: -620, rotation: -24, scale: 1.3 }, { y: 0, rotation: 0, scale: 1, duration: 0.6, ease: 'expo.out' }, 0.0);
  document.querySelectorAll('#s-name span').forEach((s, i) =>
    tl.fromTo(s, { opacity: 0.3, filter: 'blur(4px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.12, ease: 'power2.out' }, 0.35 + i * 0.05));
  tl.fromTo('#s-url', { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.45, ease: 'power3.out' }, 1.0);
  tl.fromTo('#s-bar', { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: 'expo.out' }, 1.5);
  tl.fromTo('#s-row2', { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.2, ease: 'power2.out' }, 1.7);
  tl.set({}, {}, 4.5);
  window.__timelines["slutt"] = tl;
</script>
</template>
`;

// ---------- lyd ----------
// [start, fil, varighet, volum, mediaStart]
const SFX = [
  [0.45, 'notification', 2.4, 0.8], [2.35, 'pop', 0.7, 0.5], [5.15, 'whoosh-short', 0.57, 0.6],
  [6.3, 'typing', 0.9, 0.7, 0], [7.6, 'typing', 0.8, 0.7, 0.5], [11.0, 'typing', 1.5, 0.7, 0],
  [13.0, 'ping', 1.3, 0.6], [14.2, 'typing', 1.0, 0.7, 0.3], [16.4, 'ping', 1.3, 0.5],
  [19.8, 'typing', 1.0, 0.7, 0.4], [21.6, 'typing', 0.7, 0.7, 0], [22.6, 'ping', 1.3, 0.6],
  [24.9, 'whoosh', 0.57, 0.5], [25.95, 'click', 0.36, 0.8], [26.1, 'typing', 0.7, 0.7, 0.6],
  [27.45, 'click', 0.36, 0.8], [28.35, 'click-soft', 0.36, 0.8], [29.0, 'ping', 1.3, 0.6],
  [30.7, 'typing', 0.6, 0.7, 0.2], [32.03, 'riser', 2.0, 0.6, 1.5], [33.97, 'impact-bass-1', 2.1, 0.9],
  [35.8, 'whoosh-short', 0.57, 0.5], [36.65, 'notification', 2.4, 0.8], [39.95, 'whoosh', 0.57, 0.6],
  [41.05, 'pop', 0.7, 0.7],
];
const lanes = [];
const audio = SFX.map(([t, f, d, v, ms], i) => {
  let lane = lanes.findIndex((end) => end <= t);
  if (lane < 0) { lane = lanes.length; lanes.push(0); }
  lanes[lane] = t + d;
  return `<audio id="sfx${i}" class="clip" src="assets/sfx/${f}.mp3" data-start="${t}" data-duration="${d}" data-volume="${v}"${ms ? ` data-media-start="${ms}"` : ''} data-track-index="${2 + lane}"></audio>`;
});

const index = `<!doctype html>
<html lang="nb">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body { margin: 0; width: 1920px; height: 1080px; overflow: hidden; background: #160e08; }
      #root { position: relative; width: 1920px; height: 1080px; overflow: hidden; }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="${TOTAL}" data-width="1920" data-height="1080" data-motion-blur="on">
      <div id="desk" data-composition-id="desk" data-composition-src="compositions/desk.html" data-start="0" data-duration="${DESK}" data-track-index="1" data-track-kind="graphics" data-width="1920" data-height="1080"></div>
      <div id="slutt" data-composition-id="slutt" data-composition-src="compositions/slutt.html" data-start="${DESK}" data-duration="${TOTAL - DESK}" data-track-index="1" data-track-kind="graphics" data-width="1920" data-height="1080"></div>
      ${audio.join('\n      ')}
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      window.__timelines["main"] = gsap.timeline({ paused: true });
    </script>
  </body>
</html>
`;

fs.writeFileSync('compositions/desk.html', desk);
fs.writeFileSync('compositions/slutt.html', slutt);
fs.writeFileSync('index.html', index);
for (const f of ['compositions/desk.html', 'compositions/slutt.html', 'index.html', 'SPEC.md'])
  if (fs.readFileSync(f, 'utf8').includes('\u2014')) throw new Error('Tankestrek i ' + f);
console.log('skrev index.html, desk.html, slutt.html');
