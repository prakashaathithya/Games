# Games

A collection of small browser games and toys. Each one is a single self-contained page — no installs, no build step, no server.

Live at **https://games-dice.vercel.app**.

## Contents

| Game | Path | Description |
| --- | --- | --- |
| [3D Dice Roller](Dice/) | `/Dice` | Physics-driven dice, d4 through d20, with custom colours and an orbit camera. |
| [Sling Puck](SlingPuck/) | `/SlingPuck` | The wooden sling puck board: clear your half through the centre gap before your opponent does. |
| [2048](2048/) | `/2048` | Slide and merge, boards from 3×3 to 6×6, undo and per-size best scores. |
| [Tetris](Tetris/) | `/Tetris` | Seven shapes into ten columns, with wall kicks, hold, ghost piece and T-spins. |
| [Sudoku](Sudoku/) | `/Sudoku` | Puzzles generated in the browser and graded by the techniques they need. |
| [Connect Four](ConnectFour/) | `/ConnectFour` | Four in a line down seven columns, against a searching computer or another person. |
| [Ludo](Ludo/) | `/Ludo` | The four-player race board, against three computers or up to four people on one screen. |
| [Business Board](Business/) | `/Business` | Property trading for two to four players, with cards, buildings, mortgages, jail, auctions and trading. |

The root `index.html` is the menu that links to them.

## Running locally

Open `index.html` in a browser, or serve the folder:

```sh
npx serve .
```

## Checking

```sh
node tools/check-syntax.mjs
```

Parses the module script inside every game. A parse error means the script never runs and the page loads dead, with nothing in the served HTML to show for it — worth catching before a deploy rather than after.

## Deploying

The repository is linked to Vercel. Pushing to `main` deploys to production; any other branch gets a preview URL. There is no build step — Vercel serves the files as they are.

## Licence

MIT
