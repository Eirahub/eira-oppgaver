---
title: "HTML: Video og lyd"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Ei nettside kan ha meir enn tekst og bilete. I denne oppgåva legg du inn video
og lyd med taggane `<video>` og `<audio>`. Du lærer også å lage teksting, slik
at dei som ikkje høyrer lyden, eller sit ein stad der lyden må vere av, også
kan følgje med.

Før du startar, bør du ha gjort [Mi første
nettside](../min_forste_nettside/min_forste_nettside_nn.html).

Videoane og lyden i døma er frå MDN Web Docs og er frie å bruke (CC0).


# Steg 1: Ein video på sida {.activity}

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Video</title>
  </head>
  <body>
    <h1>En blomst</h1>
    <video
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      controls
      width="400">
      Nettleseren din kan ikke vise denne videoen.
    </video>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Start videoen med avspelingsknappen.

- [ ] Fjern ordet `controls` og sjå kva som skjer. Kan du framleis starte
  videoen? Set `controls` tilbake.

- [ ] Endre `width` til `250` eller `600`.

- [ ] Legg til `loop` etter `controls`. Kva gjer det?

## Forklaring {.tip}

- `src` er adressa til videofila.

- `controls` viser knappane for start, pause, lyd og fullskjerm. Utan han har
  brukaren ingen måte å styre videoen på.

- Teksten mellom `<video>` og `</video>` blir berre vist i nettlesarar som ikkje
  kan spele av video.

- `autoplay` startar videoen av seg sjølv, men dei fleste nettlesarane tillèt
  det berre når videoen er dempa (`muted`). Video som startar av seg sjølv, er
  ofte irriterande, så bruk det lite.

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under dømet,
eller lag ei ny fil. Sjå oppgåva [VS Code](../vs_code/vs_code_nn.html).


# Steg 2: Lyd {.activity}

Lyd fungerer nesten likt, med taggen `<audio>`.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Lyd</title>
  </head>
  <body>
    <h1>Hør på dinosauren</h1>
    <audio
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
      controls>
      Nettleseren din kan ikke spille av denne lyden.
    </audio>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Spel av lyden.

- [ ] Kva skjer om du fjernar `controls` her? Kvifor er det ekstra viktig for
  lyd?

- [ ] Skriv eit avsnitt med `<p>` som fortel kva lyden er. Det hjelper dei som
  ikkje kan høyre han.


# Steg 3: Teksting {.activity}

Teksting legg vi i ei eiga fil med formatet **WebVTT** (filending `.vtt`). Fila
seier kva tekst som skal visast, og når. Videoen blir kopla til fila med taggen
`<track>`.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Teksting</title>
  </head>
  <body>
    <h1>Video med teksting</h1>
    <video
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
      controls
      width="400"
      crossorigin="anonymous">
      <track
        src="https://interactive-examples.mdn.mozilla.net/media/examples/friday.vtt"
        kind="captions"
        srclang="en"
        label="English"
        default>
    </video>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Start videoen. Ser du tekst nedst i biletet?

  ![Videoen med ein svart-kvitt-scene frå eit kontor. Nedst i biletet står
  teksten "Somebody must've stolen the crown
  jewels".](video_med_teksting.png)

- [ ] Fjern ordet `default` i `<track>`. No må teksten slåast på med knappen for
  teksting i videoen.

## Forklaring {.tip}

- `kind="captions"` tyder teksting av alt som blir sagt og høyrt. `subtitles`
  blir brukt for omsetjing til eit anna språk.

- `srclang` er språket i teksten, og `label` er namnet brukaren ser i menyen.

- `default` gjer at teksten er på frå start.

- `crossorigin` trengst her fordi video og tekst ligg på ei anna nettside enn
  di. Når filene ligg i di eiga mappe, kan du droppe han.


# Steg 4: Lag di eiga teksting {.activity}

No skal du lage teksting til din eigen video. Dette gjer du i VS Code, sidan du
treng eigne filer.

## Sjekkliste {.check}

- [ ] Lag ei mappe med ein `index.html`, slik du lærte i [VS
  Code](../vs_code/vs_code_nn.html).

- [ ] Legg ein kort video i mappa, til dømes `film.mp4`. Bruk ein video du har
  laga sjølv, eller som du har lov til å bruke.

- [ ] Lag ei ny fil i same mappe som heiter `teksting.vtt`, og skriv:

  ```text
  WEBVTT

  00:00.000 --> 00:03.000
  Hei, og velkommen til filmen min!

  00:03.000 --> 00:06.000
  Her ser du hagen vår.
  ```

- [ ] Kvar bit har ei starttid og ei sluttid (minutt:sekund.tusendelar) med
  `-->` mellom, og teksten på linja under. Det skal vere ei tom linje mellom
  kvar bit.

- [ ] Legg inn videoen i `index.html`:

  ```html
  <video src="film.mp4" controls width="400">
    <track src="teksting.vtt" kind="captions" srclang="no" label="Norsk" default>
  </video>
  ```

- [ ] Opne sida med **Live Preview** i VS Code. Blir teksten vist?

- [ ] Endre tidene og tekstane så dei passar til det som skjer i *din* video.

## Verkar ikkje tekstinga? {.tip}

Opnar du `index.html` ved å dobbeltklikke på fila, viser mange nettlesarar ikkje
teksten. Dei lastar berre `.vtt`-filer frå ein webserver. Bruk Live Preview,
eller publiser sida.


# Steg 5: Video frå YouTube {.activity}

Videoar frå YouTube kan ikkje leggjast inn med `<video>`. I staden gir YouTube
deg ein ferdig kode.

## Sjekkliste {.check}

- [ ] Finn ein video på YouTube og trykk **Del** og så **Bygg inn** (eller
  **Embed**).

- [ ] Kopier koden som startar med `<iframe` og lim han inn i sida di.

- [ ] Byt ut `www.youtube.com` med `www.youtube-nocookie.com` i adressa. Då
  lagrar YouTube mindre informasjon om dei som ser på sida.

- [ ] Sjekk at videoen har teksting. Den slår du på i YouTube når du lastar opp
  eigne videoar.


# Utfordringar {.challenge}

- [ ] Lag ei side med ei lita "lydbok": nokre avsnitt tekst, kvart med ei
  lydfil der du les teksten høgt.

- [ ] Lag teksting på eit anna språk med `kind="subtitles"`, og legg til ein
  ekstra `<track>`. No kan brukaren velje språk i videoen.

- [ ] Legg til eit bilete som blir vist før videoen startar, med
  `poster="bilde.jpg"` i `<video>`.
