---
title: Git i VS Code
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

**Git** tar vare på historien til koden din. Hver gang du er fornøyd, lagrer du
et øyeblikksbilde som kalles en **commit**. Ødelegger du noe, kan du se hva du
endret og gå tilbake. Med **GitHub** kan du legge koden på nettet og dele den
med andre.

I denne oppgaven bruker du Git fra panelet **Source Control** i VS Code. Du
trenger ikke skrive Git-kommandoer.

<!-- BILDE: Source Control-panelet i VS Code med én endret fil, meldingsfeltet
og knappen Commit -->

## Aldersgrense {.tip}

Du kan bruke Git på din egen maskin uten konto. For å bruke GitHub må du være 13
år eller eldre. Er du yngre, gjør steg 1 til 4 og hopp over steg 5.


# Steg 1: Installer Git {.activity}

VS Code bruker Git, men Git må installeres for seg.

## Sjekkliste {.check}

- [ ] Åpne terminalen i VS Code og skriv `git --version`.

- [ ] Står det noe som `git version 2.x`, er Git installert. Gå til steg 2.

- [ ] Hvis ikke: last ned Git fra [git-scm.com](https://git-scm.com/downloads)
  og installer med standardvalgene. Start VS Code på nytt etterpå.

## Mac og Chromebook {.tip}

På Mac kan du bli spurt om å installere *Command Line Tools* første gang du
skriver `git`. Svar ja. På Chromebook installerer du Git med `sudo apt-get
install -y git`.


# Steg 2: Fortell Git hvem du er {.activity}

Hver commit merkes med et navn og en e-postadresse.

## Sjekkliste {.check}

- [ ] Skriv i terminalen, med ditt eget fornavn:

  ```
  git config --global user.name "Ola"
  ```

- [ ] Skriv så en e-postadresse. Har du en GitHub-konto, bruk adressen du får
  fra GitHub for å skjule e-posten din (se lærerveiledningen). Ellers holder det
  med for eksempel `ola@example.com`.

  ```
  git config --global user.email "ola@example.com"
  ```


# Steg 3: Lag et Git-repo {.activity}

Et **repo** (repository) er en mappe som Git holder øye med.

## Sjekkliste {.check}

- [ ] Åpne mappa `kodeklubb` i VS Code.

- [ ] Trykk på ikonet **Source Control** i stripa til venstre (tre små sirkler
  med streker mellom), eller trykk **Ctrl** + **Shift** + **G**.

- [ ] Trykk **Initialize Repository**.

- [ ] Alle filene dine dukker opp under **Changes** med en **U** ved siden av. U
  betyr *untracked*: Git har ikke sett dem før.


# Steg 4: Din første commit {.activity}

## Sjekkliste {.check}

- [ ] Hold musa over en fil under **Changes** og trykk **+** (**Stage
  Changes**). Fila flyttes til **Staged Changes**.

- [ ] Stage resten av filene på samme måte, eller trykk **+** ved siden av
  **Changes** for å ta alle.

- [ ] Skriv en kort melding i feltet øverst, for eksempel `Første versjon`.

- [ ] Trykk **Commit**.

- [ ] Endre noe i `hei.py` og lagre. Fila dukker opp under **Changes** med en
  **M** (*modified*).

- [ ] Klikk på fila i **Source Control**. VS Code viser hva du har endret, med
  rødt for det som er fjernet og grønt for det som er nytt.

- [ ] Lag en ny commit med en melding som sier hva du endret.

## Gode commit-meldinger {.tip}

Skriv hva endringen gjør, for eksempel `Legg til poengtelling`. Meldinger som
`fikset` eller `asdf` hjelper ingen, heller ikke deg selv om en uke.


# Steg 5: Publiser til GitHub {.activity}

Dette steget krever en GitHub-konto. Lag den på
[github.com](https://github.com/) hvis du er 13 år eller eldre, og spør en
voksen først.

## Sjekkliste {.check}

- [ ] Trykk **Publish Branch** i **Source Control**.

- [ ] VS Code ber deg logge inn på GitHub. Godta, og logg inn i nettleseren som
  åpnes. Gå tilbake til VS Code etterpå.

- [ ] Velg **Publish to GitHub private repository**. Da er det bare du som kan
  se koden.

- [ ] Når det er ferdig, kan du trykke på knappen for å åpne repoet på GitHub.

- [ ] Etter neste commit trykker du **Sync Changes** for å sende den til GitHub.

## Ikke legg ut hemmeligheter {.tip}

Alt du publiserer, kan bli liggende på nettet. Ikke ha passord, adresser eller
telefonnumre i koden. Velg *private* til du vet at alt i repoet kan deles.


# Neste steg {.challenge}

- [ ] Lær om trygge utvidelser og KI-assistenter i [Utvidelser og
  KI](../utvidelser_og_ki/utvidelser_og_ki.html).
