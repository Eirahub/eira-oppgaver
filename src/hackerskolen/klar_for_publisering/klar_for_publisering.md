---
title: Klar for publisering
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå bytter du side. Du har vært **rødt lag**, angriperen. Nå er du **blått
lag**, den som forsvarer. Du skal tette alle hullene i Kiosken, og så skal en
medelev prøve å bryte seg inn. Til slutt lager du en sjekkliste du kan bruke
før du publiserer dine egne apper.

![Terminal der sjekk.py blått viser OK på alle sju sjekkene og gir et
flagg](blatt_lag.png)

```
FRA:   K, Byrå 404
TIL:   Pentester
EMNE:  Bytt side

Å finne hull er halve jobben. Kunden betaler for at de blir tettet.
Gjør Kiosken klar for publisering.

Hilsen K
```

## Før du starter {.tip}

Gjør [Alt i nettleseren er offentlig](../alt_er_offentlig/alt_er_offentlig),
[SQL-injeksjon](../sql_injeksjon/sql_injeksjon) og [XSS i
kommentarfeltet](../xss/xss) først.


# Steg 1: Hvor mange hull er igjen? {.activity}

## Sjekkliste {.check}

- [ ] Start Kiosken med `python3 kiosk.py`, og kjør sjekken i en annen
  terminal:

  ```
  python3 sjekk.py blått
  ```

- [ ] Hver linje med `[HULL]` er et hull som fortsatt er åpent. Finn ordet
  `SÅRBAR` i `kiosk.py` for å se hvor de er.


# Steg 2: Tett hullene {.activity}

Har du gjort de andre oppgavene, har du tettet SQL-injeksjon og XSS. Her er
resten.

## Sjekkliste {.check}

- [ ] **Prisen.** Serveren vet hva varene koster. Bruk prisen fra `VARER`, og
  ikke den fra skjemaet. I `kjop`, bytt ut linja med `pris = int(...)` med:

  ```python
  pris = ekte_pris
  ```

- [ ] **Antall.** Ingen skal kunne kjøpe minus tre boller, eller en million.
  Legg til en sjekk rett etter linja med `antall`:

  ```python
  if not 1 <= antall <= 20:
      return self.svar("<p>Du kan kjøpe 1 til 20.</p>", 400)
  ```

  Pass på at linja står på samme innrykk som linjene rundt, inni `try`.

- [ ] **Hemmeligheten i JavaScript.** Fjern linja med `ANSATTKODE` fra
  `KIOSK_JS`. Husk også `% f(...)` på slutten. En rabattkode må sjekkes på
  serveren.

- [ ] Start Kiosken på nytt, og kjør `python3 sjekk.py blått` igjen. På en
  laptop fra Eira starter Kiosken på nytt av seg selv når du lagrer.

## Flagg {.flag}

Når alle linjene står med `[OK]`, får du flagget. Registrer det med
`sjekk.py`.

## Tips {.protip}

Står du fast? Les feilmeldingen i terminalen der Kiosken kjører. Den sier
hvilken linje som er feil.


# Steg 3: Rødt lag mot blått lag {.activity}

## Sjekkliste {.check}

- [ ] Jobb to og to. Den ene er rødt lag, den andre blått lag. Sett av 15
  minutter.

- [ ] Blått lag har tettet Kiosken på sin maskin. Rødt lag får sitte ved
  maskinen og prøve alt de kan, bare mot `www.kiosken.localhost:8080` på den maskinen.

- [ ] Rødt lag skriver ned hvert forsøk, og om det virket.

- [ ] Bytt roller.

- [ ] Fant rødt lag noe `sjekk.py` ikke sjekker? Da har dere funnet et nytt
  hull. Skriv det ned i rapporten.


# Steg 4: Din sjekkliste før publisering {.activity}

Kiosken er en øvingsapp. Men de samme feilene finnes i ekte apper. Her er en
sjekkliste du kan bruke på dine egne apper før du legger dem ut:

## Sjekkliste {.check}

- [ ] **Ingen hemmeligheter i frontend** eller i Git. Se [Lekkede
  hemmeligheter](../lekkede_hemmeligheter/lekkede_hemmeligheter).

- [ ] **Serveren sjekker alt** som kommer fra brukeren: priser, antall,
  hvem som har lov til hva.

- [ ] **Parametre i SQL**, aldri tekst limt inn i spørringen.

- [ ] **Escape det brukeren skriver** før det vises på en side.

- [ ] **HttpOnly og Secure** på informasjonskapsler for innlogging.

- [ ] **HTTPS** på hele siden.

- [ ] **Passord lagres med bcrypt eller Argon2**, eller bruk en
  innloggingstjeneste i stedet for å lage din egen.

- [ ] **Feilmeldinger** sier ikke mer enn brukeren trenger. Ingen SQL eller
  kode i feilmeldinger.

- [ ] **Bare nødvendige porter** står åpne. Databasen kan ikke nås fra
  internett.

- [ ] **Oppdateringer.** Bibliotekene appen bruker, er oppdatert.

- [ ] **Sikkerhetskopi** av dataene, som du har prøvd å hente tilbake.

- [ ] **Tofaktor** på alle kontoer som kan endre appen: GitHub, publisering
  og database.

- [ ] **En plan** for hva dere gjør hvis noe skjer: hvem som stenger, hvem som
  sier fra til brukerne, og hvem som melder til Datatilsynet hvis
  personopplysninger har lekket.

## Ekte sak {.protip}

OWASP er en organisasjon som lager en liste over de ti vanligste
sikkerhetsfeilene i nettsider, kalt **OWASP Topp 10**. Alle hullene i Kiosken
er på den lista. Mange bedrifter bruker den som sjekkliste.

## Test deg selv {.flag}

- [ ] Hvilket av hullene i Kiosken tror du er det farligste? Hvorfor?

- [ ] Hvilke punkter på sjekklista gjelder for en app du har laget?


## Utfordring {.challenge}

Bruk sjekklista på en app du har laget selv, for eksempel i [Fra idé til app
med KI](../../fra_ide_til_app/). Hvor mange punkter klarer du? Du kan også be
en KI-kodeassistent gå gjennom koden din med sjekklista, men sjekk selv det
den sier.
