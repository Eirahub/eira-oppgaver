---
title: Lærerveiledning - Tunnelboreren
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene borer en tunnel som er to blokker høy og tre bred gjennom et fjell. De
bruker en løkke inni en annen løkke for sideveggene, en teller og rest fra
divisjon for å sette en fakkel hver 8. blokk, og en funksjon med lengden som
parameter, som kjøres med `tunnel 30` i chatten.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 6. til 10. trinn

__Tema__: Nøstede løkker, teller, rest, funksjoner med parametere

__Nivå__: 2

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hvor mange ganger en løkke inni en løkke kjører.

- [ ] Elevene kan bruke rest fra divisjon til å gjøre noe hver n-te gang.

- [ ] Elevene kan lage en funksjon med en parameter og kjøre den fra chatten.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å bore en tunnel som er tre blokker
  bred og to høy.

- [ ] Eleven oppnår høy måloppnåelse ved å sette fakler med rest, lage `tunnel`
  med valgfri lengde, og stoppe for lava.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: De tidligere oppgavene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 3: Den lille løkka {.check}

- [ ] Roboten snur til venstre to ganger per runde, fire ganger til sammen, og
  ser rett frem igjen. La elevene finne det ut selv før de kjører.

## Steg 4: Rest {.check}

- [ ] Restblokken ligger i `Matematikk`. Elevene kan søke etter den. I
  JavaScript er det `%`. Mange elever har ikke lært rest ennå. Bruk eksempler
  med 16 og 17 delt på 8.

- [ ] Fakkelen settes `bakover`, i midten av forrige skive, der det er gulv
  under.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Fortsett spill`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Tunnelen blir tettet: grus eller sand har falt ned. Bor et annet sted, eller
  knus det.

- Ingen fakler: sjekk `robot velg plass 1`, og at `endre teller med 1` står før
  `hvis`.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
