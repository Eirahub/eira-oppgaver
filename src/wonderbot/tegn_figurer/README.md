---
title: Lærerveiledning - Tegn figurer med Dash
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven lager en funksjon `mangekant` med antall hjørner som parameter, og
regner ut svingen i hvert hjørne som 360 delt på antall hjørner. Så får
funksjonen en sidelengde til, og eleven sammenligner omkretsen til figurene.
Til slutt kjører Dash en stjerne, der summen av svingene er to hele runder.

## Oppgaven passer til: {.check}

__Fag__: Matematikk, programmering, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Funksjoner med parametere, vinkler, mangekanter, omkrets

__Tidsbruk__: 60 til 90 minutter

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Matematikk, 6. trinn__: bruke variabler, løkker, vilkår og funksjoner
  i programmering til å utforske geometriske figurer og mønstre

- [ ] __Matematikk, 6. trinn__: bruke og utforske strategier for å måle og
  regne ut areal og omkrets

## Forslag til vurderingskriterier {.challenge}

Eleven kan forklare hvorfor svingene i en mangekant til sammen blir 360 grader,
og bruker en funksjon med parameter i stedet for en ny løkke per figur. I
steg 3 kan eleven regne ut omkretsen og velge sidelengde ut fra den.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Kjør en firkant](../kjor_en_firkant/kjor_en_firkant)

- [ ] __Utstyr__: PC med nettleser og internett, en Dash (eller Cue) som er
  ladet og slått på, og en Raspberry Pi med gateway, bro og micro:bit som
  veileder har satt opp. Se "For veiledere" på [kursets forside](../).
  Maskeringsteip og gjerne et målebånd.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](tegn_figurer.html)

### Tips til veiledere

- La elevene fylle ut tabellen i steg 1 før de programmerer. Da kan de
  sammenligne regningen med det roboten gjør.

- Vinkelen i klossen er svingen roboten gjør (ytre vinkel), ikke vinkelen
  inni figuren. For en trekant er svingen 120 grader, mens vinkelen inni er 60.
  Det er et godt utgangspunkt for en samtale.

- 360 delt på 7 blir ikke et helt tall. Klossen tar desimaltall, men det er
  ikke testet om gatewayen godtar dem. Hold dere til 3, 4, 5, 6, 8, 9 og 10
  hjørner til det er prøvd.

- Roboten er ikke helt nøyaktig: 90 grader har blitt rundt 88 på Dash. Feilen
  vokser med antall hjørner, så åttekanten lukker seg dårligere enn trekanten.

- Stjernen kjører over sin egen vei. Sørg for god plass, og la eleven stå
  utenfor figuren.

### Hva er testet med ekte robot

Ikke testet ennå. Klossene for kjøring og sving er testet på Dash 18.11.2026
(se [Kjør en firkant](../kjor_en_firkant/README)).
