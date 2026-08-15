# Business Board

A property trading board game for two to four players, in the browser. Single HTML file, no build step and no libraries — the whole thing is DOM and CSS grid.

This is **stage 1: the core loop.** It plays a complete game already, and the remaining stages are listed at the bottom.

## What works now

- A 40-space board with 22 properties in eight colour groups, four railways, two utilities, two taxes and the four corners.
- Two to four players, against the computer or passing one device around.
- Rolling two dice, moving, and collecting a salary for passing Start. Doubles roll again; three doubles in a row sends you to Jail.
- Buying unowned property, or passing on it.
- Paying rent. Rent doubles when one player holds a full colour group. Railways pay 25, 50, 100 or 200 depending on how many the owner holds; utilities pay 50, or 100 for the pair.
- Paying tax, going bankrupt and dropping out, and winning when everyone else has.

Names, prices and rents here are our own. Rents are set at roughly a tenth of the purchase price — considerably steeper than the traditional table — because a game that has no houses yet needs the pressure to come from somewhere.

## Not in yet

| Stage | Adds |
| --- | --- |
| 2 | Chance and Treasury cards, houses and hotels, mortgages, and real jail rules — the two card spaces and the Jail corner are inert placeholders until then |
| 3 | Auctions, player-to-player trading, and proper asset transfer on bankruptcy |
| 4 | Token movement animation, sounds, save and resume, and AI difficulty levels |

Two stage-1 simplifications worth knowing: a bankrupt player's deeds return to the bank rather than passing to their creditor, and a player who cannot cover a debt in full still pays the creditor in full, with the bank covering the shortfall. Both are settled in stage 3.

## Controls

| Action | Input |
| --- | --- |
| Roll, then end turn | The buttons, or Space / Enter |
| Buy or pass | The buttons, while the offer is open |

The computer keeps a cushion of 250 in hand before buying an ordinary property, and always takes a railway or utility it can afford.

## Licence

MIT
