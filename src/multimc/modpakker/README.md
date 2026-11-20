---
title: Lærerveiledning - Modpakker
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene eksporterer en instans som zip-fil for MultiMC og som Modrinth-modpakke
(`.mrpack`), og importerer pakkene i nye instanser. Poenget er at alle i klubben
får samme testoppsett uten å bygge det for hånd.

## Oppgaven passer til: {.check}

__Fag__: Teknologi, informasjonsteknologi, valgfag programmering

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Minecraft, modpakker, deling av oppsett

__Nivå__: 2

__Tidsbruk__: Omtrent en time.

## Kompetansemål {.challenge}

Kompetansemål er ikke knyttet til oppgaven ennå. Hent eventuelle mål fra
[læreplanen i informasjonsteknologi på
udir.no](https://www.udir.no/lk20/inf01-02) som passer for gruppa.

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva en modpakke er, og hvorfor man bruker den.

- [ ] Elevene kan eksportere en instans som zip og som `.mrpack`.

- [ ] Elevene kan importere en modpakke og kontrollere at moddene kom med.

- [ ] Elevene kan forklare hvorfor man bare skal importere pakker fra kilder man
  stoler på.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å eksportere og importere en pakke
  og få instansen til å starte.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare forskjellen på de to
  formatene, og se på innholdet i en `.mrpack`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Instanser og Mod-loadere. Test moden er en
  fordel, siden den gir noe å pakke.

- [ ] __Utstyr__: MultiMC med minst én instans med mod og loader. Sted der
  elevene kan dele filer, for eksempel en delt mappe eller minnepinne.

- [ ] __Konto__: Pakken tar ikke med Microsoft-kontoen, men sjekk at eleven ikke
  legger passord eller private filer i pakken.

- [ ] __Mac og Windows__: Fildialogene ser ulike ut. Se selv etter navnene i din
  utgave av MultiMC.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Sjekk at Export Instance har valgene MultiMC og Modrinth i din versjon av
  MultiMC. Oppgaven sier at Modrinth-eksporten er merket WIP, så den kan oppføre
  seg annerledes.

## Steg 1 og 2: Rydd og eksporter {.check}

- [ ] Gå gjennom hva som blir med. Verdener (`saves`), skjermdumper og
  serverlister bør normalt tas bort.

- [ ] Elever glemmer å fjerne Java-valget i innstillingene. Da peker pakken på
  en Java som ikke finnes hos mottakeren.

## Steg 3: Modrinth-pakke {.check}

- [ ] Modder som ikke finnes på Modrinth, legges med som filer. Det er verdt å
  vise med den egne moden.

- [ ] Hvis eksporten klager, les meldingen. Den kan fortelle at noe mangler.

## Steg 4 og 5: Importer og del {.check}

- [ ] Be elevene importere i en ny instans, ikke over en eksisterende.

- [ ] Be dem sjekke Loader mods for å se at alt kom med.

- [ ] Bruk et fast filnavnmønster med loader, versjon og dato.

## Vanlige problemer {.protip}

- Importen feiler: filen er ikke en pakke MultiMC kjenner igjen, eller den er
  skadet under nedlasting.

- Pakken ble for stor: verdener og skjermdumper ble med.

- Moder mangler etter import av `.mrpack`: modden finnes ikke på Modrinth, eller
  lenken er utdatert. Sjekk loggen.


# Variasjoner {.activity}

- La en elev lage pakken og de andre teste den, og rapportere tilbake hva som
  ikke virket.

- La elevene åpne `.mrpack` som zip og se på `modrinth.index.json`.

- Lag en klubbpakke med de fire testinstansene fra Mod-loadere.


# Eksterne ressurser {.activity}

- [Modrinth](https://modrinth.com): modder og modpakker.

- [MultiMC-wikien](https://github.com/MultiMC/Launcher/wiki): hjelp for
  eksport og import.
