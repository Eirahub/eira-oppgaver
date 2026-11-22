# Forslag: introvideo for hvert kurs

Status: forslag til godkjenning. Ingenting er bygget ennå. Reglene som
styrer tempo, tekst og typografi står i `RESEARCH.md`.

## Hvilke kurs

22 kurs får video. Eksterne kurs (`isExternal: true`) og kurs uten
publiserte oppgaver, som `sponsorer`, får ikke video. Oppgaver med
Code Club World-lisens telles ikke med, men kursene de ligger i får video.

| Gruppe | Kurs |
|---|---|
| Lær Kidsa Koding (12) | appinventor, arduino, codestudio, command_line, diverse, legomindstorms, microbit, processing, python, scratch, uten_datamaskin, web |
| Eira (10) | cc_tweaked, codeling, datamaskin, java, ki_veiledere, minecraft_foreldre, minecraft_mod, multimc, vs_code, wonderbot |

**Slik merkes et Eira-kurs:** det avledes. Et kurs er Eira-laget når mappen
ikke finnes under `src/` i kodeklubben/oppgaver. CI henter
`upstream/master` grunt og sammenligner mappene. Ingen nye felt i `src/`.
Hvis et kurs fra LKK senere skal regnes som Eira-kurs, legges det inn i
`site/video/eira-kurs.yml` som unntak. Den filen er tom til det trengs.

Web er fornyet av Eira, men kommer fra LKK, og regnes derfor som LKK-kurs.

## Strukturen

Videoen er bygget som en sparkline (Duarte): det du gjør nå, det du skal
lage, hva det kan føre til. Eleven er helten. Hvert bilde har én beskjed.
Det er ingen punktlister.

| # | Scene | Hva den gjør | Bilde |
|---|---|---|---|
| 1 | Krok | Ferdig prosjekt kjører, og et spørsmål kurset svarer på | Skjermbilde eller opptak fra en oppgave |
| 2 | Nå | Det eleven kjenner fra før | Et kjent bilde (spill, app, robot) |
| 3 | Kan bli | Vendingen: "Nå lager du ditt eget." | Samme bilde, nå med verktøyet åpent |
| 4 | Du lager | Ett ekte prosjekt med navn | Skjermbilde, klosser eller kode fra oppgaven |
| 5 | Du lager | Et annet prosjekt (brede vegger) | Som over |
| 6 | Første steg | Lav terskel, og ett fagord med bilde | Første oppgave, med fagordet pekt ut |
| 7 | Videre | Hvor kurset fører (høyt tak): neste kurs, hobby eller jobb | Neste kurs sin logo eller et bilde fra det |
| 8 | Slutt | "Hva vil du lage?" | Logoer og URL |

Varigheten regnes ut fra teksten med formelen i `RESEARCH.md`:
`max(3 s, tegn / tempo)`, pluss 1 s når eleven skal se på bildet, pluss 1 s
for et fagord.

### Eksempel: Scratch (7 tegn/s, trinn 1 til 7)

| # | Tekst | Tegn | Tid |
|---|---|---|---|
| 1 | Hvordan får du katten til å hoppe? | 34 | 6 s |
| 2 | Du spiller spill hver dag. | 26 | 4 s |
| 3 | Nå lager du ditt eget. | 22 | 4 s |
| 4 | Et labyrintspill du styrer selv | 31 | 6 s |
| 5 | Et julekort som beveger seg | 27 | 5 s |
| 6 | Første steg: sett sammen to klosser. | 36 | 7 s |
| 7 | Etterpå kan du lære Python. | 27 | 4 s |
| 8 | Hva vil du lage? | 16 | 5 s |
| | | | **ca. 41 s** |

Bilde 8 står 2 s lenger, så logoene rekker å bli lest. Med 9 tegn/s for trinn
8 til 10 blir samme manus ca. 36 s.

### Eksempel: Wonderbot (7 tegn/s)

| # | Tekst |
|---|---|
| 1 | Kan en micro:bit styre en robot? |
| 2 | Dash kjører når du trykker. |
| 3 | Nå bestemmer du hva den gjør. |
| 4 | Få roboten til å danse |
| 5 | En fjernkontroll du har laget selv |
| 6 | Første steg: få Dash til å lyse. |
| 7 | Etterpå: roboter som finner veien selv |
| 8 | Hva vil du lage? |

Tekstene er utkast som viser formen. Det endelige manuset godkjennes per kurs.

## Merkevare

Malen får to parametere: `profil` (`eira` eller `lkk`, samme som
`SITE_PROFILE`) og `gruppe` (`lkk` eller `eira`, avledet som over).

