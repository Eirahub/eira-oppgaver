---
title: Lærerveiledning - XSS i kommentarfeltet
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven får kommentarfeltet i Kiosken til å kjøre JavaScript, viser øktnøkkelen
med `document.cookie`, og tetter hullet med `html.escape` og `HttpOnly`.

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: XSS, informasjonskapsler, sikker programmering

__Tidsbruk__: 45 til 60 minutter

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 1__: utvikle nettsider ved hjelp av
  markeringsspråk

- [ ] __Vg2 informasjonsteknologi, Utvikling__: analysere digitale trusler,
  verdier og sårbarheter og utvikle applikasjoner med innebygget sikkerhet

- [ ] __Informasjonsteknologi 2__: vurdere og bruke strategier for feilsøking og
  testing av programkode

## Forslag til vurderingskriterier {.challenge}

Eleven kan forklare hva en angriper kan gjøre med en stjålet øktnøkkel, og
`sjekk.py blått` viser `[OK]` for kommentarer og HttpOnly.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Alt i nettleseren er
  offentlig](../alt_er_offentlig/alt_er_offentlig) og [Knekk
  passord](../knekk_passord/knekk_passord), der eleven finner passordet til
  `kari`.

- [ ] __Utstyr__: PC med laben, Python 3 og en nettleser.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](xss)

### Tips til veiledere

- Skriptene kjører bare i elevens egen nettleser, mot elevens egen Kiosk.

- `python3 kiosk.py --nullstill` sletter alle kommentarer og starter med en ny
  database.

- Snakk om forskjellen på å vise et vindu og å sende nøkkelen til en annen
  server. Elevene skal ikke lage det siste.

### Hva er testet

Laben og alle kommandoene i oppgaven er kjørt på Linux med Python 3.12 i
november 2026. Oppgaven er ikke prøvd på Windows og Mac, eller med elever, ennå.
