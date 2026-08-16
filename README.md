# Games

A collection of small browser games and toys. Each one is a single self-contained page — no installs, no build step, no server.

Live at **https://games-dice.vercel.app**.

## Contents

| Game | Path | Description |
| --- | --- | --- |
| [3D Dice Roller](Dice/) | `/Dice` | Physics-driven dice, d4 through d20, with custom colours and an orbit camera. |
| [Sling Puck](SlingPuck/) | `/SlingPuck` | The wooden sling puck board: clear your half through the centre gap before your opponent does. |
| [Ludo](Ludo/) | `/Ludo` | The four-player race board, against three computers or up to four people on one screen. |
| [Business Board](Business/) | `/Business` | Property trading for two to four players, with cards, buildings, mortgages, jail, auctions and trading. |

The root `index.html` is the menu that links to them.

## Running locally

Open `index.html` in a browser, or serve the folder:

```sh
npx serve .
```

## Deploying

The repository is linked to Vercel. Pushing to `main` deploys to production; any other branch gets a preview URL. There is no build step — Vercel serves the files as they are.

## Licence

MIT
