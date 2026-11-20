---
title: Lærerveiledning - Tom mod
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene går gjennom den minste moden som virker: `fabric.mod.json` og klassen
`RubinMod`, som skriver en melding i loggen. De lærer hva mod-id og entrypoint
er, og hvor de finner loggen. Til slutt lager de en feil med vilje og leser
feilmeldingen.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, Minecraft, oppsett av prosjekt

__Tidsbruk__: Skoletime, pluss installasjonen hvis den ikke er gjort

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva `fabric.mod.json` gjør, og hva en mod-id er.

- [ ] Elevene kan forklare hvordan Fabric finner og starter klassen `RubinMod`.

- [ ] Elevene kan starte spillet fra IntelliJ og finne en melding i loggen.

- [ ] Elevene kan lese en feilmelding og finne ut hva den handler om.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre oppgaven.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare med egne ord hvordan
  `fabric.mod.json`, `ModInitializer` og `onInitialize()` henger sammen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Kurset Java, og installasjonen er gjort.

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development, og JDK 25.


# Fasit {.activity}

`steg/01_tom_mod` i løsningsrepoet. <!-- LENKE: løsningsrepo -->


# Vanlige problemer {.activity}

## Sjekkliste {.check}

- [ ] __Finner ikke meldingen__: Loggen er lang. Søk med `Ctrl + F` i vinduet
  **Run**, eller åpne `latest.log` i mappa `logs` der spillet kjører.

- [ ] __Har brukt malgeneratoren__: Malen har flere filer og andre klassenavn.
  Det gjør ikke noe, men klassen og pakken må stemme med `"main"` i
  `fabric.mod.json`.

- [ ] __Endringen vises ikke__: Spillet må startes på nytt etter endringer i
  Java-kode.

## Tips {.protip}

La elevene lese feilmeldingen i steg 5 høyt for hverandre. De fleste
feilmeldinger i kurset ser slik ut, og det lønner seg å bli vant til dem tidlig.
