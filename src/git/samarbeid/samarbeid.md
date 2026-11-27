---
title: Samarbeid med pull request
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Når flere jobber på samme prosjekt, kan ikke alle endre `main` samtidig. Hver
person lager en gren (branch) og ber om å få den flettet inn (merge). Det heter
en **pull request**. Andre kan lese endringen, kommentere og godkjenne den før
den kommer inn. Det heter en **kodegjennomgang** (code review).

Dere er to eller tre som jobber sammen, med hver sin rolle:

- **Produkteier** (product owner) eier repoet og bestemmer hva som skal lages.
- **Utvikler** (developer) lager endringen på en gren.
- **Gjennomgåer** (reviewer) leser endringen og godkjenner den.

Er dere bare to, er produkteieren også gjennomgåer. I steg 5 bytter dere
roller. Alle trenger en GitHub-konto.

![En pull request på github.com med tittelen Tell antall forsøk, en
beskrivelse og en kommentar på en kodelinje](pull_request.png)

## Aldersgrense {.tip}

Alle må være 13 år eller eldre for å ha en konto på GitHub. Er en av dere
yngre, kan en voksen ta en av rollene.


# Steg 1: Inviter de andre {.activity}

## Sjekkliste {.check}

- [ ] **Produkteier:** åpne repoet `gjett_tallet` fra [Del koden på
  GitHub](../del_pa_github/del_pa_github) på github.com.

- [ ] **Produkteier:** gå til **Settings**, så **Collaborators**, og trykk
  **Add people**. Skriv brukernavnet til de andre, én om gangen.

- [ ] **Utvikler og gjennomgåer:** dere får en invitasjon på e-post og på
  github.com. Godta den.

- [ ] **Utvikler og gjennomgåer:** klon (clone) repoet i VS Code med **Ctrl** +
  **Shift** + **P** og `Git: Clone`, som i steg 5 i forrige oppgave.


# Steg 2: Utvikleren lager en gren {.activity}

## Sjekkliste {.check}

- [ ] **Utvikler:** lag en gren som heter `feature/teller`, som i [Prøv en idé
  på en gren](../grener/grener).

- [ ] **Utvikler:** få spillet til å telle forsøk. Legg `forsok = 0` over
  `while True:`, `forsok = forsok + 1` rett under `input`-linja, og bytt
  `print("Riktig!")` med:

  ```python
          print("Riktig! Du brukte", forsok, "forsøk")
  ```

- [ ] **Utvikler:** kjør programmet, lag en innsjekking (commit) og trykk
  **Publish Branch**. Da sender (push) du grenen til GitHub.


# Steg 3: Lag en pull request {.activity}

## Sjekkliste {.check}

- [ ] **Utvikler:** åpne repoet på github.com. Det står en gul boks med
  `feature/teller had recent pushes`. Trykk **Compare & pull request**.

- [ ] **Utvikler:** skriv en tittel, for eksempel `Tell antall forsøk`, og en
  setning om hva du har gjort og hvorfor.

- [ ] **Utvikler:** til høyre, under **Reviewers**, velg gjennomgåeren. Trykk
  **Create pull request**.

## En god pull request {.tip}

Hold den liten. Én pull request skal gjøre én ting. Da er den lett å lese og
rask å godkjenne.


# Steg 4: Les og godkjenn {.activity}

## Sjekkliste {.check}

- [ ] **Gjennomgåer:** åpne fanen **Pull requests** på github.com og klikk på
  den nye.

- [ ] **Gjennomgåer:** gå til **Files changed**. Der ser du hva utvikleren har
  endret.

- [ ] **Gjennomgåer:** hold musa over en linje og trykk på **+**. Skriv en
  kommentar, for eksempel et spørsmål eller ros, og trykk **Comment**.

- [ ] **Utvikler:** svar på kommentaren. Må noe rettes, retter du det i VS
  Code, lager en commit og trykker **Sync Changes**. Den nye commiten dukker
  opp i pull requesten.

- [ ] **Gjennomgåer:** når alt er bra, trykk den grønne knappen **Submit
  review** øverst i **Files changed**. Skriv en kort melding, velg **Approve**
  og trykk **Submit review** nederst. Nå har du godkjent (approve) endringen.

## Kan ikke godkjenne? {.tip}

Den som har laget pull requesten, kan ikke godkjenne den selv. Da er
**Approve** grått. Det er gjennomgåeren som godkjenner. I eldre visninger
heter knappen **Review changes** i stedet for **Submit review**.

- [ ] **Produkteier:** gå til **Conversation**. Der står det at endringen er
  godkjent. Trykk **Merge pull request** og så **Confirm merge**.

- [ ] **Alle:** bytt til `main` i VS Code og trykk **Sync Changes**. Da henter
  (pull) dere det nye, og alle har telleren.

## Hva ser en gjennomgåer etter? {.protip}

Kjører koden? Gjør den det tittelen sier? Er navnene lette å forstå? Si hva
som er bra, og spør i stedet for å bestemme. Det er koden som gjennomgås, ikke
personen.


# Steg 5: Bytt roller og gjennomgå i VS Code {.activity}

