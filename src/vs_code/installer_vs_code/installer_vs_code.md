---
title: Installer VS Code
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I denne oppgaven installerer du **Visual Studio Code** (VS Code) og starter det
for første gang. VS Code er gratis og finnes for Windows, Mac og Linux. På en
Chromebook kan du bruke det gjennom Linux.

Velg steget som passer for maskinen din. Du trenger bare ett av stegene 1 til 4.

## Til voksne {.tip}

På skolemaskiner kan det være regler for hva som kan installeres. Snakk med
IT-ansvarlig før økten. Se også lærerveiledningen.

<!-- BILDE: Nedlastingssiden på code.visualstudio.com med knappene for Windows,
Mac og Linux -->


# Steg 1: Windows {.activity}

På Windows finnes det to installasjonsprogrammer:

- **User Installer** installerer VS Code bare for deg. Du trenger ikke være
  administrator. Dette er det vanlige valget.

- **System Installer** installerer VS Code for alle som bruker maskinen. Da
  trenger du administratorrettigheter.

## Sjekkliste {.check}

- [ ] Gå til
  [code.visualstudio.com/download](https://code.visualstudio.com/download).

- [ ] Trykk på den store knappen for Windows. Den laster ned **User Installer**.

- [ ] Kjør fila du lastet ned, og godta lisensen.

- [ ] Under **Select Additional Tasks**: la **Add to PATH** stå på. Da kan du
  starte VS Code fra terminalen senere.

- [ ] Trykk **Install** og så **Finish**.


# Steg 2: Mac {.activity}

## Sjekkliste {.check}

- [ ] Gå til
  [code.visualstudio.com/download](https://code.visualstudio.com/download) og
  last ned **.dmg** for macOS.

- [ ] Åpne fila du lastet ned. Dra **Visual Studio Code** over i mappa
  **Programmer** (Applications).

- [ ] Start VS Code fra **Programmer**.


# Steg 3: Linux {.activity}

## Sjekkliste {.check}

- [ ] Bruker du Ubuntu eller Debian: last ned **.deb** fra
  [code.visualstudio.com/download](https://code.visualstudio.com/download) og
  dobbeltklikk på fila.

- [ ] Bruker du Fedora: last ned **.rpm**.

- [ ] Du kan også installere med Snap i terminalen:

  ```
  sudo snap install --classic code
  ```


# Steg 4: Chromebook {.activity}

På en Chromebook kjører VS Code i Linux-delen av maskinen. Ikke alle
Chromebooker kan dette. På skole-Chromebooker er det ofte slått av.

## Sjekkliste {.check}

- [ ] Åpne **Innstillinger** på Chromebooken og søk etter `Linux`. Slå på
  Linux-utviklingsmiljøet og velg standardvalgene.

- [ ] Åpne **Terminal** og skriv:

  ```
  dpkg --print-architecture
  ```

- [ ] Står det `amd64`, last ned **.deb** i varianten **x64**. Står det `arm64`,
  velg **.deb** i varianten **Arm64**. Begge finnes på
  [code.visualstudio.com/download](https://code.visualstudio.com/download).

- [ ] Åpne **Filer**, gå til **Nedlastinger** og dobbeltklikk på fila.

- [ ] Du finner VS Code i mappa **Linux-apper** i app-lista.

## Ingen Linux på Chromebooken? {.tip}

Prøv [vscode.dev](https://vscode.dev/). Det er VS Code i nettleseren. Du kan
redigere filer der, men du kan ikke kjøre Python.


# Steg 5: Første start {.activity}

Første gang VS Code starter, ser du en velkomstside.

<!-- BILDE: VS Code første gang den startes, med velkomstsiden -->

## Sjekkliste {.check}

- [ ] Velg et utseende (lyst eller mørkt) hvis du blir spurt. Du kan endre det
  senere.

- [ ] VS Code er på engelsk. Det finnes ikke norsk språkpakke, så alle oppgavene
  bruker de engelske navnene på menyene.

- [ ] Lukk velkomstsiden når du er ferdig å se på den.

## Språk {.tip}

Vil du heller ha VS Code på et annet språk, for eksempel tysk eller fransk?
Trykk **Ctrl** + **Shift** + **P** og skriv `Configure Display Language`. Det er
ikke nødvendig for kurset.


# Steg 6: Ikke synkroniser på delte maskiner {.activity}

VS Code kan lagre innstillingene dine i skyen med **Backup and Sync Settings**.
Da må du logge inn med en Microsoft- eller GitHub-konto. På en maskin som andre
også bruker, skal du ikke slå det på.

## Sjekkliste {.check}

- [ ] Se på tannhjulet nederst til venstre. Står det **Settings Sync is On** i
  menyen, er synkronisering på.

- [ ] Er den på, og maskinen er delt: velg **Settings Sync is On** > **Settings
  Sync: Turn Off** og så **Turn off**.

- [ ] Er den av, trenger du ikke gjøre noe.


# Neste steg {.challenge}

- [ ] Fortsett med [Bli kjent med VS Code](../bli_kjent/bli_kjent.html).
