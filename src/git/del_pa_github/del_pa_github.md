---
title: Del koden på GitHub
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal `gjett_tallet` på GitHub. Da har du en kopi på nettet, du kan hente
koden på en annen maskin, og du kan vise den til andre. Du skriver en README som
forteller hva prosjektet er, og du lærer å holde filer utenfor Git.

<!-- BILDE: Repoet gjett_tallet på github.com med README vist under fillista -->

## Aldersgrense {.tip}

Du må være 13 år eller eldre for å ha en konto på GitHub. Er du yngre, kan du
gjøre oppgaven sammen med en voksen som har konto.


# Steg 1: Skriv en README {.activity}

En **README** er det første folk ser når de åpner repoet ditt. GitHub viser den
under fillista.

## Sjekkliste {.check}

- [ ] Lag fila `README.md` i mappa `gjett_tallet`.

- [ ] Skriv:

  ```markdown
  # Gjett tallet

  Et lite spill i Python. Datamaskinen tenker på et tall, og du
  gjetter til du har det. Spillet sier om du gjetter for høyt eller lavt.

  ## Slik kjører du det

  python gjett_tallet.py
  ```

- [ ] Trykk **Ctrl** + **Shift** + **V** for å se hvordan den blir. `#` blir en
  stor overskrift og `##` en mindre.

- [ ] Lag en commit med meldingen `Legg til README`.


# Steg 2: Hold filer utenfor Git {.activity}

Noen filer skal ikke deles: filer som lages på nytt hver gang, og filer med
hemmeligheter. Dem skriver du i fila `.gitignore`.

## Sjekkliste {.check}

- [ ] Lag fila `.gitignore`, med punktum først, og skriv:

  ```
  __pycache__/
  .env
  ```

  `__pycache__` er en mappe Python lager selv. `.env` er et vanlig navn på en
  fil med passord og nøkler.

- [ ] Lag fila `.env` og skriv `PASSORD=hemmelig` i den. Lagre.

- [ ] Se i **Source Control**. `.env` står ikke der. Git later som den ikke
  finnes.

- [ ] Lag en commit med `.gitignore` og meldingen `Ignorer filer som ikke skal
  deles`.

## Hemmeligheter {.protip}

Det som først er pushet til GitHub, kan bli liggende selv om du sletter det
senere. Legg derfor `.env` i `.gitignore` før du lager fila.


# Steg 3: Publiser repoet {.activity}

## Sjekkliste {.check}

- [ ] Trykk **Publish Branch** i **Source Control**. Har du ikke logget inn på
  GitHub fra VS Code før, se steg 5 i [Git i VS
  Code](../../vs_code/git_i_vs_code/git_i_vs_code).

- [ ] Velg **Publish to GitHub public repository**. Da kan alle se koden. Det er
  greit her, siden prosjektet ikke har noe hemmelig.

- [ ] Åpne repoet på github.com. Sjekk at README vises, og at `.env` ikke er
  med.

## Public eller private? {.tip}

Et **public** repo kan alle lese, men bare du kan endre det. Et **private** repo
kan bare du og de du inviterer se. Velg private når du er usikker. Du kan endre
det senere under **Settings** på GitHub.


# Steg 4: Endre på GitHub og hent endringen {.activity}

## Sjekkliste {.check}

- [ ] På github.com: klikk på `README.md` og så på blyanten for å redigere.

- [ ] Legg til en linje nederst, for eksempel `Laget i kodeklubben.`.

- [ ] Trykk **Commit changes** og så **Commit changes** igjen.

- [ ] Gå tilbake til VS Code. Fila på maskinen din har ikke den nye linja ennå.

- [ ] Trykk **Sync Changes** i **Source Control**, eller på pilene nederst i
  statuslinja. Nå kom linja.

## Push og pull {.tip}

Å sende commits til GitHub heter **push**. Å hente commits fra GitHub heter
**pull**. **Sync Changes** i VS Code gjør begge deler.


# Steg 5: Hent prosjektet på en annen maskin {.activity}

Gjør dette på en annen maskin, eller i en ny mappe på samme maskin.

## Sjekkliste {.check}

- [ ] På github.com: trykk den grønne knappen **Code** og kopier adressen under
  **HTTPS**.

- [ ] I VS Code: trykk **Ctrl** + **Shift** + **P**, skriv `Git: Clone` og lim
  inn adressen.

- [ ] Velg en mappe å lagre i, og åpne prosjektet når VS Code spør.

- [ ] Nå har du hele prosjektet med hele historien. Sjekk med `git log
  --oneline`.


# Utfordring {.challenge}

- [ ] Legg et skjermbilde av spillet i repoet og vis det i README med `![Spillet
  i terminalen](skjermbilde.png)`.

- [ ] Se på et kjent prosjekt på GitHub, for eksempel
  [Scratch](https://github.com/scratchfoundation/scratch-gui). Hva står i
  README-en deres?

- [ ] Neste oppgave: [Samarbeid med pull request](../samarbeid/samarbeid).
