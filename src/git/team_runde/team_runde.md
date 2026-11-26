---
title: En runde som et team
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå jobber dere som et team i et ekte utviklingsprosjekt. Dere tar én milepæl
(milestone) fra start til slutt: dere planlegger sakene (issues), hver lager
sin del på en gren (branch), en annen gjennomgår den, og alt flettes (merge)
inn i `main`. Når milepælen er ferdig, har dere en ny versjon av spillet.

Dere er 3 eller 4 på laget, og rollene byttes:

- **Produkteier** (product owner) bestemmer hva som er viktigst, og sjekker at
  det som lages, er det som var bestilt. Én person er produkteier for hele
  runden.
- **Utvikler** (developer) lager endringen. Alle er utvikler på én sak.
- **Gjennomgåer** (reviewer) leser og tester endringen før den flettes inn.
  Alle er gjennomgåer på saken til en annen.

<!-- BILDE: Prosjekttavla til et team med fire saker i milepælen Versjon 2,
fordelt på kolonnene Todo, In Progress og Done, med profilbildet til den som
har ansvaret på hver lapp -->

## Før dere starter {.tip}

Dere trenger repoet `gjett_tallet` og en prosjekttavle, som i [Samarbeid med
pull request](../samarbeid/samarbeid) og [Planlegg med issues og
prosjekttavle](../issues_og_prosjekt/issues_og_prosjekt). Alle må være 13 år
eller eldre for å ha en konto på GitHub. Er en på laget yngre, kan den jobbe
sammen med en voksen som har konto.


# Steg 1: Sett opp teamet {.activity}

## Sjekkliste {.check}

- [ ] Bestem hvem som er produkteier i denne runden. Repoet til produkteieren
  er det dere jobber i.

- [ ] **Produkteier:** inviter alle på laget under **Settings** og
  **Collaborators**. Alle godtar og kloner (clone) repoet.

- [ ] **Produkteier:** lag en milepæl som heter `Versjon 2`.

- [ ] **Produkteier:** åpne prosjekttavla. Trykk **...** øverst til høyre, velg
  **Settings** og så **Manage access**. Inviter de andre, og gi dem tilgangen
  **Write**. Nå kan alle flytte lappene.

- [ ] Bestem hvem som gjennomgår hvem. Skriv det i beskrivelsen av milepælen,
  for eksempel:

  ```markdown
  Ada er utvikler, Bo gjennomgår.
  Bo er utvikler, Cem gjennomgår.
  Cem er utvikler, Ada gjennomgår.
  ```

## Én oppgave hver {.tip}

Ingen gjennomgår sin egen kode. Da ser alle koden til minst én annen, og alle
får tilbakemelding på sin egen.


# Steg 2: Planlegg runden {.activity}

Produkteieren leder planleggingen, men alle er med.

## Sjekkliste {.check}

- [ ] Lag eposet (epic) `Gjett tallet 2.0` som en sak.

- [ ] Velg én brukerhistorie (user story) per person. Forslag:

  - Som spiller vil jeg spille igjen uten å starte på nytt, så jeg kan øve.
  - Som spiller vil jeg se rekorden min, så jeg kan prøve å slå den.
  - Som spiller vil jeg få beskjed når jeg skriver noe som ikke er et tall, så
    spillet ikke krasjer.
  - Som spiller vil jeg velge hvor vanskelig det er, så det passer for meg.

- [ ] Lag hver historie som en underordnet sak (sub-issue) under eposet. Skriv
  akseptansekriterier (acceptance criteria) på formen «Gitt ..., når ..., så
  ...», som i steg 5 i [Planlegg med issues og
  prosjekttavle](../issues_og_prosjekt/issues_og_prosjekt).

- [ ] Gi hver sak milepælen `Versjon 2`, og velg utvikleren under
  **Assignees**.

- [ ] Legg sakene i **Todo** på tavla. **Produkteier:** sorter dem med den
  viktigste øverst.

## Små saker {.protip}

En sak dere ikke tror blir ferdig på én økt, er for stor. Del den i to.


# Steg 3: Lag grenen fra saken {.activity}

## Sjekkliste {.check}

- [ ] **Utvikler:** åpne saken din. Under **Development**, trykk **Create a
  branch**. Gi grenen et navn som `feature/12-rekord`, med nummeret på saken.

- [ ] **Utvikler:** hent grenen i VS Code med linjene GitHub viser, som i steg
  8 i [Prøv en idé på en gren](../grener/grener).

