# Ny nettside for Lær Kidsa Koding: overlevering fra Eira

For styret i Lær Kidsa Koding (LKK) og de som skal innføre løsningen.

## Hva og hvor

Eira har byttet ut codeclub-viewer med en ny, statisk nettside bygget med
Astro. Oppgavene i `src/` er uendret. Siden har en profil for hver
organisasjon, så den samme koden kan bygges som Eira eller som LKK.

| Hva | Adresse |
|---|---|
| Repo | https://github.com/Eirahub/eira-oppgaver |
| Eira-siden (profilen `eira`) | https://oppgaver.eirahub.no |
| LKK-profilen som demo (`lkk`, ikke indeksert av søkemotorer) | https://lkk-demo.eira-oppgaver.pages.dev |
| Eksempel på forhåndsvisning av en pull request | `https://pr-<nummer>.eira-oppgaver.pages.dev` (lenken står som kommentar på PR-en) |

Demoen oppdateres automatisk ved hver endring på `main` i Eiras repo.
LKK-profilen har LKKs logo, farger, meny og bunntekst fra codeclub-viewer og
bygger alle oppgavene, også Code Club World-oppgavene.

## Hvorfor bytte

| | codeclub-viewer | Ny side (`site/`) |
|---|---|---|
| Rammeverk | React 16, react-router 3 | Astro 7, statiske HTML-sider |
| Bygg | webpack 4 | Astro (Vite) |
| Node | 10 (utgikk 2021), krever Docker lokalt | 24, ingen Docker |
| Stil | Bootstrap 3 (react-bootstrap 0.32), node-sass 4 | Egen CSS, ingen rammeverk |
| Scratch-klosser | Låst fork (`tjesi/scratchblocks`) | `scratchblocks` 3.7.1 fra npm, med nb, nn, is og ua |
| Lokal forhåndsvisning | Docker, ca. 2 minutter per endring | `npm run dev`, med en gang |
| Fullt bygg | Flere minutter | ca. 10 sekunder |
| Lenkesjekk | Ingen | `npm run check:site` i CI |
| Forhåndsvisning av PR | Nei | Ja, på Cloudflare Pages |

Hovedgrunnen er at den gamle stakken ikke lar seg oppdatere. Node 10 og
node-sass 4 får ikke sikkerhetsrettelser, og avhengighetene låser hverandre.
Å bytte én krever å bytte alle.

## Hva er uendret

- Innholdsformatet i `src/`: mapper per kurs og oppgave, markdown.
- URL-ene: `/<kurs>/`, `/<kurs>/<mappe>/<fil>`, `/<kurs>/<mappe>/README`.
- Front matter, `lesson.yml`, `course.yml`, spillelister (`playlists/*.yml`) og
  tagger i `filtertags/`.
- Scratchblocks-syntaksen (` ```blocks ` og `` `...`{.b} ``) og micro:bit
  (` ```microbit `, tegnet av MakeCode som før).
- Linteren i `linter/`. Eira har bare lagt til Windows-fiksene `os.replace` og
  `indexed` som lovlig nøkkel.
- Valget elev- eller lærermodus bruker samme nøkkel i `localStorage`
  (`isStudentMode`).

## Funksjoner: gammel og ny side

Hele listen står i [site/FEATURES.md](../site/FEATURES.md). Sammendrag:

| Gammel funksjon | I ny side |
|---|---|
| Kursliste, kurs på andre nettsider, kursside med nivåer | Med |
| Spillelister ("Oppgavesamlinger") per kurs | Med |
| Filter på kurssiden (språk, tema, fag, trinn) | Med |
| Sjekklister, fremdrift, "Fjern avkrysninger" | Med |
| Scratch- og micro:bit-klosser, syntaksfarger, `<toggle>` | Med |
| Elev- og lærermodus, lærer-infoboks | Med, men uten fargebytte (se under) |
| Språkversjoner av en oppgave, brødsmuler, "Forbedre denne siden" | Med |
| Sponsorlogoer | Med som tom liste `partners` i profilen. LKK må fylle den |
| Navigasjon til kidsakoder.no | Med i profilen `lkk` |
| PDF per oppgave | Gjort annerledes: knapp "Skriv ut / lagre som PDF" med egen A4-stil. Ingen ferdige PDF-filer lages ved bygg |
| Fargebytte i lærermodus (grønt for elev, blått for lærer) | Utelatt. Knappen viser bare hvilken modus som er på |
| Filter på forsiden som skjuler kurs, og visning av spillelister på forsiden | Mangler |
| "Sist besøkt", fremdriftslinje per oppgave i listen, info-popover med introtekst | Mangler |
| Valg av språk for brukergrensesnittet, skrift for dyslektikere | Mangler (bare bokmål) |
| `::: video`, KaTeX, emoji-koder | Mangler. Brukes ikke i innholdet i dag |
| Sitemap | Mangler |
| Lenke til forum.kidsakoder.no | Fjernet |

