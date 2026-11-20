---
title: Utvidelser og KI i VS Code
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

**Utvidelser** (extensions) gir VS Code nye evner, for eksempel støtte for et
språk eller en forhåndsvisning av nettsider. De fleste er laget av andre enn
Microsoft, og en utvidelse kan gjøre nesten hva som helst på maskinen din.
Derfor må du velge med omhu.

VS Code har også en innebygd KI-assistent, **GitHub Copilot**. I denne oppgaven
lærer du å velge trygge utvidelser, og å slå av KI når dere ikke skal bruke det.


# Steg 1: Se etter en trygg utvidelse {.activity}

## Sjekkliste {.check}

- [ ] Åpne **Extensions** med **Ctrl** + **Shift** + **X**.

- [ ] Søk etter `Python`. Du får mange treff.

- [ ] Klikk på den som heter **Python** fra **Microsoft**. Siden for utvidelsen
  åpnes i editoren.

- [ ] Finn navnet på utgiveren (publisher) under tittelen. Ser du et blått
  hakemerke ved siden av? Det betyr at utgiveren er **verifisert**.

<!-- BILDE: Siden til utvidelsen Python i VS Code, med utgiveren Microsoft og
det blå hakemerket ringet inn -->

## Slik vurderer du en utvidelse {.check}

- [ ] Er utgiveren verifisert (blått hakemerke)?

- [ ] Har den mange nedlastinger og gode vurderinger?

- [ ] Er den oppdatert det siste året?

- [ ] Ligner navnet mistenkelig på en kjent utvidelse, men med en annen utgiver?
  Da skal du la den være.

- [ ] Trenger du den egentlig? Færre utvidelser gir færre ting som kan gå galt.

## Spør om å stole på utgiveren {.tip}

Første gang du installerer noe fra en ny utgiver, spør VS Code om du stoler på
den. Les navnet på utgiveren før du svarer ja.


# Steg 2: Utvidelser for kodeklubben {.activity}

Dette er alt du trenger for oppgavene i kurset:

- **Python** fra Microsoft: Python med kjøring og debugging.

- **Live Preview** fra Microsoft: forhåndsvisning av nettsider.

Har du lyst på stavekontroll på norsk i tekst og kommentarer:

- **Norwegian Bokmål - Code Spell Checker** fra Street Side Software. Den
  installerer også **Code Spell Checker**.

## Sjekkliste {.check}

- [ ] Sjekk at du har **Python** og **Live Preview**.

- [ ] Skriv `@installed` i søkefeltet i **Extensions**. Nå ser du alt som er
  installert.

- [ ] Er det noe du ikke bruker? Trykk på tannhjulet ved utvidelsen og velg
  **Uninstall**.


# Steg 3: KI-assistenten Copilot {.activity}

**GitHub Copilot** kan foreslå kode mens du skriver, og svare på spørsmål i et
chatvindu. Det kan være nyttig, men når du skal *lære* å programmere, er det
lett å la KI gjøre jobben. Da lærer du lite.

Copilot krever innlogging med en GitHub-konto, og GitHub har 13 års
aldersgrense.

## Klubbens regel {.tip}

Spør veilederen hva som gjelder i deres kodeklubb. Mange klubber slår av KI når
dere lærer noe nytt, og bruker den bare til bestemte ting.

## Slå av KI-funksjonene {.check}

- [ ] Åpne innstillingene med **File** > **Preferences** > **Settings**, eller
  trykk **Ctrl** + **,** (komma).

- [ ] Skriv `chat.disableAIFeatures` i søkefeltet.

- [ ] Huk av i boksen. Nå er chat og kodeforslag skjult, og Copilot er slått av.

- [ ] Fjern haken når du vil slå det på igjen.

## Bruker du Copilot? {.check}

- [ ] Les alltid koden KI foreslår, og forklar den for deg selv før du bruker
  den.

- [ ] Ikke lim inn passord, navn eller andre personopplysninger i chatten.

- [ ] Kjør koden og test den. KI tar ofte feil.

- [ ] Kan du ikke forklare koden, skriv den om selv.


# Til veiledere {.challenge}

- [ ] Kurset [KI i kodeklubben](../../ki_veiledere/) hjelper dere å lage en
  felles KI-regel og å møte elever som har brukt KI.
