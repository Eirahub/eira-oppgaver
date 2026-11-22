---
title: Samarbeid med pull request
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Når flere jobber på samme prosjekt, kan ikke alle endre `main` samtidig. Hver
person lager en gren og ber om å få den flettet inn. Det heter en **pull
request**. Andre kan lese endringen, kommentere og godkjenne den før den kommer
inn.

Dere er to som jobber sammen. Den ene eier repoet og kalles **eier** her. Den
andre kalles **hjelper**. Begge trenger en GitHub-konto.

![En pull request på github.com med tittelen Tell antall forsøk, en
beskrivelse og en kommentar på en kodelinje](pull_request.png)

## Aldersgrense {.tip}

Begge må være 13 år eller eldre for å ha en konto på GitHub. Er en av dere
yngre, kan en voksen være den andre.


# Steg 1: Inviter hjelperen {.activity}

## Sjekkliste {.check}

- [ ] **Eier:** åpne repoet `gjett_tallet` fra [Del koden på
  GitHub](../del_pa_github/del_pa_github) på github.com.

- [ ] **Eier:** gå til **Settings**, så **Collaborators**, og trykk **Add
  people**. Skriv brukernavnet til hjelperen.

- [ ] **Hjelper:** du får en invitasjon på e-post og på github.com. Godta den.

- [ ] **Hjelper:** klon repoet i VS Code med **Ctrl** + **Shift** + **P** og
  `Git: Clone`, som i steg 5 i forrige oppgave.


# Steg 2: Hjelperen lager en gren {.activity}

## Sjekkliste {.check}

- [ ] **Hjelper:** lag en gren som heter `teller`, som i [Prøv en idé på en
  gren](../grener/grener).

- [ ] **Hjelper:** få spillet til å telle forsøk. Legg `forsok = 0` over `while
  True:`, `forsok = forsok + 1` rett under `input`-linja, og bytt
  `print("Riktig!")` med:

  ```python
          print("Riktig! Du brukte", forsok, "forsøk")
  ```

- [ ] **Hjelper:** kjør programmet, lag en commit og trykk **Publish Branch**.
  Grenen ligger nå på GitHub.


# Steg 3: Lag en pull request {.activity}

## Sjekkliste {.check}

- [ ] **Hjelper:** åpne repoet på github.com. Det står en gul boks med `teller
  had recent pushes`. Trykk **Compare & pull request**.

- [ ] **Hjelper:** skriv en tittel, for eksempel `Tell antall forsøk`, og en
  setning om hva du har gjort og hvorfor.

- [ ] **Hjelper:** trykk **Create pull request**.

## En god pull request {.tip}

Hold den liten. Én pull request skal gjøre én ting. Da er den lett å lese og
rask å godkjenne.


# Steg 4: Les og godkjenn {.activity}

## Sjekkliste {.check}

- [ ] **Eier:** åpne fanen **Pull requests** på github.com og klikk på den nye.

- [ ] **Eier:** gå til **Files changed**. Der ser du hva hjelperen har endret.

- [ ] **Eier:** hold musa over en linje og trykk på **+**. Skriv en kommentar,
  for eksempel et spørsmål eller ros, og trykk **Add single comment**.

- [ ] **Hjelper:** svar på kommentaren. Må noe rettes, retter du det i VS Code,
  lager en commit og trykker **Sync Changes**. Den nye commiten dukker opp i
  pull requesten.

- [ ] **Eier:** når alt er bra, gå til **Conversation** og trykk **Merge pull
  request** og så **Confirm merge**.

- [ ] **Begge:** bytt til `main` i VS Code og trykk **Sync Changes**. Nå har
  begge telleren.


# Steg 5: Begge endrer samtidig {.activity}

Nå lager dere en konflikt på GitHub og løser den.

## Sjekkliste {.check}

- [ ] **Eier:** lag en gren `velkommen`. Legg til `print("Velkommen!")` på linja
  over `while True:`. Publiser og lag en pull request.

- [ ] **Hjelper:** lag en gren `hei` fra `main`. Legg til `print("Hei!")` på den
  samme linja. Publiser og lag en pull request.

- [ ] **Eier:** flett inn `velkommen`.

- [ ] Pull requesten fra `hei` sier nå **This branch has conflicts that must be
  resolved**.

- [ ] **Hjelper:** i VS Code, på grenen `hei`: trykk **...** i **Source
  Control**, velg **Pull, Push** og så **Pull from...**. Velg `origin/main`.

- [ ] **Hjelper:** løs konflikten som i steg 5 i [Prøv en idé på en
  gren](../grener/grener). Behold gjerne begge linjene. Lag en commit og trykk
  **Sync Changes**.

- [ ] **Eier:** pull requesten har ikke lenger konflikt. Flett den inn.

## Test prosjektet {.flag}

- [ ] **Begge:** bytt til `main`, trykk **Sync Changes** og kjør programmet.
  Telleren og begge hilsenene skal være med.


# Utfordring {.challenge}

- [ ] Lag et **issue** på GitHub, en sak som sier hva som bør lages. Det kan
  være "Spør om spilleren vil spille igjen". Lag en pull request som løser den,
  og skriv `Fixes #1` i beskrivelsen. Hva skjer med issuet når pull requesten
  flettes inn?

- [ ] Finn et åpent prosjekt på GitHub med merkelappen `good first issue`. Hva
  ber de om hjelp til?

- [ ] Neste oppgave: [Publiser en nettside med GitHub
  Pages](../github_pages/github_pages).
