---
title: Lærerveiledning - Bro over dalen
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lar roboten måle hvor bred en dal er med `robot mål fritt`, lagrer
tallet i en variabel og legger en bro med `robot hjelp plasser ved flytting`.
Til slutt lager de funksjonen `byggBro` med lengden som parameter, og en
chatkommando `bro` som sjekker om dalen er for bred.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 6. til 10. trinn

__Tema__: Måling, variabler, vilkår, funksjoner med parametere

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

- [ ] Elevene kan lagre en måling i en variabel og bruke den senere.

- [ ] Elevene kan forklare hvorfor broen trenger ett steg ekstra til slutt.

- [ ] Elevene kan lage en funksjon med en parameter.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å måle dalen og bygge en bro i
  riktig lengde.

- [ ] Eleven oppnår høy måloppnåelse ved å lage `bro` med sjekk for for bred
  dal, og gi broen rekkverk.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: De tidligere oppgavene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 1: Målingen {.check}

- [ ] `robot mål fritt` teller de tomme blokkene foran roboten, ikke den den
  står i. Derfor sier roboten én mindre enn hele bredden, og broen trenger
  `robot flytt opp med 1` til slutt for den siste planken.

- [ ] Er den andre siden lavere enn kanten eleven står på, finner ikke roboten
  noe og svarer 32. Velg en dal med like høye sider, eller lag en med `/fill`
  som i tipset.

## Utfordringen med `robot mål åpning` {.check}

- [ ] Den teller begge veier langs en akse, pluss blokken roboten står i. Langs
  broen gir den derfor ett mer enn `robot mål fritt`. Eleven må velge `x` eller
  `z` etter hvilken vei hen ser.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Fortsett spill`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Broen havner ett hakk for høyt: eleven har glemt `robot flytt ned med 1` før
  målingen.

- Roboten bygger ingenting: sjekk `robot velg plass 1`, og at `robot hjelp
  plasser ved flytting` står til `sant`.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
