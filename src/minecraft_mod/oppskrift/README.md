---
title: Lærerveiledning - Oppskrift
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager en oppskrift i en JSON-fil: ni jord på arbeidsbenken gir en
diamant. De skriver ingen Java. Poenget er at mye av Minecraft er data, ikke
kode, og at en mod kan legge ved egne datafiler. De lærer om `data`-mappa,
navnerom og id-er (`minecraft:dirt`), og `crafting_shaped` mot
`crafting_shapeless`.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Datafiler (JSON), Minecraft, id-er og navnerom

__Nivå__: 3

__Tidsbruk__: Kort, omtrent en halv time. En skoletime med utfordringene.

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 1__: gjøre rede for og vurdere hvordan ulike typer
  informasjon kan representeres digitalt og struktureres ved hjelp av ulike
  datalagringsmetoder

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare at Minecraft bruker datafiler i tillegg til kode.

- [ ] Elevene kan skrive en oppskrift i JSON og forklare `type`, `pattern`,
  `key` og `result`.

- [ ] Elevene kan forklare hva et navnerom og en id er (`navnerom:navn`).

- [ ] Elevene kan finne feil i en JSON-fil.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få oppskriften til å virke i
  spillet.

- [ ] Eleven oppnår høy måloppnåelse ved å lage en
  `crafting_shapeless`-oppskrift uten hjelp, og forklare hva som er forskjellen
  på de to typene.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgaven Tom mod. Prosjektet fra den oppgaven brukes
  videre.

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development og JDK 25. Kurset
  bruker Fabric og Minecraft 26.3. Første `runClient` laster ned mye, så
  gjør den på forhånd.

- [ ] __Maskin__: Windows, macOS eller Linux, minst 8 GB minne, som i
  kursoversikten. Spillet startes fra IntelliJ og krever ingen
  Minecraft-konto.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Sjekk at alle elevene har et fungerende prosjekt fra Tom mod, og at
  `runClient` starter.

## Steg 1: Mappene {.check}

- [ ] Mappa heter `recipe`, i entall. Mange veiledninger på nettet bruker
  `recipes`, og da skjer ingenting. Spillet sier ikke fra.

- [ ] Hjelp elevene med å lage mappene `data/rubinmod/recipe` under
  `src/main/resources`.

## Steg 2: Skriv oppskriften {.check}

- [ ] JSON er strengt: komma mellom elementer, ikke etter det siste, og
  anførselstegn rundt tekst. IntelliJ markerer feil med rød strek.

- [ ] Be elevene lese fila linje for linje og si hva hver linje gjør.

- [ ] Elever skriver `minecraft:dirt`, men med feil stavemåte. Id-er skrives med
  små bokstaver, og `F3 + H` viser id-en i spillet.

## Steg 3: Prøv {.check}

- [ ] Får ikke eleven diamant, se etter en feilmelding med `diamant_fra_jord` i
  loggen. Start spillet på nytt etter å ha endret fila, eller se hva
  oppgaven sier om det.

- [ ] Oppskriften vises i oppskriftsboka bare når den er funnet. Eleven kan
  likevel legge ingrediensene i rutenettet.

## Vanlige problemer {.protip}

- Feil mappenavn: `recipes` i stedet for `recipe`.

- Komma for mye eller for lite i JSON.

- Filen ligger i `src/main/java` i stedet for `src/main/resources`.

- Filen heter ikke `.json`, for eksempel `diamant_fra_jord.json.txt`.


# Variasjoner {.activity}

- La elevene lage en oppskrift som gir noe rart, og la klassekameratene gjette
  mønsteret.

- Forklar forskjellen på `crafting_shaped` og `crafting_shapeless`, og la
  elevene lage begge.

- Be sterke elever finne en vanilla-oppskrift i Minecraft sin egen jar-fil og
  sammenligne.


# Fasit {.activity}

`steg/02_oppskrift` i løsningsrepoet. <!-- LENKE: løsningsrepo -->


# Eksterne ressurser {.activity}

- [Fabric](https://fabricmc.net/): dokumentasjon for Fabric.
