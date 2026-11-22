---
title: Tilbake i tid
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Har du noen gang ødelagt et program som virket, og ikke husket hva du endret?
Med Git kan du se hele historien til prosjektet, sammenligne versjoner og gå
tilbake til en versjon som virket.

I denne oppgaven lager du et lite Python-program i flere commits. Så ødelegger
du det med vilje og reparerer det med Git.

Du trenger ingen GitHub-konto.

![Panelet Timeline i VS Code med fem commits for fila gjett_tallet.py, den
nyeste øverst](timeline.png)

## Før du begynner {.tip}

Du må ha Git installert og ha laget en commit før. Har du ikke det, gjør steg 1
til 4 i [Git i VS Code](../../vs_code/git_i_vs_code/git_i_vs_code).


# Steg 1: Et nytt repo {.activity}

## Sjekkliste {.check}

- [ ] Lag en ny mappe som heter `gjett_tallet`, og åpne den i VS Code.

- [ ] Gå til **Source Control** (**Ctrl** + **Shift** + **G**) og trykk
  **Initialize Repository**.

- [ ] Lag fila `gjett_tallet.py` med denne koden:

  ```python
  import random

  tall = random.randint(1, 10)
  gjett = int(input("Gjett et tall fra 1 til 10: "))
  ```

- [ ] Lagre, stage fila med **+** og lag en commit med meldingen `Trekk et tall
  og spør`.


# Steg 2: Bygg programmet i små steg {.activity}

Lag en commit for hver ting du legger til. Da blir historien lett å lese.

## Sjekkliste {.check}

- [ ] Legg til nederst i fila og lag en commit med meldingen `Si om svaret er
  riktig`:

  ```python
  if gjett == tall:
      print("Riktig!")
  else:
      print("Feil, tallet var", tall)
  ```

- [ ] Gjør programmet til en løkke, slik at du kan gjette til du får det til.
  Bytt ut alt under `tall = ...` med:

  ```python
  while True:
      gjett = int(input("Gjett et tall fra 1 til 10: "))
      if gjett == tall:
          print("Riktig!")
          break
      print("Feil, prøv igjen")
  ```

- [ ] Kjør programmet og sjekk at det virker. Lag en commit med meldingen `Gjett
  til det er riktig`.

## Test prosjektet {.flag}

- [ ] Kjør programmet og gjett feil et par ganger før du gjetter riktig. Det
  skal stoppe når du har riktig svar.


# Steg 3: Se historien {.activity}

## Sjekkliste {.check}

- [ ] Åpne **Explorer** (filene til venstre). Nederst finner du panelet
  **Timeline**. Klikk på `gjett_tallet.py`, så viser **Timeline** alle commitene
  for fila.

- [ ] Klikk på commiten `Si om svaret er riktig`. VS Code viser hva som ble
  endret i den, med rødt for det som ble fjernet og grønt for det som kom til.

- [ ] Åpne terminalen og skriv:

  ```
  git log --oneline
  ```

  Du ser alle commitene, den nyeste øverst. Koden foran hver melding, for
  eksempel `3f2a1c9`, er navnet Git har gitt commiten.

## Hva er en commit? {.tip}

En commit er et øyeblikksbilde av alle filene i repoet. Git lagrer bare det som
er endret, så det tar lite plass. Du kan alltid hente fram et gammelt bilde.


# Steg 4: Angre før du committer {.activity}

Ødelegger du noe du ikke har committet ennå, kan du hente tilbake siste commit.

## Sjekkliste {.check}

- [ ] Slett hele `while`-løkka og lagre.

- [ ] Gå til **Source Control**. Fila står under **Changes** med en **M**.

- [ ] Hold musa over fila og trykk på pila som går bakover (**Discard
  Changes**). Bekreft.

- [ ] Løkka er tilbake.

## Forsiktig {.protip}

**Discard Changes** sletter endringene for godt. Det finnes ingen angreknapp for
den. Lag heller en commit for ofte enn for sjelden.


# Steg 5: Angre en commit {.activity}

Noen ganger merker du først senere at en commit gjorde noe galt. Da kan Git lage
en ny commit som gjør det motsatte. Det heter **revert**.

## Sjekkliste {.check}

- [ ] Ødelegg programmet: bytt `break` med `print("Ferdig")`. Lagre og lag en
  commit med meldingen `Ødelagt med vilje`.

- [ ] Kjør programmet. Det stopper ikke når du gjetter riktig. Stopp det med
  **Ctrl** + **C** i terminalen.

- [ ] Skriv i terminalen:

  ```
  git revert HEAD --no-edit
  ```

  `HEAD` betyr den siste commiten. `--no-edit` gir den nye commiten en ferdig
  melding, `Revert "Ødelagt med vilje"`.

- [ ] Kjør programmet igjen. Nå virker det.

- [ ] Skriv `git log --oneline`. Både commiten som ødela og den som reparerte,
  står i historien.

## Hvorfor ikke bare slette commiten? {.tip}

Revert tar ingenting bort fra historien. Det er tryggest, særlig når andre har
hentet koden din. Da ser alle hva som skjedde og hvorfor.


# Steg 6: Hent en gammel versjon {.activity}

## Sjekkliste {.check}

- [ ] Finn koden til commiten `Si om svaret er riktig` med `git log --oneline`.

- [ ] Hent den versjonen av fila, med koden du fant i stedet for `3f2a1c9`:

  ```
  git restore --source 3f2a1c9 gjett_tallet.py
  ```

- [ ] Åpne fila. Nå ser den ut som den gjorde da. Kjør programmet.

- [ ] Vil du beholde den gamle versjonen, lager du en commit. Vil du tilbake til
  den nyeste, trykker du **Discard Changes** i **Source Control**.


# Utfordring {.challenge}

- [ ] Legg til en teller som sier hvor mange forsøk du brukte. Gjør det i flere
  små commits.

- [ ] Prøv `git log -p` i terminalen. Hva viser den? Trykk **q** for å avslutte.

- [ ] Neste oppgave: [Prøv en idé på en gren](../grener/grener).
