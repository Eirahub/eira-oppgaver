---
title: Lærerveiledning - Terrengplanereren
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager en robot som måler bakken med `agent.heightProfile` og
`agent.groundHeight`, legger høydene i en liste, finner største og minste verdi
med en løkke og regner ut gjennomsnittet. Så fyller programmet alt over snittet
med luft og alt under med jord, så tomta blir flat. Til slutt blir det en
funksjon `planer(bredde, lengde)` som kjøres fra chatten. Oppgaven er i
JavaScript.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, matematikk

__Anbefalte trinn__: 8. til 10. trinn

__Tema__: Lister, største og minste verdi, gjennomsnitt, koordinater, funksjoner
med parametere

__Nivå__: 3

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Programmering, 8.-10. trinn__: bruke flere programmeringsspråk,
  deriblant minst ett som er tekstbasert

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan finne største og minste verdi i en liste med en løkke.

- [ ] Elevene kan regne ut gjennomsnittet av en liste og runde det av.

- [ ] Elevene kan lage en liste med to løkker inni hverandre.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å måle en tomt og gjøre den flat.

- [ ] Eleven oppnår høy måloppnåelse ved å lage `planer` med valgfri størrelse
  og forklare hvorfor programmet sjekker `størst > snitt` før det fyller med
  luft.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Bygg et hus og Lageret.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. En vanlig verden med bakker, gjerne i Kreativ.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 1 til 3: Lister {.check}

- [ ] `agent.heightProfile` gir høydene langs en linje, den første én blokk
  foran roboten. Høyden er y til den øverste faste blokken, så den er én lavere
  enn føttene til en som står på bakken.

- [ ] Største og minste verdi starter på `høyder[0]`, ikke på 0. Spør elevene
  hva som skjer om `minst` starter på 0.

## Steg 4 og 5: Tomta {.check}

- [ ] `agent.groundHeight` bruker bare x og z i posisjonen. Svaret er høyden i
  verden, derfor bruker `blocks.fill` `world(...)` med `player.position()`.

- [ ] Uten `if (størst > snitt)` blir fyllingen fra `snitt + 1` til `snitt`, og
  da tar den også det øverste laget av bakken. Hjørnene kan stå i hvilken som
  helst rekkefølge.

- [ ] Vann teller som bakke, og løv teller ikke.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Fortsett spill`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Programmet stopper med en feil om at noe er for langt unna: roboten må være
  innenfor 32 blokker fra tomta. Skriv `/robot spawn` der eleven står.

- Tomta havner et annet sted enn ventet: `pos` er målt fra føttene til eleven.
  Tomta ligger mot øst og sør.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