- [ ] **Utvikler:** dra saken din til **In Progress** på tavla.


# Steg 4: Kod og lag en pull request {.activity}

## Sjekkliste {.check}

- [ ] **Utvikler:** lag endringen. Lag en innsjekking (commit) for hver lille
  ting som virker, med en melding som sier hva du gjorde.

- [ ] **Utvikler:** sjekk akseptansekriteriene selv før du ber om
  gjennomgang.

- [ ] **Utvikler:** trykk **Sync Changes** og lag en pull request. Skriv
  `Closes #12` i beskrivelsen, med nummeret på saken. Velg gjennomgåeren under
  **Reviewers**.

## KI-assistent i teamet {.tip}

Copilot i VS Code kan foreslå en innsjekkingsmelding (commit message) eller en
beskrivelse til pull requesten. Les alltid forslaget og rett det. Bruker du KI
til å skrive kode, er det likevel du som er ansvarlig for den, og du må kunne
forklare den til gjennomgåeren. Følg KI-regelen dere har i klubben, se [Lag en
KI-regel for klubben](../../ki_veiledere/klubbens_ki_regel/klubbens_ki_regel).


# Steg 5: Gjennomgå {.activity}

## Sjekkliste {.check}

- [ ] **Gjennomgåer:** åpne pull requesten i VS Code eller på github.com, som i
  [Samarbeid med pull request](../samarbeid/samarbeid).

- [ ] **Gjennomgåer:** trykk **Checkout** og kjør programmet. Prøv hvert
  akseptansekriterium i saken.

- [ ] **Gjennomgåer:** les koden. Skriv minst én kommentar: noe som er bra,
  eller et spørsmål.

- [ ] **Gjennomgåer:** mangler noe, velg **Request changes** i stedet for
  **Approve**, og skriv hva som mangler. Utvikleren retter og sender på nytt.

- [ ] **Gjennomgåer:** når alt stemmer, velg **Approve**.

## Ferdig-definisjon {.tip}

En sak er ferdig når den er gjennomgått, flettet inn i `main` og testet på
`main`. Det kalles teamets ferdig-definisjon (definition of done). Det er ikke
nok at koden virker på maskinen til utvikleren.


# Steg 6: Flett og hold dere oppdatert {.activity}

Flere grener skal inn i den samme fila. Den første som flettes, går glatt. De
neste kan få en flettekonflikt (merge conflict).

## Sjekkliste {.check}

- [ ] **Utvikler:** når pull requesten er godkjent, trykk **Merge pull
  request** og **Confirm merge**. Trykk så **Delete branch**.

- [ ] **Alle andre utviklere:** hent (pull) det nye og flett `main` inn i
  grenen deres, som i steg 7 i [Prøv en idé på en gren](../grener/grener).

- [ ] Får dere en konflikt, løs den sammen med den som skrev den andre koden.
  Kjør programmet og sjekk at begge endringene virker.

- [ ] Saken lukkes av seg selv og flytter seg til **Done** på tavla.

## Test prosjektet {.flag}

- [ ] **Alle:** når alle pull requestene er flettet inn, bytt til `main`,
  trykk **Sync Changes** og kjør programmet. Virker alt sammen?


# Steg 7: Avslutt runden {.activity}

## Sjekkliste {.check}

- [ ] **Produkteier:** gå til **Milestones**. Står `Versjon 2` på 100 %? Er det
  saker igjen, bestem om de skal gjøres nå eller flyttes til neste milepæl.

- [ ] **Produkteier:** prøv spillet og sjekk at historiene er slik du ville ha
  dem. Trykk så **Close** på milepælen.

- [ ] **Alle:** snakk sammen i ti minutter. Hva gikk bra? Hva var vanskelig?
  Hva gjør dere annerledes neste gang? Skriv svarene i en kommentar i eposet.

- [ ] Bytt produkteier, og velg nye par for gjennomgang til neste runde.


# Utfordring {.challenge}

- [ ] Ta en runde til med milepælen `Versjon 3` og en ny produkteier. Gikk det
  raskere den andre gangen?

- [ ] Merk versjonen med et versjonsmerke (tag): gå til **Releases** på
  forsiden av repoet, trykk **Create a new release**, skriv `v2.0` under
  **Choose a tag** og trykk **Publish release**. Det er en utgivelse (release).

- [ ] Neste oppgave: [Publiser en nettside med GitHub
  Pages](../github_pages/github_pages).
