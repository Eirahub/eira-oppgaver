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
npm test             # tester for logikk uten DOM (scripts/*.test.mjs)
npm run preview      # viser dist lokalt
```

Kommandoene må kjøres fra `site/`, fordi innholdet finnes via `../src`.

## Profiler

Alt som gjør siden til Eira sin eller Lær Kidsa Koding sin, ligger i
`profiles/<navn>/`. Resten av koden har ingen navn, farger eller lenker.

```
profiles/<navn>/
  profile.yml   navn, url, repo og gren, logo, meny, tekster, farger, partnere, exclude
  om.md         innholdet på /om-oppgavene
  public/       logo, favicon og CNAME (kopieres til roten av dist)
```

Velg profil med miljøvariabelen `SITE_PROFILE` (standard `eira`):

```
SITE_PROFILE=lkk npm run dev
SITE_PROFILE=lkk npm run build && npm run check:site
```

PowerShell: `$env:SITE_PROFILE='lkk'; npm run build`.

| Felt i `profile.yml` | Hva det styrer |
|---|---|
| `name`, `description`, `url` | Sidetittel, meta-beskrivelse og adressen siden ligger på |
| `repo`, `branch` | "Rediger på GitHub" og "Rapporter et problem" |
| `logo` eller `lockup` | Bilde fra `public/`, eller logo i levende tekst |
| `favicon`, `preload` | Favicon og fonter som lastes tidlig |
| `nav` | Lenkene i toppen |
| `hero`, `teacherInfo`, `footer` | Tekst (markdown) på forsiden, i lærermodus og i bunnen |
| `partners` | Logoer i bunnen: `{ name, href, logo }`. Tom liste viser ingenting |
| `exclude` | `{ license, linkTo }`: oppgaver med lisensen bygges ikke, og lenker til dem går til `linkTo` + samme sti. `null` bygger alt |
| `tokens` | CSS-variabler: farger, skygger, `--font-display`, `--font-sans` |

Ny profil: kopier en mappe i `profiles/`, endre filene og bygg med
`SITE_PROFILE=<navn>`. Alle feltene i `tokens` må være med, fordi
`global.css` ikke har egne fargeverdier.

**Lær Kidsa Koding:** profilen `lkk` har logoen, fargene, menyen og
bunnteksten fra codeclub-viewer, `kodeklubben/oppgaver` på `master` og
https://oppgaver.kidsakoder.no. Den bygger også Code Club World-oppgavene.
I `.github/workflows/test-and-deploy.yml` kan LKK bytte ut kloning og bygging
av codeclub-viewer med `npm ci && npm run build` i `site/` med
`SITE_PROFILE=lkk`, og publisere `site/dist` som før. Samarbeidspartnere
legges inn i `partners` med logoene i `profiles/lkk/public/`.

## Slik henger det sammen

| Fil | Hva den gjør |
|---|---|
| `src/lib/content.js` | Leser kurs, oppgaver, spillelister og tagger, og gjør markdown om til HTML (markdown-it med samme tillegg som codeclub-viewer: attrs, header-sections, implicit-figures, task-checkbox). |
| `src/pages/index.astro` | Forsiden: kurs og kurs på andre nettsider. |
| `src/pages/[course]/index.astro` | Kurssiden `/<kurs>/`: kursinfo, oppgavesamlinger, alle oppgaver per nivå og filteret. |
| `src/pages/[course]/[lesson]/[file].astro` | Oppgaver og lærerveiledninger, `/<kurs>/<mappe>/<fil>`. |
| `src/pages/om-oppgavene.astro` | Viser `om.md` fra profilen. |
| `src/lib/profile.js` | Leser profilen valgt med `SITE_PROFILE`. |
| `src/scripts/lesson.js` | I nettleseren: sjekklister (lagres i `localStorage`), Scratch-klosser og micro:bit-klosser. |
| `src/styles/print.css` | Utskrift av oppgaver og lærerveiledninger (A4). Knappen "Skriv ut / lagre som PDF" kaller `window.print()`. Det lages ingen PDF-filer ved bygg. |
| `src/styles/global.css` | Stilen på siden og oppgavene. Farger og skrift kommer fra profilen. |
| `astro.config.mjs` | `build.format: 'preserve'` gir `/scratch/index.html` og `/scratch/astrokatt/astrokatt.html`. En liten integrasjon serverer bilder og andre filer fra `../src` og profilens `public/` i dev og kopierer dem til `dist` ved bygg. |
| `scripts/check-site.mjs` | Lenkesjekk etter bygg. |
| `public/` | Fonter (Inter og Baloo 2, OFL), nivåikoner og overskriftsikoner fra codeclub-viewer. |

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
- **Code Club World:** Med profilen `eira` bygges ikke oppgaver der lisensen i
  `lesson.yml` eller i front matter nevner "Code Club World", og filene deres
  kopieres ikke. Vilkårene deres er ikke Creative Commons. Bygget skriver ut
  hvor mange som er holdt utenfor (nå 24). Lenker i innholdet til disse
  oppgavene går til samme sti på https://oppgaver.kidsakoder.no og merkes med
  ↗. Filene ligger fortsatt i `src/`, så vi kan flette fra upstream som før.
  Profilen `lkk` bygger dem (`exclude: null`).

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

### Prøv selv (` ```html-live `)

En kodeblokk med info-strengen `html-live` inneholder et helt HTML-dokument
(HTML, CSS i `<style>`, JavaScript i `<script>`). Her blir den et kodefelt
med resultatet ved siden av. I codeclub-viewer vises den som en vanlig
kodeblokk, så innholdet virker også oppstrøms.

````markdown
```html-live
<!DOCTYPE html>
<html>
<head>
  <style>h1 { color: tomato; }</style>
</head>
<body>
  <h1>Hei!</h1>
  <script>console.log('Hei fra konsollen');</script>
</body>
</html>
```
````

- Resultatet kjører i `<iframe sandbox="allow-scripts allow-modals" srcdoc>`,
  uten `allow-same-origin`. Koden når verken siden eller `localStorage` til
  siden.
- Resultatet oppdateres mens eleven skriver, og med "Kjør". "Tilbakestill"
  henter den opprinnelige koden, og "Last ned som fil" lagrer `index.html`
  for å jobbe videre i VS Code.
- `console.log` og feil vises under resultatet.
- Endringer lagres i `localStorage` per side og blokk.
- Tab gir to mellomrom. Esc og så Tab, Shift+Tab eller Ctrl+M slipper
  fokus ut av feltet.
- Uten JavaScript og på utskrift vises bare koden.
- Logikken er i `src/scripts/html-live.js` og `html-live-doc.js`
  (testet med `npm test`).

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
  `src/` skal være lik upstream. Med `--strict` stopper de også. HTML-filer
  som er kopiert rett fra `src/`, regnes også som innhold.
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
