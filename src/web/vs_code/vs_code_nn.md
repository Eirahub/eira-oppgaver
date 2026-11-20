---
title: Lag nettsider i VS Code
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

**Prøv selv**-boksane i oppgåvene er fine for å teste. Når du vil lage ei større
nettside, med fleire sider og eigne bilete, treng du eit program der du lagrar
filene på maskina. Vi bruker **Visual Studio Code**, ofte kalla **VS Code**. Det
er gratis og finst for Windows, Mac og Linux.

I denne oppgåva installerer du VS Code, lagar den første fila di og ser henne i
nettlesaren.

## Til vaksne {.tip}

Installering krev ofte ein vaksen eller administrator på skulemaskiner. Gjer
dette før økta. På Chromebook og nettbrett går det ikkje å installere VS Code.
Der kan elevane bruke Prøv selv-boksane og **Last ned som fil**.


# Steg 1: Installer VS Code {.activity}

## Sjekkliste {.check}

- [ ] Gå til [code.visualstudio.com](https://code.visualstudio.com/) og trykk på
  knappen for å laste ned.

- [ ] Køyr installasjonen. Standardvala er fine.

- [ ] Start VS Code.

<!-- BILDE: VS Code første gongen det blir starta, med velkomstsida -->


# Steg 2: Lag ei mappe og opne henne {.activity}

Ei nettside er ei samling filer. Hald dei samla i éi mappe.

## Sjekkliste {.check}

- [ ] Lag ei ny mappe, til dømes `min-nettside` i **Dokumenter**. Bruk små
  bokstavar og bindestrek i staden for mellomrom.

- [ ] I VS Code: vel **File** > **Open Folder...** og vel mappa.

- [ ] Svarar VS Code med eit spørsmål om du stolar på forfattarane av filene,
  vel **Yes, I trust the authors**. Det er jo deg.

- [ ] Til venstre ser du no **Explorer** med namnet på mappa.


# Steg 3: Lag index.html {.activity}

Startsida på ei nettside heiter nesten alltid `index.html`.

## Sjekkliste {.check}

- [ ] Hald musa over mappenamnet i **Explorer** og trykk på ikonet **New
  File...**.

- [ ] Skriv `index.html` og trykk **Enter**.

- [ ] Skriv eit utropsteikn `!` i den tomme fila. Det dukkar opp ein liten meny.
  Trykk **Tab** eller **Enter**.

- [ ] No får du eit heilt HTML-skjelett. Dette blir kalla **Emmet** og er
  innebygd i VS Code.

- [ ] Endre `lang="en"` til `lang="no"`, sidan sida di er på norsk.

- [ ] Skriv noko inne i `<body>`:

  ```html
  <h1>Hei fra VS Code!</h1>
  <p>Denne siden lagde jeg selv.</p>
  ```

- [ ] Lagre med **Ctrl** + **S** (på Mac **Cmd** + **S**).

## Har du kode frå ein Prøv selv-boks? {.tip}

Trykk **Last ned som fil** under boksen. Flytt fila `index.html` frå
**Nedlastinger** til mappa di, så ligg ho klar i VS Code.


# Steg 4: Sjå sida i nettlesaren {.activity}

## Sjekkliste {.check}

- [ ] Opne mappa i filutforskaren på maskina og dobbeltklikk på `index.html`.
  Sida blir opna i nettlesaren.

- [ ] Endre teksten i VS Code og lagre.

- [ ] Gå til nettlesaren og trykk **F5** (eller **Ctrl** + **R**) for å laste
  sida på nytt. Ser du endringa?

Hugs: *lagre* i VS Code, og *last på nytt* i nettlesaren. Gløymer du ein av dei,
ser du ikkje endringa.


# Steg 5: Live Preview {.activity}

Det blir fort mykje lagring og oppdatering. Utvidinga **Live Preview** frå
Microsoft viser sida inne i VS Code og oppdaterer henne medan du skriv.

## Sjekkliste {.check}

- [ ] Trykk på ikonet **Extensions** i stripa heilt til venstre (fire små
  firkantar), eller trykk **Ctrl** + **Shift** + **X**.

- [ ] Søk etter `Live Preview`. Vel den som er laga av **Microsoft**, og trykk
  **Install**. Du finn henne også på [Visual Studio
  Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server).

- [ ] Opne `index.html`. Trykk på ikonet **Show Preview** øvst til høgre i
  vindauget (ein liten skjerm med eit forstørringsglas).

- [ ] Endre teksten. Blir førehandsvisinga oppdatert?

<!-- BILDE: VS Code med index.html til venstre og Live Preview til høgre -->

## Tips {.tip}

Live Preview køyrer ein liten webserver på maskina di. Då verkar også ting som
ikkje verkar når du dobbeltklikkar på fila, til dømes teksting på video.


# Steg 6: Lagre automatisk {.activity}

## Sjekkliste {.check}

- [ ] Vel **File** > **Auto Save**. No lagrar VS Code kvar gong du sluttar å
  skrive.

- [ ] Ser du ein kvit prikk på fana øvst? Då er fila *ikkje* lagra.


# Neste steg {.challenge}

- [ ] Lag ei fil til, til dømes `om-meg.html`, og lenk til henne frå
  `index.html` med `<a href="om-meg.html">Om meg</a>`.

- [ ] Legg eit bilete i mappa og vis det med `<img src="bilde.jpg" alt="...">`.

- [ ] Vil du at andre skal sjå sida di på nettet? Sjå oppgåva [Publiser nettsida
  di](../publiser/publiser_nn.html).
