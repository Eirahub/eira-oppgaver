---
title: Alt i nettleseren er offentlig
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå er det tid for det store oppdraget. Kunden er **Kiosken**, en
ungdomsbedrift med en nettside der du kan kjøpe brus og boller. Eieren tror
den er trygg. Den er full av hull. I denne oppgaven bruker du verktøyene som
finnes i alle nettlesere, og kjøper brus for 0 kroner.

![Skjermbilde av menyen i Kiosken med brus, kanelbolle, kaffe og sjokolade og en
Kjøp-knapp på hver](kiosken.png)

```
FRA:   K, Byrå 404
TIL:   Pentester
EMNE:  Oppdrag Kiosken

Kunden har signert. Omfang: Kiosken på 127.0.0.1:8080. Ikke noe
annet. Finn så mange hull du kan, og skriv ned alt.

Hilsen K
```

## Før du starter {.tip}

Du trenger laben og en nettleser som Chrome, Edge eller Firefox. Les om
frontend og backend i [Sikkerhet og
risiko](../../fra_ide_til_app/sikkerhet_og_risiko/sikkerhet_og_risiko) hvis du
vil vite mer.


# Steg 1: Start Kiosken {.activity}

## Sjekkliste {.check}

- [ ] Start Kiosken i terminalen, fra mappa `hackerlab`:

  ```
  python3 kiosk.py
  ```

- [ ] Åpne [http://127.0.0.1:8080](http://127.0.0.1:8080) i nettleseren.

- [ ] Bli kjent med siden som en vanlig kunde. Kjøp en bolle. Les
  kommentarene.

## Tips {.protip}

La terminalen med Kiosken stå åpen. Der ser du hver forespørsel nettleseren
sender, akkurat som i loggen i [Nåla i
høystakken](../nalen_i_hoystakken/nalen_i_hoystakken).


# Steg 2: Se under panseret {.activity}

Alt nettleseren viser deg, har den fått fra serveren: HTML, CSS og JavaScript.
Og alt nettleseren har fått, kan du lese.

## Sjekkliste {.check}

- [ ] Høyreklikk på siden og velg **Vis sidekilde**, eller trykk **Ctrl+U**
  (på Mac: **Cmd+Alt+U**). Finn en kommentar som utviklerne glemte.

- [ ] Siden laster en JavaScript-fil. Finn navnet i kilden, og åpne den.
  Hva har utvikleren skrevet der?

## Flagg {.flag}

Registrer flagget du fant med `python3 sjekk.py flagg 'EIRA{...}'`.


# Steg 3: Endre prisen {.activity}

Trykk **F12** for å åpne **utviklerverktøyene**. De er laget for utviklere,
men hackere elsker dem.

## Sjekkliste {.check}

- [ ] Velg fanen **Elements** (eller **Inspektør**). Trykk på pila øverst til
  venstre i verktøyene, og så på brusen i menyen.

- [ ] Finn de skjulte feltene i skjemaet. Det ene heter `pris`.

- [ ] Dobbeltklikk på `25` og skriv `0`. Trykk **Kjøp**.

## Flagg {.flag}

Kvitteringen gir deg et flagg. Registrer det.

## Ekte sak {.protip}

Nettbutikker har hatt akkurat denne feilen. Noen har handlet dyre varer for
nesten ingenting, før butikken oppdaget det. Regelen er enkel: **Serveren må
aldri stole på noe som kommer fra nettleseren.**


# Steg 4: Hva annet kan du endre? {.activity}

## Sjekkliste {.check}

- [ ] Hva skjer hvis du kjøper `-3` boller? Hvem skylder hvem penger?

- [ ] Velg fanen **Network** (eller **Nettverk**) og kjøp noe. Trykk på
  forespørselen `kjop`. Her ser du alt som ble sendt til serveren.

- [ ] Skriv ned hvert hull du fant i et dokument: hva du gjorde, hva som
  skjedde og hvor alvorlig det er. Dette blir rapporten din i
  [Pentestrapporten](../pentestrapport/pentestrapport).

## Test deg selv {.flag}

- [ ] Hvorfor er det ikke trygt å ha en hemmelig kode i JavaScript?

- [ ] Hvor skal prisen sjekkes, i nettleseren eller på serveren?


## Utfordring {.challenge}

Åpne `kiosk.py` og finn ordet `SÅRBAR`. Hvor mange hull har utvikleren merket?
Du skal tette dem i [Klar for
publisering](../klar_for_publisering/klar_for_publisering). Klarer du å tette
prishullet allerede nå?
