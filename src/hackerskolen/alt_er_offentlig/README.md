---
title: Lærerveiledning - Alt i nettleseren er offentlig
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven starter øvingsappen Kiosken, finner en hemmelighet i JavaScript, og
endrer prisen i et skjult felt med utviklerverktøyene i nettleseren. Eleven
skriver ned hvert funn.

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Frontend og backend, utviklerverktøy, validering

__Tidsbruk__: 45 minutter

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 1__: utvikle nettsider ved hjelp av
  markeringsspråk

- [ ] __Vg2 informasjonsteknologi, Utvikling__: analysere digitale trusler,
  verdier og sårbarheter og utvikle applikasjoner med innebygget sikkerhet

## Forslag til vurderingskriterier {.challenge}

Eleven har funnet to flagg og kan forklare hvorfor serveren aldri skal stole på
data fra nettleseren.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Sett opp laben](../sett_opp_laben/sett_opp_laben).

- [ ] __Utstyr__: PC med laben, Python 3 og en nettleser med utviklerverktøy.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](alt_er_offentlig)

### Tips til veiledere

- Kiosken svarer bare på `127.0.0.1:8080` på elevens egen maskin.

- Hullene i `kiosk.py` er merket med `SÅRBAR`. Elevene tetter dem i [Klar for
  publisering](../klar_for_publisering/klar_for_publisering).

- Be elevene føre en logg over funn fra starten. Den brukes i
  [Pentestrapporten](../pentestrapport/pentestrapport).

### Hva er testet

Laben og alle kommandoene i oppgaven er kjørt på Linux med Python 3.12 i
november 2026. Oppgaven er ikke prøvd på Windows og Mac, eller med elever, ennå.
