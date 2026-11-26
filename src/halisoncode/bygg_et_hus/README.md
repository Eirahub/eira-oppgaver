---
title: Lærerveiledning - Bygg et hus
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene bygger et hus med blokken `fyll med` i hul modus, lager dør ved å fylle
med luft, og setter inn vinduer og lys. Til slutt lager de en funksjon med
parametrene bredde og lengde, som kjøres med `hus 9 7` i chatten.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 6. til 10. trinn

__Tema__: Posisjoner, fylling, funksjoner med parametere

__Nivå__: 2

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og
  reflektere over bruken av disse

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan beskrive en boks med to hjørner.

- [ ] Elevene kan lage en funksjon med parametere.

- [ ] Elevene kan bruke tallene fra en chatkommando i programmet.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å bygge et hus med dør og vinduer.

- [ ] Eleven oppnår høy måloppnåelse ved å lage `hus` med valgfri størrelse og
  plassere døra midt på veggen uansett bredde.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: De tidligere oppgavene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 1: Boksen {.check}

- [ ] `~` er målt fra spilleren. Står eleven et annet sted, havner huset et
  annet sted.

- [ ] Den hule boksen har både gulv og tak. Derfor starter den på `~-1`.

## Steg 4: Parametere {.check}

- [ ] Vinduet på `~7` står feil når huset er smalere. La elevene finne det og
  rette det med `bredde`.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause.
  Trykk `Tilbake til spillet`. `F3` + `P` slår av pause når vinduet mister
  fokus, og `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele
  verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Ingenting skjer: roboten må være innenfor 32 blokker. Skriv `/robot spawn`.

- Huset havner inni et annet hus: bygg et nytt sted, eller tøm med `fyll med
  luft`.


# Eksterne ressurser {.activity}

- [Veiledning for spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
