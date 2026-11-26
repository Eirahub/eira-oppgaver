---
title: Test med kundar
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

**Fase:** Test med kundar (alpha/beta). Sjå [Frå idé til produksjon](../fasene/fasene_nn).

Ein app er ikkje ferdig før kundane har brukt han. I denne oppgåva publiserer
du MVP-en, lèt tre kundar teste han, lagar neste versjon ut frå det dei sa, og
presenterer appen i ein kort pitch.

![Illustrasjon av ein mobil med appen, tre snakkebobler med tilbakemeldingar og
ei liste med neste versjon](test_nn.png)

## Før du startar {.tip}

Du treng ein MVP som verkar, frå [Bygg MVP-en](../bygg_mvp/bygg_mvp_nn), og han
må liggje på GitHub, sjå [Del koden på
GitHub](../../git/del_pa_github/del_pa_github). Gjer [Tryggleik og
risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko_nn) og [Ansvar og
personvern](../ansvar_og_personvern/ansvar_og_personvern_nn) først. No skal
ekte folk bruke appen.


# Steg 1: Klar til å publisere? {.activity}

Før appen kjem ut til ekte kundar, sjekkar du at han er trygg nok. Dette er
stega mange hoppar over, og som gjer at appar blir hacka den første veka.

## Sjekkliste {.check}

- [ ] Kva risikonivå er appen på? Er det skrive i `PLAN.md`?

- [ ] Har du ei `RISIKO.md` med tiltak for dei største risikoane?

- [ ] Ingen passord, API-nøklar eller andre løyndomar i koden eller i repoet.

- [ ] Samlar appen inn personopplysningar? Då må personvernerklæringa liggje i
  appen, og du må vite kvar dataa blir lagra og når dei blir sletta.

- [ ] Bruker du oppdikta testdata eller ekte data? Ekte data berre når alt over
  er på plass.

- [ ] Er KI-laga innhald som kan mistydast, merkt?

- [ ] Har ein vaksen som står som ansvarleg, sett gjennom dette viss du er
  under aldersgrensa for tenestene?

Kan du ikkje kryssa av alt? Rett det før du publiserer.


# Steg 2: Publiser {.activity}

For å teste med kundar treng du ei lenkje. **GitHub Pages** er gratis og passar
godt til ein prototype.

## Sjekkliste {.check}

- [ ] Følg [Publiser ei nettside med GitHub
  Pages](../../git/github_pages/github_pages), eller be Claude Code hjelpe deg:

  ```
  Hjelp meg å publisere appen med GitHub Pages. Forklar kvart steg.
  ```

- [ ] Opne lenkja på mobilen. Verkar alt der òg?

## Prototype eller bedrift? {.tip}

Det finst mange tenester for publisering, som GitHub Pages, Netlify, Vercel og
Cloudflare Pages. Nokre gratisplanar er berre for test, skule eller privat
bruk. Skal ungdomsbedrifta bruke appen til ekte sal, må du sjekke at vilkåra
tillèt det. Bruk det du fann i [Kva type app?](../typer_apper/typer_apper_nn)


# Steg 3: La kundane teste {.activity}

## Sjekkliste {.check}

- [ ] Send lenkja til tre kundar, gjerne dei same som du intervjua. Fortel
  kva testen er til, at du skriv ned svara utan namn, og at dei kan seie nei
  eller slutte når dei vil. Er ein testperson under 15 år, spør ein forelder
  først.

- [ ] Gi kvar kunde ei oppgåve, til dømes «Bestill vask i morgon». Sjå på medan
  dei gjer det, viss du kan. Ikkje hjelp.

- [ ] Spør etterpå:

  1. Kva var lett?
  2. Kvar stoppa du eller lurte?
  3. Kva sakna du?
  4. Ville du brukt han neste gong? Kvifor eller kvifor ikkje?

- [ ] Skriv ned svara utan namn.


# Steg 4: Neste versjon {.activity}

Du kan ikkje gjere alt kundane ønskjer. Vel det som betyr mest.

## Sjekkliste {.check}

- [ ] Sorter tilbakemeldingane i tre grupper: **Feil**, **Vanskeleg** og
  **Ønske**.

- [ ] Lag ei sak (issue) på GitHub for kvar feil og kvart punkt du vil gjere
  noko med. Gi feil merkelappen (label) `bug`, og ting som er vanskelege eller
  ønskte, merkelappen `enhancement`.

- [ ] Rett alle feil. Vel dei to viktigaste frå **Vanskeleg**.

- [ ] Skriv dei inn i `PLAN.md` som nye MVP-historier, og bygg dei med løkka
  frå [Bygg MVP-en](../bygg_mvp/bygg_mvp_nn): grein, pull request med
  `Closes #N`, gjennomgang og fletting.

- [ ] Flytt resten av ønska til **Seinare**.

- [ ] Gå gjennom **Antakingar vi må teste** i `PLAN.md`. Kva stemte, kva
  stemte ikkje, og kva veit de framleis ikkje? Skriv det ved kvar antaking.


# Steg 5: Pitch {.activity}

Ein **pitch** er ein kort presentasjon som skal få folk til å tru på ideen. Han
kan brukast på messer, i konkurransar og når du skal få nye kundar.

## Sjekkliste {.check}

- [ ] Lag ein pitch på 2 minutt med fem delar:

  1. **Problemet**: problemsetninga og noko ein kunde sa.
  2. **Løysinga**: verdiforslaget.
  3. **Demo**: vis appen i 30 sekund.
  4. **Prov**: kva kundane sa etter testen.
  5. **Neste steg**: kva de treng, og kva det kostar.

- [ ] Øv på å halde han for klassen.

## Prompter du kan lære av {.protip}

Byt ut det som står i klammer. Legg aldri inn namn, passord eller
personopplysningar om andre. Sjå kvifor promptane verkar, og lag dine eigne.

- **Lag testen:**

  ```
  Lag tre oppgåver kundane skal løyse i appen, ut frå MVP-historiene i
  PLAN.md. Oppgåvene skal ikkje avsløre kvar dei skal trykkje.
  ```

- **Sorter tilbakemeldingane:**

  ```
  Her er notata frå testane, utan namn: [lim inn]. Sorter dei i Feil,
  Vanskeleg og Ønske. Ikkje legg til noko som ikkje står der.
  ```

- **Øv på pitchen:**

  ```
  Her er pitchen min: [lim inn]. Spel juryen i ein konkurranse for
  elevbedrifter, og still dei tre vanskelegaste spørsmåla.
  ```

## Test deg sjølv {.flag}

- [ ] Kan nokon som ikkje har sett appen før, forklare han etter pitchen?

## Lagre {.save}

Lag ein commit med meldinga `Versjon 2 etter kundetest`.

## Ferdig med fasen {.check}

Fasen **Test med kundar** er ferdig når:

- [ ] Sjekken i steg 1 er gjord.

- [ ] Tre kundar har testa appen.

- [ ] Alt under **Feil** er retta, og sakene er lukka.

- [ ] Ein vaksen har godkjent der det trengst.


## Utfordring {.challenge}

Mål om appen verkar. Kor mange bestillingar kom via appen den første veka,
samanlikna med før?
