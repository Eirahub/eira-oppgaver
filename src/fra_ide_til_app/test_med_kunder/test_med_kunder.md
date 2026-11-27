---
title: Test med kunder
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

**Fase:** Test med kunder (alpha/beta). Se [Fra idé til produksjon](../fasene/fasene).

En app er ikke ferdig før kundene har brukt den. I denne oppgaven publiserer du
MVP-en, lar tre kunder teste den, lager neste versjon ut fra det de sa, og
presenterer appen i en kort pitch.

![Illustrasjon av en mobil med appen, tre snakkebobler med tilbakemeldinger og
en liste med neste versjon](test.png)

## Før du starter {.tip}

Du trenger en MVP som virker, fra [Bygg MVP-en](../bygg_mvp/bygg_mvp), og den
må ligge på GitHub, se [Del koden på
GitHub](../../git/del_pa_github/del_pa_github). Gjør [Sikkerhet og
risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko) og [Ansvar og
personvern](../ansvar_og_personvern/ansvar_og_personvern) først. Nå skal ekte
folk bruke appen.


# Steg 1: Klar til å publisere? {.activity}

Før appen kommer ut til ekte kunder, sjekker du at den er trygg nok. Dette er
stegene mange hopper over, og som gjør at apper blir hacket den første uka.

## Sjekkliste {.check}

- [ ] Hvilket risikonivå er appen på? Er det skrevet i `PLAN.md`?

- [ ] Har du en `RISIKO.md` med tiltak for de største risikoene?

- [ ] Ingen passord, API-nøkler eller andre hemmeligheter i koden eller i
  repoet.

- [ ] Samler appen inn personopplysninger? Da må personvernerklæringen ligge i
  appen, og du må vite hvor dataene lagres og når de slettes.

- [ ] Bruker du oppdiktede testdata eller ekte data? Ekte data bare når alt over
  er på plass.

- [ ] Er KI-laget innhold som kan misforstås, merket?

- [ ] Har en voksen som står som ansvarlig, sett gjennom dette hvis du er under
  aldersgrensen for tjenestene?

Kan du ikke krysse av alt? Rett det før du publiserer.


# Steg 2: Publiser {.activity}

For å teste med kunder trenger du en lenke. **GitHub Pages** er gratis og passer
godt til en prototype.

## Sjekkliste {.check}

- [ ] Følg [Publiser en nettside med GitHub
  Pages](../../git/github_pages/github_pages), eller be Claude Code hjelpe deg:

  ```
  Hjelp meg å publisere appen med GitHub Pages. Forklar hvert steg.
  ```

- [ ] Åpne lenken på mobilen. Virker alt der også?

## Prototype eller bedrift? {.tip}

Det finnes mange tjenester for publisering, som GitHub Pages, Netlify, Vercel
og Cloudflare Pages. Noen gratisplaner er bare for test, skole eller privat
bruk. Skal ungdomsbedriften bruke appen til ekte salg, må du sjekke at
vilkårene tillater det. Bruk det du fant i [Hvilken type
app?](../typer_apper/typer_apper)


# Steg 3: La kundene teste {.activity}

## Sjekkliste {.check}

- [ ] Send lenken til tre kunder, gjerne de samme som du intervjuet. Fortell
  hva testen er til, at du skriver ned svarene uten navn, og at de kan si nei
  eller slutte når de vil. Er en testperson under 15 år, spør en forelder
  først.

- [ ] Gi hver kunde en oppgave, for eksempel «Bestill vask i morgen». Se på mens
  de gjør det, hvis du kan. Ikke hjelp.

- [ ] Spør etterpå:

  1. Hva var lett?
  2. Hvor stoppet du eller lurte?
  3. Hva savnet du?
  4. Ville du brukt den neste gang? Hvorfor eller hvorfor ikke?

- [ ] Skriv ned svarene uten navn.


# Steg 4: Neste versjon {.activity}

Du kan ikke gjøre alt kundene ønsker. Velg det som betyr mest.

## Sjekkliste {.check}

- [ ] Sorter tilbakemeldingene i tre grupper: **Feil**, **Vanskelig** og
  **Ønsker**.

- [ ] Lag en sak (issue) på GitHub for hver feil og hvert punkt du vil gjøre
  noe med. Gi feil merkelappen (label) `bug`, og ting som er vanskelige eller
  ønsket, merkelappen `enhancement`.

- [ ] Rett alle feil. Velg de to viktigste fra **Vanskelig**.

- [ ] Skriv dem inn i `PLAN.md` som nye MVP-historier, og bygg dem med løkka
  fra [Bygg MVP-en](../bygg_mvp/bygg_mvp): gren, pull request med `Closes #N`,
  gjennomgang og fletting.

- [ ] Flytt resten av ønskene til **Senere**.

- [ ] Gå gjennom **Antakelser vi må teste** i `PLAN.md`. Hvilke stemte, hvilke
  stemte ikke, og hvilke vet dere fortsatt ikke? Skriv det ved hver antakelse.


# Steg 5: Pitch {.activity}

En **pitch** er en kort presentasjon som skal få folk til å tro på idéen. Den
kan brukes på messer, i konkurranser og når du skal få nye kunder.

## Sjekkliste {.check}

- [ ] Lag en pitch på 2 minutter med fem deler:

  1. **Problemet**: problemsetningen og noe en kunde sa.
  2. **Løsningen**: verdiforslaget.
  3. **Demo**: vis appen i 30 sekunder.
  4. **Bevis**: hva kundene sa etter testen.
  5. **Neste steg**: hva dere trenger, og hva det koster.

- [ ] Øv på å holde den for klassen.

## Prompter du kan lære av {.protip}

Bytt ut det som står i klammer. Legg aldri inn navn, passord eller andres
personopplysninger. Se hvorfor promptene virker, og lag dine egne.

- **Lag testen:**

  ```
  Lag tre oppgaver kundene skal løse i appen, ut fra MVP-historiene i
  PLAN.md. Oppgavene skal ikke avsløre hvor de skal trykke.
  ```

- **Sorter tilbakemeldingene:**

  ```
  Her er notatene fra testene, uten navn: [lim inn]. Sorter dem i
  Feil, Vanskelig og Ønsker. Ikke legg til noe som ikke står der.
  ```

- **Øv på pitchen:**

  ```
  Her er pitchen min: [lim inn]. Spill juryen i en konkurranse for
  elevbedrifter, og still de tre vanskeligste spørsmålene.
  ```

## Test deg selv {.flag}

- [ ] Kan noen som ikke har sett appen før, forklare den etter pitchen?

## Lagre {.save}

Lag en commit med meldingen `Versjon 2 etter kundetest`.

## Ferdig med fasen {.check}

Fasen **Test med kunder** er ferdig når:

- [ ] Sjekken i steg 1 er gjort.

- [ ] Tre kunder har testet appen.

- [ ] Alt under **Feil** er rettet, og sakene er lukket.

- [ ] En voksen har godkjent der det trengs.


## Utfordring {.challenge}

Mål om appen virker. Hvor mange bestillinger kom via appen den første uka,
sammenlignet med før?
