# REVIEW: Oppdrag fra K

Bygget: én verden (nattlig pult, 4000 x 2800 px) med ett kamera som aldri
kutter, 40.5 s, og sluttbilde 4.5 s. Totalt 45 s. Kilde: gen.mjs.

## Valg
- All tekst på skjermene er ekte utdata fra laben (felles/utdata) og ekte
  skjermbilder av Kiosken. Loggen som ruller er de første 44 linjene av
  tilgang.log.
- Mobilen forteller rammen: 23:47 «Kiosken er hacket.», så 00:31 «Bra jobba.
  Byrå 404 søker rekrutter.». Zoom gjennom mobilskjermen blir sluttbildet.
- Titler: én boks per linje, ett aksentord, ord for ord.
- Lampelys som radial gradient på treverket, under gjenstandene.
- Ingen musikk (HeyGen ikke logget inn). Bare effekter fra felles/sfx.

## Målt og sett
- `check`: ok, 0 feil. Kontaktark ved 0, 3, 9.5, 13.5, 17.5, 22, 23.5,
  26.6, 29.5, 34.8, 36, 38.5, 43.5 s.
- Lyden er plassert etter `audio --json` (riser-toppen 1.97 s inn i klippet
  lander på impact ved 33.97 s), ikke hørt.

## Rettet
- P0: terminalen var usynlig fram til 30 s (fromTo i swap satte opacity 0
  fra start). immediateRender: false.
- P0: plassholderen «Brukernavn» syntes bak `admin' --` mens det ble skrevet.
- P1: [OK] for Kari falt ned en linje; titler hadde skiller mellom ord.
- P1: mørk stripe til venstre i åpningen (treverket for smalt).

## Advarsler som står
- line_unread på adresselinja (bytter ved klikk) og på blått-linjene: tittelen
  bærer budskapet, terminalteksten er bakgrunn.

## Svakest
- 9-12 s: loggen ruller og terminalen er travel, men den viktigste
  setningen er tittelen. Med mer tid: la telleren `10000` vokse opp mens
  loggen ruller.
- Kiosk-skuddet: skjermbildene er ekte, men skrivingen er en avdekking av
  skjermbildet med teksten, ikke en ekte nettleser.
