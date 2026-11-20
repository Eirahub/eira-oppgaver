---
title: Lag nettsider i VS Code
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

**Prøv selv**-boksene i oppgavene er fine for å teste. Når du vil lage en større
nettside, med flere sider og egne bilder, trenger du et program der du lagrer
filene på maskinen. Vi bruker **Visual Studio Code**, ofte kalt **VS Code**. Det
er gratis og finnes for Windows, Mac og Linux.

I denne oppgaven installerer du VS Code, lager din første fil og ser den i
nettleseren.

Vil du lære mer om VS Code, for eksempel Python, Git og feilsøking, se kurset
[VS Code](../../vs_code/).

## Til voksne {.tip}

Installering krever ofte en voksen eller administrator på skolemaskiner. Gjør
dette før økten. På Chromebook og nettbrett går det ikke å installere VS Code.
Der kan elevene bruke Prøv selv-boksene og **Last ned som fil**.


# Steg 1: Installer VS Code {.activity}

## Sjekkliste {.check}

- [ ] Gå til [code.visualstudio.com](https://code.visualstudio.com/) og trykk på
  knappen for å laste ned.

- [ ] Kjør installasjonen. Standardvalgene er fine.

- [ ] Start VS Code.

<!-- BILDE: VS Code første gang den startes, med velkomstsiden -->


# Steg 2: Lag en mappe og åpne den {.activity}

En nettside er en samling filer. Hold dem samlet i én mappe.

## Sjekkliste {.check}

- [ ] Lag en ny mappe, for eksempel `min-nettside` i **Dokumenter**. Bruk små
  bokstaver og bindestrek i stedet for mellomrom.

- [ ] I VS Code: velg **File** > **Open Folder...** og velg mappa.

- [ ] Svarer VS Code med et spørsmål om du stoler på forfatterne av filene, velg
  **Yes, I trust the authors**. Det er jo deg.

- [ ] Til venstre ser du nå **Explorer** med navnet på mappa.


# Steg 3: Lag index.html {.activity}

Startsiden på en nettside heter nesten alltid `index.html`.

## Sjekkliste {.check}

- [ ] Hold musa over mappenavnet i **Explorer** og trykk på ikonet **New
  File...**.

- [ ] Skriv `index.html` og trykk **Enter**.

- [ ] Skriv et utropstegn `!` i den tomme fila. Det dukker opp en liten meny.
  Trykk **Tab** eller **Enter**.

- [ ] Nå får du et helt HTML-skjelett. Dette kalles **Emmet** og er innebygd i
  VS Code.

- [ ] Endre `lang="en"` til `lang="no"`, siden siden din er på norsk.

- [ ] Skriv noe inne i `<body>`:

  ```html
  <h1>Hei fra VS Code!</h1>
  <p>Denne siden lagde jeg selv.</p>
  ```

- [ ] Lagre med **Ctrl** + **S** (på Mac **Cmd** + **S**).

## Har du kode fra en Prøv selv-boks? {.tip}

Trykk **Last ned som fil** under boksen. Flytt fila `index.html` fra
**Nedlastinger** til mappa di, så ligger den klar i VS Code.


# Steg 4: Se siden i nettleseren {.activity}

## Sjekkliste {.check}

- [ ] Åpne mappa i filutforskeren på maskinen og dobbeltklikk på `index.html`.
  Siden åpnes i nettleseren.

- [ ] Endre teksten i VS Code og lagre.

- [ ] Gå til nettleseren og trykk **F5** (eller **Ctrl** + **R**) for å laste
  siden på nytt. Ser du endringen?

Husk: *lagre* i VS Code, og *last på nytt* i nettleseren. Glemmer du en av dem,
ser du ikke endringen.


# Steg 5: Live Preview {.activity}

Det blir fort mye lagring og oppdatering. Utvidelsen **Live Preview** fra
Microsoft viser siden inne i VS Code og oppdaterer den mens du skriver.

## Sjekkliste {.check}

- [ ] Trykk på ikonet **Extensions** i stripa helt til venstre (fire små
  firkanter), eller trykk **Ctrl** + **Shift** + **X**.

- [ ] Søk etter `Live Preview`. Velg den som er laget av **Microsoft**, og trykk
  **Install**. Du finner den også på [Visual Studio
  Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server).

- [ ] Åpne `index.html`. Trykk på ikonet **Show Preview** øverst til høyre i
  vinduet (en liten skjerm med et forstørrelsesglass).

- [ ] Endre teksten. Oppdateres forhåndsvisningen?

<!-- BILDE: VS Code med index.html til venstre og Live Preview til høyre -->

## Tips {.tip}

Live Preview kjører en liten webserver på maskinen din. Da virker også ting som
ikke virker når du dobbeltklikker fila, for eksempel teksting på video.


# Steg 6: Lagre automatisk {.activity}

## Sjekkliste {.check}

- [ ] Velg **File** > **Auto Save**. Nå lagrer VS Code hver gang du stopper å
  skrive.

- [ ] Ser du en hvit prikk på fanen øverst? Da er fila *ikke* lagret.


# Neste steg {.challenge}

- [ ] Lag en fil til, for eksempel `om-meg.html`, og lenk til den fra
  `index.html` med `<a href="om-meg.html">Om meg</a>`.

- [ ] Legg et bilde i mappa og vis det med `<img src="bilde.jpg" alt="...">`.

- [ ] Vil du at andre skal se siden din på nettet? Se oppgaven [Publiser
  nettsiden din](../publiser/publiser.html).
