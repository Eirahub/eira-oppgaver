---
title: "HTML: Video og lyd"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En nettside kan ha mer enn tekst og bilder. I denne oppgaven legger du inn video
og lyd med taggene `<video>` og `<audio>`. Du lærer også å lage teksting, slik
at de som ikke hører lyden, eller sitter et sted der lyden må være av, også kan
følge med.

Før du starter, bør du ha gjort [Min første
nettside](../min_forste_nettside/min_forste_nettside.html).

Videoene og lyden i eksemplene er fra MDN Web Docs og er frie å bruke (CC0).


# Steg 1: En video på siden {.activity}

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

- [ ] Start videoen med avspillingsknappen.

- [ ] Fjern ordet `controls` og se hva som skjer. Kan du fortsatt starte
  videoen? Sett `controls` tilbake.

- [ ] Endre `width` til `250` eller `600`.

- [ ] Legg til `loop` etter `controls`. Hva gjør det?

## Forklaring {.tip}

- `src` er adressen til videofila.

- `controls` viser knappene for start, pause, lyd og fullskjerm. Uten den har
  brukeren ingen måte å styre videoen på.

- Teksten mellom `<video>` og `</video>` vises bare i nettlesere som ikke kan
  spille av video.

- `autoplay` starter videoen av seg selv, men de fleste nettlesere tillater det
  bare når videoen er dempet (`muted`). Video som starter av seg selv, er ofte
  irriterende, så bruk det lite.

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under
eksempelet, eller lag en ny fil. Se oppgaven [VS Code](../vs_code/vs_code.html).


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

- [ ] Spill av lyden.

- [ ] Hva skjer om du fjerner `controls` her? Hvorfor er det ekstra viktig for
  lyd?

- [ ] Skriv et avsnitt med `<p>` som forteller hva lyden er. Det hjelper dem
  som ikke kan høre den.


# Steg 3: Teksting {.activity}

Teksting legger vi i en egen fil med formatet **WebVTT** (filendelse `.vtt`).
Fila sier hvilken tekst som skal vises, og når. Videoen kobles til fila med
taggen `<track>`.

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

- [ ] Start videoen. Ser du tekst nederst i bildet?

- [ ] Fjern ordet `default` i `<track>`. Nå må teksten slås på med knappen for
  teksting i videoen.

## Forklaring {.tip}

- `kind="captions"` betyr teksting av alt som sies og høres. `subtitles` brukes
  for oversettelse til et annet språk.

- `srclang` er språket i teksten, og `label` er navnet brukeren ser i menyen.

- `default` gjør at teksten er på fra start.

- `crossorigin` trengs her fordi video og tekst ligger på en annen nettside enn
  din. Når filene ligger i din egen mappe, kan du droppe den.


# Steg 4: Lag din egen teksting {.activity}

Nå skal du lage teksting til din egen video. Dette gjør du i VS Code, siden du
trenger egne filer.

## Sjekkliste {.check}

- [ ] Lag en mappe med en `index.html`, slik du lærte i [VS
  Code](../vs_code/vs_code.html).

- [ ] Legg en kort video i mappa, for eksempel `film.mp4`. Bruk en video du har
  laget selv, eller som du har lov til å bruke.

- [ ] Lag en ny fil i samme mappe som heter `teksting.vtt`, og skriv:

  ```text
  WEBVTT

  00:00.000 --> 00:03.000
  Hei, og velkommen til filmen min!

  00:03.000 --> 00:06.000
  Her ser du hagen vår.
  ```

- [ ] Hver bit har en starttid og en sluttid (minutter:sekunder.tusendeler) med
  `-->` mellom, og teksten på linja under. Det skal være en tom linje mellom
  hver bit.

- [ ] Legg inn videoen i `index.html`:

  ```html
  <video src="film.mp4" controls width="400">
    <track src="teksting.vtt" kind="captions" srclang="no" label="Norsk" default>
  </video>
  ```

- [ ] Åpne siden med **Live Preview** i VS Code. Vises teksten?

- [ ] Endre tidene og tekstene så de passer til det som skjer i *din* video.

## Virker ikke tekstingen? {.tip}

Åpner du `index.html` ved å dobbeltklikke på fila, viser mange nettlesere ikke
teksten. De laster bare `.vtt`-filer fra en webserver. Bruk Live Preview, eller
publiser siden.


# Steg 5: Video fra YouTube {.activity}

Videoer fra YouTube kan ikke legges inn med `<video>`. I stedet gir YouTube deg
en ferdig kode.

## Sjekkliste {.check}

- [ ] Finn en video på YouTube og trykk **Del** og så **Bygg inn** (eller
  **Embed**).

- [ ] Kopier koden som starter med `<iframe` og lim den inn i siden din.

- [ ] Bytt ut `www.youtube.com` med `www.youtube-nocookie.com` i adressen. Da
  lagrer YouTube mindre informasjon om dem som ser på siden.

- [ ] Sjekk at videoen har teksting. Den slår du på i YouTube når du laster opp
  egne videoer.


# Utfordringer {.challenge}

- [ ] Lag en side med en liten "lydbok": noen avsnitt tekst, hver med en
  lydfil der du leser teksten høyt.

- [ ] Lag teksting på et annet språk med `kind="subtitles"`, og legg til en
  ekstra `<track>`. Nå kan brukeren velge språk i videoen.

- [ ] Legg til et bilde som vises før videoen starter, med `poster="bilde.jpg"`
  i `<video>`.
