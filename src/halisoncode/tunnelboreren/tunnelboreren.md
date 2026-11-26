---
title: Tunnelboreren
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Et fjell står i veien. I stedet for å gå rundt, lager vi en tunnel rett gjennom.
Roboten borer en gang som er to blokker høy og tre blokker bred, og setter opp
fakler underveis så det ikke blir mørkt. Du lærer om **løkker inni løkker**, en
**teller** og **rest** fra divisjon. Til slutt kan du skrive `tunnel 30` i
chatten.

Du bør ha gjort oppgaven [Gruve til
grunnfjell](../gruve_til_grunnfjell/gruve_til_grunnfjell.html) først.

<!-- BILDE: Åpningen av en bred tunnel inn i et steinfjell, med fakler på gulvet
innover. -->


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en vanlig verden i `Kreativ` modus
  (Creative) med `Tillat kommandoer` på (Allow Commands). Den må ha trær og
  fjell, så ikke velg `Superflat`.

- [ ] Trykk `T` for å åpne chatten, skriv `/robot spawn` og trykk Enter. Roboten
  dukker opp ved føttene dine og ser samme vei som deg.

- [ ] Trykk `T` igjen, skriv `/halisoncode` og trykk Enter. Editoren åpnes i
  nettleseren. Trykk `Nytt prosjekt`.

- [ ] Skriv `/gamerule halisoncode:pause_on_lost_focus false` i chatten. Da går
  ikke spillet på pause når du bytter til editoren, og du ser hva roboten gjør
  mens du jobber. Du trenger bare gjøre det én gang i hver verden.

## Slik bytter du mellom Minecraft og editoren {.tip}

- Du lager programmet i nettleseren og ser roboten i Minecraft. Bytt vindu med
  `Alt` + `Tab` (på Mac `Cmd` + `Tab`). Hold inne `Alt` og trykk `Tab` til
  Minecraft er valgt, og slipp.

- Trykk alltid på `Kjør` i editoren **før** du bytter til Minecraft. Programmet
  kjører fra nettleseren, så la editoren stå åpen.

- Viser Minecraft pausemenyen når du kommer tilbake, trykk `Fortsett spill`
  (Back to Game). Roboten står stille så lenge spillet er på pause. Har du ikke
  skrevet `/gamerule halisoncode:pause_on_lost_focus false`, gjør det nå. Du kan
  også trykke `F3` + `P` i Minecraft.

- Er roboten borte eller langt unna, skriv `/robot spawn` igjen. Vil du stoppe
  et program, trykk stoppknappen i editoren eller skriv `/robot stop`.


# Steg 1: Ett steg inn i fjellet {.activity}

En tunnel som er to blokker høy, lages slik: Knus blokken foran, gå inn, og knus
blokken over. Det roboten knuser, havner rett i inventaret.

## Sjekkliste {.check}

- [ ] Finn et fjell eller en bratt bakke av stein. Still deg rett foran
  fjellveggen og se inn i den.

- [ ] Skriv `/robot spawn`. Lag et nytt prosjekt.

- [ ] I `ved start`: `robot ødelegg fremover`, `robot flytt fremover med 1` og
  `robot ødelegg opp`.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Er det et hull i fjellet som er én blokk bredt og to høyt?


# Steg 2: En lang tunnel {.activity}

## Sjekkliste {.check}

- [ ] Dra `gjenta 4 ganger` fra `Løkker` inn i `ved start`.

- [ ] Flytt de tre blokkene inn i løkka, og endre `4` til `10`.

## Test prosjektet {.flag}

__Skriv `/robot spawn` foran et nytt sted i fjellet og kjør.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Er tunnelen 10 blokker lang? Gå inn i den.

## Tips {.tip}

Grus og sand faller ned når blokken under blir borte. Da kan tunnelen bli tettet
igjen bak roboten. Prøv et annet sted, eller knus grusen selv.


# Steg 3: En bredere tunnel {.activity}

Tunnelen er trang. Vi gjør den tre blokker bred. På hvert steg skal roboten snu
seg til venstre og grave ut veggen der, og så snu seg til høyre og gjøre det
samme. Det er nesten det samme to ganger, så vi bruker en løkke **inni** den
andre løkka.

## Sjekkliste {.check}

- [ ] Nederst i den store løkka, under `robot ødelegg opp`, legg en ny `gjenta 2
  ganger`.

- [ ] Inni den nye løkka: `robot snu venstre`, `robot ødelegg fremover`, `robot
  flytt opp med 1`, `robot ødelegg fremover`, `robot flytt ned med 1` og `robot
  snu venstre`.

<!-- BILDE: Programmet med gjenta 10 ganger, og gjenta 2 ganger inni. -->

## Test prosjektet {.flag}

__Kjør programmet på et nytt sted i fjellet.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Er tunnelen tre blokker bred og to blokker høy?

