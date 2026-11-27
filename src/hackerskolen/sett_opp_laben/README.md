---
title: Lærerveiledning - Sett opp laben
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven laster ned laben, godtar kontrakten, lager oppdragene og registrerer sitt
første flagg. Laben er skrevet i Python uten andre biblioteker og kjører bare på
elevens egen maskin (127.0.0.1).

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Terminal, Python, øvingsmiljø

__Tidsbruk__: 20 til 45 minutter

## Kompetansemål {.challenge}

- [ ] __Programmering, 10. trinn__: bruke flere programmeringsspråk, deriblant
  minst ett som er tekstbasert

## Forslag til vurderingskriterier {.challenge}

Laben kjører, og eleven har registrert det første flagget i flaggboka.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Hvit hatt](../hvit_hatt/hvit_hatt).

- [ ] __Utstyr__: PC med Python 3 og en bash-terminal: Terminal på Mac og Linux,
  Git Bash eller WSL på Windows, eller en Raspberry Pi.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](sett_opp_laben)

### Tips til veiledere

- Test installasjonen på en skole-PC før timen. Python og Git må ofte
  installeres av IT-ansvarlig.

- På Windows heter kommandoen `python`, ikke `python3`. Si det høyt i klassen,
  det er den vanligste feilen.

- Kjøres `lag_oppdrag.py` på nytt, lages oppdragene på nytt. Flaggboka i
  `flaggbok.txt` blir stående.

- Laben lytter bare på `127.0.0.1`, så elevene kan ikke angripe hverandres
  maskiner over nettet. Det er med vilje.

- Bytter elevene maskin mellom timene, ber du dem skrive ned fremgangskoden
  fra `python3 sjekk.py status` på slutten av timen. Med
  `python3 sjekk.py hent KODE` får de flaggene tilbake på en annen maskin.

- Flaggene er kodet i kildekoden, og sjekkeren har bare hasher. En elev som
  leser seg fram til et flagg i koden, har også gjort noe lærerikt. Snakk om
  det.

### Hva er testet

Laben og alle kommandoene i oppgaven er kjørt på Linux med Python 3.12 i
november 2026. Oppgaven er ikke prøvd på Windows og Mac, eller med elever, ennå.
