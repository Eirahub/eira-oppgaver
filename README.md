# Eira oppgaver

Programmeringsoppgaver for barn og unge, publisert på
**https://oppgaver.eirahub.no** av Eira, en frivillig organisasjon som driver
gratis kodeklubber.

Oppgavene er laget av frivillige i [Lær Kidsa Koding](https://www.kidsakoder.no/).
Dette repoet er en kopi (fork) av
[kodeklubben/oppgaver](https://github.com/kodeklubben/oppgaver) med hele
historikken. Vi henter endringer derfra og sender rettelser og nye oppgaver
tilbake. Takk til alle forfattere og oversettere.

## Innhold

| Mappe | Hva |
|---|---|
| `src/` | Oppgavene: ett kurs per mappe, markdown, bilder, `lesson.yml`. Samme struktur som upstream. |
| `filtertags/` | Lovlige tagger og visningsnavn. |
| `linter/` | Linteren fra upstream. |
| `site/` | Nettsiden (Astro). Se [site/README.md](site/README.md). |

Mappene `src/`, `filtertags/` og `linter/` holdes like upstream, så vi kan flette
begge veier. All kode for nettsiden ligger i `site/`.




## Kjøre siden lokalt

Krever Node 24.

```
cd site
npm install
npm run dev
```

Åpne http://localhost:4321.

## Hente endringer fra upstream

```
git fetch upstream && git merge upstream/master
```

Remoten `upstream` peker til https://github.com/kodeklubben/oppgaver. Vi har
skrevet om denne README-en og byttet ut `.github/workflows/test-and-deploy.yml`,
så endrer upstream de filene, blir det en konflikt der. Behold vår versjon.

## Bidra

Funnet en feil? Hver oppgave har en lenke "Rediger på GitHub". Endringer som
gjelder selve oppgavene, sender vi gjerne videre til
[kodeklubben/oppgaver](https://github.com/kodeklubben/oppgaver), der
[wikien](https://github.com/kodeklubben/oppgaver/wiki) beskriver hvordan
oppgavene skrives.

## Lisens

Innholdet er i hovedsak delt under
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.no). Noen
oppgaver har en annen lisens, og den står i oppgavens `lesson.yml` og nederst på
siden. Oppgaver med vilkårene til Code Club World Limited er ikke
Creative Commons og publiseres ikke på siden vår. Endringene Eira gjør i
innholdet, deler vi under samme lisens som innholdet.

Koden til nettsiden i `site/` er lisensiert under MIT (`site/LICENSE`).
