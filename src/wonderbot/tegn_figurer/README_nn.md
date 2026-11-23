---
title: Lærarrettleiing - Teikn figurar med Dash
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Eleven lagar ein funksjon `mangekant` med talet på hjørne som parameter, og
reknar ut svingen i kvart hjørne som 360 delt på talet på hjørne. Så får
funksjonen ei sidelengd til, og eleven samanliknar omkrinsen til figurane.
Til slutt køyrer Dash ei stjerne, der summen av svingane er to heile rundar.

## Oppgåva passar til: {.check}

__Fag__: Matematikk, programmering, teknologi

__Tilrådde trinn__: 5. til 10. trinn

__Tema__: Funksjonar med parametrar, vinklar, mangekantar, omkrins

__Tidsbruk__: 60 til 90 minutt

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmar med bruk av
  variablar, vilkår og lykkjer

- [ ] __Matematikk, 6. trinn__: bruke variablar, lykkjer, vilkår og
  funksjonar i programmering til å utforske geometriske figurar og mønster

- [ ] __Matematikk, 6. trinn__: bruke og utforske strategiar for å måle og
  rekne ut areal og omkrins

## Forslag til vurderingskriterium {.challenge}

Eleven kan forklare kvifor svingane i ein mangekant til saman blir 360 grader,
og brukar ein funksjon med parameter i staden for ei ny løkke per figur. I
steg 3 kan eleven rekne ut omkrinsen og velje sidelengd ut frå han.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: [Kjør en firkant](../kjor_en_firkant/kjor_en_firkant)

- [ ] __Utstyr__: PC med nettlesar og internett, ein Dash (eller Cue) som er
  lada og slått på, og ein Raspberry Pi med gateway, bru og micro:bit som
  rettleiaren har sett opp. Sjå "For veiledere" på [framsida til
  kurset](../). Maskeringsteip og gjerne eit målband.

## Framgangsmåte

[Klikk her for å sjå oppgåveteksten.](tegn_figurer_nn.html)

### Tips til rettleiarar

- La elevane fylle ut tabellen i steg 1 før dei programmerer. Då kan dei
  samanlikne utrekninga med det roboten gjer.

- Vinkelen i klossen er svingen roboten gjer (ytre vinkel), ikkje vinkelen
  inne i figuren. For ein trekant er svingen 120 grader, medan vinkelen inne
  i figuren er 60. Det er eit godt utgangspunkt for ein samtale.

- 360 delt på 7 blir ikkje eit heilt tal. Klossen tek desimaltal, men det er
  ikkje testa om gatewayen godtek dei. Hald dykk til 3, 4, 5, 6, 8, 9 og 10
  hjørne til det er prøvd.

- Roboten er ikkje heilt nøyaktig: 90 grader har blitt rundt 88 på Dash.
  Feilen veks med talet på hjørne, så åttekanten lukkar seg dårlegare enn
  trekanten.

- Stjerna køyrer over sin eigen veg. Sørg for god plass, og la eleven stå
  utanfor figuren.

### Kva er testa med ekte robot

Ikkje testa enno. Klossane for køyring og sving er testa på Dash 18.11.2026
(sjå [Kjør en firkant](../kjor_en_firkant/README)).
