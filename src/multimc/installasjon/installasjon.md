---
title: Installer MultiMC
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

**MultiMC** er en gratis launcher for Minecraft Java Edition med åpen kildekode.
En launcher er programmet som starter spillet. Den vanlige heter Minecraft
Launcher og kommer fra Mojang. MultiMC gjør det samme, men lar deg ha mange helt
adskilte oppsett av Minecraft på én gang. De kalles **instanser**.

I denne oppgaven skal du:

- laste ned og pakke ut MultiMC

- logge inn med Microsoft-kontoen din på en trygg måte

- lage en instans med vanlig Minecraft og starte den

Det tar rundt en halvtime. Mye av tiden går med til nedlasting.

<!-- BILDE: Hovedvinduet i MultiMC med én instans som heter Vanilla 26.3, og
verktøylinja til høyre med Launch, Edit Instance og Folders -->


# Steg 1: Dette trenger du {.activity}

## Sjekkliste {.check}

- [ ] En datamaskin med Windows, macOS eller Linux. MultiMC virker på Windows 7
  og nyere, og macOS 10.13 og nyere. Minecraft bør ha minst 8 GB minne på
  maskinen, helst 16 GB hvis du vil kjøre flere instanser.

- [ ] **Minecraft Java Edition**, kjøpt på
  [minecraft.net](https://www.minecraft.net/). MultiMC kan ikke kjøpe spillet
  for deg. Bedrock Edition og Education Edition virker ikke.

- [ ] En voksen som kan hjelpe med installasjonen og innloggingen.

- [ ] **Java**. Minecraft er skrevet i Java, og MultiMC trenger Java på maskinen
  for å starte spillet. Hvilken Java du trenger, og hvordan du installerer den,
  står i neste oppgave, [Java for
  Minecraft](../java_for_minecraft/java_for_minecraft.html). Du kan gjøre den
  først, eller komme tilbake til den når MultiMC spør etter Java.


# Steg 2: Last ned MultiMC {.activity}

## Sjekkliste {.check}

- [ ] Gå til [multimc.org](https://multimc.org/) og velg nedlastingen for
  operativsystemet ditt. Last bare ned MultiMC fra multimc.org. Kopier på andre
  nettsider kan inneholde skadevare.

- [ ] **Windows:** Du får en zip-fil. Lag en mappe der du har skrivetilgang, for
  eksempel `MultiMC` under Dokumenter. Pakk ut zip-fila der, og start
  `MultiMC.exe`.

- [ ] **macOS:** Pakk ut fila og flytt **MultiMC** til mappa Programmer
  (**Applications**).

- [ ] **Linux:** Bruk pakken for distribusjonen din (`.deb`, `.rpm` eller AUR),
  som beskrevet på nettsida.

## Tips {.protip}

MultiMC lagrer alt i mappa den ligger i: instanser, modder, verdener og
innstillinger. Legg den ikke under **Programfiler**, der du ikke har
skrivetilgang. Legg den heller ikke i en mappe som synkroniseres med OneDrive
eller Google Disk. Minecraft skriver mange små filer, og synkroniseringen gjør
alt tregt. MultiMC advarer deg hvis den ligger i en midlertidig mappe.


# Steg 3: Første start {.activity}

Første gang du starter MultiMC, får du noen spørsmål.

## Sjekkliste {.check}

- [ ] Velg språk. Kurset bruker de engelske navnene på knapper og menyer, så det
  er lettest å følge med hvis du velger **English**.

- [ ] Når MultiMC spør om Java, velger du en Java fra lista hvis den finnes.
  Står det ingen ting i lista, kan du gå videre og ordne Java i neste oppgave.

- [ ] Velg om MultiMC skal se etter oppdateringer. Det er lurt å si ja.

<!-- BILDE: Første-start-veiviseren i MultiMC med siden der man velger Java -->


# Steg 4: Logg inn trygt {.activity}

For å spille trenger MultiMC å vite at du eier Minecraft. Det gjør du ved å
logge inn med Microsoft-kontoen som eier spillet.

Innloggingen skjer på **Microsofts egen nettside**, ikke i MultiMC. MultiMC ser
aldri passordet ditt. Den får bare en nøkkel fra Microsoft som viser at du har
lov til å spille.

## Sjekkliste {.check}

- [ ] Klikk på **Accounts** øverst til høyre i MultiMC, og velg **Manage
  Accounts**.

- [ ] Velg **Add New Account**. MultiMC viser en lenke og en QR-kode.

- [ ] Åpne lenken i nettleseren, eller skann QR-koden med mobilen. Sjekk at
  adressen i nettleseren er en side hos `microsoft.com` eller `live.com`.

- [ ] Logg inn med Microsoft-kontoen og godta at MultiMC får tilgang til
  Minecraft-profilen.

- [ ] Gå tilbake til MultiMC. Nå står navnet på Minecraft-profilen din i lista
  over kontoer.

<!-- BILDE: Vinduet Minecraft Accounts i MultiMC med lenken og QR-koden for
innlogging -->

## Passordet er ditt {.tip}

- Skriv aldri passordet til Microsoft-kontoen i et annet program, et chatvindu
  eller en nettside som ikke er Microsoft sin.

- Gi aldri passordet eller koden fra innloggingen til noen andre, heller ikke
  til en venn som skal "hjelpe" deg.

- Har en forelder laget kontoen din, eller er du under 18 år, kan det hende en
  forelder må logge inn for deg eller godkjenne i Microsoft Family. Gjør det
  sammen.


# Steg 5: Lag din første instans {.activity}

En instans er ett oppsett av Minecraft: én versjon, kanskje én mod-loader, og
egne modder og verdener. Den første instansen er vanlig Minecraft uten modder.
Den kalles ofte **vanilla**.

## Sjekkliste {.check}

- [ ] Klikk på **Add Instance** øverst til venstre.

- [ ] Velg **Vanilla** i lista til venstre.

- [ ] Gi instansen et navn som sier hva den er, for eksempel `Vanilla 26.3`.

- [ ] Velg den nyeste versjonen under **Releases**, og klikk **OK**.

- [ ] Marker instansen og klikk **Launch**. Første gang laster MultiMC ned
  Minecraft, så det tar litt tid.

## Test prosjektet {.flag}

- [ ] Starter Minecraft? Nederst til venstre i hovedmenyen står versjonen.

- [ ] Lag en ny verden og gå litt rundt. Lukk spillet.

- [ ] Gikk det ikke? Står det noe om Java, må du ta oppgaven [Java for
  Minecraft](../java_for_minecraft/java_for_minecraft.html) først.

## Spille uten nett {.tip}

MultiMC har også knappen **Launch Offline**. Da starter spillet uten å spørre
Microsoft, for eksempel når du tester modder på et sted uten nett. Du må likevel
ha logget inn med en konto som eier spillet. Du kan ikke spille på servere som
krever innlogging i offline-modus.
