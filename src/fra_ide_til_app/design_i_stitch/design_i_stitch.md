---
title: Design appen i Google Stitch
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

**Google Stitch** lager skjermbilder av en app ut fra en tekst du skriver. I
denne oppgaven lærer du å skrive en god beskrivelse, lager designet for MVP-en
og tester det på en kunde før det finnes en eneste linje kode.

![Illustrasjon av tre mobilskjermer for Vaskeplan: ledige tider, bestilling og
bekreftelse](stitch.png)

## Verktøy og vilkår {.tip}

Vi bruker Google Stitch som eksempel. Andre KI-verktøy for design, som Gemini,
Figma eller Penpot, virker på samme måte, og du kan også tegne på papir. Sjekk
selv aldersgrense og vilkår for verktøyet du velger. Er du under
aldersgrensen, kan en forelder eller lærer stå som ansvarlig for kontoen.

## Før du starter {.tip}

Du trenger `PLAN.md` fra [Planen](../planen/planen).


# Steg 1: Vag, bedre, god {.activity}

KI-en lager det du ber om, ikke det du mener. Se forskjellen:

**Vag:**

```
Lag en app for sykkelvask.
```

KI-en må gjette alt: hvem appen er for, hva den skal gjøre, farger og språk.

**Bedre:**

```
Lag en mobilapp der elever kan bestille sykkelvask.
```

Nå vet den hva appen gjør, men ikke hvilke skjermer, hvilke data eller hvilken
stil.

**God:**

```
Mobilapp på norsk for en elevbedrift som vasker sykler i skolegården.
Brukerne er elever fra 16 til 19 år.

Skjermer:
1. Ledige tider: liste over tider i dag og i morgen, med knappen «Bestill».
2. Bestilling: felt for fornavn og sykkeltype (vanlig, el-sykkel, terreng),
   knappen «Bekreft».
3. Bekreftelse: «Takk! Vi sees kl. 12:30», med knappen «Tilbake».

Stil: enkel og lys, store knapper, grønn hovedfarge, god kontrast.
Ikke ta med innlogging eller betaling.
```

## Sjekkliste {.check}

- [ ] Skriv en god beskrivelse av din app. Bruk skjermene, dataene og kravene
  fra `PLAN.md`.

- [ ] Sjekk at beskrivelsen sier: hvem, hva, hvilke skjermer, hva som står på
  dem, stil, og hva som ikke skal være med.


# Steg 2: Lag designet {.activity}

## Sjekkliste {.check}

- [ ] Gå til [stitch.withgoogle.com](https://stitch.withgoogle.com) og logg
  inn.

- [ ] Velg om appen er for mobil eller nett.

- [ ] Lim inn beskrivelsen og vent på skjermene.

- [ ] Ser noe feil ut? Skriv en ny beskjed om **én** ting om gangen, for
  eksempel «Gjør knappen Bestill større» eller «Fjern menyen øverst».

## Tips {.protip}

Små beskjeder én om gangen virker bedre enn en lang liste. Da ser du hva hver
endring gjorde.


# Steg 3: Test designet på en kunde {.activity}

Det er mye billigere å endre et design enn en ferdig app.

## Sjekkliste {.check}

- [ ] Vis skjermene til en av kundene fra intervjuet.

- [ ] Gi kunden en oppgave, for eksempel «Bestill vask i morgen klokka 12». Ikke
  hjelp. Se hvor de stopper eller lurer.

- [ ] Skriv ned hva som var vanskelig, og rett det i designet.


# Steg 4: Ta designet med videre {.activity}

## Sjekkliste {.check}

- [ ] Last ned designet. Ta skjermbilder av hver skjerm, og last ned koden
  hvis Stitch tilbyr det.

- [ ] Legg filene i en mappe som heter `design` i prosjektmappa, ved siden av
  `PLAN.md`.

- [ ] Skriv endringene fra kundetesten inn i `PLAN.md`.

## Lagre {.save}

Nå har du plan og design. I neste del bygger du appen.


## Utfordring {.challenge}

Be Stitch lage en mørk versjon av designet. Spør tre kunder hvilken de liker
best, og hvorfor.
