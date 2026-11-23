---
title: Lærerveiledning - Kjør og sving
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven legger til bitbot-utvidelsen i MakeCode og får roboten til å kjøre fram
og tilbake og snu på stedet. Eleven finner ved prøving hvor mange millisekunder
som gir en sving på 90 grader, og bruker det til å kjøre en firkant med en
`gjenta 4 ganger`-løkke.

## Oppgaven passer til: {.check}

__Fag__: Programmering, matematikk, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Sekvens, løkker, vinkler, måling

__Tidsbruk__: 45 til 60 minutter

## Kompetansemål {.challenge}

- [ ] __Matematikk, 8. trinn__: utforske korleis algoritmar kan skapast, testast
  og forbetrast ved hjelp av programmering

- [ ] __Naturfag, 7. trinn__: utforske, lage og programmere teknologiske
  systemer som består av deler som virker sammen

- [ ] __Programmering, 10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til vurderingskriterier {.challenge}

Roboten kjører en firkant med en løkke, og eleven kan forklare hvordan
tallet for en kvart runde ble funnet. Utfordringen med trekant og sekskant viser
om eleven forstår sammenhengen mellom antall hjørner og vinkel (360 delt på
antall hjørner).

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Ingen. Det hjelper å ha laget et lite program i
  MakeCode før.

- [ ] __Utstyr__: PC med nettleser og internett, USB-kabel, en Bit:Bot XL med
  micro:bit og batterier, gjerne maskeringsteip. Se [kursets forside](../).

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](kjor_og_sving)

### Tips til veiledere

- Gå gjennom sikkerhet og nedlasting på [kursets forside](../) før første
  robot står på gulvet. Det viktigste: slå av roboten før nedlasting.

- Hvor mange millisekunder som gir 90 grader, avhenger av fart, batteri og
  underlag. Det er poenget med steg 4. Tallet 400 i oppgaven er bare et
  utgangspunkt.

- `juster`-klossen (bias) virker bare på Bit:Bot XL, ifølge dokumentasjonen til
  utvidelsen.

- Et teppe gir mer friksjon enn et glatt gulv. Bruk samme underlag hele økta.

### Hva er testet med ekte robot

Ingenting ennå. Koden er skrevet etter kildekoden til utvidelsen
[4tronix/BitBot](https://github.com/4tronix/BitBot) versjon 2.1.13, og alle
kodeblokkene er tegnet som klosser i MakeCode uten feil. Ingen av programmene
er kjørt på en Bit:Bot XL.
