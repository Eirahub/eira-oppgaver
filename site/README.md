# Eira oppgaver: nettsiden

Statisk nettside bygget med [Astro](https://astro.build/). Den leser oppgavene i
`../src` og taggene i `../filtertags` og lager sidene på
https://oppgaver.eirahub.no. Den erstatter
[codeclub-viewer](https://github.com/kodeklubben/codeclub-viewer)
(React 16, webpack 4, Node 10) og bruker de samme URL-ene.

## Kjøre lokalt

Krever Node 24.

```
cd site
npm install
npm run dev          # http://localhost:4321
npm run build        # bygger til site/dist
npm run check:site   # sjekker dist for døde lenker og viktige sider
npm run preview      # viser dist lokalt
```

Kommandoene må kjøres fra `site/`, fordi innholdet finnes via `../src`.

## Slik henger det sammen

| Fil | Hva den gjør |
|---|---|
| `src/lib/content.js` | Leser kurs, oppgaver, spillelister og tagger, og gjør markdown om til HTML (markdown-it med samme tillegg som codeclub-viewer: attrs, header-sections, implicit-figures, task-checkbox). |
| `src/pages/index.astro` | Forsiden: kurs og kurs på andre nettsider. |
| `src/pages/[course]/index.astro` | Kurssiden `/<kurs>/`: kursinfo, oppgavesamlinger, alle oppgaver per nivå og filteret. |
| `src/pages/[course]/[lesson]/[file].astro` | Oppgaver og lærerveiledninger, `/<kurs>/<mappe>/<fil>`. |
| `src/pages/om-oppgavene.astro` | Om oppgavene, lisens og kreditering. |
| `src/scripts/lesson.js` | I nettleseren: sjekklister (lagres i `localStorage`), Scratch-klosser og micro:bit-klosser. |
| `src/styles/print.css` | Utskrift av oppgaver og lærerveiledninger (A4). Knappen "Skriv ut / lagre som PDF" kaller `window.print()`. Det lages ingen PDF-filer ved bygg. |
| `src/styles/global.css` | Eira-profilen (Palette A "Fjord & Ember") og stilen på oppgavene. |
| `astro.config.mjs` | `build.format: 'preserve'` gir `/scratch/index.html` og `/scratch/astrokatt/astrokatt.html`. En liten integrasjon serverer bilder og andre filer fra `../src` i dev og kopierer dem til `dist` ved bygg. |
| `scripts/check-site.mjs` | Lenkesjekk etter bygg. |
| `public/` | Fonter (Inter og Baloo 2, OFL), nivåikoner og overskriftsikoner fra codeclub-viewer, favicon og `CNAME`. |

### Regler for hva som bygges

- Et kurs er en mappe i `src/` med både `index.md` og `course.yml`.
  `isExternal: true` gir et kort som lenker ut, ingen kursside.
- En oppgave er en mappe med `lesson.yml`. Hver `.md` i mappen med et
  kjent `language` (`nb`, `nn`, `en`, `is`, `ua`) blir en side. `README*` er
  lærerveiledninger.
- `external:` i front matter: ingen side, lenken i listen går ut.
- `indexed: false` i `lesson.yml`: siden bygges, men vises ikke i "Alle oppgaver".
- `unpublished/` og mapper uten `course.yml` (for eksempel `src/sponsorer`)
  bygges ikke.
- **Code Club World:** Oppgaver der lisensen i `lesson.yml` eller i front matter
  nevner "Code Club World", bygges ikke, og filene deres kopieres ikke. Vilkårene
  deres er ikke Creative Commons. Bygget skriver ut hvor mange som er holdt
  utenfor (nå 24). Filene ligger fortsatt i `src/`, så vi kan flette fra
  upstream som før.

### Scratch og micro:bit

- ` ```blocks ` og `` `...`{.b} `` tegnes i nettleseren med
  [scratchblocks](https://www.npmjs.com/package/scratchblocks) 3.7 fra npm. Den
  har norsk bokmål, nynorsk, islandsk og ukrainsk innebygd, så forken
  `tjesi/scratchblocks` som codeclub-viewer brukte trengs ikke (vi testet begge
  på alt innholdet, og de gjenkjenner like mange klosser). Sidens språk prøves
  først, men alle språkene er med, som før, fordi mange nynorsk-oppgaver bruker
  bokmålsnavn på klossene. Teksten står igjen hvis tegningen feiler.
- ` ```microbit ` tegnes av MakeCode i en skjult iframe
  (`makecode.microbit.org/--docs?render=1`), som i codeclub-viewer. Koden står
  som tekst til bildet er klart, og blir stående hvis MakeCode ikke svarer.

### Video i oppgaver

Legg videoen i oppgavemappen ved siden av bildene, og skriv vanlig HTML5 i
markdown. Det virker både her og i codeclub-viewer:

```html
<video controls preload="metadata" width="720" poster="klipp.jpg">
  <source src="klipp.mp4" type="video/mp4">
  <track kind="captions" src="klipp.nb.vtt" srclang="nb" label="Norsk">
  Videoen viser ...
</video>
```

- Hold klippene korte, helst under rundt 10 MB per fil. GitHub tillater
  maks 100 MB per fil, og en GitHub Pages-side maks 1 GB totalt.
- Lengre videoer legges på YouTube (bruk `youtube-nocookie.com/embed/...`) eller
  Vimeo og bygges inn med `<iframe>`. Slike iframes blir automatisk 16:9 og
  fyller bredden.
- Legg alltid ved teksting (`.vtt`) og en kort tekst inni `<video>` som sier hva
  videoen viser. Det hjelper dem som ikke kan høre eller se den.
- `npm run check:site` sjekker også `src`, `poster` og `<track>`-filer.

## Lenkesjekken

`npm run check:site` går gjennom alle HTML-filene i `dist`:

- Lenker og bilder i selve oppgaveteksten eller kursinfoen som ikke peker noe
  sted, er **innholdsfeil**. De skrives ut, men stopper ikke sjekken, fordi
  `src/` skal være lik upstream. Med `--strict` stopper de også. Mange av dem
  er lenker til Code Club World-oppgavene som er holdt utenfor.
- Døde lenker andre steder er feil i siden, og da feiler sjekken.
- Sjekken krever også at noen kjente sider finnes (forsiden, `/scratch/`,
  astrokatt med lærerveiledning og nynorsk, og de nye kursene).

## Snarveier

Steder med kjente grenser er merket `shortcut:` i koden.

## Publisering

`.github/workflows/deploy.yml` bygger og sjekker ved hver push og pull request,
og publiserer til GitHub Pages ved push til `main`. Domenet står i
`public/CNAME`. I GitHub må Pages være satt til "GitHub Actions" under
Settings, Pages. Publiseringen til GitHub Pages trenger ingen hemmeligheter.

### Forhåndsvisning per pull request

GitHub Pages kan ikke vise en egen versjon per PR. Derfor laster jobben
`preview` i samme workflow opp den ferdige `dist` til Cloudflare Pages
(prosjektet `eira-oppgaver`, gren `pr-<nummer>`) og skriver lenken i én
kommentar på PR-en, som oppdateres ved hver ny push. Adressen blir
`https://pr-<nummer>.eira-oppgaver.pages.dev`. Siden bruker lenker som
starter på `/` og har ingen `base` i `astro.config.mjs`, så den virker fra
roten av sitt eget underdomene. Mangler hemmelighetene (ikke satt opp ennå,
eller PR fra en fork), hopper jobben over med en melding og feiler ikke.

Oppsett, én gang:

1. Lag prosjektet i Cloudflare: Workers & Pages, Create, Pages, "Use direct
   upload", navn `eira-oppgaver`. Eller med Wrangler:
   `npx wrangler pages project create eira-oppgaver --production-branch=main`.
2. Lag en API-token: My Profile, API Tokens, Create Token, Custom token, med
   tillatelsen Account, Cloudflare Pages, Edit, begrenset til kontoen.
3. Finn Account ID (står i oversikten i Cloudflare-dashbordet).
4. Legg inn to hemmeligheter i GitHub, Eirahub/eira-oppgaver, Settings,
   Secrets and variables, Actions, New repository secret:
   `CLOUDFLARE_API_TOKEN` og `CLOUDFLARE_ACCOUNT_ID`.

Verdiene skal bare ligge i GitHub-hemmelighetene, aldri i repoet.