| Kurs | Profil `eira` | Profil `lkk` |
|---|---|---|
| Fra LKK | Eira-farger og lockup, oppgaver.eirahub.no, LKK-logo som kreditering | LKK-farger, LKK-logo og LKK-URL. Ingenting fra Eira. |
| Eira-laget | Eira-farger og lockup, oppgaver.eirahub.no, LKK-logo i tillegg | Eira-farger og lockup, LKK-logo i tillegg, URL-en til profilen |

Regelen er: Eira-identitet hvis profilen er `eira` eller kurset er
Eira-laget, ellers LKK. LKK-logoen er alltid med. Farger, logoer og URL
hentes fra `site/profiles/<profil>/profile.yml` og `public/`, så videoen
følger nettsiden.

**Hvor logoene står:** bare i bilde 8, nede i title-safe-sonen. Hovedlogoen
står til venstre og LKK-logoen til høyre, med teksten under. Bilde 1 til 7
har ingen logo, fordi de første sekundene skal vise prosjektet (Heath,
Loewenstein). Teksten under logoen i bilde 8:

- LKK-kurs: "Oppgaver fra Lær Kidsa Koding · CC BY-SA 4.0"
- Eira-kurs: "Laget av Eira · CC BY-SA 4.0"

Hva LKK-logoen skal bety på Eira-kurs, må avtales med LKK. Den kan ikke
antyde at LKK har laget kurset.

**Bakgrunn:** lys (`--surface-canvas`), med mørk tekst (`--ink`). Det gir ca.
15:1 i kontrast, holder godt på projektor og følger BDA. Uthevingsfargen er
`--accent-teen` i Eira-profilen og `--brand-primary` i LKK-profilen.

## Data

| Fra repoet, automatisk | Skrives for hånd |
|---|---|
| Kurstittel (`index.md`), kurslogo (`logo-black.png`) | Tekstene i bilde 1 til 7 |
| Trinn fra `course.yml`, som gir tempoet | Hvilke oppgaver som vises i bilde 1, 4, 5 og 6 |
| Oppgavetitler og bilder fra oppgavemappene | Neste kurs i bilde 7 |
| Profilens farger, logo, lockup og URL | |
| Gruppe (LKK eller Eira) | |

Manuset ligger i `site/video/kurs/<kurs>.yml`, for eksempel:

```yaml
krok: Hvordan får du katten til å hoppe?
krokOppgave: hoppehelt
naa: Du spiller spill hver dag.
kanBli: Nå lager du ditt eget.
lager:
  - { oppgave: labyrint, tekst: Et labyrintspill du styrer selv }
  - { oppgave: julekort, tekst: Et julekort som beveger seg }
forsteSteg:
  oppgave: astrokatt
  tekst: "Første steg: sett sammen to klosser."
  fagord: kloss
videre: { kurs: python, tekst: Etterpå kan du lære Python. }
```

Kurs uten manus får ingen video. Det er bedre enn en video med generert
tekst. Jeg kan skrive utkast for alle 22 kursene, og du godkjenner dem.

**Bilder når oppgaven har få eller ingen skjermbilder.** Det gjelder
datamaskin, multimc, vs_code og wonderbot.

- Klosser og kode hentes fra nettsiden selv. Bygget tar et bilde av
  kodeblokken i oppgaven (Scratch-klosser, MakeCode-klosser for Wonderbot,
  Python, Java). Da blir de like det eleven ser i oppgaven.
- Når det ikke finnes noe å vise, brukes kurslogoen og en enkel
  illustrasjon. Det skal ikke tegnes falske skjermbilder.

## På kurssiden

Videoen står mellom `<h1>` og "Informasjon om kurset" i
`site/src/pages/[course]/index.astro`:

```html
<figure class="course-video">
  <video controls preload="none" playsinline poster="…/plakat.jpg"
         src="…/video.mp4" aria-describedby="video-tekst"></video>
  <details id="video-tekst">
    <summary>Tekst i videoen</summary>
    <!-- de samme setningene som i videoen -->
  </details>
</figure>
```

- **Starter ved klikk.** Videoen spilles ikke av automatisk og går ikke i
  løkke. Da oppfyller den WCAG 2.2.2 og spilles ikke av samtidig på 15
  maskiner. `controls` gir pause og spoling.
- **Plakatbilde** fra bilde 1, som WebP eller JPG, ca. 50 kB.
- **`prefers-reduced-motion`:** videoen starter ikke av seg selv, så
  plakaten og teksten er nok. Det trengs ingen egen versjon.
- **Tekstversjonen** fungerer med skjermleser, uten JavaScript og uten
  nett til videoen, og læreren kan lese den høyt.
