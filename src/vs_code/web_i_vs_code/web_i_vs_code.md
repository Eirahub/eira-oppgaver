---
title: Nettsider i VS Code
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

VS Code er godt egnet til å lage nettsider. Du skriver HTML og CSS i filer på
maskinen og ser resultatet med en gang med utvidelsen **Live Preview**.

Dette er en kort versjon. Hele oppgaven, med flere steg og tips, finner du i
[Lag nettsider i VS Code](../../web/vs_code/vs_code.html) i Web-kurset.

<!-- BILDE: VS Code med index.html til venstre og Live Preview til høyre -->


# Steg 1: Lag index.html {.activity}

## Sjekkliste {.check}

- [ ] Lag en mappe `nettside` inne i mappa `kodeklubb`, og åpne den med **File**
  > **Open Folder...**.

- [ ] Lag en ny fil som heter `index.html`.

- [ ] Skriv et utropstegn `!` og trykk **Tab**. Nå får du et helt HTML-skjelett.
  Det kalles **Emmet** og er innebygd i VS Code.

- [ ] Endre `lang="en"` til `lang="no"`, og skriv noe inne i `<body>`:

  ```html
  <h1>Hei fra VS Code!</h1>
  ```


# Steg 2: Live Preview {.activity}

## Sjekkliste {.check}

- [ ] Åpne **Extensions** med **Ctrl** + **Shift** + **X**.

- [ ] Søk etter `Live Preview`. Velg den som er laget av **Microsoft**, og trykk
  **Install**.

- [ ] Åpne `index.html` og trykk på ikonet **Show Preview** øverst til høyre i
  editoren.

- [ ] Endre overskriften. Forhåndsvisningen oppdateres mens du skriver.

## Tips {.tip}

Du kan også høyreklikke på `index.html` i Explorer og velge **Show Preview**.


# Steg 3: Legg til CSS {.activity}

## Sjekkliste {.check}

- [ ] Lag en fil som heter `stil.css`:

  ```css
  h1 {
    color: darkblue;
  }
  ```

- [ ] Legg inn denne linja i `<head>` i `index.html`:

  ```html
  <link rel="stylesheet" href="stil.css">
  ```

- [ ] Ble overskriften blå i forhåndsvisningen?


# Neste steg {.challenge}

- [ ] Ta hele oppgaven [Lag nettsider i VS
  Code](../../web/vs_code/vs_code.html).

- [ ] Se resten av [Web-kurset](../../web/) for HTML, CSS og JavaScript.
