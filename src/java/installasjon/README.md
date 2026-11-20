---
title: Lærerveiledning - Java med IntelliJ
author: Tor Einar Enne
language: nb
---


# Om kurset {.activity}

Kurset lærer elevene Java i IntelliJ IDEA. Første del tar for seg det
grunnleggende: utskrift, variabler, valg, løkker, metoder og lister. Andre del
lærer det man trenger for å lage modder til spill skrevet i Java: klasser,
pakker, arv, grensesnitt, lambdaer, registre og Gradle.

Alle oppgavene handler om klosser, inventar og monstre, men alt skjer som tekst
i konsollen. Elevene trenger ikke ha et spill installert.

## Kurset passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, objektorientert programmering

__Tidsbruk__: Omtrent én dobbeltime per oppgave. Oppgave 6 til 10 kan ta lenger
tid.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Ingen krav. Elever som har programmert litt i Scratch
  eller Python, kommer raskere i gang.

- [ ] __Utstyr__: Datamaskin med IntelliJ IDEA og JDK 25. Se
  [installasjonsveiledningen](installasjon.html). Nettbrett og Chromebook
  fungerer ikke.


# Før første time {.activity}

## Sjekkliste {.check}

- [ ] Installer IntelliJ og last ned JDK 25 på alle maskinene på forhånd. Det er
  store nedlastinger, og de går tregt når 30 elever gjør det samtidig.

- [ ] Prøv oppgave 1 selv på en elevmaskin.

- [ ] Del ut en oversikt over snarveiene. Hver oppgave lærer én ny snarvei.

## Tips {.protip}

På Mac bruker IntelliJ som regel `Cmd` der Windows bruker `Ctrl`, og `Option`
der Windows bruker `Alt`. Under **Help** og **Keyboard Shortcuts PDF** finnes en
oversikt for hvert operativsystem.


# Oppbygging {.activity}

Del 1 bruker _kompakte kildefiler_ fra Java 25. Et program kan da være så kort
som dette:

```java
void main() {
    IO.println("Hei!");
}
```

Elevene slipper `public class`, `static` og `String[] args` til de har lært det
grunnleggende. I oppgave 6 går de over til vanlige klasser med pakker.

Del 2 følger det som trengs for å lage modder med Fabric:

- Oppgave 6: klasser, konstruktører, pakker og `import`.

- Oppgave 7: arv, `@Override` og abstrakte klasser.

- Oppgave 8: hendelser med grensesnitt, lambdaer og metodereferanser.

- Oppgave 9: register med `HashMap`, `enum`, `static` og konstanter.

- Oppgave 10: Gradle, feilsøking og debugger.

Fasit ligger som `.java`-filer i mappa til hver oppgave.


# Videre arbeid {.activity}

Etter kurset kan elevene gå videre til å lage egne modder i Java, med Fabric og
IntelliJ.
