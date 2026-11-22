---
title: Prøv en idé på en gren
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Du har et program som virker, og en idé du vil prøve. Kanskje blir den bra,
kanskje ikke. Med en **gren** (branch) kan du prøve ideen ved siden av det som
virker. Blir den bra, fletter du den inn. Blir den dårlig, kaster du grenen.

Du fortsetter med `gjett_tallet` fra [Tilbake i tid](../tidsreise/tidsreise). Du
trenger ingen GitHub-konto.

![Menyen som åpnes når du klikker på grennavnet main nederst til venstre i
VS Code, med valget Create new branch øverst](ny_gren.png)


# Steg 1: Hvilken gren er du på? {.activity}

## Sjekkliste {.check}

- [ ] Åpne mappa `gjett_tallet` i VS Code.

- [ ] Se nederst til venstre i statuslinja. Der står navnet på grenen du er på,
  `main` eller `master`. Det er hovedgrenen, der koden som virker bor.

- [ ] Skriv `git branch` i terminalen. Grenen du er på, har en stjerne foran
  seg.

## main eller master? {.tip}

Eldre Git kaller hovedgrenen `master`, nyere kaller den `main`. Det virker likt.
I resten av oppgaven skriver vi `main`.


# Steg 2: Lag en gren {.activity}

Ideen: spillet skal si om tallet er for høyt eller for lavt.

## Sjekkliste {.check}

- [ ] Klikk på navnet på grenen nederst til venstre.

- [ ] Velg **Create new branch...** og skriv navnet `hint`. Trykk **Enter**.

- [ ] Statuslinja viser nå `hint`. Alt du committer nå, havner på denne grenen.

- [ ] Bytt ut linja `print("Feil, prøv igjen")` med:

  ```python
      if gjett < tall:
          print("For lavt")
      else:
          print("For høyt")
  ```

- [ ] Kjør programmet og sjekk at hintene stemmer. Lag en commit med meldingen
  `Si om tallet er for høyt eller lavt`.


# Steg 3: Hopp mellom grenene {.activity}

## Sjekkliste {.check}

- [ ] Klikk på grennavnet nederst til venstre og velg `main`.

- [ ] Se på `gjett_tallet.py`. Hintene er borte. På `main` finnes ikke ideen din
  ennå.

- [ ] Bytt tilbake til `hint`. Hintene er tilbake.

## Test prosjektet {.flag}

- [ ] Kjør programmet på begge grenene. Det skal bare gi hint på `hint`.

## Lagre før du bytter {.protip}

Lag en commit før du bytter gren. Har du endringer som ikke er committet, kan
Git nekte å bytte, eller ta dem med til den andre grenen.


# Steg 4: Flett inn ideen {.activity}

Ideen ble bra. Nå skal den inn på `main`. Det heter å **flette** (merge).

## Sjekkliste {.check}

- [ ] Bytt til `main`.

- [ ] I **Source Control**, trykk **...** øverst i panelet og velg **Branch** og
  så **Merge...**. Velg `hint`.

- [ ] Se på fila. Hintene er med på `main`.

- [ ] Skriv `git log --oneline` og se at commiten fra `hint` står i historien.

- [ ] Grenen trengs ikke lenger. Slett den med `git branch -d hint`.


# Steg 5: En flettekonflikt {.activity}

Hvis to grener har endret den samme linja, vet ikke Git hvilken som er riktig.
Det heter en **konflikt**, og du bestemmer selv. Nå lager du en med vilje.

## Sjekkliste {.check}

- [ ] På `main`: lag en gren `vanskelig`. Endre `randint(1, 10)` til `randint(1,
  100)` og `1 til 10` til `1 til 100`. Lag en commit.

- [ ] Bytt til `main`. Endre `randint(1, 10)` til `randint(1, 20)` og `1 til 10`
  til `1 til 20`. Lag en commit.

- [ ] Flett inn `vanskelig` i `main` som i steg 4. VS Code sier at det er en
  konflikt.

- [ ] Åpne fila. Konflikten ser omtrent slik ut:

  ```
  <<<<<<< HEAD
  tall = random.randint(1, 20)
  =======
  tall = random.randint(1, 100)
  >>>>>>> vanskelig
  ```

  Over `=======` står det som er på `main`. Under står det som kommer fra
  `vanskelig`.

- [ ] Over konflikten står valgene **Accept Current Change**, **Accept Incoming
  Change** og **Accept Both Changes**. Velg den du vil ha. Du kan også skrive
  linja selv og slette strekene.

- [ ] Gjør det samme for alle konfliktene i fila. Lagre.

- [ ] Stage fila med **+** og trykk **Commit**. Nå er flettingen ferdig.

## Konflikter er vanlige {.tip}

En konflikt betyr ikke at noe er ødelagt. Det betyr bare at Git trenger at du
velger. De som programmerer sammen, løser konflikter hele tiden.


# Utfordring {.challenge}

- [ ] Lag en gren for en idé du ikke tror på, lag en commit og slett grenen uten
  å flette den. Bruk `git branch -D navn`, med stor D.

- [ ] Hvilken gren er du på nå? Svar uten å se på statuslinja.

- [ ] Neste oppgave: [Del koden på GitHub](../del_pa_github/del_pa_github).
