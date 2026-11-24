---
title: Planlegg med issues og prosjekttavle
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Et prosjekt har alltid flere ting som skal gjøres enn det er tid til. På GitHub
skriver du hver oppgave som et **issue**, en sak med tittel, beskrivelse og
hvem som har ansvaret. Sakene samler du på en **prosjekttavle** med kolonner
for det som skal gjøres, det som er i gang, og det som er ferdig. Da ser alle
på laget hva som skjer, uten å spørre.

![Illustrasjon av en prosjekttavle med tre kolonner, Todo, In Progress og Done,
med lapper som flyttes fra venstre mot høyre](tavle.png)

## Før du starter {.tip}

Du trenger repoet `gjett_tallet` fra [Del koden på
GitHub](../del_pa_github/del_pa_github). Oppgaven kan gjøres alene, men er
morsommere i par, som i [Samarbeid med pull request](../samarbeid/samarbeid).
Du må være 13 år eller eldre for å ha en konto på GitHub.


# Steg 1: Lag et issue {.activity}

Et godt issue sier hva som skal gjøres, hvorfor, og når det er ferdig.

## Sjekkliste {.check}

- [ ] Åpne repoet på github.com, gå til fanen **Issues** og trykk **New
  issue**.

- [ ] Skriv en kort tittel som sier hva som skal gjøres, for eksempel `Spør om
  spilleren vil spille igjen`.

- [ ] Skriv beskrivelsen:

  ```markdown
  Når spilleren har gjettet riktig, slutter spillet. Mange vil spille
  en gang til.

  Ferdig når:
  - [ ] Spillet spør «Vil du spille igjen? (j/n)»
  - [ ] Svarer spilleren j, starter et nytt spill med et nytt tall
  ```

- [ ] Trykk **Create** (noen steder heter knappen **Submit new issue**).
  Issuet får et nummer, for eksempel `#1`.

- [ ] Lag to issues til, for eksempel `Vis antall forsøk til slutt` og `Gi
  beskjed hvis spilleren skriver noe som ikke er et tall`.

## Tips {.protip}

Ett issue skal handle om én ting. Er det for stort til å bli ferdig på én økt,
del det opp i flere.


# Steg 2: Merkelapper og ansvar {.activity}

## Sjekkliste {.check}

- [ ] Åpne et issue. Til høyre finner du **Labels**. Gi det merkelappen
  `enhancement` hvis det er noe nytt, eller `bug` hvis noe er feil.

- [ ] Under **Assignees** velger du hvem som har ansvaret. Jobber dere i par,
  tar dere ett issue hver.

- [ ] Skriv en kommentar nederst i issuet, for eksempel et spørsmål om hvordan
  det skal virke. Kommentarer er der dere avklarer ting, så det ikke blir
  glemt.


# Steg 3: Lag en prosjekttavle {.activity}

## Sjekkliste {.check}

- [ ] Klikk på profilbildet ditt øverst til høyre, velg **Projects** og trykk
  **New project**. Under **Start from scratch** velger du **Board**.

- [ ] Gi prosjektet et navn, for eksempel `Gjett tallet`. Tavla har tre
  kolonner: **Todo**, **In Progress** og **Done**. Velger du en mal i stedet
  for **Board**, får tavla andre kolonner.

- [ ] Legg til de tre issuene: trykk **+** nederst i **Todo**, skriv `#`, velg
  repoet `gjett_tallet` og så issuet.

- [ ] Dra det issuet du skal jobbe med nå, til **In Progress**.

## Tips {.protip}

Ha få lapper i **In Progress**, helst én per person. Da blir ting ferdige i
stedet for å bli halvferdige.


# Steg 4: Lukk issuet med en pull request {.activity}

## Sjekkliste {.check}

- [ ] Lag en gren, og løs issuet i VS Code, som i [Prøv en idé på en
  gren](../grener/grener).

- [ ] Lag en pull request. Skriv `Closes #1` i beskrivelsen, med nummeret til
  issuet.

- [ ] Se på issuet. Pull requesten er nevnt i issuet.

- [ ] Flett inn pull requesten.

## Test prosjektet {.flag}

- [ ] Er issuet lukket av seg selv?

- [ ] Har lappen flyttet seg til **Done** på tavla?

- [ ] Kryss av punktene under «Ferdig når» i issuet hvis du ikke allerede har
  gjort det.


# Steg 5: Fra plan til issues {.activity}

Har du en plan med brukerhistorier, kan hver historie bli et issue. Da blir
tavla en oversikt over hele prosjektet.

## Sjekkliste {.check}

- [ ] Finn planen for et prosjekt du jobber med, eller skriv tre ting du vil
  gjøre med spillet.

- [ ] Lag ett issue per historie eller ting, med «Ferdig når» i beskrivelsen.

- [ ] Sorter **Todo** slik at det viktigste ligger øverst.

## Offentlig eller privat? {.tip}

Er repoet offentlig, kan alle lese issuene. Skriv aldri navn, telefonnummer
eller andre personopplysninger om kunder eller testpersoner i et issue.


# Utfordring {.challenge}

- [ ] Lag en **milepæl** (milestone) under **Issues**, for eksempel `Versjon
  1`, og knytt issuene til den. Hvor mange prosent er ferdig?

- [ ] Be en KI-assistent lage issues fra en plan:

  ```
  Her er brukerhistoriene i planen min: [lim inn]. Skriv ett issue per
  historie med tittel, beskrivelse og «Ferdig når» som sjekkliste.
  ```

  Les gjennom før du legger dem inn. Er alle like viktige?
