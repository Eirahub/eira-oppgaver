---
title: Lærerveiledning - KI-assistent i teamet
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene bruker GitHub Copilot i VS Code som hjelper i et teamprosjekt. Copilot
foreslår brukerhistorier ut fra et epos, lager utkast til innsjekkingsmelding og
beskrivelse av pull request. Til slutt vurderer elevene KI-skrevet kode i en
kodegjennomgang. Hovedpoenget er at eleven er ansvarlig for koden, og at KI
ikke erstatter gjennomgang.

## Oppgaven passer til: {.check}

__Fag__: Programmering, IT1, IT2, Vg2 informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3, og veiledere

__Tema__: Kunstig intelligens, samarbeid, kodegjennomgang

__Nivå__: 3

__Tidsbruk__: 60 minutter, gjerne i par eller grupper på 3 til 4

## Kompetansemål {.challenge}

- [ ] __Programmering, 10. trinn__: gjøre rede for hvordan datamaskiner og
  dataprogram fungerer, og forklare egne og andres koder

- [ ] __Informasjonsteknologi 2, Vg3__: velge og bruke relevante
  systemutviklingsmetoder og -verktøy for samarbeid med andre

- [ ] __Informasjonsteknologi 2, Vg3__: vurdere og bruke strategier for
  feilsøking og testing av programkode

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan bruke en KI-assistent til å lage utkast til brukerhistorier,
  innsjekkingsmeldinger og beskrivelser av pull requests.

- [ ] Eleven kan vurdere KI-skrevet kode mot akseptansekriteriene, forklare den
  og teste den før den godkjennes.

- [ ] Eleven kan forklare hvorfor den som sender inn koden er ansvarlig for
  den, også når KI har skrevet den.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Git i VS Code](../git_i_vs_code/git_i_vs_code),
  [Utvidelser og KI](../utvidelser_og_ki/utvidelser_og_ki), [Planlegg med
  issues og prosjekttavle](../../git/issues_og_prosjekt/issues_og_prosjekt) og
  [Samarbeid med pull request](../../git/samarbeid/samarbeid).

- [ ] __Utstyr__: VS Code med Git, Python og utvidelsen GitHub Pull Requests,
  og en GitHub-konto per elev som skal bruke Copilot.

## Fremgangsmåte

Her kommer tips og erfaringer til stegene i oppgaven. [Klikk her for å se
oppgaveteksten.](ki_i_teamet){target=_blank}


# Før økten {.activity}

- [ ] Bestem hva som gjelder i klubben. Se [Lag en KI-regel for
  klubben](../../ki_veiledere/klubbens_ki_regel/klubbens_ki_regel).

- [ ] Copilot krever innlogging med GitHub, og GitHub har 13 års aldersgrense.
  Uten abonnement får eleven planen *Copilot Free*, med en månedlig kvote.

- [ ] Alternativ for elever under 13 år eller uten konto: veilederen viser steg
  1 til 3 på storskjerm. Steg 4 trenger ikke konto, bare Python.

- [ ] Elevene bør ha et felles repo med saker på en prosjekttavle fra
  [Planlegg med issues og
  prosjekttavle](../../git/issues_og_prosjekt/issues_og_prosjekt). Har dere
  ikke det, holder det med et repo per elev og en sak laget for anledningen.


# Steg 1 til 3: KI som hjelper {.activity}

- [ ] Poenget er ikke at elevene skal lære å skrive gode spørsmål til KI, men
  at de skal lese og rette det KI lager.

- [ ] La produkteieren i gruppa bestemme hvilken historie som går videre. KI
  skal ikke velge for dem.

- [ ] Knappen for innsjekkingsmelding sitter i meldingsfeltet i Source Control.
  Den vises bare når Copilot er slått på og eleven er logget inn.

- [ ] Be elevene skrive i pull requesten at de har brukt KI. Det er vanlig i
  mange team, og det hjelper gjennomgåeren.


# Steg 4: Kodegjennomgang {.activity}

- [ ] Koden har to feil med vilje: den slipper gjennom negative poeng, og den
  har en grense på 100 som ingen har bedt om. Begge deler er typisk for KI:
  koden ser ryddig ut, men følger ikke kriteriene.

- [ ] Én løsning:

  ```python
  def endre_poeng(poeng, endring):
      poeng = poeng + endring
      if poeng < 0:
          poeng = 0
      return poeng
  ```

- [ ] Snakk om hvorfor «KI skrev det» aldri er en unnskyldning i en
  gjennomgang. Den som sender inn og den som godkjenner, har begge ansvar.

## Variasjoner {.challenge}

- [ ] La gruppene bytte pull requests og gjennomgå hverandres KI-kode med
  sjekklista i steg 4.

- [ ] Gjør steg 4 uten KI i det hele tatt: veilederen deler koden, og elevene
  gjennomgår den.


# Ordliste {.activity}

| Norsk | Engelsk |
|---|---|
| sak | issue |
| prosjekttavle | project board |
| epos | epic |
| brukerhistorie | user story |
| akseptansekriterier | acceptance criteria |
| gren | branch |
| innsjekking | commit |
| innsjekkingsmelding | commit message |
| sende | push |
| kodegjennomgang | code review |
| godkjenne | approve |
| produkteier | product owner |
| gjennomgåer | reviewer |
