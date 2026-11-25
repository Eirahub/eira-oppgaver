---
title: Hvit hatt
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Det som skiller en hvit hatt fra en kriminell, er ikke hva de kan. Det er at
den hvite hatten har **lov**. I denne oppgaven lærer du reglene som gjelder,
og du skriver under på din første kontrakt. Etter det får du tilgang til
laben.

![Terminal som viser kontrakten i Hackerskolen, der eleven har skrevet «jeg
lover»](hvit_hatt.png)

```
FRA:   K, Byrå 404
TIL:   Rekrutt
EMNE:  Reglene

Før du får verktøyene, skal du kunne reglene. En hvit hatt som
bryter reglene, er ikke lenger en hvit hatt. Da er det bare en
person som bryter seg inn.

Hilsen K
```


# Steg 1: Hva sier loven? {.activity}

I Norge står det i **straffeloven § 204** at den som skaffer seg tilgang til
et datasystem ved å bryte en beskyttelse, eller på en annen måte uten lov, kan
straffes med bot eller fengsel i inntil 2 år.

Det betyr blant annet:

- Å prøve passord på andres kontoer er ulovlig, også om du bare «tester».
- Å logge inn med passord du har funnet eller fått lekket, er ulovlig.
- Å skanne eller angripe skolens nett, et spill eller en nettside uten
  skriftlig lov er ulovlig, også om du ikke ødelegger noe.
- Det hjelper ikke at det var lett, eller at du mente det godt.

Det som er lov:

- å angripe din egen maskin og dine egne apper
- å bruke øvingslaber og øvingssider som sier at du har lov, som laben i dette
  kurset og nettsider som OverTheWire og picoCTF
- å teste en bedrift når du har en skriftlig avtale med dem

## Sjekkliste {.check}

- [ ] Diskuter med en medelev: Er dette lov?

  1. Du gjetter passordet til en venn for å tulle med dem.
  2. Du skanner din egen ruter hjemme.
  3. Du finner en feil i skolens læringsplattform ved et uhell, og sier fra
     til læreren.
  4. Du prøver feilen igjen for å se om du kan se andres karakterer.

## Fasit {.tip}

1 og 4 er ulovlig. 2 er lov, fordi ruteren er din eller familiens, men spør
den som eier den. 3 er riktig måte å gjøre det på. Når du har funnet en feil,
skal du stoppe og si fra, ikke prøve videre.


# Steg 2: Kontrakten {.activity}

Ekte pentestere starter aldri uten en skriftlig avtale. Den sier **hva** de
har lov til å angripe, **når** og **hvordan**. Alt utenfor avtalen er
forbudt. Dette kalles **omfanget** av oppdraget.

## Sjekkliste {.check}

- [ ] Les kontrakten for dette kurset:

  ```
  KONTRAKT, BYRÅ 404

  Omfang: Laben i Hackerskolen på min egen maskin (127.0.0.1),
  OverTheWire og picoCTF.

  Utenfor omfang: Alt annet. Skolens nett, andres maskiner,
  kontoer, spill og nettsider.

  Finner jeg en feil hos noen andre, stopper jeg og sier fra
  til eieren, eller til en voksen som kan hjelpe meg.

  Signert: ______________________
  ```

- [ ] Skriv kontrakten av på et ark eller i et dokument, og skriv under.
  Du kommer til å godta den samme kontrakten når du starter laben.


# Steg 3: Når du finner en feil {.activity}

Før eller siden finner du en ekte feil, kanskje i en app du bruker. Da gjør
en hvit hatt dette:

1. **Stopp.** Ikke prøv mer, ikke se på andres data, ikke last ned noe.
2. **Skriv ned** hva du gjorde og hva du så.
3. **Si fra til eieren.** Mange nettsider har en fil som heter
   `/.well-known/security.txt` som sier hvor du melder feil. Finnes den ikke,
   spør en lærer eller forelder om hjelp.
4. **Ikke fortell andre** om feilen før den er rettet.

Dette heter **ansvarlig varsling**. Mange bedrifter takker for det, og noen
betaler, gjennom det som heter **bug bounty**.

## Sjekkliste {.check}

- [ ] Finn `security.txt` hos en stor nettside. Prøv for eksempel
  `https://nsm.no/.well-known/security.txt` i nettleseren. Hva står det?

## Ekte sak {.protip}

Mange av de flinkeste sikkerhetsfolkene startet med å finne feil i spill og
apper som tenåringer. De som meldte feilene riktig, fikk ofte takk og
belønning. De som misbrukte dem, fikk ofte en dom.


## Test deg selv {.flag}

- [ ] Kan du forklare forskjellen på en hvit og en grå hatt?

- [ ] Hva gjør du hvis du finner en feil i en app du bruker?


## Utfordring {.challenge}

Finn ut om spillet eller appen du bruker mest, har et bug bounty-program.
Hva betaler de for en feil?
