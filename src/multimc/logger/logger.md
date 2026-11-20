---
title: Logger og krasjrapporter
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Før eller siden starter ikke spillet, eller det krasjer midt i. Da har Minecraft
skrevet ned hva som skjedde, i en **logg** eller en **krasjrapport**. Det ser ut
som en vegg av tekst, men du trenger bare å finne noen få linjer.

I denne oppgaven lærer du:

- hvor loggene og krasjrapportene ligger

- å lese en **stack trace**, lista som viser hvor i koden feilen skjedde

- å kjenne igjen de vanligste feilene når du tester modder

- å dele en logg trygt når du trenger hjelp

<!-- BILDE: Minecraft Log i MultiMC med en rød feillinje markert, og knappene
Copy og Upload nederst -->


# Steg 1: Finn loggen {.activity}

## Sjekkliste {.check}

- [ ] Start en instans. MultiMC åpner et vindu med loggen mens spillet kjører.
  Ser du det ikke, går du til **Edit Instance** og velger **Minecraft Log**.

- [ ] Se på fargene. Vanlige linjer er hvite eller svarte, advarsler (`WARN`) er
  gule, og feil (`ERROR`) er røde.

- [ ] Skriv `rubinmod` i søkefeltet nederst og trykk **Find**. Da finner du
  linjene som handler om moden din.

- [ ] Lukk spillet, og velg **Other logs**. Der finner du `latest.log`, som er
  loggen fra forrige gang spillet kjørte.

Loggene ligger også som filer i instansmappa:

- `.minecraft/logs/latest.log`: den siste loggen. Eldre logger ligger som
  `.log.gz`-filer i samme mappe.

- `.minecraft/crash-reports/`: en fil for hver krasj, for eksempel
  `crash-2026-11-20_14.03.12-client.txt`.

Åpne mappa med **Instance Folder**, som i oppgaven [Instanser og
versjoner](../instanser/instanser.html).


# Steg 2: Les en stack trace {.activity}

Når Java-kode krasjer, skriver Java ut en **stack trace**. Her er en tenkt feil
i rubinstaven:

```
java.lang.NullPointerException: Cannot invoke "Level.isClientSide()" because
"level" is null
    at no.kidsakoder.rubinmod.RubinStav.use(RubinStav.java:42)
    at net.minecraft.world.item.ItemStack.use(ItemStack.java:301)
    at net.minecraft.client.Minecraft.startUseItem(Minecraft.java:1789)
    ...
```

## Sjekkliste {.check}

- [ ] **Første linje** sier hva som gikk galt: en `NullPointerException`, altså
  at koden brukte noe som var `null`. Resten av linja forklarer hva.

- [ ] **Linjene som begynner med `at`** viser hvor programmet var. Den øverste
  er der feilen skjedde. De under er metodene som kalte den.

- [ ] **Finn den første linja med din egen pakke**, her
  `no.kidsakoder.rubinmod`. Det er nesten alltid der du skal lete.
  `RubinStav.java:42` betyr linje 42 i `RubinStav.java`.

- [ ] **Står det `Caused by:`** lenger ned, er det en feil inni en annen feil.
  Les den siste `Caused by:`. Den er den egentlige årsaken.

En krasjrapport har den samme stack tracen øverst. Under den står mye om
maskinen, Java og moddene. Lista over modder nederst er nyttig når du lurer på
om riktig utgave av moden faktisk ble lastet.


# Steg 3: Vanlige feil {.activity}

Dette er feilene du oftest møter når du tester modder. Meldingene ser litt
forskjellige ut fra versjon til versjon. Se etter ordene i **fet** skrift.

## Feil loader {.check}

Du har lagt en Fabric-mod i en NeoForge-instans, eller omvendt.

- [ ] Moden mangler i lista over modder, eller loaderen sier at fila **ikke er
  en gyldig mod** for denne loaderen.

- [ ] Løsning: bruk jar-fila med riktig loader i navnet.

## Mangler en avhengighet {.check}

Fabric skriver noe som dette før spillet starter:

