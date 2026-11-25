---
title: SQL-injeksjon
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

**SQL-injeksjon** er et av de mest kjente angrepene som finnes. Det har blitt
brukt til å stjele millioner av passord og kortnumre. Og det virker fortsatt,
fordi utviklere gjør den samme feilen. I denne oppgaven logger du inn som
admin i Kiosken, uten å vite passordet. Og så retter du feilen.

![Skjermbilde av innloggingen i Kiosken med brukernavnet admin' --, og en pil
til siden som sier «Du er logget inn som admin.»](sql.png)

```
FRA:   K, Byrå 404
TIL:   Pentester
EMNE:  Adminsiden

Kiosken har en adminside. Passordet er langt og tilfeldig, så det
kan du ikke gjette. Du trenger ikke det.

Hilsen K
```

## Før du starter {.tip}

Gjør [Alt i nettleseren er offentlig](../alt_er_offentlig/alt_er_offentlig)
først, og start Kiosken med `python3 kiosk.py`.


# Steg 1: Hva er SQL? {.activity}

Kiosken lagrer brukerne i en **database**. For å snakke med databasen bruker
den språket **SQL**. Når du logger inn, spør Kiosken databasen omtrent slik:

```sql
SELECT navn FROM brukere WHERE navn = 'kari' AND passord = 'kanelbolle'
```

Får den et svar, er du inne. Problemet er hvordan Kiosken lager spørringen.
Åpne `kiosk.py` og finn funksjonen `logg_inn`:

```python
sql = (f"SELECT navn FROM brukere WHERE navn = '{navn}' "
       f"AND passord = '{passord}'")
```

Det du skriver i skjemaet, limes rett inn i SQL-koden. Hva om det du skriver,
**også er SQL-kode**?

## Sjekkliste {.check}

- [ ] Logg inn som `kari` med passordet `kanelbolle`. Det virker.

- [ ] Skriv bare `'` (en apostrof) som brukernavn, og noe tilfeldig som
  passord. Hva skjer? Feilmeldingen viser hele spørringen. Det er også en feil:
  den hjelper angriperen.


# Steg 2: Bli admin {.activity}

I SQL betyr `--` at resten av linja er en kommentar, som blir ignorert.

## Sjekkliste {.check}

- [ ] Hva blir spørringen hvis brukernavnet er `admin' --`? Skriv den ned:

  ```sql
  SELECT navn FROM brukere WHERE navn = 'admin' --' AND passord = '...'
  ```

  Alt etter `--` forsvinner, også sjekken av passordet.

- [ ] Logg inn med brukernavnet `admin' --` og et hvilket som helst passord.

- [ ] Gå til **Admin** i menyen.

## Flagg {.flag}

Adminsiden har et flagg. Registrer det med `sjekk.py`.

## Tips {.protip}

Et annet kjent triks er `' OR '1'='1' --`. Hva blir spørringen da, og hvorfor
virker det?


# Steg 3: Tett hullet {.activity}

Løsningen er ikke å lete etter farlige tegn. Det er å holde koden og det
brukeren skriver **helt adskilt**. Det heter **parametre**: du skriver `?` der
verdiene skal stå, og gir verdiene for seg.

## Sjekkliste {.check}

- [ ] Stopp Kiosken med **Ctrl+C**.

- [ ] Bytt ut de to linjene i `logg_inn` med:

  ```python
  sql = "SELECT navn FROM brukere WHERE navn = ? AND passord = ?"
  ```

- [ ] Finn linja `rad = db.execute(sql).fetchone()` og gi verdiene for seg:

  ```python
  rad = db.execute(sql, (navn, passord)).fetchone()
  ```

- [ ] Start Kiosken igjen. Virker `admin' --` fortsatt? Kan Kari fortsatt
  logge inn?

- [ ] Sjekk forsvaret ditt:

  ```
  python3 sjekk.py blått
  ```

  Står det `[OK]` ved SQL-injeksjon?

## Ekte sak {.protip}

Det finnes en kjent tegneserie om en mor som kalte sønnen sin
`Robert'); DROP TABLE Students;--`. Skolens database slettet alle elevene da
den lagret navnet hans. Den heter «Exploits of a Mom» og er fra xkcd. Søk den
opp.

## Test deg selv {.flag}

- [ ] Forklar med egne ord hvorfor `admin' --` virker.

- [ ] Hvorfor er parametre bedre enn å fjerne apostrofer?


## Utfordring {.challenge}

Passordene i Kiosken er lagret i klartekst. Hva ville skjedd hvis databasen
lekket? Bruk det du lærte i [Knekk passord](../knekk_passord/knekk_passord) og
lag en plan for hvordan Kiosken burde lagret dem.
