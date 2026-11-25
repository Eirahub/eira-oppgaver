---
title: Lærerveiledning - SQL-injeksjon
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven ser hvordan Kiosken bygger en SQL-spørring av det brukeren skriver,
logger inn som admin med `admin' --`, og retter feilen med parametre.

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Databaser, SQL, sikker programmering

__Tidsbruk__: 45 til 60 minutter

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 1__: lagre og hente fram data, presentere data på
  nettsider og reflektere over hvordan representasjonsform kan påvirke
  tolkningen

- [ ] __Vg2 informasjonsteknologi, Utvikling__: analysere digitale trusler,
  verdier og sårbarheter og utvikle applikasjoner med innebygget sikkerhet

- [ ] __Informasjonsteknologi 2__: vurdere og bruke strategier for feilsøking og
  testing av programkode

## Forslag til vurderingskriterier {.challenge}

Eleven kan forklare hvorfor `admin' --` virker, har rettet koden, og `sjekk.py
blått` viser `[OK]` for SQL-injeksjon.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Alt i nettleseren er
  offentlig](../alt_er_offentlig/alt_er_offentlig).

- [ ] __Utstyr__: PC med laben og Python 3.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](sql_injeksjon)

### Tips til veiledere

- La elevene skrive spørringen på papir med det de skriver inn. Da ser de
  hvorfor det virker.

- Kiosken viser hele SQL-spørringen i feilmeldingen. Det er også en feil, og en
  god samtale.

- Tegneserien «Exploits of a Mom» fra xkcd er fin å vise.

### Hva er testet

Laben og alle kommandoene i oppgaven er kjørt på Linux med Python 3.12 i
november 2026. Oppgaven er ikke prøvd på Windows og Mac, eller med elever, ennå.
