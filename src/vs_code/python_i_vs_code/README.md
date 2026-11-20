---
title: Lærerveiledning - Python i VS Code
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene installerer Python og utvidelsen Python fra Microsoft, skriver et lite
program med `input` og `print`, velger interpreter og lærer å rette de vanligste
feilene. Oppgaven gjør det mulig å ta Python-oppgavene i samlingen i VS Code i
stedet for IDLE. Opplysningene ble sjekket i november 2026.

## Oppgaven passer til: {.check}

__Fag__: Programmering, IT1, IT2

__Anbefalte trinn__: 8. trinn til VG3, og veiledere

__Tema__: Python, verktøy, installasjon

__Nivå__: 1 (introduksjon)

__Tidsbruk__: 45 minutter, pluss tid til installering

## Kompetansemål {.challenge}

- [ ] [Læreplan i valgfaget programmering
  (PRG01-02)](https://www.udir.no/lk20/prg01-02)

- [ ] [Læreplan i informasjonsteknologi
  (INF01-02)](https://www.udir.no/lk20/inf01-02), for IT1 og IT2

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan lage og kjøre et Python-program i VS Code.

- [ ] Eleven kan forklare hva en interpreter er, og velge riktig.

- [ ] Eleven kan tolke en enkel feilmelding og rette feilen.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre oppgaven.

- [ ] Eleven oppnår høy måloppnåelse ved å gjøre en av Python-oppgavene i VS
  Code og hjelpe en medelev med en feilmelding.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Bli kjent med VS Code](../bli_kjent/bli_kjent.html).

- [ ] __Utstyr__: Maskin med VS Code der Python kan installeres.

## Fremgangsmåte

Her kommer tips og erfaringer til stegene i oppgaven. [Klikk her for å se
oppgaveteksten.](python_i_vs_code.html){target=_blank}


# Steg 1: Installer Python {.activity}

- [ ] På Windows er **Python install manager** nå den anbefalte måten. Den gamle
  installasjonsfila er utfaset fra Python 3.14 og lages ikke for 3.16. Install
  manager finnes på python.org og i Microsoft Store, og de to er like. Den gir
  kommandoene `python` og `py`. Kilde: [Using Python on
  Windows](https://docs.python.org/3/using/windows.html).

- [ ] Microsoft Store-versjonen krever ikke administrator. Kilde: [Getting
  Started with Python in VS
  Code](https://code.visualstudio.com/docs/python/python-tutorial).

- [ ] Åpner `python` Microsoft Store i stedet for å starte Python, er det
  Windows sine *app execution aliases* som slår inn. Installer Python, eller
  sjekk **Manage app execution aliases** i innstillingene til Windows.

- [ ] På Mac kan `python3` i terminalen be om å installere *Command Line Tools*
  hvis Python fra python.org ikke er installert. Installer fra python.org først.

- [ ] På Chromebook er Python 3 med i Linux-miljøet. Pakkene `python3-venv` og
  `python3-pip` trengs for virtuelle miljøer og pakker. Kilde: [Visual Studio
  Code on
  Chromebooks](https://code.visualstudio.com/blogs/2020/12/03/chromebook-get-started).


# Steg 2: Utvidelsen Python {.activity}

- [ ] Utvidelsen har ID `ms-python.python` og publisher **Microsoft**. Den
  installerer også Pylance, Python Debugger (`ms-python.debugpy`) og Python
  Environments. Kilde: [Python på Visual Studio
  Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-python.python).


# Steg 3 og 4: Kjøre og velge interpreter {.activity}

- [ ] **Run Python File** er trekanten øverst til høyre. Den kjører fila i
  terminalen. Høyreklikk i editoren gir også **Run Python** > **Run Python File
  in Terminal**.

- [ ] Kommandoen **Python: Select Interpreter** velger hvilken Python som
  brukes. Den er den vanligste løsningen når pakker ikke blir funnet.

- [ ] Programmer med `turtle` virker i VS Code. Skilpaddevinduet åpnes som et
  eget vindu.


# Steg 6: Python-oppgavene {.activity}

- [ ] Mange av Python-oppgavene i samlingen ble skrevet for IDLE. Oversettelsen
  i oppgaven (**Run Module** blir **Run Python File**) dekker det meste.

- [ ] I VS Code er **F5** å starte debuggeren, ikke å kjøre som i IDLE. Det
  virker også, men elevene blir spurt om en debug-konfigurasjon. Velg **Python
  File**.

## Variasjoner {.challenge}

- [ ] Elevene kan bruke Python-terminalen (REPL) med kommandoen **Python: Start
  Terminal REPL** for å teste små biter av kode.

## Eksterne ressurser {.challenge}

- [ ] [Getting Started with Python in VS Code
  (engelsk)](https://code.visualstudio.com/docs/python/python-tutorial)
