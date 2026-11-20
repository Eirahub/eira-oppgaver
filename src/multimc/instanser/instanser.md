---
title: Instanser og versjoner
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En **instans** er ett oppsett av Minecraft. Den har én Minecraft-versjon, og sin
egen mappe med modder, verdener, ressurspakker og innstillinger. Det du gjør i
én instans, merkes ikke i de andre.

I denne oppgaven lager du instanser for to Minecraft-versjoner, kopierer en
instans, og finner fram i mappene. Når du tester modder senere, trenger du mange
instanser. Da hjelper det å ha orden fra starten.

<!-- BILDE: Hovedvinduet i MultiMC med gruppen Rubinmod-test og fire instanser:
Fabric 26.3, Fabric 1.21.11, NeoForge 26.3 og NeoForge 1.21.11 -->


# Steg 1: Instanser for to versjoner {.activity}

## Sjekkliste {.check}

- [ ] Klikk **Add Instance** og velg **Vanilla**.

- [ ] Gi instansen navnet `Vanilla 26.3`, og skriv `Vanilla` i feltet for
  gruppe. Grupper samler instanser som hører sammen.

- [ ] Velg versjon **26.3** under **Releases**, og klikk **OK**.

- [ ] Lag en instans til på samme måte, med navnet `Vanilla 1.21.11` og versjon
  **1.21.11**.

- [ ] Start begge. Står riktig versjon nederst til venstre i hovedmenyen?

## Gode navn {.tip}

Ta med det som skiller instansene i navnet: loader, Minecraft-versjon og hva du
tester. `Fabric 26.3 rubinmod` sier mer enn `Ny instans (2)`. Du kan gi en
instans nytt navn med **Rename** og bytte gruppe med **Change Group**.


# Steg 2: Java for hver instans {.activity}

Minecraft 26.3 trenger Java 25, og 1.21.11 trenger Java 21. Hvordan du
installerer Java og velger den for hver instans, står i oppgaven [Java for
Minecraft](../java_for_minecraft/java_for_minecraft.html).

## Sjekkliste {.check}

- [ ] Sjekk at `Vanilla 1.21.11` bruker Java 21, og at `Vanilla 26.3` bruker
  Java 25.


# Steg 3: Bytt versjon {.activity}

Du kan bytte Minecraft-versjon i en instans du allerede har.

## Sjekkliste {.check}

- [ ] Marker instansen og klikk **Edit Instance**.

- [ ] Velg **Version** i lista til venstre. Der ser du hva instansen består av:
  Minecraft, og senere en mod-loader.

- [ ] Marker **Minecraft** og klikk **Change version**. Velg en annen versjon.

Verdener fra en nyere versjon kan bli ødelagt hvis du åpner dem i en eldre
versjon. Ta en kopi av instansen før du bytter til en eldre versjon.


# Steg 4: Kopier en instans {.activity}

En kopi er nyttig når du vil prøve noe uten å ødelegge en instans som virker.

## Sjekkliste {.check}

- [ ] Marker `Vanilla 26.3` og klikk **Copy Instance**.

- [ ] Gi kopien navnet `Vanilla 26.3 kopi`. Kryss av for **Copy saves** hvis
  verdenene også skal være med.

- [ ] Lag en ny verden i kopien. Finnes den i originalen?


# Steg 5: Mappene til en instans {.activity}

Hver instans har en mappe under `instances` i mappa til MultiMC. Inni den ligger
spillmappa, som heter `.minecraft` (i gamle instanser `minecraft`). Den er lik
mappa `.minecraft` som vanlig Minecraft bruker.

| Mappe eller fil            | Hva er det?                            |
| -------------------------- | -------------------------------------- |
| `.minecraft/mods`          | Moddene til instansen                  |
| `.minecraft/saves`         | Verdenene                              |
| `.minecraft/logs`          | Loggene, med den siste i `latest.log`  |
| `.minecraft/crash-reports` | Krasjrapportene                        |
| `.minecraft/config`        | Innstillingene til moddene             |
| `instance.cfg`             | Innstillingene til instansen i MultiMC |

## Sjekkliste {.check}

- [ ] Marker en instans og klikk **Instance Folder** i verktøylinja til høyre.
  Mappa åpnes i filutforskeren.

- [ ] Åpne `.minecraft`. Finner du `saves` og verdenen du laget?

- [ ] Gå til **Edit Instance** og **Version**. Knappen **Open .minecraft** gjør
  det samme.

## Bruk knappene {.tip}

Hvor mappa til MultiMC ligger, kommer an på hvor du pakket den ut. Det er
lettere å bruke knappene i MultiMC enn å lete etter mappene selv.


# Steg 6: Minne {.activity}

Minecraft med mange modder trenger mer minne enn vanlig Minecraft.

## Sjekkliste {.check}

- [ ] Gå til **Edit Instance**, **Settings**.

- [ ] Kryss av for **Memory**, og sett **Maximum memory allocation** til 4096
  MB. Det holder for de fleste testinstanser.

Gi ikke Minecraft mer enn halvparten av minnet på maskinen. Mer minne gjør ikke
spillet raskere, og resten av maskinen trenger også minne.

## Utfordring {.challenge}

- [ ] Rydd i instansene: lag en gruppe for vanlig spilling og en gruppe for
  testing.

- [ ] Skriv i **Edit Notes** hva hver testinstans er til. Det hjelper når du har
  mange.

- [ ] Lag en instans med en **snapshot** av neste Minecraft-versjon. Kryss av
  for **Snapshots** i lista over versjoner. Hva er nytt?
