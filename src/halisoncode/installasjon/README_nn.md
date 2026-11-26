---
title: "Lærarrettleiing - Installere Halison Code"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Dette er ei rettleiing for den vaksne som gjer maskinene klare. Elevane treng
ikkje installere sjølve. Halison Code er ein mod til Minecraft Java Edition som
gir elevane ein robot dei programmerer i nettlesaren. Rettleiinga går gjennom
nedlasting av Halison Code-fila, installasjon av ein modlastar (Fabric eller
NeoForge), og ein test i ei ny verd.

## Oppgåva passar til: {.check}

__Fag__: Programmering, teknologi (for den som førebur undervisninga)

__Tilrådde trinn__: Blir gjort av lærar eller annan vaksen. Kurset elles passar
for 5. til 10. trinn.

__Tema__: Installasjon, modlastar, Minecraft

__Nivå__: 1

__Tidsbruk__: Om lag ti minutt per maskin. Rekn med meir første gongen, og når
mange maskiner lastar ned samtidig.

## Kompetansemål {.challenge}

Kompetansemål er ikkje knytte til denne oppgåva. Ho er ei praktisk førebuing
til kurset. Hent eventuelle mål frå [læreplanverket på
udir.no](https://www.udir.no/laring-og-trivsel/lareplanverket/) for oppgåvene
som følgjer.

## Forslag til læringsmål {.challenge}

Oppgåva er for den vaksne, så ho har ikkje eigne læringsmål for elevane. Er
dette ein del av ei undervisning for eldre elevar, kan dei ha desse måla:

- [ ] Eleven kan forklare kva ein modlastar er.

- [ ] Eleven kan finne mappa `mods` og leggje ein mod i ho.

## Forslag til vurderingskriterium {.challenge}

Ikkje aktuelt for elevane. For den vaksne: alle maskinene startar Minecraft med
modlastaren, og `/robot spawn` og `/halisoncode` verkar.

## Føresetnader og utstyr {.challenge}

- [ ] __Spel__: Minecraft Java Edition. Halison Code verkar ikkje i Bedrock,
  Education Edition, på mobil, nettbrett eller konsoll. Eleven treng ein konto
  som eig spelet, eller du kan bruke éin felles konto etter lokale reglar.

- [ ] __Versjonar__: Spelarrettleiinga til Halison Code nemner Minecraft 26.3
  og 1.21.1. Sjekk rettleiinga for gjeldande versjonar før du lastar ned.

- [ ] __Modlastar__: Fabric Loader (med Fabric API) eller NeoForge.
  Rettleiinga seier at Fabric Loader må vere 0.20.1 eller nyare, og oppgir
  minste NeoForge-versjon for kvar Minecraft-versjon. Sjekk den noverande
  teksten.

- [ ] __Java__: Den vanlege Minecraft Launcher kjem med rett Java. Blir ein
  annan launcher som MultiMC brukt, må du velje Java sjølv, sjå kurset Test
  moden med MultiMC.

- [ ] __Maskin__: Windows, macOS eller Linux. Oppgåva oppgir ikkje krav til
  minne. Minecraft er avhengig av eit par GB ledig minne, så test på ei
  representativ maskin.

- [ ] __Nettlesar__: Chrome, Edge eller Firefox. Editoren blir opna i
  nettlesaren, og lenkja verkar berre på maskina der Minecraft køyrer.

- [ ] __Tilgang__: Rettar til å installere program og skrive i `.minecraft`.
  IT-avdelinga på skulen må ofte hjelpe til.


# Framgangsmåte {.activity}

## Før timen {.check}

- [ ] Installer alle maskinene på førehand, og prøv `/robot spawn` og
  `/halisoncode` på kvar av dei.

- [ ] Bruk same Minecraft-versjon og same Halison Code-fil overalt. Ulike
  versjonar kan ikkje spele saman.

- [ ] Dersom de har eit nettverk som blokkerer nettsider, sjekk at nettlesaren
  på maskina kan opne editoren når `/halisoncode` er skrive.

## Steg 1: Filene {.check}

- [ ] Halison Code-fila heiter
  `halisoncode-<modlaster>-<minecraftversjon>-...jar`. Vel fila som passar til
  både modlastar og versjon.

- [ ] Last ned frå utgivingssida til Halison Code på GitHub, under Assets.

## Steg 2: Modlastar {.check}

- [ ] Følg installasjonsprogrammet for modlastaren. Stega står i
  spelarrettleiinga til Halison Code.

- [ ] Start profilen modlastaren lagar i Minecraft Launcher éin gong, så mappa
  `mods` blir laga.

## Steg 3: Mappa mods {.check}

- [ ] Windows: `%appdata%\.minecraft\mods`. macOS og Linux har eigne stiar, som
  står i oppgåva.

- [ ] Fabric treng Fabric API i tillegg, i same mappa. NeoForge treng det
  ikkje.

## Steg 4: Test {.check}

- [ ] Lag ei ny verd i `Skapande`, helst `Vassrett`. Då ser eleven roboten
  tydeleg, og han får blokker gratis.

- [ ] Skriv `/robot spawn` og `/halisoncode`. Sjå at roboten kjem, og at
  editoren blir opna.

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

- `/halisoncode` finst ikkje: Halison Code er ikkje lasta. Sjekk at fila ligg
  i `mods`, og at rett profil er starta.

- "Editor link expired": Minecraft er starta på nytt. Skriv `/halisoncode` på
  nytt.

- "Not in a world": opne ei verd først.

- "Robot is not loaded": skriv `/robot spawn`, eller gå nærare roboten.

- Roboten ventar og loggen seier at Minecraft er pausa: lukk pausemenyen.

- Feil filversjon: filnamnet må passe til både modlastar og Minecraft-versjon.


# Variasjonar {.activity}

- La ein eldre elev eller ein vaksen i klubben installere sjølv som ein
  introduksjon til moddar og modlastarar.

- La ein elev lage ei eiga sjekkliste for installasjonen og teste ho på ei
  anna maskin.

- Sjå kurset Test moden med MultiMC dersom de vil ha fleire instansar på same
  maskina.


# Eksterne ressursar {.activity}

- [Halison Code på GitHub](https://github.com/halisonworks/mod-halisoncode):
  kode og utgivingar.

- [Rettleiing for
  spelarar](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  installasjon og alle robotkommandoane.

- [Fabric](https://fabricmc.net/use/installer/): installasjonsprogram.

- [NeoForged](https://neoforged.net/): installasjonsprogram.
