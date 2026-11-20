# Funksjoner: codeclub-viewer og den nye siden

Liste over alt brukeren møter i den gamle codeclub-viewer (oppgaver.kidsakoder.no),
og om det er med i første versjon av den nye siden (v1) eller kommer senere.

## Forside

| Funksjon | Status |
|---|---|
| Liste over kurs med logo (`logo-black.png`) og antall oppgaver | v1 |
| Egen seksjon for kurs på andre nettsider (`isExternal: true`), lenker ut | v1 |
| Kurs etter teknologi (gruppert, standard) eller alfabetisk, valget lagres. Grupper i `site/src/data/kursgrupper.yml` | ny |
| Info-popover med kursets introtekst | senere |
| Filter på forsiden (språk, tema, fag, trinn) som skjuler kurs | senere |
| Visning av spillelister i stedet for kurs ("Oppgavesamlinger") | senere |
| Lærer-infoboks i lærermodus | v1, tekst fra profilen (`teacherInfo`) |
| "Sist besøkt"-knapp (fortsett der du slapp) | senere |
| Sponsorlogoer og lenker (NTNU, Samsung, excITEd, ibok osv.) | v1 som tom liste `partners` i profilen |

## Kursside

| Funksjon | Status |
|---|---|
| Tittel fra `index.md` og "Informasjon om kurset" (sammenleggbar) | v1 |
| Oppgavesamlinger fra `playlists/*.yml`, sortert på `sortindex` | v1 |
| Alle oppgaver gruppert på nivå 1 til 4 med nivåikon | v1 |
| "Hopp til" nivå | v1 |
| Filter i nettleseren: språk (ELLER), tema, fag, trinn (OG) | v1 |
| Visningsnavn for tagger fra `filtertags/translation_nb.yml` | v1 |
| "Nullstill filter" og melding når ingen oppgaver passer | v1 |
| `indexed: false` bygges, men vises ikke i listene | v1 |
| Eksterne oppgaver (`external:`) lenker ut | v1 |
| Fremdriftslinje per oppgave i listen | senere |
| Info-popover med oppgavens introtekst | senere |
| Lenke til lærerveiledning fra listen (lærermodus) | v1 |

## Oppgaveside

