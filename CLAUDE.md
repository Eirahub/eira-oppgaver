# CLAUDE.md

Veiledning for Claude Code i dette repoet.

## Hva dette er

Oppgavesamlingen til Eira (ideell forening, gratis kurs), publisert på
https://oppgaver.eirahub.no. Repoet er en varig fork av
[kodeklubben/oppgaver](https://github.com/kodeklubben/oppgaver) (Lær Kidsa
Koding), med full historikk. Innholdet er stort sett CC BY-SA 4.0, så
forfattere og Lær Kidsa Koding skal krediteres, og endringer deles på samme
vilkår.

- `src/`, `filtertags/` og `linter/` har samme struktur som oppstrøms. Endre
  aldri strukturen, så vi kan flette inn nye oppgaver og sende PR-er tilbake.
- `site/` er nettsiden (Astro, Node 24). Den erstatter codeclub-viewer.
  Detaljer i `site/README.md` og `site/FEATURES.md`.
- Oppgaver med lisensen "Code Club World Limited Terms of Service" filtreres
  bort når siden bygges. Filene blir liggende.

Eier: Tor Einar Enne. Admin på GitHub: teenne og roymorken.

### Lokal forhåndsvisning

```
cd site
npm install
npm run dev
```

Ingen Docker. Bygg og sjekk lenker med `npm run build` og skriptene i
`site/package.json`.

### Publisering

`.github/workflows/` bygger `site/` og publiserer til GitHub Pages ved push
til `main`. Domenet står i `site/public/CNAME`. Pull requests får en
forhåndsvisning på Cloudflare Pages (oppsett i `site/README.md`).

## Git

- Remotes: `origin` = Eirahub/kodeklubb-oppgaver, `upstream` = kodeklubben/oppgaver.
  `lokal` peker på den gamle arbeidskopien i
  `C:\Users\torei\Documents\Repos\06-open-source\oppgaver`.
- Første versjon ble pushet rett til `main` med eiers ja (20.11.2026). Alt
  etter det går via grener og PR mot `main`.
- Hent nytt fra Lær Kidsa Koding: `git fetch upstream && git merge upstream/master`.
- Endringer i oppgaver som også gjelder oppstrøms, sendes som små PR-er fra
  forken teenne/oppgaver (en gren per kurs). Ikke send `site/` eller
  Eira-profil oppstrøms.
- Stage bestemte stier, aldri `git add -A`. `.claude/settings.local.json`
  skal ikke inn.

## Struktur

```
src/<kurs>/
  index.md, index_nn.md, index_en.md   kursets forside (title i front matter = kursnavn)
  course.yml                           isExternal + tags for kurset
  logo-black.png, logo-white.png
  playlists/<n>_<Navn>.yml             sortindex, title per språk, lessons: [mappenavn]
  <oppgave>/
    <oppgave>.md                       oppgaven på bokmål (filnavn = mappenavn)
    <oppgave>_nn.md, _en.md, _ua.md    oversettelser, samme mappe
    README.md, README_nn.md            lærerveiledning
    lesson.yml                         level, license, tags, ev. indexed: false
    bilder
filtertags/keys.yml                    lovlige tagger (language, topic, subject, grade)
filtertags/translation_*.yml           visningsnavn for taggene
unpublished/                           ikke publisert
site/                                  nettsiden (Astro)
```

- Front matter i oppgave-md: `title`, `author`, `translator`, `level`,
  `language`, `external`, `indexed`, `license`, `footer`. `language` må stemme
  med filsuffikset (`_nn` gir `language: nn`, uten suffiks er det `nb`).
- `level` er 1 til 4 og står i `lesson.yml`.
- Tagger i `lesson.yml` og `course.yml` må finnes i `filtertags/keys.yml`.
- Eksterne oppgaver og kurs har `external: <url>` i front matter og
  `isExternal: true` i `course.yml`.
- URL-er: kurs `/<kurs>/`, oppgave `/<kurs>/<mappe>/<fil>`, lærerveiledning
  `/<kurs>/<mappe>/README`. Samme som den gamle siden.
- Lenker mellom oppgaver skrives relativt, ikke med fullt domene.

## Markdown-konvensjoner

- Overskrifter får klasse: `# Introduksjon {.intro}`, `# Steg 1: ... {.activity}`,
  `## Sjekkliste {.check}`, og ellers `.flag`, `.challenge`, `.tip`, `.protip`,
  `.save`, `.try`. Lovlige klasser står i `CLASSES` i
  `linter/linter_lib/linter_defaults.py`.
- Sjekkpunkter skrives `- [ ] ...`.
- Scratch-kode skrives i ` ```blocks ` på norsk scratchblocks-syntaks. Enkeltklosser
  inline: `` `gjenta for alltid`{.b} `` eller med kategorifarge som `{.blockmotion}`,
  `{.blockevents}`, `{.blockcontrol}` (se `src/scratch/README.md`).
- micro:bit-kode skrives i ` ```microbit ` (MakeCode JavaScript). Inline-klosser
  bruker `{.microbitbasic}`, `{.microbitinput}`, `{.microbitradio}` osv.
- Maks linjebredde 80 tegn, 2 mellomrom innrykk, avsluttende linjeskift
  (`.editorconfig`).
- Alle bilder skal ha alt-tekst. Bilder som ikke finnes ennå, skrives som
  `<!-- BILDE: beskrivelse -->`.

## Linter

Python-linter som autoformaterer og sjekker `.md` og `lesson.yml`. Kjøres fra
`linter/` og trenger `termcolor` og `colorama`.

```
cd linter
python -W ignore LKK_linter.py ../src/scratch/astrokatt/astrokatt.md     # én fil (+ lesson.yml)
python -W ignore LKK_linter.py -l ../src/scratch/astrokatt/astrokatt.md  # bare vis feil
python -W ignore LKK_linter.py -r ../src/python/                         # rekursivt
```

Ingen utskrift betyr ingen feil. Linteren skriver om filer, så kjør `git diff`
etterpå. Den flytter `level` og `indexed` fra front matter til `lesson.yml`.
Windows-fiksene (`os.replace`, `indexed` i `KEYS_YML`) er med i dette repoet.
`print_help` kaller `stty` og feiler på Windows uten Git Bash.

## Egne skills

- `.claude/skills/ny-oppgave`: lage ny oppgave eller nytt kurs.
- `.claude/skills/vurder-trinn`: foreslå `grade` og `level` ut fra lignende
  oppgaver (`trinnstatistikk.py`) og hva oppgaven krever.
- `.claude/skills/gjennomga-kurs`: kvalitetssjekk av et kurs eller en oppgave
  (format, nivå, forklaringer, kode og kompetansemål mot LK20).

## Regler

- Tankestrek (U+2014) er forbudt i all tekst.
- Ingen hemmeligheter i repoet. Les aldri `.env`.
- Eira-profilen kommer fra
  `C:\Users\torei\Documents\Repos\04-customer-products\design-system-eira`
  (palett A "Fjord & Ember", lockup "eira Ryfylke Kodeklubb").
- Ingen logoer eller lenker til samarbeidspartnere. Kreditering av Lær Kidsa
  Koding og lenker til internasjonale organisasjoner (Code Club, Raspberry Pi
  Foundation, CoderDojo, Scratch, Code.org) skal bli stående.
