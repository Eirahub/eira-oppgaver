---
title: Lærarrettleiing - Overlev første natta 1: Hogg tre
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Første oppgåva i serien Overlev første natta. Regelen er at eleven ikkje sjølv
får hogge, grave eller byggje: alt blir gjort av roboten med kode. Roboten
finn næraste eiketre med `agent.findNearest`, går dit og hogg stammen med ei
`while`-løkke. Så blir koden ein funksjon som svarar sann eller usann, og ei
løkke hogg tre til roboten har 24 stammar.

## Oppgåva passar til: {.check}

__Fag__: Programmering, teknologi, matematikk

__Tilrådde trinn__: 7. til 10. trinn

__Tema__: Søk, funksjonar med returverdi, while-løkker, delproblem

__Nivå__: 3

__Tidsbruk__: 60 minutt

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

- [ ] __Matematikk, 8. trinn__: utforske korleis algoritmar kan skapast, testast
  og forbetrast ved hjelp av programmering

## Forslag til vurderingskriterium {.challenge}

- [ ] Eleven når middels måloppnåing ved å få programmet til å verke og
  forklare kva kvar del gjer.

- [ ] Eleven når høg måloppnåing ved å forklare kvifor vilkåra i løkkene er
  der, og løyse ei av utfordringane.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: [Steinsti og trapp](../steinsti_og_trapp/README) og
  førre oppgåve i serien. Det hjelper å ha sett JavaScript før.

- [ ] __Utstyr__: Codeling installert, Minecraft Java Edition i
  `Overlevelse`. Sjå oppgåva Installere Codeling.

- [ ] __Verd__: Ei ny verd med eiketre i nærleiken, gjerne på vanskegrad
  `Lett` eller `Fredelig` medan elevane testar. Roboten skal ha tomt inventar
  når serien startar.


# Framgangsmåte {.activity}

[Klikk her for å sjå oppgåveteksten.](hogg_tre_nn.html)

## Tips til rettleiarar {.check}

- [ ] Snakk om heile planen først: kva treng vi for å overleve natta, og i
  kva rekkjefølgje må roboten gjere det? Det er å dele eit problem i
  delproblem.

- [ ] Plass 1 må vere tom, og det første roboten hogg, må vere eik. Då ligg
  alle stammane i plass 1, og `agent.getItemCount(1)` tel dei. Bjørk eller
  gran i nærleiken gir stammar i andre plassar.

- [ ] Roboten har tyngdekraft av frå start og svevar. Det er difor han kan fly
  oppover stammen.

- [ ] Sjekkane for `null` og `moveTo` hindrar at roboten hogg det som
  tilfeldigvis står framfor han. Det er eit godt døme på kvifor vi sjekkar
  svar.

- [ ] 24 stammar tek fleire minutt. Medan dei testar, kan elevane setje
  grensa lågare.

### Kva er testa

Ikkje testa i spelet enno. Kommandoane er sjekka mot dokumentasjonen og
koden til Codeling (versjonen på `develop` 24.11.2026), men programma er
ikkje køyrde i ei verd.