## Hva er nytt

- Lokal utvikling uten Docker: `cd site && npm install && npm run dev`.
- Bygg på ca. 10 sekunder.
- Lenkesjekk i CI. Døde lenker utenfor oppgaveteksten stopper bygget. Feil i
  selve innholdet skrives ut uten å stoppe det, så `src/` kan være lik
  upstream. `--strict` stopper også dem.
- Forhåndsvisning av hver pull request på Cloudflare Pages (valgfritt).
- Utskriftsstil for oppgaver og lærerveiledninger.
- Video: vanlig HTML5 `<video>` og YouTube/Vimeo-innbygging, med regler for
  størrelse og teksting. Se "Video i oppgaver" i [site/README.md](../site/README.md).
- Profiler: all organisasjonsspesifikk tekst, logo og farge ligger i
  `site/profiles/<navn>/`. Resten av koden har ingen navn eller farger.

## Slik tar LKK det i bruk

### Alternativ A: flytt siden inn i kodeklubben/oppgaver

1. Legg til Eiras repo som remote og hent det:
   `git remote add eira https://github.com/Eirahub/eira-oppgaver.git && git fetch eira`
2. Ta med mappen `site/` og workflowen. Enten flett (`git merge eira/main`), eller
   hent bare det som trengs:
   `git restore --source=eira/main site .github/workflows/deploy.yml`.
   `src/`, `filtertags/` og `linter/` har samme struktur som hos dere, så en
   flett gir bare innholdsendringer i tillegg (se "Innholds-PR-er").
3. Bygg lokalt: `cd site && npm ci && SITE_PROFILE=lkk npm run build && npm run check:site`.
4. Velg publisering:
   - Behold dagens oppsett: bytt ut kloning og bygging av codeclub-viewer i
     `.github/workflows/test-and-deploy.yml` med `npm ci && npm run build` i
     `site/` med `SITE_PROFILE=lkk`, og publiser `site/dist` til
     `kodeklubben/kodeklubben.github.io` som før.
   - Eller bruk `deploy.yml` direkte med GitHub Pages (Settings, Pages,
     "GitHub Actions"). Da må `SITE_PROFILE: lkk` settes i byggesteget, og
     Eira-spesifikke deler som demojobben fjernes.
5. Behold domenet `oppgaver.kidsakoder.no`: filen `CNAME` kommer fra
   `site/profiles/lkk/public/CNAME` og havner i roten av `dist`.
6. Valgfritt: forhåndsvisning av PR-er. Lag et Cloudflare Pages-prosjekt
   (direct upload) og legg inn hemmelighetene `CLOUDFLARE_API_TOKEN` og
   `CLOUDFLARE_ACCOUNT_ID`. Mangler de, hopper jobben over uten å feile.
   Oppsett står i [site/README.md](../site/README.md).
7. Fyll inn `partners` i `site/profiles/lkk/profile.yml`, med logoene i
   `site/profiles/lkk/public/`.
8. Fjern gammel kode: `.nvmrc`, Docker-oppsett og kloning av codeclub-viewer.

### Alternativ B: behold codeclub-viewer foreløpig

Bruk bare innholdsrettelsene (se under). De er rettet mot `src/` og virker
med begge sidene. Den nye siden kan vente til dere har kapasitet.

## Innholds-PR-er

Eira har rettet lenker, bilder og front matter, og lagt til nye kurs
(blant annet Minecraft for foreldre, Lag din egen Minecraft-mod, Java, Codeling
og KI for veiledere). Innholdsendringene ligger som egne commits, ett kurs om
gangen, og kan sendes til `kodeklubben/oppgaver` som små PR-er, én gren per
kurs. Ta kontakt, så sender Eira dem. `site/` og Eira-profilen sendes ikke
oppstrøms.

## Fargen

Grønnfargen `#0fbe7c` fra codeclub-viewer har kontrastforhold 2,4:1 mot hvitt,
som er under kravene i WCAG (4,5:1 for tekst, 3:1 for knapper og ikoner).
LKK-profilen bruker derfor en mørkere grønn (`#087A50`) på knapper og
overskrifter. Fargene står i `tokens` i `site/profiles/lkk/profile.yml`. LKK
bør bestemme om de vil beholde den mørkere grønnen eller den opprinnelige.

## Lisens

- Innholdet er stort sett CC BY-SA 4.0. Forfattere og LKK skal krediteres, og
  endringer deles på samme vilkår.
- 24 oppgaver har lisensen "Code Club World Limited Terms of Service". De er
  ikke Creative Commons. Eira-profilen bygger dem ikke og lenker til
  oppgaver.kidsakoder.no i stedet. LKK-profilen bygger dem (`exclude: null`).
- Koden i `site/` er MIT-lisensiert (`site/LICENSE`). LKK kan ta den inn,
  endre den og bruke den fritt.

## Kontakt

Tor Einar Enne, Eira Ryfylke.
