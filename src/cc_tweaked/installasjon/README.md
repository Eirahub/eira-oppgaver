---
title: "Lærerveiledning - Installere CC: Tweaked"
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Veiledningen gjør datamaskinene klare for kurset. Den er skrevet for en voksen.
Her står hvorfor vi valgte denne måten å installere på, og hva som har endret
seg fra det gamle kurset om ComputerCraft. Opplysningene ble sjekket i november
2026.

## Oppgaven passer til: {.check}

__Fag__: Programmering

__Anbefalte trinn__: Voksne som gjør klar utstyret

__Tema__: Minecraft, installasjon

__Tidsbruk__: Et kvarter per maskin


# Versjoner {.activity}

- CC: Tweaked 1.122.0 kom ut 19.11.2026. Den finnes for Minecraft 26.3 og 1.21.1
  (Fabric og NeoForge) og 1.20.1 (Fabric og Forge). Kilder:
  [GitHub-utgivelser](https://github.com/cc-tweaked/CC-Tweaked/releases),
  [Modrinth](https://modrinth.com/mod/cc-tweaked).

- Filene for 26.3 og 1.21.1 er merket *beta* på Modrinth. Bare 1.20.1 er merket
  *Latest* på GitHub.

- På Fabric krever CC: Tweaked modden Fabric API. På NeoForge og Forge trengs
  ingen andre modder. Kilde: avhengighetene på
  [Modrinth](https://modrinth.com/mod/cc-tweaked/versions).

Vi valgte **Minecraft 1.21.1 med NeoForge**. Den har vært ute lengst av
versjonene med både Fabric og NeoForge, og NeoForge gir én mod uten
avhengigheter. Vil dere ha nyeste Minecraft, virker 26.3 med NeoForge på samme
måte.


# Hvorfor Modrinth App {.activity}

- Modrinth App finnes for Windows og macOS (merket beta) og Linux. Den lager en
  egen profil med modlaster og modder, og henter riktig fil for profilen. Kilde:
  [modrinth.com/app](https://modrinth.com/app).

- Innlogging krever en Microsoft-konto som eier Minecraft, eller PC Game Pass.
  Kilde: [Modrinth
  support](https://support.modrinth.com/en/articles/9038231-minecraft-sign-in-issues).

- Modlaster og versjon kan endres senere under innstillingene til profilen,
  fanen *Installation*. Kilde: [Modrinth
  support](https://support.modrinth.com/en/articles/8827653-installing-updating-mod-loaders-and-game-versions).

- Den vanlige Minecraft-installasjonen blir ikke endret, og ingen filer må
  flyttes for hånd. Det gjør dette enklere enn å installere NeoForge og legge
  filen i `mods` selv.

- [Prism Launcher](https://prismlauncher.org/) er et godt alternativ for den som
  kjenner det fra før. Den henter også modder fra Modrinth.

Knappenavnene i Modrinth App (**Create instance**, **Name**, **Loader**, **Game
version**, **Browse content**, **Install**) er hentet fra teksten i kildekoden
til appen. De er ikke sjekket mot skjermbilder. Sjekk dem gjerne før kurset, og
ta skjermbilder til plassene som er merket i oppgaven.


# CraftOS-PC {.activity}

- CraftOS-PC 2.8.3 (august 2024) bygger på en eldre CC: Tweaked (1.112.0). Den
  finnes for Windows, macOS, Linux og Android, og som nettversjon. Kilde:
  [craftos-pc.cc](https://www.craftos-pc.cc/) og
  [installasjonsveiledningen](https://www.craftos-pc.cc/docs/installation).

- Den har ikke roboter. Skjermer, modemer og diskettstasjoner legges til med
  `attach`. Kilde: [periphemu](https://www.craftos-pc.cc/docs/periphemu).

- Filene ligger i `%appdata%\CraftOS-PC` (Windows) og `~/Library/Application
  Support/CraftOS-PC` (macOS). Kilde:
  [saves](https://www.craftos-pc.cc/docs/saves).


# Endringer fra ComputerCraft {.activity}

Dette er endringene som påvirket oppgavene:

- `edit navn` lager filen `navn.lua`, og skallet kjører `navn.lua` når du
  skriver `navn`. Oppgavene bruker derfor `.lua` når filer flyttes og kopieres,
  for eksempel `startup.lua`. Kilde: `edit.lua` og `shell.lua` i
  [kildekoden](https://github.com/cc-tweaked/CC-Tweaked) og
  [tweaked.cc/guide/startup.html](https://tweaked.cc/guide/startup.html).

- Tastekodene følger nå GLFW. `keys.a` er 65 og `keys.up` er 265 (før 30 og
  200). Bruk alltid `keys`-tabellen. Kilde:
  [tweaked.cc/event/key.html](https://tweaked.cc/event/key.html).

- Filene til en datamaskin ligger i `saves/<verden>/computercraft/computer/<id>`
  (før `saves/<verden>/computer`).

- Roboter trenger fortsatt fuel. Ett kull gir 80 steg.

- Oppskriftene på datamaskin, robot, skjerm, diskettstasjon og trådløst modem er
  som før. Et Ender Modem lages av gull og *Eye of Ender*. Kreativfanen heter
  **ComputerCraft**.

- Lua-versjonen (Cobalt) er omtrent Lua 5.2. Oppgavene bruker `table.unpack` i
  stedet for den gamle `unpack`, og ikke den gamle `arg`-tabellen. Kilde:
  [tweaked.cc/reference/feature_compat.html](https://tweaked.cc/reference/feature_compat.html).

- `rednet.receive` kan kalles uten tall, og `peripheral.find("modem",
  rednet.open)` åpner alle modemer.

- Sidene (`left`, `right`) regnes fra datamaskinens ståsted. Står du foran
  skjermen, er datamaskinens venstre på din høyre side.

- `turtle.inspectDown()` kan se hvilken kloss som er under roboten. Den brukes i
  stedet for å legge Bedrock i inventory.

- Atom er lagt ned. Oppgavene foreslår Visual Studio Code eller Notepad++.


# Kompetansemål {.challenge}

Ikke fylt ut. Hent eventuelle mål fra [LK20 på
udir.no](https://www.udir.no/lk20/).
