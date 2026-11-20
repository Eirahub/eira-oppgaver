---
title: Bli kjent med VS Code
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

VS Code har mange knapper og paneler. I denne oppgaven lærer du de du trenger
hele tiden: filutforskeren, kommandopaletten, terminalen og noen snarveier. Du
lager også en prosjektmappe som du kan bruke i resten av kurset.

<!-- BILDE: VS Code-vinduet med Activity Bar, Explorer, editoren, panelet med
terminalen og statuslinja merket med piler -->

## Mac {.tip}

Bruker du Mac, bytt **Ctrl** med **Cmd** i snarveiene.


# Steg 1: Åpne en mappe {.activity}

Et program består ofte av flere filer. Derfor åpner vi en hel *mappe* i VS Code,
ikke bare én fil. Da ser du alle filene i prosjektet, og terminalen starter i
riktig mappe.

## Sjekkliste {.check}

- [ ] Lag en mappe som heter `kodeklubb` i **Dokumenter**. Bruk små bokstaver og
  ingen mellomrom.

- [ ] I VS Code: velg **File** > **Open Folder...** og velg mappa.

- [ ] VS Code spør om du stoler på forfatterne av filene i mappa. Det er deg, så
  velg **Yes, I trust the authors**.

- [ ] Til venstre ser du nå **Explorer** med navnet på mappa.

## Ikke stol på alt {.tip}

Har du lastet ned en mappe fra nettet og vet ikke hva som er i den, velg **No, I
don't trust the authors**. Da åpnes mappa i *Restricted Mode*. Du kan lese
filene, men VS Code kjører ikke noe av koden.


# Steg 2: Lag filer og mapper {.activity}

## Sjekkliste {.check}

- [ ] Hold musa over mappenavnet i **Explorer**. Trykk på ikonet **New
  File...**.

- [ ] Skriv `notater.txt` og trykk **Enter**. Fila åpnes i editoren.

- [ ] Skriv noen ord i fila.

- [ ] Trykk på ikonet **New Folder...** og lag en mappe som heter `python`.

- [ ] Dra fila `notater.txt` inn i mappa `python`, og tilbake igjen.

## Mappe eller fil? {.tip}

Med **File** > **Open File...** åpner du bare én fil. Da finnes ingen Explorer
med prosjektet ditt, og mange ting virker dårligere. Bruk **Open Folder...**.


# Steg 3: Lagre automatisk {.activity}

En hvit prikk på fanen øverst betyr at fila ikke er lagret.

## Sjekkliste {.check}

- [ ] Lagre med **Ctrl** + **S**. Forsvinner prikken?

- [ ] Velg **File** > **Auto Save**. Nå lagrer VS Code et sekund etter at du
  slutter å skrive.

- [ ] Skriv noe mer. Ser du at prikken kommer og går?


# Steg 4: Kommandopaletten {.activity}

Alt VS Code kan gjøre, finner du i **Command Palette**. Den er den viktigste
snarveien å huske.

## Sjekkliste {.check}

- [ ] Trykk **Ctrl** + **Shift** + **P** (eller **F1**). Et søkefelt åpnes
  øverst.

- [ ] Skriv `theme` og velg **Preferences: Color Theme**. Prøv noen fargetemaer
  med piltastene, og trykk **Enter** på det du liker.

- [ ] Trykk **Ctrl** + **P** (uten **Shift**). Skriv `not` og trykk **Enter**.
  Slik åpner du en fil raskt når prosjektet blir stort.

## Visste du? {.tip}

Fargetemaet finner du også i menyen **File** > **Preferences** > **Theme** >
**Color Theme**. Der er det også temaer med høy kontrast.


# Steg 5: Terminalen {.activity}

**Terminalen** er et vindu der du skriver kommandoer til datamaskinen. I VS Code
ligger den i panelet nederst, og den starter i mappa du har åpnet.

## Sjekkliste {.check}

- [ ] Velg **Terminal** > **New Terminal**.

- [ ] Skriv `ls` og trykk **Enter**. Du ser filene i mappa di.

- [ ] Skriv `cd python` og så `ls`. Nå er du inne i mappa `python`.

- [ ] Skriv `cd ..` for å gå tilbake.

- [ ] Lukk panelet med krysset, og åpne det igjen med **View** > **Terminal**.

## Norsk tastatur {.tip}

Snarveien til terminalen er **Ctrl** + **`** på et amerikansk tastatur. På norsk
tastatur ligger tegnene andre steder, og noen snarveier blir annerledes. Bruk
menyen, eller se neste steg.


# Steg 6: Zoom og snarveier {.activity}

## Sjekkliste {.check}

- [ ] Velg **View** > **Appearance** > **Zoom In** for å gjøre alt større, og
  **Zoom Out** for å gjøre det mindre. Nyttig når du viser koden din på
  storskjerm.

- [ ] Har tastaturet ditt talltastatur, virker også **Ctrl** og **+** eller
  **-** der.

- [ ] Trykk **Ctrl** + **B**. Sidepanelet med Explorer forsvinner. Trykk igjen
  for å få det tilbake.

- [ ] Velg **File** > **Preferences** > **Keyboard Shortcuts**. Søk etter
  `terminal`. Her ser du hvilke taster som gjelder på *ditt* tastatur.

## Snarveier å huske {.check}

- [ ] **Ctrl** + **Shift** + **P**: kommandopaletten

- [ ] **Ctrl** + **P**: åpne fil

- [ ] **Ctrl** + **S**: lagre

- [ ] **Ctrl** + **B**: vis eller skjul sidepanelet

- [ ] **Ctrl** + **Shift** + **E**: Explorer


# Neste steg {.challenge}

- [ ] Skriv Python i [Python i VS
  Code](../python_i_vs_code/python_i_vs_code.html).

- [ ] Lag nettsider i [Nettsider i VS
  Code](../web_i_vs_code/web_i_vs_code.html).
