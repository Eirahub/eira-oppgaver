---
title: KI-assistent i teamet
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I mange team bruker utviklerne en KI-assistent. Den kan skrive utkast til
brukerhistorier (user stories), innsjekkingsmeldinger (commit messages) og
beskrivelser av pull requests. Den kan også skrive kode. Men KI tar ofte feil,
og den vet ikke hva teamet har bestemt.

I denne oppgaven bruker du **GitHub Copilot** i VS Code som hjelper i et
prosjekt, og du lærer å sjekke det den lager. Regelen er enkel: **Du er
ansvarlig for all kode du sender inn, også koden KI har skrevet.** KI erstatter
ikke kodegjennomgang (code review).

## Før du begynner {.tip}

- Spør veilederen hva som gjelder i klubben. Følg [klubbens
  KI-regel](../../ki_veiledere/klubbens_ki_regel/klubbens_ki_regel).

- Copilot krever en GitHub-konto, og GitHub har 13 års aldersgrense. Steg 1
  til 3 trenger konto. Er du yngre, ser du på mens veilederen viser stegene, og
  gjør steg 4 selv.

- Du bør ha gjort [Git i VS Code](../git_i_vs_code/git_i_vs_code), [Utvidelser
  og KI](../utvidelser_og_ki/utvidelser_og_ki), [Planlegg med issues og
  prosjekttavle](../../git/issues_og_prosjekt/issues_og_prosjekt) og [Samarbeid
  med pull request](../../git/samarbeid/samarbeid).

- Ikke lim inn passord, navn eller andre personopplysninger i chatten.


# Steg 1: Brukerhistorier fra et epos {.activity}

Et epos (epic) er et stort mål, for eksempel «Poeng i spillet». Det deles i
brukerhistorier: «Som ... vil jeg ... så jeg kan ...». Hver historie får
akseptansekriterier (acceptance criteria): «Gitt ... når ... så ...».

## Sjekkliste {.check}

- [ ] Åpne prosjektet dere jobber med i VS Code.

- [ ] Sjekk at KI er slått på. Innstillingen `chat.disableAIFeatures` skal være
  uten hake (se [Utvidelser og KI](../utvidelser_og_ki/utvidelser_og_ki)).

- [ ] Åpne chatten med **Ctrl** + **Alt** + **I**, eller trykk på
  chat-ikonet øverst i vinduet. Logg inn med GitHub hvis du blir spurt.

- [ ] Skriv:

  ```
  Lag tre brukerhistorier for eposet "Poeng i spillet". Skriv dem som
  "Som ... vil jeg ... så jeg kan ...". Gi hver historie to
  akseptansekriterier på formen "Gitt ... når ... så ...".
  ```

- [ ] Les forslagene. Velg den historien som passer best for prosjektet deres.

<!-- BILDE: Chatten i VS Code med tre foreslåtte brukerhistorier for eposet
Poeng i spillet -->

## Vurder forslaget {.check}

- [ ] Er det en ekte bruker i historien, og en grunn til at hun vil ha det?

- [ ] Kan akseptansekriteriene sjekkes med ja eller nei?

- [ ] Er det noe KI har funnet på som teamet ikke har bestemt? Stryk det.

- [ ] Skriv historien om med egne ord, og legg den inn som en sak (issue) på
  prosjekttavla (project board). Produkteieren (product owner) bestemmer om den
  skal med.

## KI foreslår, teamet bestemmer {.tip}

KI vet ikke hvem brukerne deres er. Den lager historier som *høres* riktige ut.
Det er teamet som har snakket med brukerne, så det er teamet som velger.


# Steg 2: Utkast til innsjekkingsmelding {.activity}

En god innsjekkingsmelding sier hva endringen gjør. Copilot kan lage et utkast
ut fra endringene dine.

## Sjekkliste {.check}

- [ ] Lag en gren (branch) for saken, for eksempel `feature/12-poengteller`.

- [ ] Gjør en liten endring i koden og lagre.

- [ ] Åpne **Source Control** med **Ctrl** + **Shift** + **G** og stage
  endringen med **+**.

- [ ] Trykk på knappen med stjerner (gnister) i meldingsfeltet. Den heter
  `Generate Commit Message`.

- [ ] Les meldingen. Stemmer den med det du faktisk endret?

- [ ] Rett meldingen så den er kort og presis, for eksempel `Legg til
  poengteller`. Trykk så `Commit`.