Nå bytter dere roller. Den som var gjennomgåer, blir utvikler, og den som var
utvikler, blir gjennomgåer. Er dere tre, blir den som var utvikler,
produkteier. Denne gangen gjør gjennomgåeren alt i VS Code.

## Sjekkliste {.check}

- [ ] **Utvikler:** lag en gren `feature/ha-det`. Legg til `print("Ha det
  bra!")` nederst i fila, uten innrykk. Lag en commit, trykk **Publish
  Branch** og lag en pull request som i steg 3.

- [ ] **Gjennomgåer:** i VS Code, åpne **Extensions** med
  **Ctrl** + **Shift** + **X**. Søk etter `GitHub Pull Requests` fra GitHub og
  trykk **Install**.

- [ ] **Gjennomgåer:** klikk på GitHub-ikonet i sidelinja til venstre og logg
  inn med GitHub-kontoen din når VS Code ber om det.

- [ ] **Gjennomgåer:** under **Pull Requests** finner du pull requesten fra
  utvikleren. Klikk på den. Beskrivelsen åpnes, og fila som er endret, står i
  lista.

- [ ] **Gjennomgåer:** klikk på fila. Da ser du det gamle og det nye ved siden
  av hverandre. Hold musa over en linje, trykk på **+** og skriv en kommentar.

- [ ] **Gjennomgåer:** vil du prøve koden, trykk **Checkout** i beskrivelsen.
  Da bytter VS Code til grenen, og du kan kjøre programmet.

- [ ] **Gjennomgåer:** nederst i beskrivelsen skriver du en kort melding og
  velger **Approve**. Er det din egen pull request, står bare **Comment**
  der.

- [ ] **Produkteier:** flett inn pull requesten på github.com. Alle trykker
  **Sync Changes** på `main`.

![Pull requesten Si ha det til slutt åpnet i VS Code. Til venstre står den
under Pull Requests med fila gjett_tallet.py, og til høyre er beskrivelsen
med knappen Checkout og feltet for kommentarer](pr_i_vs_code.png)


# Steg 6: Begge endrer samtidig {.activity}

Nå lager dere en flettekonflikt (merge conflict) på GitHub og løser den. I dette
steget er dere begge utviklere. Kall dere A og B.

## Sjekkliste {.check}

- [ ] **A:** lag en gren `feature/velkommen`. Legg til `print("Velkommen!")` på
  linja over `while True:`. Publiser og lag en pull request.

- [ ] **B:** lag en gren `feature/hei` fra `main`. Legg til `print("Hei!")` på
  den samme linja. Publiser og lag en pull request.

- [ ] **B:** godkjenn pull requesten til A. **A:** flett den inn.

- [ ] Pull requesten fra `feature/hei` sier nå **This branch has conflicts that
  must be resolved**.

- [ ] **B:** skriv denne linja i terminalen én gang. Den sier at Git skal
  flette når grenene har gått hver sin vei:

  ```
  git config --global pull.rebase false
  ```

- [ ] **B:** i VS Code, på grenen `feature/hei`: trykk **...** i **Source
  Control**, velg **Pull, Push** og så **Pull from...**. Velg `origin/main`.

- [ ] **B:** løs konflikten som i steg 5 i [Prøv en idé på en
  gren](../grener/grener). Behold gjerne begge linjene. Lag en commit og trykk
  **Sync Changes**.

- [ ] **A:** pull requesten har ikke lenger konflikt. Godkjenn den, og flett
  den inn.

## Test prosjektet {.flag}

- [ ] **Begge:** bytt til `main`, trykk **Sync Changes** og kjør programmet.
  Telleren, avskjeden og begge hilsenene skal være med.


# Steg 7: Forgrening {.activity}

Til nå har dere vært invitert til repoet. Vil du hjelpe til i et prosjekt der
du ikke er invitert, lager du en **forgrening** (fork). Det er din egen kopi av
hele repoet, på din konto. Der kan du lage grener og endre det du vil. Når du
er fornøyd, lager du en pull request tilbake til det opprinnelige repoet. Det
er eierne som bestemmer om den flettes inn.

## Sjekkliste {.check}

- [ ] Finn et åpent prosjekt på GitHub med merkelappen `good first issue`. Hva
  ber de om hjelp til?

- [ ] Øverst til høyre i repoet står knappen **Fork**. Trykk på den og så
  **Create fork**. Nå har du en kopi under ditt eget brukernavn.

- [ ] Du trenger ikke endre noe. Slett kopien under **Settings** nederst, i
  **Danger Zone**, hvis du ikke vil ha den.

## Les reglene først {.tip}

Mange prosjekter har en fil som heter `CONTRIBUTING.md`. Der står det hvordan
de vil ha hjelp. Les den før du lager en pull request.


# Utfordring {.challenge}

- [ ] Lag en sak (issue) på GitHub som sier hva som bør lages. Det kan være
  "Spør om spilleren vil spille igjen". Lag en pull request som løser den, og
  skriv `Closes #1` i beskrivelsen, med nummeret på saken. Hva skjer med saken
  når pull requesten flettes inn?

- [ ] Gjør steg 2 til 4 én gang til, med nye roller. Hvem har ikke vært
  gjennomgåer ennå?

- [ ] Neste oppgave: [Planlegg med issues og
  prosjekttavle](../issues_og_prosjekt/issues_og_prosjekt).
