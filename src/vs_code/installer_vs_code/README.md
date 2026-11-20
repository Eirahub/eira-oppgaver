---
title: Lærerveiledning - Installer VS Code
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene installerer VS Code på sin maskin og starter det første gang. Oppgaven
dekker Windows, Mac, Linux og Chromebook, og hvordan man unngår at innstillinger
synkroniseres på delte maskiner. Opplysningene ble sjekket mot
code.visualstudio.com i november 2026.

## Oppgaven passer til: {.check}

__Fag__: Programmering, IT1, IT2

__Anbefalte trinn__: 8. trinn til VG3, og veiledere

__Tema__: Verktøy, installasjon

__Nivå__: 1 (introduksjon)

__Tidsbruk__: 15 minutter per maskin

## Kompetansemål {.challenge}

Oppgaven er et verktøy for andre oppgaver. Se målene i læreplanene:

- [ ] [Læreplan i valgfaget programmering
  (PRG01-02)](https://www.udir.no/lk20/prg01-02)

- [ ] [Læreplan i informasjonsteknologi
  (INF01-02)](https://www.udir.no/lk20/inf01-02), for IT1 og IT2

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan installere et program og starte det.

- [ ] Eleven kan forklare forskjellen på å installere for seg selv og for alle
  brukere av maskinen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Ingen.

- [ ] __Utstyr__: Windows-, Mac- eller Linux-maskin, eller en Chromebook der
  Linux er slått på.

## Fremgangsmåte

Her kommer tips og erfaringer til stegene i oppgaven. [Klikk her for å se
oppgaveteksten.](installer_vs_code.html){target=_blank}


# Steg 1: Windows {.activity}

- [ ] **User Installer** krever ikke administrator og legger VS Code i
  `%LOCALAPPDATA%\Programs\Microsoft VS Code`. Microsoft anbefaler den for de
  fleste. Den oppdaterer seg selv uten administrator.

- [ ] **System Installer** krever administrator og legger VS Code i `Program
  Files` for alle brukere. Oppdateringer krever også administrator. Den passer
  når IT-avdelingen ruller ut programmet på skolemaskiner.

- [ ] Mange skoler blokkerer også User Installer. Spør IT-ansvarlig i god tid.
  Kilde: [VS Code on Windows](https://code.visualstudio.com/docs/setup/windows).


# Steg 2 og 3: Mac og Linux {.activity}

- [ ] Mac: nedlastingen er en `.dmg`. Programmet dras til **Programmer**. Kilde:
  [VS Code on macOS](https://code.visualstudio.com/docs/setup/mac).

- [ ] Linux: `.deb` for Debian og Ubuntu, `.rpm` for Fedora, eller Snap. Når
  `.deb` installeres, tilbys også Microsofts apt-kilde, så VS Code oppdateres
  med resten av systemet. Kilde: [VS Code on
  Linux](https://code.visualstudio.com/docs/setup/linux).


# Steg 4: Chromebook {.activity}

- [ ] Krever at Linux-utviklingsmiljøet er slått på. På administrerte
  skole-Chromebooker er det ofte sperret av skolens administrator.

- [ ] Velg `.deb` for riktig arkitektur (`amd64` gir x64, `arm64` gir Arm64).
  Kilde: [Visual Studio Code on
  Chromebooks](https://code.visualstudio.com/blogs/2020/12/03/chromebook-get-started).
  Artikkelen er fra 2020, og navnene i innstillingene til ChromeOS har endret
  seg siden. Derfor ber oppgaven eleven søke etter `Linux`.

- [ ] [vscode.dev](https://vscode.dev/) er en reserve. Der kan man redigere
  filer, men ikke kjøre Python eller bruke terminalen.


# Steg 5: Første start {.activity}

- [ ] VS Code har ingen norsk språkpakke. Språkene som finnes er listet i
  [Display Language](https://code.visualstudio.com/docs/configure/locales). Alle
  oppgavene i kurset bruker de engelske menynavnene.


# Steg 6: Synkronisering {.activity}

- [ ] **Backup and Sync Settings** lagrer innstillinger, utvidelser og snarveier
  i skyen, knyttet til en Microsoft- eller GitHub-konto. På delte maskiner kan
  neste bruker da få med seg kontoen. Den er av til noen slår den på. Kilde:
  [Settings Sync](https://code.visualstudio.com/docs/configure/settings-sync).

## Variasjoner {.challenge}

- [ ] Har klubben egne bærbare maskiner, installer VS Code og utvidelsene fra
  [Utvidelser og KI](../utvidelser_og_ki/utvidelser_og_ki.html) før første økt.

## Eksterne ressurser {.challenge}

- [ ] [Setting up Visual Studio Code
  (engelsk)](https://code.visualstudio.com/docs/setup/setup-overview)