- [ ] Ser roboten rett frem igjen etter den lille løkka? Hvorfor? Tell hvor
  mange ganger den snur til venstre.

- [ ] Hvor mange ganger kjører `robot ødelegg fremover` i den lille løkka, for
  hele tunnelen?

## Tips {.protip}

Den lille løkka kjører 2 ganger for hver gang den store løkka kjører. Med 10
steg blir det 20 ganger.


# Steg 4: En fakkel hver 8. blokk {.activity}

Inne i fjellet er det mørkt. Vi vil ha en fakkel på gulvet hver 8. blokk. Da må
roboten **telle** stegene. Når tallet kan deles på 8 uten at noe blir til overs,
setter den en fakkel.

`rest` er det som blir til overs når du deler. 16 delt på 8 er 2, med 0 i rest.
17 delt på 8 er 2, med 1 i rest.

## Sjekkliste {.check}

- [ ] Øverst i `ved start`: `robot gi fakkel antall 64 i plass 1` og `robot velg
  plass 1`.

- [ ] Lag en variabel `teller`. Legg `sett teller til 0` før den store løkka.

- [ ] Nederst i den store løkka, etter den lille løkka: `endre teller med 1`.

- [ ] Under den: en `hvis` fra `Logikk`. Betingelsen er `=` med restblokken fra
  `Matematikk` til venstre og `0` til høyre. I restblokken legger du `teller`
  først og `8` etterpå. Da regner den ut resten av `teller` delt på `8`.

- [ ] Inni `hvis`: `robot plasser bakover`. Roboten har akkurat gått fremover,
  så bak den er det tomt gulv.

- [ ] Endre `10` til `20`, så vi ser flere fakler.

## Test prosjektet {.flag}

__Kjør programmet på et nytt sted i fjellet.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Står det to fakler i tunnelen? Hvor mange blokker er det mellom dem?

- [ ] Hva skjer om du bytter `8` med `4`?

## Tips {.tip}

Restblokken ligger i `Matematikk`, men heter foreløpig `remainder of` på
engelsk. Finner du den ikke, skriv `remainder` i søkefeltet over kategoriene. I
JavaScript skrives rest med `%`: `teller % 8`.


# Steg 5: Tunnel fra chatten {.activity}

## Sjekkliste {.check}

- [ ] Åpne `Avansert` og `Funksjoner`. Lag en funksjon `borTunnel`. Trykk på `Ny
  parameter`, velg `Tall`, og kall den `lengde`.

- [ ] Flytt alt fra `ved start` inn i funksjonen.

- [ ] I den store løkka, bytt ut `20` med `lengde` fra funksjonen.

- [ ] Etter løkka: `robot si Tunnelen er ferdig!`.

- [ ] Dra `når chatkommando` fra `Spiller`, og skriv `tunnel`. Legg `kjør
  borTunnel` inn i den, med `num1` som lengde.

- [ ] Trykk `Kjør` én gang.

## Test prosjektet {.flag}

__Still deg foran et fjell, skriv `/robot spawn` og så `tunnel 30`.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Borer roboten 30 blokker inn i fjellet?

- [ ] Kommer den ut på den andre siden? Hva skjer når det er luft foran den?


# Programmet i JavaScript {.activity}

```javascript
let teller = 0
function borTunnel(lengde: number) {
    agent.setItem(Item.Torch, 64, 1)
    agent.setSlot(1)
    teller = 0
    for (let i = 0; i < lengde; i++) {
        agent.destroy(SixDirection.Forward)
        agent.move(SixDirection.Forward, 1)
        agent.destroy(SixDirection.Up)
        for (let j = 0; j < 2; j++) {
            agent.turn(TurnDirection.Left)
            agent.destroy(SixDirection.Forward)
            agent.move(SixDirection.Up, 1)
            agent.destroy(SixDirection.Forward)
            agent.move(SixDirection.Down, 1)
            agent.turn(TurnDirection.Left)
        }
        teller += 1
        if (teller % 8 == 0) {
            agent.place(SixDirection.Back)
        }
    }
    agent.say("Tunnelen er ferdig!")
}
player.onChat("tunnel", function (num1, num2, num3) {
    borTunnel(num1)
})
```

## Utfordring {.challenge}

- [ ] Lag tunnelen tre blokker høy. Hva må du endre i den lille løkka?

- [ ] Inne i fjellet kan det være lava. Stopp roboten før lava med `robot er
  trygt fremover`. Bruk `så lenge` i stedet for `gjenta lengde ganger`, og en
  `teller` som sjekker lengden.

- [ ] Legg skinner i gulvet av tunnelen. Gi roboten `skinne` i plass 2.

- [ ] Lag en trappetunnel som går skrått ned i fjellet, som i Steinsti og trapp.
