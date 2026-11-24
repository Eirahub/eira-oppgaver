---
title: Gi appen et eget uttrykk
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Når mange lager apper med KI, begynner appene å ligne på hverandre. Folk lærer
seg fort å kjenne igjen en app som er «laget av KI på en ettermiddag», og da
stoler de mindre på den. I denne oppgaven finner du KI-sporene i appen din,
lager en enkel stilguide for bedriften og får KI-en til å følge den. Målet er en
app som ser ut som den hører til akkurat deres bedrift.

![Illustrasjon av to versjoner av samme app side om side: til venstre en
generisk side med lilla gradient og emojier, til høyre en side med egne farger,
eget bilde og tekst i kundenes ord](uttrykk.png)

## Før du starter {.tip}

Du trenger en MVP som virker, fra [Bygg MVP-en](../bygg_mvp/bygg_mvp), og
verdiforslaget fra [Forretningsidéen](../forretningsideen/forretningsideen).


# Steg 1: Finn KI-sporene {.activity}

KI-verktøy velger det som er vanligst, hvis du ikke sier noe annet. Derfor
ender mange apper med de samme valgene.

Typiske spor i **utseendet**:

- lilla eller blå fargeovergang (gradient) i toppen
- emojier foran overskrifter og i knapper
- tre like kort på rad med et ikon øverst i hvert
- alt sentrert, store runde hjørner og skygger overalt
- samme standardskrift og samme knappefarge som tusen andre sider

Typiske spor i **teksten**:

- store ord uten innhold: «sømløs», «revolusjonerende», «løft opplevelsen din»
- «Det er ikke bare X, det er Y»
- ting som kommer i tre: «raskt, enkelt og trygt»
- engelske uttrykk oversatt ord for ord
- overdreven entusiasme og utropstegn

Typiske spor i **innholdet**:

- oppdiktede kundeomtaler og tall, som «over 10 000 fornøyde kunder»
- stockbilder som ikke viser noe ekte fra bedriften
- tekst som kunne stått på hvilken som helst side

## Sjekkliste {.check}

- [ ] Gå gjennom appen din og sett en strek under hvert KI-spor du finner.

- [ ] Finn tre andre apper eller nettsider som du tror er laget med KI. Hva har
  de felles?

## Oppdiktet er ikke bare kjedelig {.tip}

Oppdiktede kundeomtaler og tall er ikke bare et KI-spor. Det er villedende
markedsføring, og det er ikke lov. Bruk bare ekte omtaler og ekte tall.


# Steg 2: Hvem er dere? {.activity}

Et eget uttrykk starter ikke med farger. Det starter med hva bedriften står
for, og hvem dere snakker til.

## Sjekkliste {.check}

- [ ] Skriv tre ord som beskriver bedriften, for eksempel «lokal», «rask» og
  «ærlig». Unngå ord alle bruker, som «kvalitet» og «innovativ».

- [ ] Hvordan snakker dere til kundene? Velg én: som en kompis, som en
  profesjonell butikk, eller noe midt imellom. Skriv to eksempelsetninger.

- [ ] Hva skiller dere fra konkurrentene? Skriv det i én setning.

## Eksempel {.tip}

Sykkelvasken: «lokal», «rask», «skoleglad». Vi snakker som en medelev. «Vi
vasker sykkelen din mens du har matte.»


# Steg 3: Lag en stilguide {.activity}

En **stilguide** samler valgene, så alle i bedriften, og KI-en, gjør likt.

## Sjekkliste {.check}

- [ ] Lag fila `STIL.md` i prosjektmappa, og fyll ut:

  ```markdown
  # Stilguide for [navn]

  ## Hvem vi er
  Tre ord: ...
  Slik snakker vi: ...
  Dette skiller oss fra andre: ...

  ## Farger
  Hovedfarge: #......  (hvorfor: ...)
  Bakgrunn: #......
  Tekst: #......

  ## Skrift
  Overskrifter: ...
  Brødtekst: ...

  ## Bilder
  Egne bilder av produktet og stedet. Ingen stockbilder.
  Ingen ansikter uten at personen har sagt ja.

  ## Tekst
  Skriv som kundene snakker. Bruk ord fra intervjuene.
  Ingen emojier i overskrifter. Ingen store ord uten innhold.

  ## Unngå
  - fargeoverganger
  - tre like kort på rad
  - oppdiktede omtaler og tall
  ```

- [ ] Velg farger som passer bedriften, ikke standardfargene til verktøyet.
  Sjekk at teksten har god kontrast mot bakgrunnen.

- [ ] Ta to eller tre egne bilder av produktet eller stedet. Har bedriften en
  logo, bruk den.


# Steg 4: Få KI-en til å følge stilguiden {.activity}

## Sjekkliste {.check}

- [ ] Legg til en regel i `CLAUDE.md` (eller tilsvarende fil for verktøyet du
  bruker):

  ```
  - Følg STIL.md for farger, skrift, bilder og tekst.
  ```

- [ ] Skriv:

  ```
  Les STIL.md. Gå gjennom appen og list opp alt som bryter med stilguiden,
  eller som ser generisk ut. Foreslå endringer, men ikke gjør dem før jeg
  har sagt ja.
  ```

- [ ] Godta endringene én og én, og se på resultatet i nettleseren hver gang.

- [ ] Skriv om de viktigste tekstene selv. Bruk ord kundene brukte i
  intervjuene. KI-en kan hjelpe med rettskriving, men ordene skal være deres.


# Steg 5: Test troverdigheten {.activity}

## Sjekkliste {.check}

- [ ] Vis appen til en som ikke har sett den før, i fem sekunder. Lukk den, og
  spør:

  1. Hva er dette for noe?
  2. Hvem står bak?
  3. Ville du stolt på den nok til å bestille?

- [ ] Sier de «det ser ut som noe en KI har laget»? Spør hva som ga dem det
  inntrykket, og rett det.

## Test deg selv {.flag}

- [ ] Kan du peke på tre ting i appen som bare passer for deres bedrift?

## Lagre {.save}

Lag en commit med meldingen `Eget uttrykk etter stilguide`.


## Utfordring {.challenge}

Er det greit å bruke KI til å lage appen, så lenge den ikke ser KI-laget ut?
Skriv hva du mener, og når det er riktig å si fra om at noe er laget med KI.
