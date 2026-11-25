---
title: Lærerveiledning - Hvem kan lese dagboka?
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven leser filrettigheter med `ls -l`, låser en fil med `chmod 600`, gjør et
skript kjørbart og lærer hva root og `sudo` er.

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Filrettigheter, brukere, privilegier

__Tidsbruk__: 30 til 45 minutter

## Kompetansemål {.challenge}

- [ ] __Programmering, 10. trinn__: gjøre rede for hvordan datamaskiner og
  dataprogram fungerer, og forklare egne og andres koder

- [ ] __Informasjonsteknologi 1__: beskrive sentrale komponenter i datamaskiner
  og nettverk og gjøre rede for hvilken funksjon de har

## Forslag til vurderingskriterier {.challenge}

Eleven kan lese en rettighetsstreng som `-rwxr-x---` og forklare hvilke
rettigheter en fil med passord bør ha.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Inn i
  terminalen](../inn_i_terminalen/inn_i_terminalen).

- [ ] __Utstyr__: Linux, Mac, WSL eller Raspberry Pi. Rettigheter virker ikke på
  samme måte i Git Bash.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](rettigheter)

### Tips til veiledere

- Har elevene bare Git Bash, kan de lese oppgaven og øve på rettigheter i
  [Bandit](../bandit/bandit) i stedet. En Raspberry Pi per gruppe holder.

- Tallene 4, 2 og 1 er en fin kobling til totallsystemet i matematikk.

### Hva er testet

Laben og alle kommandoene i oppgaven er kjørt på Linux med Python 3.12 i
november 2026. Oppgaven er ikke prøvd på Windows og Mac, eller med elever, ennå.
