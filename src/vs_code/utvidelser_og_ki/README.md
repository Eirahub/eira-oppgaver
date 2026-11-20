---
title: Lærerveiledning - Utvidelser og KI i VS Code
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lærer å vurdere en utvidelse før de installerer den, rydder i
utvidelsene sine og slår av KI-funksjonene i VS Code. Oppgaven gir også noen
enkle regler for elever som får bruke Copilot. Opplysningene ble sjekket mot
code.visualstudio.com og kildekoden til VS Code i november 2026.

## Oppgaven passer til: {.check}

__Fag__: Programmering, IT1, IT2

__Anbefalte trinn__: 8. trinn til VG3, og veiledere

__Tema__: Verktøy, digital sikkerhet, kunstig intelligens

__Nivå__: 2 (nybegynner)

__Tidsbruk__: 30 minutter

## Kompetansemål {.challenge}

- [ ] [Læreplan i valgfaget programmering
  (PRG01-02)](https://www.udir.no/lk20/prg01-02)

- [ ] [Læreplan i informasjonsteknologi
  (INF01-02)](https://www.udir.no/lk20/inf01-02), for IT1 og IT2

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan vurdere om en utvidelse er trygg å installere.

- [ ] Eleven kan slå KI-funksjoner av og på i VS Code.

- [ ] Eleven kan forklare hvorfor man bør forstå kode fra en KI før man bruker
  den.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Bli kjent med VS Code](../bli_kjent/bli_kjent.html).

- [ ] __Utstyr__: VS Code.

## Fremgangsmåte

Her kommer tips og erfaringer til stegene i oppgaven. [Klikk her for å se
oppgaveteksten.](utvidelser_og_ki.html){target=_blank}


# Steg 1: Trygge utvidelser {.activity}

- [ ] Det blå hakemerket betyr at utgiveren har bevist at den eier domenet sitt,
  og at Marketplace har sjekket at domenet har eksistert i minst seks måneder.
  Det er ikke en garanti for at utvidelsen er trygg.

- [ ] Marketplace skanner nye utvidelser for skadevare og blokkerer kjente
  skadelige utvidelser. VS Code avinstallerer utvidelser som havner på
  blokkeringslista.

- [ ] Fra VS Code 1.97 spør VS Code om man stoler på en ny utgiver første gang.

- [ ] Mistenkelige utvidelser kan meldes med **Report a concern** på siden til
  utvidelsen på Marketplace.

Kilde: [Extension runtime
security](https://code.visualstudio.com/docs/configure/extensions/extension-runtime-security).


# Steg 2: Anbefalte utvidelser {.activity}

- [ ] **Python** fra Microsoft, ID `ms-python.python`.

- [ ] **Live Preview** fra Microsoft, ID `ms-vscode.live-server`.

- [ ] **Norwegian Bokmål - Code Spell Checker** fra Street Side Software, ID
  `streetsidesoftware.code-spell-checker-norwegian-bokmal`.

- [ ] Python tar med seg Pylance, Python Debugger og Python Environments.

- [ ] Den norske ordboka slås på med kommandoen **Enable Norwegian Bokmål Spell
  Checker Dictionary**, eller med `"cSpell.language": "en,nb-NO"` i
  innstillingene. Kilde: [siden på
  Marketplace](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-norwegian-bokmal).

- [ ] Installer utvidelsene på klubbens maskiner før økten, så elevene slipper å
  lete i søkeresultatene.


# Steg 3: Copilot og KI {.activity}

- [ ] GitHub Copilot er bygget inn i VS Code. Innlogging med en GitHub-konto
  uten abonnement gir planen *Copilot Free*, med en månedlig kvote. Kilde: [Set
  up GitHub Copilot in VS
  Code](https://code.visualstudio.com/docs/copilot/setup).

- [ ] GitHub krever at brukeren er 13 år eller eldre. Kilde: [GitHub Terms of
  Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service).

- [ ] Innstillingen `chat.disableAIFeatures` skjuler chat og kodeforslag og slår
  av Copilot. Den kan settes for brukeren eller bare for én mappe (workspace).
  Menyen **Chat** i tittellinja har også valget **Learn How to Hide AI
  Features**, som åpner den samme innstillingen. Kilde: [Copilot
  FAQ](https://code.visualstudio.com/docs/copilot/faq).

- [ ] Skoler som styrer maskinene sentralt, kan låse KI-innstillinger med
  policyer. Kilde: [Manage AI
  settings](https://code.visualstudio.com/docs/enterprise/manage-ai-settings).

- [ ] Bestem i klubben hva som gjelder før økten. Kurset [KI i
  kodeklubben](../../ki_veiledere/) har en egen oppgave om å [lage en KI-regel
  for klubben](../../ki_veiledere/klubbens_ki_regel/klubbens_ki_regel.html).

## Variasjoner {.challenge}

- [ ] La elevene finne en utvidelse de har lyst på, og vurdere den etter
  sjekklista i steg 1 før de installerer den.

## Eksterne ressurser {.challenge}

- [ ] [Extension Marketplace
  (engelsk)](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace)
