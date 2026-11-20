---
title: Feilsøking i VS Code
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Alle som programmerer, lager feil. Det viktige er å finne dem. I denne oppgaven
bruker du **debuggeren** i VS Code. Den lar deg stoppe programmet midt i, se hva
som ligger i variablene og gå gjennom koden én linje om gangen.

Du trenger Python og utvidelsen Python fra [Python i VS
Code](../python_i_vs_code/python_i_vs_code.html).

<!-- BILDE: VS Code mens programmet står stille på et stoppunkt, med Variables
til venstre og verktøylinja for debugging øverst -->


# Steg 1: Et program med en feil {.activity}

Programmet skal regne ut gjennomsnittet av noen poeng. Det kjører uten
feilmelding, men svaret er feil.

## Sjekkliste {.check}

- [ ] Lag fila `snitt.py` i mappa `kodeklubb`, og skriv:

  ```python
  poeng = [7, 9, 4, 10]
  sum = 0

  for p in poeng:
      sum = p

  snitt = sum / len(poeng)
  print("Gjennomsnitt:", snitt)
  ```

- [ ] Kjør programmet med **Run Python File**. Svaret blir `2.5`. Regn selv: hva
  *skal* gjennomsnittet være?


# Steg 2: Sett et stoppunkt {.activity}

Et **stoppunkt** (breakpoint) er et sted der programmet stopper og venter på
deg.

## Sjekkliste {.check}

- [ ] Klikk i margen til venstre for linjenummeret på linja `sum = p`. Det
  kommer en rød prikk. Du kan også stå på linja og trykke **F9**.

- [ ] Trykk **F5** for å starte debuggeren. Blir du spurt om en konfigurasjon,
  velg **Python File**.

- [ ] Programmet stopper på linja med den røde prikken. Linja er markert med
  gult.

- [ ] Til venstre ser du **Variables**. Finn `p` og `sum`. Hva er verdiene?


# Steg 3: Gå gjennom koden {.activity}

Øverst kommer en liten verktøylinje med knapper for debugging.

## Sjekkliste {.check}

- [ ] Trykk **Continue** (**F5**). Programmet går rundt løkka én gang til og
  stopper igjen. Se på `sum` i **Variables**.

- [ ] Gjør det et par ganger til. Hva skjer med `sum`? Blir den større og
  større, slik den skal?

- [ ] Prøv **Step Over** (**F10**). Den kjører bare én linje.

- [ ] Når du har sett nok, trykk **Stop** (**Shift** + **F5**).

## Fant du feilen? {.tip}

`sum = p` *bytter ut* verdien i stedet for å legge til. Det skal stå `sum = sum
+ p`.


# Steg 4: Rett feilen {.activity}

## Sjekkliste {.check}

- [ ] Endre linja til `sum = sum + p`.

- [ ] Fjern stoppunktet ved å klikke på den røde prikken.

- [ ] Kjør programmet igjen. Blir svaret `7.5`?


# Steg 5: Problems-panelet {.activity}

Noen feil ser VS Code før du kjører programmet. De vises med en rød eller gul
bølgestrek, og samlet i panelet **Problems**.

## Sjekkliste {.check}

- [ ] Fjern den siste parentesen på linja med `print`.

- [ ] Ser du den røde bølgestreken?

- [ ] Velg **View** > **Problems**. Her står feilen, med filnavn og linjenummer.
  Dobbeltklikk på den for å hoppe dit.

- [ ] Sett parentesen tilbake. Forsvinner feilen fra **Problems**?


# Utfordring {.challenge}

- [ ] Skriv `print(sum)` i **Debug Console** mens programmet står stille på et
  stoppunkt. Hva skjer?

- [ ] Høyreklikk i margen ved linja `sum = p` og velg **Add Conditional
  Breakpoint...**. Skriv `p == 4` og trykk **Enter**. Nå stopper programmet bare
  når `p` er 4.

- [ ] Ta med debuggeren til neste Python-oppgave der du står fast.
