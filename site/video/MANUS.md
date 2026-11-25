# Manus for introvideoene

Hvert kurs har et manus i `kurs/<kurs>.yml`. `lag.mjs` gjør det om til et
HyperFrames-prosjekt i `build/<kurs>/` (ikke i git):

```
node site/video/lag.mjs scratch            # lag prosjektet
node site/video/lag.mjs --render scratch   # lag og rendre til build/out/scratch.mp4
node site/video/forside.mjs                # forsidevideoen, build/forside/
```

`--render` trenger HyperFrames-CLI-en (`HYPERFRAMES=...`, ellers
`hyperframes` i PATH) og FFmpeg.

## Formen

Sju skudd og et sluttbilde, som i `FORSLAG.md`: krok, nå, kan bli, du lager,
du lager, første steg, videre. Sluttbildet («Hva vil du lage?» med Eira og
LKK) legges til av seg selv.

Hvert skudd har én setning i `text`. Teksten står stille mens den leses.
Hvor lenge skuddet varer, regnes ut med formelen i `RESEARCH.md`: tempoet er
7 tegn/s når kurset har trinn 1 til 7 (`primary`, `secondary`), ellers 9.
Det kan overstyres med `tempo:` øverst i manuset.

Regler for tekst og bilder:

- Bokmål, korte setninger, maks ca. 40 tegn. Ingen tankestrek (U+2014).
- Bare ekte innhold: bilder fra oppgavene, kode som står i oppgavene, kurs
  som finnes. Ikke tegn falske skjermbilder.
- Ingen barn eller ansikter i bildene.
- Noe skal bevege seg i hvert skudd: panorering, klosser som dras inn, kode
  som skrives, figurer som flytter seg.

## Skuddtyper

Felles felt: `text` (påkrevd), `look: true` (+1 s når bildet må ses),
`enter: whip | zoom | blur` (velges av seg selv om det mangler).

**Bilde** (`kind` kan sløyfes)

```yaml
- src: src/scratch/julekort/julekort.png   # fra repoet, eller assets/...
  H: 560            # høyde i px (standard 560, maks ca. 620)
  plain: true       # uten hvitt kort rundt (for logoer og klosser)
  pan: { scale: 1.5, from: [0.3, 0.5], to: [0.7, 0.5] }  # kamera glir over bildet
  snow: 40          # snø som faller
  glow: { x: 0.66, y: 0.33, color: "0, 230, 60" }       # lys som blinker
  term: { word: kloss, x: 0.36, y: 0.73 }               # merkelapp «← kloss»
  sprites: [...]    # utskårne figurer som beveger seg, se scratch.yml
```

`pan.from` og `pan.to` er punktet i bildet (0 til 1) som står midt i
rammen. Med `pan` er rammen 1400 px bred og bildet `1400 × scale` bredt.
Bare PNG og JPEG.

**Kode** (`kind: code`): kode som skrives fram linje for linje på mørk
bakgrunn. Kopier koden ordrett fra oppgaven, maks ca. 10 linjer og 60 tegn
per linje.

```yaml
- kind: code
  code: |
    for i in range(36):
        forward(100)
        left(170)
  text: Tegn en stjerne med fem linjer kode
```

**Klosser som dras inn** (`kind: build`): bildet deles i biter som dras inn
fra venstre med musepeker. `pieces` er en liste med rektangler
`[x0, y0, x1, y1]` i bildets egne piksler, i den rekkefølgen en elev ville
satt dem sammen. Bildet må ha gjennomsiktig bakgrunn. Se `scratch.yml` og
`wonderbot.yml`.

**Sett sammen** (`kind: snap`): to klosser som smekkes sammen, med fagord.

**Logo** (`kind: logo`): logoen til et annet kurs, for skuddet «videre».

```yaml
- kind: logo
  course: python
  text: Etterpå kan du lære Python.
```

## Bilder i `assets/`

Bilder som ikke ligger i en oppgave, står i `assets/` med kilde i
`assets/KILDER.md`.

## Ferdige filmer

Et kurs kan også ha en egen film i stedet for et manus: et helt
HyperFrames-prosjekt i `film/<kurs>/` med `film.yml` (`tekst`, `poster`,
`kreditt`). `videoer.mjs` rendrer det med `hyperframes render` og behandler
det ellers som de andre videoene. Bare Eira-profilen får disse filmene.
Hackerskolen har en slik film, laget med `film/hackerskolen/gen.mjs`.
