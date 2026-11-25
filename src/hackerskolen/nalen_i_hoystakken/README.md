---
title: Lærerveiledning - Nåla i høystakken
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven finner en fil etter størrelse med `find`, og analyserer en tilgangslogg
med rør (`|`), `cut`, `sort` og `uniq` for å finne en inntrenger. Til slutt
skriver eleven en kort rapport.

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Kommandolinje, logganalyse, hendelseshåndtering

__Tidsbruk__: 45 til 60 minutter

## Kompetansemål {.challenge}

- [ ] __Programmering, 10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Informasjonsteknologi 1__: drøfte problemstillinger knyttet til
  innhenting, bruk og misbruk av data

- [ ] __Vg2 informasjonsteknologi, Driftsstøtte__: utforske trusler mot
  datasikkerhet og gjøre rede for dagens trusselbilde og hvordan truslene kan
  påvirke en åpen samfunnsdebatt og tilliten til demokratiet

## Forslag til vurderingskriterier {.challenge}

Eleven har funnet riktig IP-adresse og kan forklare hvordan, og kan skille
mellom et angrep og en som har glemt passordet.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Inn i
  terminalen](../inn_i_terminalen/inn_i_terminalen).

- [ ] __Utstyr__: PC med laben og en bash-terminal.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](nalen_i_hoystakken)

### Tips til veiledere

- IP-adressene i loggen er fra områder som er satt av til eksempler (RFC 5737).
  De tilhører ingen.

- Kommandoen med fem rør i steg 3 er et godt sted å stoppe og la elevene bygge
  den opp én del om gangen.

- Den andre IP-adressen med mange feil er der for å vise at ikke alle spor er
  angrep. Spør elevene hvordan de kan vite forskjellen.

### Hva er testet

Laben og alle kommandoene i oppgaven er kjørt på Linux med Python 3.12 i
november 2026. Oppgaven er ikke prøvd på Windows og Mac, eller med elever, ennå.
