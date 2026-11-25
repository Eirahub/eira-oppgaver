---
title: Lærerveiledning - Din egen portskanner
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven lærer hva IP-adresser og porter er, skriver en portskanner i Python med
`socket`, og finner en hemmelig tjeneste i laben. Eleven skanner bare sin egen
maskin (127.0.0.1).

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Nettverk, porter, tjenester

__Tidsbruk__: 45 til 60 minutter

## Kompetansemål {.challenge}

- [ ] __Programmering, 10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Informasjonsteknologi 1__: beskrive sentrale komponenter i datamaskiner
  og nettverk og gjøre rede for hvilken funksjon de har

- [ ] __Vg2 informasjonsteknologi, Driftsstøtte__: utforske og beskrive
  relevante nettverksprotokoller, nettverkstjenester og serverroller

## Forslag til vurderingskriterier {.challenge}

Eleven har funnet den hemmelige tjenesten og kan forklare hvorfor en database
ikke skal kunne nås fra internett.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Sett opp laben](../sett_opp_laben/sett_opp_laben).
  Litt Python: funksjoner og løkker.

- [ ] __Utstyr__: PC med laben og Python 3.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](portskanner)

### Tips til veiledere

- Gjenta regelen: bare `127.0.0.1`. Å skanne skolens nett kan utløse alarmer hos
  IT, og kan være ulovlig.

- Skanneren finner kanskje andre tjenester som kjører på maskinen. Det er en fin
  anledning til å snakke om hva som kjører på en vanlig PC.

- Elever som finner porten med `netstat` eller `ss` i stedet, har også tenkt som
  en hacker.

### Hva er testet

Laben og alle kommandoene i oppgaven er kjørt på Linux med Python 3.12 i
november 2026. Oppgaven er ikke prøvd på Windows og Mac, eller med elever, ennå.
