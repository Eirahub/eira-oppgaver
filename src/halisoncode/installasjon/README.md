---
title: Lærerveiledning - Installere Halison Code
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Dette er en veiledning for den voksne som gjør maskinene klare. Elevene trenger
ikke installere selv. Halison Code er en mod til Minecraft Java Edition som gir
elevene en robot de programmerer i nettleseren. Veiledningen går gjennom
nedlasting av Halison Code-filen, installasjon av en modlaster (Fabric eller
NeoForge), og en test i en ny verden.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi (for den som forbereder undervisningen)

__Anbefalte trinn__: Gjøres av lærer eller annen voksen. Kurset ellers passer
for 5. til 10. trinn.

__Tema__: Installasjon, modlaster, Minecraft

__Nivå__: 1

__Tidsbruk__: Omtrent ti minutter per maskin. Regn med mer første gang, og når
mange maskiner laster ned samtidig.

## Kompetansemål {.challenge}

Kompetansemål er ikke knyttet til denne oppgaven. Den er en praktisk
forberedelse til kurset. Hent eventuelle mål fra
[læreplanverket på udir.no](https://www.udir.no/laring-og-trivsel/lareplanverket/) for oppgavene som følger.

## Forslag til læringsmål {.challenge}

Oppgaven er for den voksne, så den har ikke egne læringsmål for elevene. Er
dette en del av en undervisning for eldre elever, kan de ha disse målene:

- [ ] Eleven kan forklare hva en modlaster er.

- [ ] Eleven kan finne mappa `mods` og legge en mod i den.

## Forslag til vurderingskriterier {.challenge}

Ikke aktuelt for elevene. For den voksne: alle maskiner starter Minecraft med
modlasteren, og `/robot spawn` og `/halisoncode` virker.

## Forutsetninger og utstyr {.challenge}

- [ ] __Spill__: Minecraft Java Edition. Halison Code virker ikke i Bedrock,
  Education Edition, på mobil, nettbrett eller konsoll. Eleven trenger en konto
  som eier spillet, eller du kan bruke én felles konto etter lokale regler.

- [ ] __Versjoner__: Spillerveiledningen til Halison Code nevner Minecraft 26.3
  og 1.21.1. Sjekk veiledningen for gjeldende versjoner før du laster ned.

- [ ] __Modlaster__: Fabric Loader (med Fabric API) eller NeoForge. Veiledningen
  sier at Fabric Loader må være 0.20.1 eller nyere, og angir
  minste NeoForge-versjon for hver Minecraft-versjon. Sjekk den nåværende
  teksten.

- [ ] __Java__: Den vanlige Minecraft Launcher følger med riktig Java. Brukes
  en annen launcher som MultiMC, må du velge Java selv, se kurset Test moden
  med MultiMC.

- [ ] __Maskin__: Windows, macOS eller Linux. Oppgaven oppgir ikke krav til
  minne. Minecraft er avhengig av et par GB ledig minne, så test på en
  representativ maskin.

- [ ] __Nettleser__: Chrome, Edge eller Firefox. Editoren åpnes i nettleseren
  og lenken virker bare på maskinen der Minecraft kjører.

- [ ] __Tilgang__: Rettigheter til å installere programmer og skrive i
  `.minecraft`. Skolens IT må ofte hjelpe til.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Installer alle maskiner på forhånd, og prøv `/robot spawn` og
  `/halisoncode` på hver av dem.

- [ ] Bruk samme Minecraft-versjon og samme Halison Code-fil overalt. Ulike
  versjoner kan ikke spille sammen.

- [ ] Hvis du har et nettverk som blokkerer nettsider, sjekk at nettleseren på
  maskinen kan åpne editoren når `/halisoncode` er skrevet.

## Steg 1: Filene {.check}

- [ ] Halison Code-filen heter
  `halisoncode-<modlaster>-<minecraftversjon>-...jar`. Velg filen som matcher
  både modlaster og versjon.

- [ ] Last ned fra utgivelsessida til Halison Code på GitHub, under Assets.

## Steg 2: Modlaster {.check}

- [ ] Følg installasjonsprogrammet for modlasteren. Trinnene står i
  spillerveiledningen til Halison Code.

- [ ] Start profilen modlasteren lager i Minecraft Launcher én gang, så
  mappa `mods` blir laget.

## Steg 3: Mappa mods {.check}

- [ ] Windows: `%appdata%\.minecraft\mods`. macOS og Linux har egne stier, som
  står i oppgaven.

- [ ] Fabric trenger Fabric API i tillegg, i samme mappe. NeoForge trenger det
  ikke.

## Steg 4: Test {.check}

- [ ] Lag en ny verden i Kreativ, helst Flat. Da ser eleven roboten tydelig, og
  den får blokker gratis.

- [ ] Skriv `/robot spawn` og `/halisoncode`. Se at roboten kommer og at
  editoren åpnes.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause.
  Trykk `Tilbake til spillet`. `F3` + `P` slår av pause når vinduet mister
  fokus, og `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele
  verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- `/halisoncode` finnes ikke: Halison Code er ikke lastet. Sjekk at filen ligger
  i `mods` og at riktig profil er startet.

- "Editor link expired": Minecraft er startet på nytt. Skriv `/halisoncode` på
  nytt.

- "Not in a world": åpne en verden først.

- "Robot is not loaded": skriv `/robot spawn`, eller gå nærmere roboten.

- Roboten venter og loggen sier at Minecraft er pauset: lukk pausemenyen.

- Feil filversjon: filnavnet må matche både modlaster og Minecraft-versjon.


# Variasjoner {.activity}

- La en eldre elev eller en voksen i klubben installere selv som en
  introduksjon til modder og modlastere.

- La en elev lage en egen sjekkliste for installasjonen og teste den på en
  annen maskin.

- Se kurset Test moden med MultiMC hvis dere vil ha flere instanser på samme
  maskin.


# Eksterne ressurser {.activity}

- [Halison Code på GitHub](https://github.com/halisonworks/mod-halisoncode):
  kode og utgivelser.

- [Veiledning for spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  installasjon og alle robotkommandoer.

- [Fabric](https://fabricmc.net/use/installer/): installasjonsprogram.

- [NeoForged](https://neoforged.net/): installasjonsprogram.