| Funksjon | Status |
|---|---|
| Markdown med overskriftsklasser (`.intro`, `.activity`, `.check`, `.flag`, `.challenge`, `.tip`, `.protip`, `.save`, `.try`) som egne seksjoner | v1 |
| Ikoner på `.check`, `.flag` og `.save` | v1 |
| Sjekklister `- [ ]` som virker, lagres i `localStorage` | v1 |
| Fremdrift (avkrysset av totalt) og "Fjern avkrysninger" | v1 |
| Scratch-klosser (` ```blocks ` og `{.b}`) på språket fra filsuffikset | v1 |
| micro:bit-klosser (` ```microbit `) via MakeCode-renderer, som før | v1 |
| Syntaksfarger for kode (highlight.js) | v1 |
| Fargede enkeltklosser (`{.blockmotion}`, `{.microbitbasic}` osv.) | v1 |
| Bilder med alt-tekst, bildetekst for bilder alene i avsnitt | v1 |
| `<toggle>`-hint som kan åpnes og lukkes | v1 |
| Bunntekst med forfatter, oversetter og lisens | v1 |
| Lenke til lærerveiledning (`README`) og tilbake til oppgaven | v1, "Til lærerveiledningen" bare i lærermodus, som før |
| Bytte mellom språkversjoner som finnes | v1 |
| "Forbedre denne siden" (rediger på GitHub, rapporter problem) | v1, repo og gren fra profilen |
| Nivåikon ved tittelen | v1 |
| Brødsmuler (forside, kurs, oppgave) | v1 |
| Utskrift og "lagre som PDF" (knapp, egen utskriftsstil for A4) | v1 |
| Ferdige PDF-filer per oppgave til nedlasting | senere |
| "Åpne på mobilen": QR-kode og lenke til siden, med avkrysningene (se under) | v1, ny |
| "Hold skjermen på" (Screen Wake Lock) der nettleseren støtter det | v1, ny |
| Video: HTML5 `<video>` med `<source>`/`<track>` fra oppgavemappen, og YouTube-nocookie/Vimeo-iframes, tilpasset skjermbredden | v1 |
| Video-container (`::: video [url]`) fra codeclub-viewer | senere (brukes ikke i innholdet nå, HTML5 over dekker behovet) |
| KaTeX-matematikk | senere (brukes ikke i innholdet nå) |
| Emoji-koder (`:smile:`) | senere (brukes ikke i innholdet nå) |
| Elev- og lærermodus | v1, se under |
| "Prøv selv": ` ```html-live ` blir kodefelt med levende resultat i en sandkasse, konsoll, "Tilbakestill", "Last ned som fil" og løkkevern som stopper uendelige løkker (erstatter JS Bin) | ny, se `README.md` |

## Hele siden

| Funksjon | Status |
|---|---|
| Samme URL-er: `/<kurs>/`, `/<kurs>/<mappe>/<fil>`, `/<kurs>/<mappe>/README` | v1 |
| 404-side | v1 |
| Profiler (`site/profiles/`): `eira` med logo i levende typografi, `lkk` med logo, farger og meny fra codeclub-viewer | v1 |
| Lenker til oppgaver som er holdt utenfor, går til oppgaver.kidsakoder.no (merket ↗) | v1, når profilen har `exclude` |
| Side "Om oppgavene" med lisens og kreditering | v1 |
| Kreditering av Lær Kidsa Koding og kodeklubben/oppgaver | v1 |
| Oppgaver med "Code Club World"-lisens bygges ikke | v1 |
| `unpublished/` bygges ikke | v1 |
| Mobilvennlig, tastaturnavigering, god kontrast | v1 |
| Velge språk for brukergrensesnittet (nb, nn, en, is, ua) | senere (bare bokmål nå) |
| Skrift for dyslektikere | senere |
| Navigasjon til kidsakoder.no-sider (Nyheter, Finn kodeklubb osv.) | v1 i profilen `lkk`, ikke i `eira` |
| Søk i oppgavene (Pagefind, statisk indeks, filter på kurs) på forsiden | ny, se `README.md` |
| Sitemap | senere |
| Lenke til forum.kidsakoder.no | fjernet |

## Andre skjerm: mobilen ved siden av PC-en

- Knappen "Åpne på mobilen" på oppgaver og lærerveiledninger åpner en dialog
  med QR-kode, lenken som tekst og "Kopier lenke". Knappen vises ikke på smale
  skjermer (da er man allerede på mobilen), ikke uten JavaScript og ikke på
  utskrift. QR-koden lages i nettleseren med `qrcode-generator` (MIT), som
  bare lastes når dialogen åpnes.
- Avkrysningene blir med i lenken som `#fremdrift=<kode>`: en bitmaske over
  sjekkpunktene i siderekkefølge, skrevet i base36 (punkt 1 og 5 gir
  `#fremdrift=h`). Når siden åpnes med koden, legges punktene til de som
  allerede er lagret (union), lagres i `localStorage`, og koden fjernes fra
  adressen. Ugyldige koder og punkter siden ikke har, ignoreres. Det er et
  øyeblikksbilde, ikke synkronisering. Ingen konto, ingen server.
- "Hold skjermen på" holder skjermen våken mens oppgaven er åpen, og tar låsen
  igjen når fanen blir synlig. Valget lagres ikke, så det gjelder bare siden
  du er på.

## Elev- og lærermodus

Som i codeclub-viewer:

- Knappen "Lærermodus" står i toppen på alle sider. Det er en vanlig knapp med
  `aria-pressed`. Uten JavaScript vises den ikke, og siden er i elevmodus.
- Elevmodus er standard. Valget lagres i `localStorage` under `isStudentMode`
  (`true`/`false`), samme nøkkel som codeclub-viewer, slik at valget følger med
  på oppgaver.kidsakoder.no. Blokkert lagring gir elevmodus.
- Lærermodus viser lærer-infoboksen på forsiden, en lenke "Lærerveiledning" ved
  hver oppgave i kurslistene og knappen "Til lærerveiledningen" på oppgaven.
  "Til oppgaven" på lærerveiledningen vises alltid.
- Ikke med: codeclub-viewer byttet også fargetema (grønt for elev, blått for
  lærer). Her viser bare knappen hvilken modus som er på.
