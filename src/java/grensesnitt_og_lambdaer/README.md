---
title: Lærerveiledning - Grensesnitt og lambdaer
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager et hendelsessystem for knuste klosser. De lærer grensesnitt
(`interface`, `@FunctionalInterface`), lyttere, lambdaer og metodereferanser,
og bruker `Shift + F6` til å gi noe nytt navn overalt. Mønsteret er det samme
som i mange spill og modder: en hendelse, og kode som lytter på den.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 9. trinn til VG3

__Tema__: Objektorientert programmering, grensesnitt, lambdaer

__Nivå__: 3

__Tidsbruk__: Dobbeltime.

## Kompetansemål {.challenge}

Kompetansemål er ikke knyttet til oppgaven ennå. Hent eventuelle mål fra
[læreplanen i informasjonsteknologi på
udir.no](https://www.udir.no/lk20/inf01-02) som passer for gruppa.

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva et grensesnitt er, og lage ett.

- [ ] Elevene kan lage en klasse som implementerer et grensesnitt.

- [ ] Elevene kan skrive en lambda og forklare hva som står på hver side av
  `->`.

- [ ] Elevene kan bruke en metodereferanse i stedet for en lambda.

- [ ] Elevene kan forklare hvorfor en hendelse ikke trenger å vite hva lytterne
  gjør.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få logger, diamantmelding og
  poeng til å virke.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hvordan Java vet at lambdaen
  er en `KnuseLytter`, og ved å lage en ny hendelse i utfordringen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Klasser og objekter og Arv. Prosjektet
  `klossverden` brukes videre.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Gi en liten forklaring med et eksempel fra hverdagen: en dørklokke eller
  en abonnent på et nyhetsbrev. Hendelsen sender, lytterne mottar.

- [ ] Sjekk at klassen `Kloss` har både `getNavn()` og `getHardhet()`.

## Steg 1 og 2: Grensesnitt og hendelse {.check}

- [ ] Elever velger Class i stedet for Interface. Da får de feil kode.

- [ ] `Kloss` må være importert i begge filene. `Alt + Enter` løser det.

- [ ] Snakk om at `KnuseHendelse` ikke vet noe om logger eller poeng.

## Steg 3: Lytter som klasse {.check}

- [ ] Elever glemmer `implements KnuseLytter`. IntelliJ markerer at metoden ikke
  passer.

- [ ] Elever endrer parametrene i `klossKnust`. De må være like i grensesnittet.

## Steg 4: Lambda {.check}

- [ ] Lambda er det vanskeligste. La elevene først skrive den som klasse, og
  sammenlign med lambdaen.

- [ ] Elever skriver `(spiller, kloss) ->` men glemmer krøllparentesene.

## Steg 5: Metodereferanse {.check}

- [ ] Metoden og lytteren må ha samme parametere. IntelliJ sier fra om det er
  forskjell.

- [ ] Sjekk at `giPoeng` ligger i klassen `Main`, utenfor `main`.

## Steg 6: Gi nytt navn {.check}

- [ ] `Shift + F6` kan være tatt av operativsystemet på noen maskiner. Sjekk
  tastaturinnstillingene i IntelliJ.

## Vanlige problemer {.protip}

- Lyttere kjører i rekkefølgen de ble registrert. Elever er ofte overrasket
  over rekkefølgen på utskriftene.

- Lambdaen skriver ingenting: sjekk at navnet i `equals` stemmer.

- To `main`-metoder i prosjektet: kjør riktig klasse.


# Variasjoner {.activity}

- La elevene lage en hendelse til, for eksempel `PlasserHendelse`.

- La elevene bruke `BiConsumer<String, Kloss>` fra `java.util.function`, som i
  utfordringen.

- La sterke elever lage en generisk hendelse som virker for alle typer.


# Fasit {.activity}

Løsningen ligger i mappa `src` i oppgaven:

- `src/klossverden/Main.java`

- `src/klossverden/Logger.java`

- `src/klossverden/hendelser/KnuseLytter.java`

- `src/klossverden/hendelser/KnuseHendelse.java`

- `src/klossverden/klosser/Kloss.java`

Kopier mappa `klossverden` inn i `src` i et IntelliJ-prosjekt for å kjøre den.


# Eksterne ressurser {.activity}

- [Dev.java](https://dev.java/learn/): Oracles læringsressurser for Java.
