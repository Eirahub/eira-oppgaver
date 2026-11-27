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
trenger ingen GitHub-konto, bortsett fra i det siste steget.

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

- [ ] Statuslinja viser nå `hint`. Hver innsjekking (commit) du lager nå,
  havner på denne grenen.

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
Det heter en **flettekonflikt** (merge conflict), og du bestemmer selv. Nå
lager du en med vilje.

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


# Steg 6: Navn på grener {.activity}

På `main` ligger koden som virker. Den skal alltid kunne kjøres, så ingen
jobber rett på `main`. Hver ting som skal lages, får sin egen gren. Når flere
jobber sammen, blir det fort mange grener. Da hjelper det at navnet sier hva
grenen er til:

- `feature/12-poengteller` er en ny funksjon (feature), og 12 er nummeret på
  saken den løser.
- `fix/15-kollisjon` retter en feil (fix) fra sak nummer 15.

Saker (issues) lager du på GitHub i [Planlegg med issues og
prosjekttavle](../issues_og_prosjekt/issues_og_prosjekt). Har du ingen sak,
dropper du nummeret.

## Sjekkliste {.check}

- [ ] Bytt til `main`.

- [ ] Lag en gren som heter `feature/overskrift`. Skråstreken er en del av
  navnet.

- [ ] Legg til denne linja rett under `import random`:

  ```python
  print("Gjett tallet!")
  ```

- [ ] Kjør programmet og lag en commit med meldingen `Vis navnet på spillet`.

## Små bokstaver og bindestrek {.tip}

Bruk små bokstaver, bindestrek i stedet for mellomrom, og helst ikke æ, ø og å.
Mellomrom er ikke lov i navnet på en gren.


# Steg 7: Hold grenen oppdatert {.activity}

Mens du jobber på grenen din, kan `main` endre seg, for eksempel fordi noen
andre har flettet inn noe. Da mangler grenen din det nye. Det løser du ved å
flette `main` inn i grenen din. Nå later du som om noen andre har endret
`main`.

## Sjekkliste {.check}

- [ ] Bytt til `main`. Legg til denne linja helt øverst i fila, over `import
  random`:

  ```python
  # Gjett tallet, et spill i Python
  ```

- [ ] Lag en commit med meldingen `Skriv hva fila er`.

- [ ] Bytt til `feature/overskrift`. Kommentaren øverst er ikke der.

- [ ] Skriv i terminalen:

  ```
  git merge main --no-edit
  ```

  Nå er kommentaren med på grenen din. `--no-edit` betyr at Git skriver
  meldingen for flettingen selv.

- [ ] Skriv `git log --oneline --graph`. Det ser omtrent slik ut, med andre
  koder:

  ```
  *   7c1e2f4 (HEAD -> feature/overskrift) Merge branch 'main' into feature/...
  |\
  | * 9b3a5d0 (main) Skriv hva fila er
  * | 4f8c2e1 Vis navnet på spillet
  |/
  * 2d6b7a9 Si om tallet er for høyt eller lavt
  ```

  Hver `*` er en commit. Strekene viser grenene. De deler seg der du laget
  grenen, og møtes der du flettet.

- [ ] Bytt til `main`, flett inn `feature/overskrift` som i steg 4, og slett
  grenen med `git branch -d feature/overskrift`.

## Når dere er flere {.protip}

Jobber dere sammen på GitHub, må du først hente (pull) det nye. Bytt til
`main` og trykk **Sync Changes**. Bytt så tilbake til grenen din og flett inn
`main`. Gjør det ofte, så blir konfliktene små.

## Se alle grenene {.tip}

`git log --oneline --graph --all` viser alle grenene, også dem du ikke er på.


# Steg 8: Gren fra en sak {.activity}

På GitHub kan du lage grenen rett fra saken. Da er grenen og saken koblet
sammen, og alle ser hvem som jobber med hva.

## Du trenger en GitHub-konto {.tip}

Dette steget krever en konto på GitHub, og du må være 13 år eller eldre. Repoet
må også ligge på GitHub, som du gjør i [Del koden på
GitHub](../del_pa_github/del_pa_github). Har du ikke gjort det ennå, kom tilbake
hit etterpå. Uten konto kan du lage grenen i VS Code med et navn som i steg 6.

## Sjekkliste {.check}

- [ ] Åpne repoet `gjett_tallet` på github.com. Gå til fanen **Issues** og trykk
  **New issue**.

- [ ] Skriv tittelen `Si takk når spillet er ferdig` og trykk **Create**. Saken
  får et nummer, for eksempel `#1`.

- [ ] Til høyre i saken finner du **Development**. Trykk **Create a branch**.

- [ ] GitHub foreslår et navn. Bytt det til `feature/1-takk`, med nummeret på
  saken din.

- [ ] Velg **Checkout locally** og trykk **Create branch**. GitHub viser to
  linjer du kan kopiere.

- [ ] Kjør linjene i terminalen i VS Code. De ser slik ut:

  ```
  git fetch origin
  git checkout feature/1-takk
  ```

- [ ] Statuslinja viser `feature/1-takk`. Legg til `print("Takk for spillet!")`
  nederst i fila, uten innrykk. Kjør programmet, lag en commit og trykk **Sync
  Changes**.

- [ ] Se på saken på github.com. Under **Development** står grenen din.

## Og så? {.tip}

Grenen er ikke flettet inn ennå. Det gjør du med en pull request i [Samarbeid
med pull request](../samarbeid/samarbeid). Skriver du `Closes #1` i den, lukkes
saken når den flettes inn.


# Utfordring {.challenge}

- [ ] Lag en gren for en idé du ikke tror på, lag en commit og slett grenen uten
  å flette den. Bruk `git branch -D navn`, med stor D.

- [ ] Hvilken gren er du på nå? Svar uten å se på statuslinja.

- [ ] Neste oppgave: [Del koden på GitHub](../del_pa_github/del_pa_github).
