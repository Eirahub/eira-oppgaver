---
title: Lærerveiledning - Stein, saks, papir med KI
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven lærer opp en bildemodell i Teachable Machine for stein, saks og papir,
laster den opp, og bruker den i Machine Learning for Kids sin Scratch-utgave til
et spill mot datamaskinen. Oppgaven samler det eleven har lært: data, trening,
skjevhet og å bruke en modell i et program.

## Oppgaven passer til: {.check}

__Fag__: Programmering, naturfag, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Maskinlæring i et spill, variabler, valg, meldinger

__Tidsbruk__: 90 minutter, gjerne fordelt på to økter

## Kompetansemål {.challenge}

- [ ] __Naturfag, 7. trinn__: utforske, lage og programmere teknologiske
  systemer som består av deler som virker sammen

- [ ] __Matematikk, 8. trinn__: utforske hvordan algoritmer kan skapes, testes
  og forbedres ved hjelp av programmering

- [ ] __Programmering, 10. trinn__: planlegge og skape et digitalt produkt og
  vurdere dette med tanke på brukervennlighet

- [ ] __Samfunnsfag, 10. trinn__: utforske og reflektere over egne digitale spor
  og muligheten for å få slettet sporene og verne om egen og andres rett til
  privatliv, personvern og opphavsrett

## Forslag til vurderingskriterier {.challenge}

Spillet kjenner igjen stein, saks og papir de fleste gangene, og sier hvem som
vant. Eleven kan forklare hva som ble lastet opp til Google, og hva som ble
igjen på PC-en.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Lær maskinen å se](../maskinen_ser/maskinen_ser) og
  [Snill eller slem?](../snill_eller_slem/snill_eller_slem). Eleven bør kunne
  lage variabler og bruke meldinger i Scratch.

- [ ] __Utstyr__: PC med webkamera og internett.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](stein_saks_papir)

### Personvern

Bildene blir i nettleseren, men **modellen** lastes opp med **Upload my model**.
Ifølge FAQ-en til [Teachable
Machine](https://teachablemachine.withgoogle.com/faq) publiseres modellen på
Googles servere, ikke eksemplene. Alle som har lenken, kan bruke modellen, men
ikke endre den. Det er ikke prøvd om opplasting krever innlogging.

Fordi modellen ligger på nettet, er det ekstra viktig at bare hender er med i
bildene. Snakk med elevene om at en opplastet modell er et digitalt spor: den
ligger der selv om fanen lukkes. FAQ-en sier ikke noe om hvordan en opplastet
modell slettes.

Machine Learning for Kids brukes med **Try it now**. Bildeprosjekter og
TensorFlow-modeller sender ikke data til IBM Watson, ifølge nettstedets
hjelpeside. Se lærerveiledningen til [Snill eller
slem?](../snill_eller_slem/README) for mer om nettstedet.

### Tips til veiledere

- Machine Learning for Kids tar imot bildemodeller (og ifølge menyen
  positurmodeller) fra Teachable Machine under Pretrained, TensorFlow.
  Lydmodeller fra oppgave 2 virker ikke her.

- Vil dere ikke laste opp en modell, kan eleven lære opp modellen direkte i
  Machine Learning for Kids i stedet: nytt prosjekt med `recognising images`,
  `In your web browser`, og **webcam**-knappen i hver bøtte. Klossen heter da
  `recognise image (backdrop image) (label)`{.blockgrey}. Resten av spillet er
  likt.

- Navnene på klassene i Teachable Machine må stemme med tekstene i Scratch:
  `stein`, `saks`, `papir`, `ingenting`.

- Modellen ser hele scenen, også figurene. Hold figurene små. Sliter modellen,
  kan eleven skjule `Datamaskin` mens bildet tas.

- Steg 7 bruker `sett sammen`{.blockoperators} for å slippe et stort `hvis`-tre.
  Sterke elever kan skrive det som nøstede `hvis` i stedet, og sammenligne.

### Hva er testet

Det er sjekket i kildekoden til Machine Learning for Kids
(github.com/IBM/taxinomitis) 23.11.2026 at Pretrained, TensorFlow tar imot en
lenke til en Teachable Machine-modell og åpner Scratch med klossene `recognise
(data) (label)` og `recognise (data) (confidence)`, og at klossen `backdrop
image` gir et bilde av scenen. At videobildet kommer med i `backdrop image` på
scenen, bygger på arbeidsarket *Shy Panda*, der det virker for en figur. Hele
oppgaven er ikke prøvd ende til ende, verken med webkamera eller med elever.
