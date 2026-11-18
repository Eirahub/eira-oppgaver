---
title: Metoder
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I denne oppgaven tegner du pyramider av tekst. Du lærer å lage dine egne
**metoder**. En metode er en bit kode med et navn. Du kan bruke den mange
ganger, og gi den forskjellige verdier hver gang.

Du lærer også snarveien `Ctrl + Alt + M`, som gjør om kode du har skrevet til en
ny metode.

```text
Hvor høy pyramide? 4
   #
  ###
 #####
#######
Pyramiden bruker 16 klosser.
```


# Steg 1: En metode som gjentar tekst {.activity}

For å tegne pyramiden trenger vi å skrive samme tegn mange ganger. Det lager vi
en metode til.

## Sjekkliste {.check}

- [ ] Lag en ny **Java Class** som heter `Pyramide`. Slett alt i den.

- [ ] Skriv:

  ```java
  String gjenta(String tekst, int antall) {
      String resultat = "";
      for (int i = 0; i < antall; i++) {
          resultat = resultat + tekst;
      }
      return resultat;
  }

  void main() {
      IO.println(gjenta("#", 5));
      IO.println(gjenta("ab", 3));
  }
  ```

- [ ] Kjør programmet.

## Test prosjektet {.flag}

- [ ] Skrives det ut `#####` og `ababab`?

Første linje i metoden sier tre ting:

- `String` foran navnet betyr at metoden gir tilbake en tekst.

- `gjenta` er navnet.

- `(String tekst, int antall)` er **parametrene**. Det er verdiene metoden får
  inn når den brukes.

`return resultat;` gir svaret tilbake til den som brukte metoden. Når vi skriver
`gjenta("#", 5)`, blir `tekst` lik `"#"` og `antall` lik `5`.


# Steg 2: Tegn en pyramide {.activity}

## Sjekkliste {.check}

- [ ] Bytt ut innholdet i `main` med dette:

  ```java
      int hoyde = Integer.parseInt(IO.readln("Hvor høy pyramide? "));
      for (int rad = 1; rad <= hoyde; rad++) {
          String luft = gjenta(" ", hoyde - rad);
          String klosser = gjenta("#", 2 * rad - 1);
          IO.println(luft + klosser);
      }
  ```

- [ ] Kjør programmet og velg høyde 4.

## Test prosjektet {.flag}

- [ ] Blir det en pyramide?

Rad 1 har 1 kloss, rad 2 har 3, rad 3 har 5. Det er `2 * rad - 1`. Foran
klossene setter vi mellomrom, slik at pyramiden står midt på. Den øverste raden
trenger flest mellomrom.


# Steg 3: Lag en metode med snarvei {.activity}

Vi vil tegne flere pyramider. Da bør `for`-løkka bli en egen metode. IntelliJ
kan lage den for deg.

## Sjekkliste {.check}

- [ ] Merk hele `for`-løkka med musa, fra `for` til og med `}`.

- [ ] Trykk `Ctrl + Alt + M` (på Mac `Cmd + Option + M`).

- [ ] Skriv `tegnPyramide` som navn og trykk `Enter`.

IntelliJ lager en ny metode `void tegnPyramide(int hoyde)`, og setter
`tegnPyramide(hoyde);` der løkka var.

- [ ] Endre metoden, så den tar en parameter til, `String kloss`, og bruk den i
  stedet for `"#"`:

  ```java
  void tegnPyramide(int hoyde, String kloss) {
      for (int rad = 1; rad <= hoyde; rad++) {
          String luft = gjenta(" ", hoyde - rad);
          String klosser = gjenta(kloss, 2 * rad - 1);
          IO.println(luft + klosser);
      }
  }
  ```

- [ ] Bruk metoden to ganger i `main`:

  ```java
      tegnPyramide(hoyde, "#");
      tegnPyramide(3, "@");
  ```

## Test prosjektet {.flag}

- [ ] Kommer det to pyramider av forskjellige tegn?

`void` betyr at metoden ikke gir noe tilbake. Den bare gjør noe, her skriver den
ut.


# Steg 4: Tell klossene {.activity}

## Sjekkliste {.check}

- [ ] Lag en metode som regner ut hvor mange klosser en pyramide trenger:

  ```java
  int antallKlosser(int hoyde) {
      int sum = 0;
      for (int rad = 1; rad <= hoyde; rad++) {
          sum = sum + 2 * rad - 1;
      }
      return sum;
  }
  ```

- [ ] Skriv ut svaret i `main`:

  ```java
      IO.println("Pyramiden bruker " + antallKlosser(hoyde) + " klosser.");
  ```

## Test prosjektet {.flag}

- [ ] En pyramide med høyde 4 bruker 16 klosser. Stemmer det?

- [ ] Prøv flere høyder. Ser du et mønster? Sammenlign svaret med `hoyde *
  hoyde`.


# Utfordring {.challenge}

## Sjekkliste {.check}

- [ ] Lag en metode `tegnFirkant(int bredde, int hoyde, String kloss)`.

- [ ] Lag en metode som tegner en pyramide som står på hodet.

- [ ] Java har en ferdig metode som gjør det samme som `gjenta`:
  `"#".repeat(5)`. Bytt ut `gjenta` med `repeat`. Virker det likt?
