---
title: Appen husker
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Mange apper må huske noe til neste gang: poeng, gloser eller en vaktliste. I
denne oppgaven får du appen til å huske data, du lager en sikkerhetskopi, og du
tenker over hva appen ikke bør huske.

![Illustrasjon av poengtavla med en pil til en fil som heter
sikkerhetskopi](husker.png)

## Før du starter {.tip}

Du trenger en app fra [Gjør appen bedre](../forbedre_appen/forbedre_appen).


# Steg 1: Glemmer appen? {.activity}

## Sjekkliste {.check}

- [ ] Kjør appen og legg inn noe, for eksempel tre lag med poeng.

- [ ] Lukk KIT Apps og start det igjen. Åpne appen. Er poengene der?

- [ ] Er de borte, ber du KI-en om å huske dem:

  ```
  Appen glemmer alt når jeg lukker den. Få den til å huske lagene og
  poengene. Bruk window.appStudio.storage hvis det finnes, og ellers
  localStorage. Gi meg hele filen på nytt.
  ```

- [ ] Test igjen: legg inn poeng, lukk og åpne.

## Hvor er dataene? {.tip}

Dataene ligger bare på denne PC-en, i den ene appen. Ingen andre kan se dem, og
de blir ikke lastet opp til nettet. Det betyr også at de er borte hvis PC-en
blir nullstilt.


# Steg 2: Tøm og start på nytt {.activity}

En turnering slutter, og en ny begynner.

## Sjekkliste {.check}

- [ ] Be om en knapp som sletter alt:

  ```
  Lag en knapp «Ny turnering» som sletter alle lag og poeng. Spør
  «Er du sikker?» før den sletter.
  ```

- [ ] Test at knappen virker, og at den spør først.


# Steg 3: Sikkerhetskopi {.activity}

## Sjekkliste {.check}

- [ ] Be om eksport og import:

  ```
  Lag en knapp som lagrer alle data som en fil, og en knapp som henter
  dem inn igjen fra en slik fil.
  ```

- [ ] Lagre en kopi, slett alt med «Ny turnering», og hent kopien inn igjen. Er
  alt tilbake?

## Tips {.protip}

Lager du en ferdig app i neste oppgave, kan du også eksportere og importere
dataene fra pakkepanelet i KIT Apps.


# Steg 4: Hva skal appen ikke huske? {.activity}

En **personopplysning** er alt som kan knyttes til en person, som navn,
telefonnummer, bilde eller karakterer. Det tryggeste er å la være å lagre det.

## Sjekkliste {.check}

- [ ] Skriv ned alt appen din lagrer.

- [ ] Er noe av det personopplysninger? Trenger appen det, eller holder det med
  lagnavn eller et nummer?

- [ ] Fjern det appen ikke trenger.

## Del med flere? {.tip}

En pakket app kan dele data med andre gjennom en delt mappe, for eksempel i
OneDrive. Da ser alle som har tilgang til mappen, dataene. Bruk det bare til
data alle på laget skal se, og aldri til sensitive opplysninger.

## Test deg selv {.flag}

- [ ] Kan du forklare hvor dataene i appen din ligger, og hvem som kan se dem?

## Lagre {.save}

Trykk **Save** i KIT Apps.


## Utfordring {.challenge}

Be KI-en vise en liten graf over poengene etter hver runde. Hvem ledet etter
første runde?
