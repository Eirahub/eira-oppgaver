# SPEC: Oppdrag fra K

GOAL:    En tenåring ser en ekte etterforskning løses på én kveld ved en pult,
         og sitter igjen med «det der kan jeg lære»: Byrå 404 søker rekrutter.
OUTPUT:  HyperFrames, 1920 x 1080, 30 fps. Kilde: gen.mjs skriver
         index.html og compositions/*.html. Rediger gen.mjs, kjør `node gen.mjs`.
TIME:    45 s x 30 = 1350 frames. Pult 0-40 s, sluttbilde 40-45 s.
         Ingen musikk ennå (HeyGen ikke logget inn), bare effekter.
LOOK:    Én verden: en pult om natta, 4000 x 2800 px, sett ovenfra-forfra.
         Treverk #3b2818 med åreverk (repeterende striper, 4 % kontrast).
         Lys fra én kilde: lampe utenfor bildet oppe til venstre, varm
         #ffc98a i et lyspunkt 1700 px stort, 55 %; hjørnene faller til
         #160e08. Skjermen er den andre lyskilden: kald spill #9fb8ff 7 %
         på pulten under laptopen.
         Ink #F5F2ED, aksent #FF8A4C (bare funn og ett ord per tittel).
         Tittel: Baloo 2 700 64 px, venstrestilt ved x 229, y 884.
         Terminal: JetBrains Mono 34 px, linjehøyde 1.4, bakgrunn #15171a,
         tekst #d8d4cc, prompt #FF8A4C, [HULL] #ff6b5b, [OK] #7bd88f.
         Telefon: Inter 900 160 px klokke, varsel Inter 42 px på #F5F2ED 94 %.
OBJECTS: Laptop (lokk #1b1c1f r28, skjerm 1700 x 960 ved 1150,240, tastatur
         i aluminium #8d9096 med tastegrid), mobil som ligger skrått (-6°)
         på pulten (560 x 1140, kropp #111, skjerm #0e1116), kaffekopp sett
         ovenfra (keramikk #e9e2d6, kaffe #2b1a0e), en gul lapp med «§ 204».
MOTION:  Kamera = én wrapper #cam (x, y, scale), aldri kutt. Kamerabevegelse
         power2.inOut 1.0-1.2 s; punch-in 0.5 s power3.out. Skriving:
         clip-path i steps(n), 12-18 tegn/s (en rask hacker). Utdata
         kommer momentant (tl.set). Titler: ord for ord, blur 6 px -> 0,
         0.13 s, 0.067 s mellom; ut med blur 0.2 s. Motion blur på roten.
SHOTS:   0.0-5.0   mobilen: 23:47, varsel «FRA: K, Byrå 404 / Kiosken er
                   hacket. Finn ut hvordan.» (notification)
         5.0-6.2   kamera glir til laptopen (whoosh-short)
         6.2-10.2  `wc -l` -> 10000, `cat` -> loggen ruller. T1
         10.2-15.0 uniq-kommandoen, 300 x 203.0.113.66 lyser. T2 (ping)
         15.0-19.6 punch-in: linje 4300-4302, 401 -> 200 -> GET /admin. T3
         19.6-24.6 git log, «nå er den borte», så NOKKEL-linjene lyser. T4
         24.6-30.4 nettleseren: `admin' --` i Kiosken, Logg inn, Admin,
                   flagget. Punch-in s 1.4. T5 (click x3, ping)
         30.4-35.6 `python3 sjekk.py blått`: 6 [HULL] -> [OK] én og én,
                   «Alle hull er tettet». T6 (riser -> impact)
         35.6-40.0 kamera tilbake til mobilen, 00:31, nytt varsel: «Bra
                   jobba. Byrå 404 søker rekrutter.» (notification), så
                   zoom gjennom mobilskjermen, som blir sluttbildets grunn
         40.0-45.0 sluttbilde: hatten bæres inn, Hackerskolen, url, Eira og
                   LKK.
BANNED:  mørkt tomrom med små ting som svever, glød og neon, partikler,
         grønn kode-regn, hettegenser, hodeskaller, HUD-hjørner,
         alt sentrert, alt som fader og glir opp, titler som beveger seg
         mens de leses, logo i hjørnet, oppdiktet terminal-utdata,
         klikk-ringer.
QA:      0 s (miniatyr: mobil + varsel synlig), 3 s, 9 s, 13 s, 17 s, 23 s,
         27 s, 29.5 s, 35 s, 38.5 s, 43.5 s.
