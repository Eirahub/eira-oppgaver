---
title: Lærerveiledning - Steinsti og trapp
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lærer å bruke en løkke (`gjenta`) til å få roboten til å bygge en trapp
med ti trinn og en firkantet sti av brostein. De gir roboten blokker, velger
blokk i inventaret og slår på funksjonen som legger en blokk for hvert steg.
Til slutt ser de trappen som JavaScript med en `for`-løkke.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Blokkbasert programmering, løkker, Minecraft

__Nivå__: 1

__Tidsbruk__: Omtrent en time. Dobbelttime med utfordringene.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Matematikk, 6. trinn__: bruke variabler, løkker, vilkår og funksjoner i
  programmering til å utforske geometriske figurer og mønstre

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva en løkke er, og når den lønner seg.

- [ ] Elevene kan flytte en gruppe blokker inn i en løkke og endre antall
  gjentakelser.

- [ ] Elevene kan bruke roboten til å bygge med blokker fra inventaret.

- [ ] Elevene kan se at en `for`-løkke i JavaScript gjør det samme som
  `gjenta`.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å bygge trappen med en løkke.

- [ ] Eleven oppnår høy måloppnåelse ved å bygge stien, forklare hvorfor
  hjelpefunksjonen må slås av til slutt, og løse en av utfordringene.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgaven Kom i gang.

- [ ] __Utstyr__: Codeling installert, Minecraft Java Edition i Kreativ modus.
  Se oppgaven Installere Codeling.

- [ ] __Kreativ modus__: Kommandoen `robot gi` virker bare i Kreativ. I
  overlevelse må roboten få blokkene på en annen måte.

- [ ] __Maskin__: Minecraft og nettleseren åpne samtidig. Roboten kan bygge
  mange blokker, så en maskin som kjører Minecraft greit, er nok.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv programmet selv. Kjør trappa og stien i en flat verden med nok
  plass.

- [ ] Be elevene gå litt unna roboten og skrive `/robot spawn` før hvert nytt
  forsøk, så det ikke blir trangt.

## Steg 1: Gi blokker {.check}

- [ ] Elever glemmer å kjøre `robot gi`. Høyreklikk på roboten for å se
  inventaret.

- [ ] Blokkene i oppgaven er eikeplanker og brostein. Andre blokker virker
  også, men sjekk hvilke navn blokken har i editoren.

## Steg 2 og 3: Trinn og løkke {.check}

- [ ] La elevene først bygge ett trinn for hånd og telle blokkene, så ser de
  hvorfor løkka lønner seg.

- [ ] Elever drar bare én av de tre blokkene inn i løkka. Da får de en
  uventet trapp. Kjør sammen og se hva som skjer.

- [ ] Hvis roboten ikke bygger, sjekk at den har blokker i plassen den bruker.

## Steg 4: Sti {.check}

- [ ] Gå gjennom hva `plasser ved flytting` gjør, og hvorfor den må slås av
  til slutt. Glemmer eleven det, bygger roboten videre i neste program.

- [ ] Be elevene gjette hva stien blir før de kjører.

## Vanlige problemer {.protip}

- Roboten bygger ingenting: tom plass i inventaret, eller `robot velg plass`
  mangler.

- Trappa går i feil retning: roboten starter der den ser. Spawn på nytt i riktig
  retning.

- Roboten stopper midt i: spillet er pauset. Lukk pausemenyen.

- Programmet kjører for alltid: bruk stoppknappen eller `/robot stop`.


# Variasjoner {.activity}

- La elevene designe sin egen bygning og skrive programmet på papir først.

- La elevene bytte program og forutsi hva det bygger.

- La elevene skrive programmet som JavaScript og endre tallet i løkka.


# Eksterne ressurser {.activity}

- [Codeling på GitHub](https://github.com/Eirahub/MinecraftCodeling): kode og
  utgivelser.

- [Veiledning for spillere](https://github.com/Eirahub/MinecraftCodeling/blob/main/docs/player/guide-nb.md):
  robotkommandoene.
