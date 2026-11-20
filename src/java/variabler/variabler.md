---
title: Variabler
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Du skal bygge et tårn av klosser. Hvor mange klosser trenger du? I denne
oppgaven lager du et program som regner det ut for deg. Underveis lærer du om
**variabler**, som er navn på verdier programmet husker, og om hvordan
programmet kan spørre brukeren om noe.

Du lærer også snarveien `Ctrl + Space`, som fullfører det du skriver.

```text
Velkommen til tårnkalkulatoren!
Hva skal tårnet hete? Borgen
Hvor høyt skal det være? 10
Hvor bredt skal det være? 4
Borgen trenger 160 klosser.
Det er 2 fulle stabler og 32 til.
Med et halvt sekund per kloss tar det 80.0 sekunder å bygge.
```


# Steg 1: Din første variabel {.activity}

## Sjekkliste {.check}

- [ ] Åpne prosjektet `java_kurs` fra forrige oppgave. Høyreklikk på `src`, og
  lag en ny **Java Class** som heter `Taarn`.

- [ ] Slett alt i filen og skriv:

  ```java
  void main() {
      int hoyde = 10;
      int bredde = 4;
      int klosser = hoyde * bredde * bredde;
      IO.println("Tårnet trenger " + klosser + " klosser.");
  }
  ```

- [ ] Kjør programmet.

## Test prosjektet {.flag}

- [ ] Skriver programmet at tårnet trenger 160 klosser?

`int hoyde = 10;` lager en variabel som heter `hoyde`, og gir den verdien 10.
`int` betyr at variabelen er et heltall (_integer_ på engelsk). Vi bruker
`hoyde` og ikke `høyde`, fordi det er vanlig å bare bruke a til z i navn i kode.

`*` betyr gange. Tårnet er `bredde` klosser bredt, `bredde` klosser dypt og
`hoyde` klosser høyt.


# Steg 2: Autofullføring {.activity}

Du trenger ikke skrive hele navnet på en variabel. IntelliJ kan fullføre det.

## Sjekkliste {.check}

- [ ] Lag en ny linje før `}` og skriv bare `IO.println(kl`.

- [ ] Trykk `Ctrl + Space`. IntelliJ foreslår `klosser`. Trykk `Enter`.

- [ ] Fullfør linjen, så den blir `IO.println(klosser);`.

- [ ] Skriv `IO.` og vent litt. Lista viser alt du kan gjøre med `IO`.

## Tips {.protip}

Autofullføring hindrer skrivefeil. Bruk den hele tiden! Skriver du feil navn på
en variabel, blir det rødt.


# Steg 3: Spør brukeren {.activity}

Tårnet er alltid 10 høyt. Det er kjedelig. La brukeren bestemme!

## Sjekkliste {.check}

- [ ] Bytt ut de to første linjene i `main` med disse:

  ```java
      String navn = IO.readln("Hva skal tårnet hete? ");
      int hoyde = Integer.parseInt(IO.readln("Hvor høyt skal det være? "));
      int bredde = Integer.parseInt(IO.readln("Hvor bredt skal det være? "));
  ```

- [ ] Bytt ut `"Tårnet trenger "` med `navn + " trenger "`.

- [ ] Kjør programmet. Klikk i vinduet nederst og skriv svarene. Trykk `Enter`
  etter hvert svar.

## Test prosjektet {.flag}

- [ ] Prøv flere størrelser. Stemmer svarene?

- [ ] Hva skjer hvis du svarer `ti` i stedet for `10`?

`IO.readln` skriver ut et spørsmål og venter til brukeren skriver noe. Svaret er
alltid en **tekst**. I Java heter tekst `String`.

Teksten `"10"` er ikke det samme som tallet `10`. `Integer.parseInt` gjør om
teksten til et tall, slik at vi kan regne med det. Er teksten ikke et tall,
stopper programmet med en feilmelding.


# Steg 4: Stabler og desimaltall {.activity}

Klosser kommer i stabler på 64. Hvor mange fulle stabler trenger du?

## Sjekkliste {.check}

- [ ] Legg til dette nederst i `main`:

  ```java
      var stabler = klosser / 64;
      var rest = klosser % 64;
      IO.println("Det er " + stabler + " fulle stabler og " + rest + " til.");

      double sekunder = klosser * 0.5;
      IO.println("Med et halvt sekund per kloss tar det " + sekunder
              + " sekunder å bygge.");
  ```

- [ ] Kjør programmet med høyde 10 og bredde 4.

## Test prosjektet {.flag}

- [ ] Står det 2 fulle stabler og 32 til?

Når du deler to heltall med `/`, får du et heltall. Resten forsvinner. `%` gir
deg resten. 160 klosser er 2 stabler på 64, og 32 klosser til.

`double` er et desimaltall. I Java skriver vi `0.5` med punktum, ikke komma.

`var` betyr at Java selv finner ut hvilken type variabelen har. `klosser / 64`
er et `int`, så `stabler` blir et `int`. Hold markøren over `var` for å se
typen.

## Tips {.tip}

En lang linje kan deles i to. Java bryr seg ikke om linjeskift. Det er
semikolonet som viser hvor linjen slutter.


# Utfordring {.challenge}

## Sjekkliste {.check}

- [ ] Gjør tårnet hult. Da trenger du bare klossene i veggene. Hvor mange er
  det? Tips: Regn ut hele tårnet, og trekk fra det som er inni.

- [ ] Spør om hvor mange klosser brukeren har fra før, og skriv ut hvor mange
  som mangler.

- [ ] Lag en variabel `String kloss = "stein";`, og bruk den i utskriften, så
  det står for eksempel `Borgen trenger 160 stein.`
