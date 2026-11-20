---
title: Lærerveiledning - Feilsøking i VS Code
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene finner en logisk feil i et lite Python-program med debuggeren:
stoppunkt, **Variables**, **Continue**, **Step Over** og **Stop**. Til slutt ser
de hvordan **Problems** viser syntaksfeil før programmet kjøres.

## Oppgaven passer til: {.check}

__Fag__: Programmering, IT1, IT2

__Anbefalte trinn__: 8. trinn til VG3, og veiledere

__Tema__: Python, feilsøking, løkker, variabler

__Nivå__: 2 (nybegynner)

__Tidsbruk__: 30 til 45 minutter

## Kompetansemål {.challenge}

- [ ] [Læreplan i valgfaget programmering
  (PRG01-02)](https://www.udir.no/lk20/prg01-02)

- [ ] [Læreplan i informasjonsteknologi
  (INF01-02)](https://www.udir.no/lk20/inf01-02), for IT1 og IT2

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan sette et stoppunkt og lese verdien til variabler underveis.

- [ ] Eleven kan forklare forskjellen på en syntaksfeil og en logisk feil.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre oppgaven.

- [ ] Eleven oppnår høy måloppnåelse ved å bruke debuggeren til å finne en feil
  i egen kode og forklare feilen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Python i VS
  Code](../python_i_vs_code/python_i_vs_code.html). Eleven bør kjenne løkker og
  variabler.

- [ ] __Utstyr__: VS Code med utvidelsen Python fra Microsoft.

## Fremgangsmåte

Her kommer tips og erfaringer til stegene i oppgaven. [Klikk her for å se
oppgaveteksten.](feilsoking.html){target=_blank}


# Steg 1: Programmet {.activity}

- [ ] Riktig svar er 7.5. Programmet skriver 2.5, fordi `sum` bare får den siste
  verdien (10). La elevene gjette før de bruker debuggeren.

- [ ] Programmet bruker navnet `sum`, som skygger for den innebygde funksjonen
  `sum()`. Det er med vilje enkelt, men kan være et godt samtaletema for de som
  er videre.


# Steg 2 og 3: Debuggeren {.activity}

- [ ] Debuggeren for Python er utvidelsen **Python Debugger**
  (`ms-python.debugpy`). Den kommer automatisk med utvidelsen Python.

- [ ] **F5** uten `launch.json` gir en meny. Velg **Python File** for å debugge
  fila som er åpen. Kilde: [Getting Started with Python in VS
  Code](https://code.visualstudio.com/docs/python/python-tutorial).

- [ ] Snarveiene **F9** (stoppunkt), **F5** (Continue), **F10** (Step Over),
  **F11** (Step Into), **Shift** + **F11** (Step Out) og **Shift** + **F5**
  (Stop) står i [Debug code with VS
  Code](https://code.visualstudio.com/docs/debugtest/debugging).

- [ ] På bærbare maskiner må man ofte holde inne **Fn** for å bruke F-tastene.
  Knappene i verktøylinja virker alltid.

- [ ] Stopper ikke programmet, har eleven kanskje trykket **Run Python File** i
  stedet for å starte debuggeren.


# Steg 5: Problems {.activity}

- [ ] **Problems** viser feil og advarsler fra Pylance. Snarveien er **Ctrl** +
  **Shift** + **M**.

## Variasjoner {.challenge}

- [ ] Bruk debuggeren på oppgaven [Feilsøking:
  Sorteringsalgoritme](../../python/feilsoking-sorteringsalgoritme/feilsoking-sorteringsalgoritme.html)
  i Python-kurset.

## Eksterne ressurser {.challenge}

- [ ] [Python debugging in VS Code
  (engelsk)](https://code.visualstudio.com/docs/python/debugging)