- **Format:** MP4 (H.264), 1080p og 30 bilder/s, uten lydspor. Det spilles
  av overalt. Ca. 2 til 5 MB per video. Jeg lager ikke WebM, fordi én fil er
  nok.
- **Siden virker uten video.** `preload="none"` laster ingenting før
  klikket, og kurs uten video får ingen `<figure>`.

## Filer

Alt ligger i `site/`, som aldri sendes oppstrøms. `src/` røres ikke.

```
site/video/
  RESEARCH.md, FORSLAG.md
  index.html, compositions/   HyperFrames-malen (én scene per fil)
  kurs/<kurs>.yml             manus per kurs
  eira-kurs.yml               unntak (tom)
site/scripts/video.mjs        lager rader, regner hash, rendrer og laster opp
```

`video.mjs` bruker `getCourses()` fra `site/src/lib/content.js` og
`profile.js`, så kurs, trinn og profil leses på samme måte som nettsiden.

## Lagring og automatisk render

- **R2-bøtte** `eira-oppgaver-video`, offentlig via eget domene, for
  eksempel `video.eirahub.no`. `r2.dev`-adressen er strupet og passer ikke
  til produksjon.
- **Nøkkelen er innholdet:** `<profil>/<kurs>-<hash>.mp4` og `.jpg`. Hashen
  regnes av alle variablene for kurset (manus, titler, bildefiler, farger,
  logoer), malen og HyperFrames-versjonen. Endres noe, får videoen ny
  nøkkel. Filene endres aldri, så de kan caches for alltid og trenger
  aldri tømmes.
- **Ny render bare ved endring:** for hvert kurs og hver profil sjekker
  `video.mjs` om nøkkelen finnes (`HEAD` mot den offentlige URL-en, som
  ikke trenger nøkler). Bare videoer som mangler, rendres med
  `hyperframes render --batch` og lastes opp.
- **Bygget** får `site/src/data/videoer.<profil>.json` med URL og tekst per
  kurs, skrevet av renderjobben i samme kjøring. Filen ligger ikke i git.
  Mangler den, bygges siden uten video.
- **Workflow:** et nytt steg før `npm run build` i `build`, `preview` og
  `lkk-demo` i `.github/workflows/deploy.yml`. Steget:
  - installerer FFmpeg med apt hvis det mangler;
  - kjører `hyperframes browser ensure` og `hyperframes telemetry disable`;
  - kjører `node scripts/video.mjs --profil <profil>`.
- **PR-er** får de endrede videoene i forhåndsvisningen på samme måte. PR-er
  fra forks har ikke tilgang til hemmelighetene og bygges uten nye videoer,
  akkurat som forhåndsvisningen hoppes over i dag.
- **Hemmeligheter:** opplastingen bruker `wrangler r2 object put`. Hvis
  `CLOUDFLARE_API_TOKEN` får tillatelsen "Workers R2 Storage: Edit", trengs
  ingen nye hemmeligheter. Ellers lages en egen token, `R2_API_TOKEN`.
  Ingenting i repoet.
- **Tid:** 1 til 2 minutter per video. Første gang rendres 44 videoer
  (22 kurs og 2 profiler), som tar en til halvannen time. Den kjøringen
  startes for hånd med `workflow_dispatch`, eller kjøres lokalt. Etterpå
  rendres bare det som endres.
- **Opprydding:** gamle videoer blir liggende. 44 videoer på 2 til 5 MB er
  godt under gratisgrensen på 10 GB i R2. En opprydding kan legges til hvis
  det trengs.

## Lisens

Videoene deles under CC BY-SA 4.0, som innholdet de bygger på. Bilde 8
krediterer kilden. Forfatterne av oppgavene står i tekstversjonen på siden,
hentet fra `author` i oppgavene som vises. Alle Eira-kursene er også
CC BY-SA 4.0.

## Pilot

Fire videoer: Scratch og Wonderbot, hver i begge profilene. Jeg lager
manuset først og viser det i forhåndsvisningen i HyperFrames før noe
rendres. Piloten testes på en testkveld i klubben, slik som #17. Etter
testen justerer vi tempo og tekst før resten lages.

## Må avklares

1. **LKK-logoen.** Bruken må avtales med LKK, særlig på Eira-kurs.
2. **Domene for R2.** Er `video.eirahub.no` greit, og ligger DNS for
   eirahub.no i Cloudflare?
3. **Manus.** Skal jeg skrive utkast for alle 22 kursene, eller bare for
   piloten først?
4. **Lisens for HyperFrames** til denne bruken, og om rendring i CI krever
   konto. Det har jeg ikke sjekket.