```
Incompatible mods found!
Mod 'Rubinmod' (rubinmod) 1.0.0 requires any version of fabric-api, which is
missing!
```

- [ ] Se etter **requires** og **missing**. Navnet etter `requires` er moden du
  mangler.

- [ ] Løsning: last ned den manglende moden for samme loader og
  Minecraft-versjon, og legg den i **Loader mods**.

NeoForge viser en egen side i spillet med teksten **Missing or unsupported
mandatory dependencies**, og lista over hva som mangler.

## Feil Minecraft-versjon {.check}

- [ ] Fabric skriver at moden **requires version** for eksempel `~26.3` av
  `minecraft`, mens instansen har en annen versjon.

- [ ] Løsning: bruk jar-fila for versjonen i instansen.

## Feil Java {.check}

- [ ] Se etter **UnsupportedClassVersionError** eller en melding om at noe
  **requires Java**.

- [ ] Løsning: se steg 7 i [Java for
  Minecraft](../java_for_minecraft/java_for_minecraft.html).

## Mixin-feil {.check}

Mange modder bruker **mixins** for å endre Minecraft sin egen kode. En mixin
peker på en bestemt metode i Minecraft. Når Minecraft endrer eller fjerner den
metoden i en ny versjon, finner ikke mixinen den lenger.

- [ ] Se etter **Mixin apply failed**, **MixinApplyError** eller
  **InvalidInjectionException**. Like etter står navnet på mixin-klassen, og
  dermed hvilken mod den kommer fra.

- [ ] Løsning: moden er ikke laget for denne versjonen av Minecraft. Hent en
  utgave av moden for riktig versjon. Er det din egen mod, må du rette mixinen.
  To modder som endrer det samme stedet, kan også gi mixin-feil.

## Spillet lukker seg uten krasjrapport {.check}

- [ ] Se nederst i **Minecraft Log**. MultiMC skriver hvilken kode (_exit code_)
  spillet sluttet med, og på Windows en forklaring på hva den kan bety.

- [ ] Ofte er det for lite minne. Se steg 6 i [Instanser og
  versjoner](../instanser/instanser.html).


# Steg 4: Del en logg trygt {.activity}

Står du fast, kan andre hjelpe deg hvis de får se loggen. Del en lenke, ikke en
skjermdump. Da kan de søke i den.

## Sjekk før du deler {.check}

- [ ] Se gjennom loggen etter navnet ditt. Stier som `C:\Users\Ola Nordmann\`
  viser brukernavnet på datamaskinen, og det er ofte det ekte navnet ditt.

- [ ] Se etter adresser til servere du har spilt på, og andre ting du ikke vil
  at fremmede skal se.

- [ ] Del aldri passord, innloggingskoder eller filer fra kontoen din. Ingen som
  hjelper deg med en logg, trenger dem.

## Last opp {.check}

- [ ] **Med MultiMC:** Klikk **Upload** under **Minecraft Log**. MultiMC fjerner
  innloggingsnøklene fra loggen den viser, og laster den opp til `paste.ee`. Den
  ligger åpent på nettet i en måned. Du får en lenke du kan dele.

- [ ] **Med mclo.gs:** Gå til [mclo.gs](https://mclo.gs), og lim inn loggen
  eller last opp `latest.log`. Siden prøver å fjerne IP-adresser, men kan ikke
  love at den alltid klarer det. Loggen slettes 90 dager etter at noen så den
  sist.

- [ ] Del lenken bare der du ber om hjelp, for eksempel i en sak (_issue_) på
  GitHub-siden til moden, eller med en voksen i kodeklubben.

Alle som har lenken, kan lese loggen. Spør en voksen hvis du er usikker på om
noe i den er privat.

## Utfordring {.challenge}

- [ ] Lag en feil med vilje i rubinmoden, for eksempel ved å sette noe til
  `null`. Bygg moden, test den i MultiMC, og finn linja med feilen ved hjelp av
  stack tracen.

- [ ] Finn en krasjrapport, og les lista over modder nederst. Hvilke utgaver av
  Fabric Loader og Fabric API ble brukt?
