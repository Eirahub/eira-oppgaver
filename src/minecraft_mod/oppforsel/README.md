---
title: Lærerveiledning - Oppførsel
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene skriver egen oppførsel på tre måter: en rubinstav som overstyrer
`use()` og sender lyn, en kommando `/rubinregn` med Brigadier, og en hendelse
med `PlayerBlockBreakEvents` som av og til gir en rubin. De møter forskjellen på
klient og server (`ServerLevel`), cooldown, tick, Fabric-hendelser og
lambdaer.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 9. trinn til VG3

__Tema__: Tekstbasert programmering, objektorientert programmering, hendelser

__Nivå__: 4

__Tidsbruk__: To dobbeltimer. Oppgaven har tre deler som hver kan stå alene.

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2__: utvikle objektorienterte programmer med
  klasser, objekter, metoder og arv

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan lage en klasse som arver fra `Item` og overstyrer `use()`.

- [ ] Elevene kan forklare at `use()` kalles på både klient og server, og
  hvorfor lynet bare lages på serveren.

- [ ] Elevene kan lage en kommando med argument og tilgangskontroll.

- [ ] Elevene kan registrere en lambda som lytter på en Fabric-hendelse.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få staven, kommandoen og
  hendelsen til å virke.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare `level instanceof
  ServerLevel`, og ved å løse en av utfordringene.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Tom mod til Vesen. Staven bruker
  `RUBINKLOSS` i oppskriften, og fanen skal ha spawn-egget fra Vesen.

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development og JDK 25. Minecraft
  26.3 med Fabric.

- [ ] __Kommandoer__: Kommandoen krever at spilleren er operatør, eller at
  juksing er slått på i verdenen (Allow Cheats). Oppgaven sier dette, men
  hjelp elevene med å lage verdenen riktig.

- [ ] __Maskin__: Minst 8 GB minne.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Be elevene ha en ren versjon fra forrige oppgave. Mange nye klasser og
  imports kan blande seg med gammel kode.

- [ ] Del oppgaven i tre blokker og sett av tid til hver.

## Steg 1: Staven {.check}

- [ ] `use()` kjøres på klient og server. Be elevene forklare i egne ord
  hvorfor lynet bare lages på serveren.

- [ ] Vesentypene ligger i `EntityTypes`, ikke `EntityType`. Eldre veiledninger
  bruker det siste.

- [ ] Registreringen skal ligge under spawn-egget i `ModItems`. Elever som har
  hoppet over Vesen, mangler noe.

## Steg 2: Filer {.check}

- [ ] Staven bruker `handheld`. Alle filene skal ha riktig navn, ellers blir
  staven svart og lilla.

- [ ] Komma i språkfilene: legg til komma på forrige linje, ikke etter siste.

- [ ] Be elevene teste cooldown ved å klikke fort.

## Steg 3: Kommando {.check}

- [ ] Kommandotreet kan virke abstrakt. Tegn det på tavla: `rubinregn`, deretter
  `antall`, deretter `executes`.

- [ ] Elever får ikke lov til å bruke kommandoen. Sjekk at de er operatør eller
  har Allow Cheats.

- [ ] `/rubinregn 100` skal gi en feilmelding. Bruk den til å vise
  `integer(1, 64)`.

## Steg 4: Hendelse {.check}

- [ ] `Block` og `Blocks` må komme fra `net.minecraft.world.level.block`.
  IntelliJ foreslår noen ganger feil pakke.

- [ ] Elever tester i kreativ og ser ingen rubiner. Be dem bruke overlevelse.

- [ ] 5 prosent er lite. Be dem teste ved å øke tallet midlertidig.

## Vanlige problemer {.protip}

- Lynet dukker opp bare for spilleren: koden kjøres også på klienten. Sjekk
  `instanceof ServerLevel`.

- Kommandoen finnes ikke: `ModCommands.init()` kalles ikke fra `onInitialize()`.

- Spillet krasjer ved oppstart: `setId` mangler eller en klasse er importert
  fra feil pakke.

- `use()` skriver ingenting: metoden har feil signatur, og `@Override` varsler
  om det.


# Variasjoner {.activity}

- La elevene lage en stav med en annen effekt, for eksempel å sende en
  eksplosjon.

- La elevene legge til flere kommandoer.

- La elevene lytte på en annen hendelse, som at en spiller logger inn.


# Fasit {.activity}

`steg/08_oppforsel` i løsningsrepoet. <!-- LENKE: løsningsrepo -->


# Eksterne ressurser {.activity}

- [Fabric](https://fabricmc.net/): dokumentasjon for Fabric og hendelser.

- [Brigadier på GitHub](https://github.com/Mojang/brigadier): biblioteket
  som lager kommandoer.