<!-- BILDE: Source Control i VS Code med stjerneknappen Generate Commit Message
i meldingsfeltet ringet inn -->

## Utkast, ikke fasit {.tip}

KI ser bare *hva* som er endret, ikke *hvorfor*. Ofte blir meldingen for lang
eller beskriver noe du ikke gjorde. Du har ansvaret for det som står der.


# Steg 3: Beskrivelse av pull request {.activity}

Når saken er ferdig, lager du en pull request. Beskrivelsen forteller
gjennomgåeren (reviewer) hva som er gjort og hvordan det kan testes.

## Sjekkliste {.check}

- [ ] Send grenen til GitHub med `Sync Changes` eller `Publish Branch`.

- [ ] Installer utvidelsen **GitHub Pull Requests** fra GitHub hvis du ikke har
  den. Sjekk at utgiveren er verifisert.

- [ ] Trykk på ikonet for **GitHub Pull Requests** i stripa til venstre, og
  velg `Create Pull Request`.

- [ ] Trykk på stjerneknappen ved tittelen for å la Copilot lage tittel og
  beskrivelse.

- [ ] Les utkastet og rett det. Beskrivelsen skal ha:

  - hva som er endret, med dine egne ord

  - hvordan gjennomgåeren kan teste det

  - `Closes #12`, med nummeret til saken, så saken lukkes når pull requesten
    flettes

- [ ] Skriv i beskrivelsen at du har brukt KI, og til hva. Da vet
  gjennomgåeren hva hun bør se ekstra nøye på.

- [ ] Trykk `Create`.

<!-- BILDE: Visningen Create Pull Request i VS Code med en beskrivelse laget av
Copilot og Closes #12 nederst -->

## Uten utvidelsen {.tip}

Du kan også lage pull requesten på github.com slik du lærte i [Samarbeid med
pull request](../../git/samarbeid/samarbeid). Skriv da beskrivelsen selv.


# Steg 4: Vurder KI-kode i gjennomgangen {.activity}

Nå er du gjennomgåer. Du har fått en pull request der koden er skrevet av KI.
Saken har disse akseptansekriteriene:

- Gitt at jeg har 0 poeng, når jeg treffer et mål, så får jeg 10 poeng.

- Gitt at jeg har 5 poeng, når jeg mister 10 poeng, så har jeg 0 poeng. Poengene
  blir aldri negative.

Dette er koden i pull requesten:

```python
def endre_poeng(poeng, endring):
    poeng = poeng + endring
    if poeng > 100:
        poeng = 100
    return poeng
```

## Sjekk mot akseptansekriteriene {.check}

- [ ] Gå gjennom kriteriene ett for ett. Gjør koden det som står der?

- [ ] Gjør koden noe som *ikke* står i kriteriene? Hvem har bestemt det?

## Forstå hver linje {.check}

- [ ] Forklar hver linje for deg selv eller for en i teamet.

- [ ] Er det en linje du ikke kan forklare? Skriv en kommentar i
  gjennomgangen og spør. Ikke godkjenn kode du ikke forstår.

## Kjør det {.check}

- [ ] Lag en fil `test_poeng.py` med funksjonen og disse linjene under:

  ```python
  print(endre_poeng(0, 10))
  print(endre_poeng(5, -10))
  ```

- [ ] Kjør fila. Hva skrives ut? Hva *skulle* det vært?

- [ ] Skriv en kommentar i pull requesten om det du fant, og velg `Request
  changes` i stedet for `Approve`.

## Fasit {.protip}

`endre_poeng(5, -10)` gir `-5`, men kriteriet sier `0`. KI har også lagt til en
grense på 100 poeng som ingen har bedt om. Begge deler skal tas opp i
gjennomgangen.

## Sjekkliste for KI-kode {.check}

- [ ] Stemmer koden med akseptansekriteriene?

- [ ] Kan jeg forklare hver linje?

- [ ] Har jeg kjørt den og prøvd vanlige og rare tall?

- [ ] Er det noe der som ingen har bedt om?

- [ ] Ligger det passord, nøkler eller personopplysninger i koden?


# Utfordring {.challenge}

- [ ] Be Copilot rette funksjonen så den følger kriteriene. Kjør testene på
  nytt. Ble det riktig nå, eller måtte du rette noe selv?

- [ ] Lag en regel for teamet deres: Hva får KI hjelpe til med, og hva gjør dere
  alltid selv? Sammenlign med [klubbens
  KI-regel](../../ki_veiledere/klubbens_ki_regel/klubbens_ki_regel).
