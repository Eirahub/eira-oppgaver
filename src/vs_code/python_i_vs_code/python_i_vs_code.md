---
title: Python i VS Code
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I denne oppgaven gjør du VS Code klar for Python. Du installerer Python og
utvidelsen **Python**, skriver et lite program og kjører det. Til slutt ser vi
på de vanligste feilene og hvordan du retter dem.

Etterpå kan du bruke VS Code til Python-oppgavene i kodeklubben.

<!-- BILDE: VS Code med en Python-fil åpen, knappen Run Python File øverst til
høyre og utskriften i terminalen nederst -->


# Steg 1: Installer Python {.activity}

VS Code kan ikke kjøre Python alene. Python må installeres på maskinen først.

## Sjekkliste {.check}

- [ ] **Windows:** Gå til
  [python.org/downloads](https://www.python.org/downloads/) og last ned **Python
  install manager**. Den finnes også i **Microsoft Store**. Kjør den og svar ja
  hvis den spør om å legge til en mappe i `PATH`.

- [ ] **Mac:** Last ned og kjør installasjonen for macOS fra
  [python.org/downloads](https://www.python.org/downloads/).

- [ ] **Linux og Chromebook:** Python 3 er nesten alltid installert. På
  Chromebook bør du også skrive dette i terminalen:

  ```
  sudo apt-get install -y python3-venv python3-pip
  ```

- [ ] Start VS Code på nytt hvis det var åpent mens du installerte.

## Er Python installert? {.check}

- [ ] Åpne terminalen i VS Code med **Terminal** > **New Terminal**.

- [ ] Skriv `python --version` og trykk **Enter**. På Mac, Linux og Chromebook
  skriver du `python3 --version`.

- [ ] Ser du noe som `Python 3.14.0`? Da er Python installert.


# Steg 2: Installer utvidelsen Python {.activity}

## Sjekkliste {.check}

- [ ] Trykk på ikonet **Extensions** i stripa til venstre (fire små firkanter),
  eller trykk **Ctrl** + **Shift** + **X**.

- [ ] Søk etter `Python`. Velg den som heter **Python** og er laget av
  **Microsoft**. Trykk **Install**.

- [ ] Sammen med den kommer **Pylance**, **Python Debugger** og **Python
  Environments**. Det er riktig.

## Pass på navnet {.tip}

Det finnes mange utvidelser med Python i navnet. Sjekk at det står **Microsoft**
under navnet. I [Utvidelser og KI](../utvidelser_og_ki/utvidelser_og_ki.html)
lærer du mer om å velge trygge utvidelser.


# Steg 3: Ditt første program {.activity}

## Sjekkliste {.check}

- [ ] Åpne mappa `kodeklubb` med **File** > **Open Folder...** (du laget den i
  [Bli kjent med VS Code](../bli_kjent/bli_kjent.html)).

- [ ] Lag en ny fil som heter `hei.py`. Endelsen `.py` forteller VS Code at det
  er Python.

- [ ] Skriv:

  ```python
  navn = input("Hva heter du? ")
  print("Hei, " + navn + "!")
  ```

- [ ] Trykk på trekanten **Run Python File** øverst til høyre i editoren.

- [ ] Terminalen åpnes nederst. Skriv navnet ditt der og trykk **Enter**.

## Hvor skal jeg skrive? {.tip}

Når programmet spør om noe med `input`, skriver du svaret i *terminalen*, ikke i
fila.


# Steg 4: Velg riktig Python {.activity}

En maskin kan ha flere Python-installasjoner. VS Code kaller dem *interpreter*.
Du ser hvilken som er valgt nederst til høyre i statuslinja når en `.py`-fil er
åpen.

## Sjekkliste {.check}

- [ ] Trykk **Ctrl** + **Shift** + **P** og skriv `Python: Select Interpreter`.

- [ ] Velg den nyeste Python 3-versjonen i lista.

- [ ] Kjør programmet på nytt. Virker det fortsatt?

<!-- BILDE: Lista fra Python: Select Interpreter med to Python-versjoner -->


# Steg 5: Vanlige feil {.activity}

## Feilmeldinger og hva du gjør {.check}

- [ ] **`python` blir ikke funnet**, eller Microsoft Store åpnes når du skriver
  `python` på Windows: Python er ikke installert, eller terminalen ble åpnet før
  du installerte. Installer Python og start VS Code på nytt.

- [ ] **`No module named ...`**: Du har installert en pakke i en annen Python
  enn den VS Code bruker. Velg riktig interpreter som i steg 4.

- [ ] **Ingenting skjer når du trykker Run**: Sjekk at fila slutter på `.py`, og
  at utvidelsen Python er installert.

- [ ] **`SyntaxError`**: Det er en skrivefeil i koden. Les linjenummeret i
  feilmeldingen. VS Code viser også feilen med en rød bølgestrek.

- [ ] **`>>>` i terminalen**: Du er inne i Python sitt interaktive vindu. Skriv
  `exit()` og trykk **Enter**.


# Steg 6: Bruk VS Code i Python-oppgavene {.activity}

Python-oppgavene i kodeklubben sier ofte at du skal bruke IDLE. Det samme går
fint i VS Code:

- Der det står **File** > **New File** i IDLE, lager du en ny `.py`-fil i
  Explorer.

- Der det står **Run Module** eller **F5** i IDLE, trykker du **Run Python
  File**.

## Prøv selv {.try}

- [ ] Gjør [Hvor gammel er
  du?](../../python/hvor_gammel_er_du/hvor_gammel_er_du.html) i VS Code.

- [ ] Gjør [Gjettelek](../../python/gjettelek/gjettelek.html) i VS Code.


# Neste steg {.challenge}

- [ ] Lær å finne feil med debuggeren i [Feilsøking i VS
  Code](../feilsoking/feilsoking.html).
