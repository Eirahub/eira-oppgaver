---
title: Lærerveiledning - En runde som et team
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene jobber i grupper på 3 eller 4 og tar én milepæl i `gjett_tallet` fra
sak til fletting, slik et utviklingsteam gjør. De planlegger et epos med én
brukerhistorie per elev, lager grener fra sakene, gjennomgår hverandres pull
requests, løser flettekonflikter og avslutter runden med en kort samtale om
hva som gikk bra. Alle er utvikler på én sak og gjennomgåer på en annen, og
produkteieren byttes til neste runde.

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi, arbeidslivsfag, entreprenørskap
og bedriftsutvikling

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Teamarbeid, roller, milepæl, kodegjennomgang, ferdig-definisjon

__Tidsbruk__: 2 til 3 skoletimer, gjerne fordelt på flere økter

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2, Vg3__: velge og bruke relevante
  systemutviklingsmetoder og -verktøy for samarbeid med andre

- [ ] __Informasjonsteknologi 2, Vg3__: vurdere og bruke strategier for
  feilsøking og testing av programkode

- [ ] __Vg2 informasjonsteknologi, Utvikling__: beskrive og anvende relevante
  versjonskontrollsystemer i utviklingsprosjekter

- [ ] __Programmering, 10. trinn__: planlegge og skape et digitalt produkt og
  vurdere dette med tanke på brukervennlighet

- [ ] __Programmering, 10. trinn__: gjøre rede for hvordan datamaskiner og
  dataprogram fungerer, og forklare egne og andres koder

- [ ] __Arbeidslivsfag, 10. trinn__: samarbeide, fremme forslag og delta i
  beslutninger i et arbeidsfellesskap

- [ ] __Entreprenørskap og bedriftsutvikling 2__: vurdere bruk av prosjekt og
  andre samarbeidsformer og betydningen nettverksbygging har i utvikling av
  virksomheter

## Forslag til vurderingskriterier {.challenge}

Milepælen `Versjon 2` er lukket. Hver elev har laget minst én pull request som
er godkjent og flettet inn, og har gjennomgått minst én pull request med en
kommentar. Hver historie har akseptansekriterier, og gjennomgåeren har testet
dem. Eleven kan forklare forskjellen på rollene, hva teamets ferdig-definisjon
er, og hvorfor ingen gjennomgår sin egen kode.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Prøv en idé på en gren](../grener/grener),
  [Samarbeid med pull request](../samarbeid/samarbeid) og [Planlegg med issues
  og prosjekttavle](../issues_og_prosjekt/issues_og_prosjekt).

- [ ] __Utstyr__: Én PC per elev med VS Code, Git og Python, og en GitHub-konto
  per elev.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](team_runde)

### Tips til veiledere

- Sett sammen gruppene og velg den første produkteieren før timen. Gruppa kan
  bruke repoet `gjett_tallet` til produkteieren, eller starte et nytt repo.

- Er det elever under 13 år, kan de jobbe sammen med en voksen som har konto,
  eller være produkteier uten konto: de bestemmer rekkefølgen og tester
  spillet på maskinen til en annen, mens en annen elev flytter lappene.

- Flere grener endrer den samme fila, så det blir nesten alltid
  flettekonflikter. Det er meningen. Be elevene løse dem sammen med den som
  skrev den andre koden.

- En prosjekttavle på en personlig konto er ikke delt med de andre før
  produkteieren gir dem tilgang under **Manage access**. Sjekk dette tidlig.

- Avslutningssamtalen i steg 7 er en enkel tilbakeblikk-samtale
  (retrospective). Den er en god anledning til å snakke om hvordan man gir og
  tar imot tilbakemeldinger.

- Bruker elevene KI-assistent, gjelder [KI-regelen for
  klubben](../../ki_veiledere/klubbens_ki_regel/klubbens_ki_regel). Den som
  lager pull requesten, må kunne forklare koden.

### Ordliste

- __produkteier (product owner)__: bestemmer hva som er viktigst, og godtar
  resultatet.
- __utvikler (developer)__: lager endringen.
- __gjennomgåer (reviewer)__: leser og tester endringen.
- __milepæl (milestone)__: saker som skal være ferdige samtidig.
- __epos (epic)__, __brukerhistorie (user story)__: et stort mål, og hva én
  bruker vil og hvorfor.
- __akseptansekriterier (acceptance criteria)__: «Gitt ..., når ..., så ...».
- __pull request__: en forespørsel om å flette en gren inn i `main`.
- __kodegjennomgang (code review)__: en annen leser koden før den flettes inn.
- __godkjenne (approve)__: gjennomgåeren sier at koden kan flettes inn.
- __ferdig-definisjon (definition of done)__: gjennomgått, flettet inn i `main`
  og testet.
- __versjonsmerke (tag)__ og __utgivelse (release)__: et navn som `v2.0` på en
  versjon, og en side på GitHub som viser den.

### Hva er testet

Oppgaven er skrevet i november 2026 ut fra github.com og VS Code. Den er ikke
prøvd med elever ennå.
