---
title: Lister
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En eventyrer har med seg et **inventar**: verktøy, mat og alt den har funnet.
Noen ganger kommer det til nye ting, andre ganger blir noe brukt opp. I denne
oppgaven lager du et inventar med en `ArrayList`, en liste som kan vokse og
krympe. Du styrer det ved å skrive kommandoer.

Du lærer også snarveien `iter` og `Tab`, som skriver en hel løkke for deg.

```text
Kommandoer: legg <ting>, fjern <ting>, vis, slutt
> legg diamant
La diamant i inventaret.
> vis
Du har 3 ting:
- trehakke
- brød
- diamant
> slutt
Ha det!
```


# Steg 1: Lag en liste {.activity}

## Sjekkliste {.check}

- [ ] Lag en ny **Java Class** som heter `Inventar`. Slett alt i den.

- [ ] Skriv:

  ```java
  void main() {
      ArrayList<String> inventar = new ArrayList<>();
      inventar.add("trehakke");
      inventar.add("brød");

      IO.println(inventar);
      IO.println("Antall ting: " + inventar.size());
      IO.println("Det første: " + inventar.get(0));
  }
  ```

- [ ] Kjør programmet.

## Test prosjektet {.flag}

- [ ] Skrives det ut `[trehakke, brød]`?

- [ ] Hva skjer hvis du skriver `inventar.get(2)`?

`ArrayList<String>` er en liste med tekster. Det som står mellom `<` og `>`,
forteller hva som er i lista. `new ArrayList<>()` lager en ny, tom liste.

`add` legger noe til på slutten. `size` sier hvor mange ting som er i lista.
`get(0)` henter den første tingen. Java begynner å telle på 0, så den andre
tingen er `get(1)`.


# Steg 2: Gå gjennom lista {.activity}

Utskriften `[trehakke, brød]` er ikke så pen. Vi vil skrive ut én ting per
linje. Det gjør vi med en **for-each-løkke**. Den går gjennom hver ting i lista.

## Sjekkliste {.check}

- [ ] Fjern de tre `IO.println`-linjene.

- [ ] Skriv `iter` på en ny linje og trykk `Tab`. IntelliJ skriver en løkke for
  deg. Gi variabelen navnet `ting`.

- [ ] Skriv inni løkka, så den blir slik:

  ```java
      for (String ting : inventar) {
          IO.println("- " + ting);
      }
  ```

## Test prosjektet {.flag}

- [ ] Kommer hver ting på sin egen linje?

`for (String ting : inventar)` kan leses som _for hver tekst `ting` i
`inventar`_. Løkka går én runde for hver ting i lista.

## Tips {.protip}

`iter` er en _live template_. Prøv også `fori` og `Tab`, som lager en vanlig
`for`-løkke. Under **File**, **Settings**, **Editor** og **Live Templates** ser
du alle.


# Steg 3: En metode som viser inventaret {.activity}

## Sjekkliste {.check}

- [ ] Flytt løkka inn i en egen metode over `main`:

  ```java
  void visInventar(List<String> inventar) {
      if (inventar.isEmpty()) {
          IO.println("Inventaret er tomt.");
          return;
      }
      IO.println("Du har " + inventar.size() + " ting:");
      for (String ting : inventar) {
          IO.println("- " + ting);
      }
  }
  ```

- [ ] Kall `visInventar(inventar);` fra `main`.

`List` er navnet på alle slags lister. En `ArrayList` er en slags `List`. Når
metoden tar imot en `List`, virker den med alle slags lister.


# Steg 4: Kommandoer {.activity}

Nå skal brukeren kunne legge til og fjerne ting.

## Sjekkliste {.check}

- [ ] Legg dette til nederst i `main`:

  ```java
      IO.println("Kommandoer: legg <ting>, fjern <ting>, vis, slutt");

      while (true) {
          String kommando = IO.readln("> ");
          if (kommando.equals("slutt")) {
              break;
          } else if (kommando.equals("vis")) {
              visInventar(inventar);
          } else if (kommando.startsWith("legg ")) {
              String ting = kommando.substring(5);
              inventar.add(ting);
              IO.println("La " + ting + " i inventaret.");
          } else {
              IO.println("Jeg skjønte ikke det.");
          }
      }
      IO.println("Ha det!");
  ```

- [ ] Kjør programmet. Legg til noen ting, og vis inventaret.

## Test prosjektet {.flag}

- [ ] Kommer tingene du legger til, med når du skriver `vis`?

Tekster sammenlignes med `equals`, ikke med `==`. `startsWith` sjekker om en
tekst begynner med noe. `substring(5)` gir resten av teksten fra tegn nummer 5.
`"legg diamant".substring(5)` blir `"diamant"`.

`while (true)` går for alltid, helt til `break` hopper ut.


# Steg 5: Fjern ting {.activity}

## Sjekkliste {.check}

- [ ] Lag en kommando `fjern`. Bruk `kommando.startsWith("fjern ")` og
  `kommando.substring(6)`.

- [ ] Sjekk først om tingen finnes, med `inventar.contains(ting)`. Finnes den,
  fjerner du den med `inventar.remove(ting)`. Ellers skriver du `Du har ikke
  ...`.

## Test prosjektet {.flag}

- [ ] Kan du fjerne `brød`?

- [ ] Hva skjer hvis du prøver å fjerne noe du ikke har?


# Utfordring {.challenge}

## Sjekkliste {.check}

- [ ] Inventaret har bare plass til 9 ting. Si fra når det er fullt.

- [ ] Lag en kommando `tell <ting>`, som sier hvor mange av en ting du har.

- [ ] Lag en kommando `sorter`. Tips: `Collections.sort(inventar)`.
