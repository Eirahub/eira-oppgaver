---
title: "Lærarrettleiing - Steinsti og trapp"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Elevane lærer å bruke ei lykkje (`gjenta`) til å få roboten til å byggje ei
trapp med ti trinn og ein firkanta sti av brustein. Dei gir roboten blokker,
vel blokk i inventaret og slår på funksjonen som legg ei blokk for kvart steg.
Til slutt ser dei trappa som JavaScript med ei `for`-lykkje.

## Oppgåva passar til: {.check}

__Fag__: Programmering, teknologi

__Tilrådde trinn__: 5. til 10. trinn

__Tema__: Blokkbasert programmering, lykkjer, Minecraft

__Nivå__: 1

__Tidsbruk__: Om lag ein time. Dobbeltime med utfordringane.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmar med bruk av
  variablar, vilkår og lykkjer

- [ ] __Matematikk, 6. trinn__: bruke variablar, lykkjer, vilkår og funksjonar
  i programmering til å utforske geometriske figurar og mønster

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

## Forslag til læringsmål {.challenge}

- [ ] Elevane kan forklare kva ei lykkje er, og når ho løner seg.

- [ ] Elevane kan flytte ei gruppe blokker inn i ei lykkje og endre talet på
  gjentakingar.

- [ ] Elevane kan bruke roboten til å byggje med blokker frå inventaret.

- [ ] Elevane kan sjå at ei `for`-lykkje i JavaScript gjer det same som
  `gjenta`.

## Forslag til vurderingskriterium {.challenge}

- [ ] Eleven oppnår middels måloppnåing ved å byggje trappa med ei lykkje.

- [ ] Eleven oppnår høg måloppnåing ved å byggje stien, forklare kvifor
  hjelpefunksjonen må slåast av til slutt, og løyse ei av utfordringane.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: Oppgåva Kom i gang.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition i
  `Skapande`. Sjå oppgåva Installere Halison Code.

- [ ] __Skapande__: Kommandoen `robot gi` verkar berre i `Skapande`. I
  `Overleving` må roboten få blokkene på ein annan måte.

- [ ] __Maskin__: Minecraft og nettlesaren opne samtidig. Roboten kan byggje
  mange blokker, så ei maskin som køyrer Minecraft greitt, er nok.


# Framgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv programmet sjølv. Køyr trappa og stien i ei flat verd med nok plass.

- [ ] Be elevane gå litt unna roboten og skrive `/robot spawn` før kvart nytt
  forsøk, så det ikkje blir trongt.

## Steg 1: Gi blokker {.check}

- [ ] Elevar gløymer å køyre `robot gi`. Høgreklikk på roboten for å sjå
  inventaret.

- [ ] Blokkene i oppgåva er eikeplankar og brustein. Andre blokker verkar òg,
  men sjekk kva namn blokka har i editoren.

## Steg 2 og 3: Trinn og lykkje {.check}

- [ ] La elevane først byggje eitt trinn for hand og telje blokkene, så ser dei
  kvifor lykkja løner seg.

- [ ] Elevar dreg berre éi av dei tre blokkene inn i lykkja. Då får dei ei
  uventa trapp. Køyr saman og sjå kva som skjer.

- [ ] Dersom roboten ikkje byggjer, sjekk at han har blokker i plassen han
  brukar.

## Steg 4: Sti {.check}

- [ ] Gå gjennom kva `plasser ved flytting` gjer, og kvifor han må slåast av
  til slutt. Gløymer eleven det, byggjer roboten vidare i neste program.

- [ ] Be elevane gjette kva stien blir før dei køyrer.

## Vanlege problem {.protip}

- Programma er borte: dei blir lagra i nettlesaren på maskina eleven brukte.
  Opne editoren i same nettlesar, eller hent inn `.mkcd`-fila eleven lagra
  med `Hent inn` på startsida. På maskiner som blir nullstilte, må elevane
  lagre prosjektet som fil før timen er slutt.

- Roboten står stille etter at eleven bytte vindauge: Minecraft er på pause.
  Trykk `Attende til spelet`. `F3` + `P` slår av pause når vindauget mistar
  fokus, og `/gamerule halisoncode:pause_on_lost_focus false` gjer det for
  heile verda.

- Chatkommandoen verkar ikkje: programmet må køyre og editoren stå open. Trykk
  `Kjør` i editoren før eleven byter til Minecraft.

- Roboten byggjer ingenting: tom plass i inventaret, eller `robot velg plass`
  manglar.

- Trappa går i feil retning: roboten startar der han ser. Spawn på nytt i rett
  retning.

- Roboten stoppar midt i: spelet er på pause. Lukk pausemenyen.

- Programmet køyrer for alltid: bruk stoppknappen eller `/robot stop`.


# Variasjonar {.activity}

- La elevane designe sin eigen bygning og skrive programmet på papir først.

- La elevane byte program og føreseie kva det byggjer.

- La elevane skrive programmet som JavaScript og endre talet i lykkja.


# Eksterne ressursar {.activity}

- [Halison Code på GitHub](https://github.com/halisonworks/mod-halisoncode):
  kode og utgivingar.

- [Rettleiing for
  spelarar](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  robotkommandoane.
