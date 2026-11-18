---
title: Valg og løkker
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Datamaskinen tenker på et tall fra 1 til 100. Klarer du å gjette det på sju
forsøk? I denne oppgaven lager du et gjettespill. Du lærer å la programmet velge
mellom flere veier med `if`, og å gjenta kode med `while` og `for`.

Du lærer også snarveien `Ctrl + Alt + L`, som rydder i koden din.

```text
Jeg tenker på et tall fra 1 til 100.
Du har 7 forsøk.
Forsøk 1: 50
For høyt!
Forsøk 2: 25
For lavt!
Forsøk 3: 37
Riktig! Du brukte 3 forsøk.
```


# Steg 1: Et hemmelig tall {.activity}

## Sjekkliste {.check}

- [ ] Lag en ny **Java Class** i `src` som heter `Gjettespill`. Slett alt i den.

- [ ] Skriv:

  ```java
  void main() {
      int hemmelig = (int) (Math.random() * 100) + 1;
      IO.println("Jeg tenker på et tall fra 1 til 100.");

      int gjett = Integer.parseInt(IO.readln("Gjett: "));
      if (gjett < hemmelig) {
          IO.println("For lavt!");
      } else if (gjett > hemmelig) {
          IO.println("For høyt!");
      } else {
          IO.println("Riktig!");
      }
  }
  ```

- [ ] Kjør programmet noen ganger.

## Test prosjektet {.flag}

- [ ] Får du et svar på hvert gjett?

`Math.random()` gir et tilfeldig desimaltall fra 0 opp til 1. Vi ganger med 100
og gjør det om til et heltall med `(int)`. Da får vi et tall fra 0 til 99. Til
slutt legger vi til 1.

`if` betyr _hvis_. Koden mellom `{` og `}` kjøres bare hvis det i parentesen er
sant. `else if` prøves bare hvis det første ikke var sant, og `else` kjøres hvis
ingenting av det over var sant.

## Tips {.tip}

`<` betyr mindre enn, og `>` betyr større enn. For å sjekke om to tall er like,
bruker Java `==` med to likhetstegn. Ett likhetstegn `=` gir en variabel en ny
verdi.


# Steg 2: Gjett mange ganger {.activity}

Nå får du bare gjette én gang. En **løkke** gjentar kode.

## Sjekkliste {.check}

- [ ] Bytt ut alt fra `int gjett` og ned med dette:

  ```java
      boolean funnet = false;
      while (!funnet) {
          int gjett = Integer.parseInt(IO.readln("Gjett: "));
          if (gjett < hemmelig) {
              IO.println("For lavt!");
          } else if (gjett > hemmelig) {
              IO.println("For høyt!");
          } else {
              IO.println("Riktig!");
              funnet = true;
          }
      }
  ```

## Test prosjektet {.flag}

- [ ] Kan du gjette til du finner tallet?

`boolean` er en variabel som bare kan være `true` (sann) eller `false` (usann).
`while` betyr _så lenge_. Løkka kjøres om igjen så lenge det i parentesen er
sant. `!` betyr _ikke_, så `!funnet` er sant så lenge vi ikke har funnet tallet.


# Steg 3: Rydd i koden {.activity}

Når du flytter kode rundt, blir innrykkene ofte feil. Det gjør koden vanskelig å
lese.

## Sjekkliste {.check}

- [ ] Rot til innrykkene med vilje. Flytt noen linjer helt til venstre.

- [ ] Trykk `Ctrl + Alt + L` (på Mac `Cmd + Option + L`).

## Test prosjektet {.flag}

- [ ] Står alt pent på plass igjen?

## Tips {.protip}

Innrykkene viser hvilken kode som hører til hvilken `{` og `}`. Java bryr seg
ikke om dem, men mennesker gjør det.


# Steg 4: Bare sju forsøk {.activity}

Med en `while`-løkke kan du gjette for alltid. Nå skal spilleren bare få sju
forsøk. Når vi vet hvor mange ganger noe skal skje, bruker vi en `for`-løkke.

## Sjekkliste {.check}

- [ ] Bytt ut `while`-løkka med en `for`-løkke:

  ```java
      int maksForsok = 7;
      boolean funnet = false;
      IO.println("Du har " + maksForsok + " forsøk.");

      for (int forsok = 1; forsok <= maksForsok; forsok++) {
          int gjett = Integer.parseInt(IO.readln("Forsøk " + forsok + ": "));
          if (gjett < hemmelig) {
              IO.println("For lavt!");
          } else if (gjett > hemmelig) {
              IO.println("For høyt!");
          } else {
              IO.println("Riktig! Du brukte " + forsok + " forsøk.");
              funnet = true;
              break;
          }
      }

      if (!funnet) {
          IO.println("Ingen flere forsøk. Tallet var " + hemmelig + ".");
      }
  ```

## Test prosjektet {.flag}

- [ ] Stopper spillet etter sju feil gjett?

- [ ] Stopper det med en gang du gjetter riktig?

En `for`-løkke har tre deler i parentesen, skilt med semikolon:

- `int forsok = 1` kjøres én gang, før løkka starter.

- `forsok <= maksForsok` sjekkes før hver runde. Er det usant, stopper løkka.

- `forsok++` kjøres etter hver runde. Det betyr _legg til 1_.

`break` hopper ut av løkka med en gang.


# Utfordring {.challenge}

## Sjekkliste {.check}

- [ ] Lag en nedtelling `3... 2... 1...` med en `while`-løkke før spillet
  starter.

- [ ] Spør spilleren om den vil spille igjen når runden er over. Tips: Legg hele
  spillet inni en `while`-løkke.

- [ ] Er det alltid mulig å finne tallet på sju forsøk? Hvilken strategi er
  best?
