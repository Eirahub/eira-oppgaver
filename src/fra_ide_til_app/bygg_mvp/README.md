---
title: Lærerveiledning - Bygg MVP-en
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven bygger MVP-en med en KI-kodeassistent i en fast løkke: én sak (issue),
en gren (branch), plan, sjekk, commit, pull request med `Closes #N`,
kodegjennomgang (code review), fletting og ny samtale. Eleven leser koden før
de godkjenner den, øver på å beskrive feil, fører logg over KI-feil og går
tilbake med Git.

## Oppgaven passer til: {.check}

__Fag__: Informasjonsteknologi, programmering, salg, service og reiseliv

__Anbefalte trinn__: Videregående

__Tema__: KI-assistert utvikling, kodelesing, feilsøking, versjonskontroll

__Tidsbruk__: 2 til 4 timer, gjerne over flere økter

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2__: vurdere og bruke strategier for feilsøking og
  testing av programkode

- [ ] __Informasjonsteknologi 2__: utforske og vurdere alternative løsninger
  for design og implementering av et program

- [ ] __Vg2 salg, service og reiseliv__: bruke digitale systemer og plattformer
  til å veilede, informere, kommunisere og følge opp kunder, brukere, gjester og
  kolleger

## Forslag til vurderingskriterier {.challenge}

Git-historikken viser små steg med forståelige meldinger. Eleven kan vise én
feil de fikk rettet, og forklare hvordan de beskrev den. `LOGG.md` viser hva
KI-en gjorde feil. MVP-historiene i `PLAN.md` er krysset av.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Kom i gang med en
  KI-kodeassistent](../kom_i_gang_claude_code/kom_i_gang_claude_code), [Git i VS
  Code](../../vs_code/git_i_vs_code/git_i_vs_code) og [Tilbake i
  tid](../../git/tidsreise/tidsreise).

- [ ] __Utstyr__: PC med VS Code, Git, nettleser og Claude Code.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](bygg_mvp)

### Tips til veiledere

- Les [Veiledning for
  lærere](../veiledning_for_laerere/veiledning_for_laerere) om risiko,
  kontoer og ansvar i kurset før du starter.

- Commit etter hvert steg er det som gjør at elevene tør å la KI-en endre ting.
  Sjekk Git-historikken underveis.

- Jobber elevene i par eller gruppe, går en annen enn den som bygde, gjennom
  pull requesten. En elev som jobber alene, går gjennom sin egen. Grener og
  pull request er forklart i [Prøv en idé på en gren](../../git/grener/grener)
  og [Samarbeid med pull request](../../git/samarbeid/samarbeid).

- Når en elev sitter fast: be dem lese beskjeden sin høyt. Ofte er den
  utydelig.

- Elever som har brukt KI mye, vil gjerne be om hele appen på én gang. La dem
  prøve, og sammenlign med løkka. Det gir en god samtale om kontroll og
  kvalitet.

- Steg 2, å lese koden før man sier ja, er det viktigste i oppgaven. Be
  eleven vise deg ett varselstegn de fant.

- Testing og universell utforming er i [Test og
  kvalitet](../test_og_kvalitet/test_og_kvalitet), og lagring av data i
  [Lagre data trygt](../lagre_data/lagre_data).

- Elevene kan bruke det KI-verktøyet de har valgt. Er eleven under
  aldersgrensen for verktøyet, står en forelder eller lærer som ansvarlig.

### Hva er testet

Oppgaven er skrevet i november 2026 og er ikke prøvd med elever ennå.
