---
title: Lærerveiledning - Git i VS Code
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager et Git-repo, gjør commits og ser endringer fra panelet **Source
Control**. De som er 13 år eller eldre og har GitHub-konto, publiserer repoet
som privat repo på GitHub. Navnene på knappene er hentet fra kildekoden til VS
Code i november 2026.

## Oppgaven passer til: {.check}

__Fag__: Programmering, IT1, IT2

__Anbefalte trinn__: 8. trinn til VG3, og veiledere

__Tema__: Git, versjonskontroll, verktøy

__Nivå__: 2 (nybegynner)

__Tidsbruk__: 45 minutter

## Kompetansemål {.challenge}

- [ ] [Læreplan i valgfaget programmering
  (PRG01-02)](https://www.udir.no/lk20/prg01-02)

- [ ] [Læreplan i informasjonsteknologi
  (INF01-02)](https://www.udir.no/lk20/inf01-02), for IT1 og IT2

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan forklare hva en commit er og hvorfor man lager dem.

- [ ] Eleven kan lage et repo, stage endringer og lage en commit i VS Code.

- [ ] Eleven kan vurdere hva som er trygt å publisere på nettet.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å gjøre steg 1 til 4.

- [ ] Eleven oppnår høy måloppnåelse ved å bruke commits med gode meldinger
  gjennom et helt prosjekt.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Bli kjent med VS Code](../bli_kjent/bli_kjent.html).
  Steg 4 bruker `hei.py` fra [Python i VS
  Code](../python_i_vs_code/python_i_vs_code.html), men en hvilken som helst fil
  går.

- [ ] __Utstyr__: VS Code og Git. GitHub-konto bare for steg 5.

## Fremgangsmåte

Her kommer tips og erfaringer til stegene i oppgaven. [Klikk her for å se
oppgaveteksten.](git_i_vs_code.html){target=_blank}


# Steg 1: Installer Git {.activity}

- [ ] Git følger ikke med VS Code. Mangler Git, viser **Source Control** en
  lenke til nedlasting. Kilde: [Source control in VS
  Code](https://code.visualstudio.com/docs/sourcecontrol/overview).


# Steg 2: Navn og e-post {.activity}

- [ ] Uten `user.name` og `user.email` feiler første commit med meldingen *Make
  sure you configure your "user.name" and "user.email" in git*.

- [ ] Navn og e-post i en commit blir offentlige hvis repoet publiseres. Bruk
  fornavn, og GitHub sin skjulte adresse (`...@users.noreply.github.com`). Den
  står under **Settings** > **Emails** på GitHub. Kilde: [Setting your commit
  email
  address](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address).

- [ ] På delte maskiner gjelder `--global` for alle som bruker samme
  Windows-konto. Da kan elevene heller droppe `--global` og kjøre kommandoene
  etter at repoet er laget i steg 3. Da gjelder de bare det repoet.


# Steg 3 og 4: Repo og commit {.activity}

- [ ] **Initialize Repository** finnes i **Source Control** når mappa ikke er et
  repo. Det samme kan gjøres med kommandoen **Git: Initialize Repository**.
  Kilde: [Quickstart: use source control in VS
  Code](https://code.visualstudio.com/docs/sourcecontrol/quickstart).

- [ ] Trykker eleven **Commit** uten å ha staget noe, spør VS Code om alle
  endringene skal stages og committes. Det er greit å svare ja.


# Steg 5: GitHub {.activity}

- [ ] GitHub krever at brukeren er 13 år eller eldre. Kilde: [GitHub Terms of
  Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service),
  avsnitt B.3. Elever under 13 gjør bare steg 1 til 4.

- [ ] Valget mellom **Publish to GitHub private repository** og **Publish to
  GitHub public repository** kommer etter innloggingen. Oppgaven ber elevene
  velge privat.

- [ ] På delte maskiner må elevene logge ut av GitHub etterpå. Det gjøres fra
  ikonet **Accounts** nederst til venstre i VS Code, og i nettleseren.

## Variasjoner {.challenge}

- [ ] Elever som har nettsider fra Web-kurset, kan publisere dem med GitHub
  Pages. Se [Publiser nettsiden din](../../web/publiser/publiser.html).

## Eksterne ressurser {.challenge}

- [ ] [Using Git source control in VS Code
  (engelsk)](https://code.visualstudio.com/docs/sourcecontrol/overview)
