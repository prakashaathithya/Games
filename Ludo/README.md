# Ludo

The four-player race board, in the browser. One player against three computers, or up to four people passing one device around. Single HTML file, no build step and no libraries — the board is a CSS grid and the rest is DOM.

## Rules

- Four tokens each, all starting in your base. A six brings one out onto your coloured start square.
- Move a token by the number rolled. Tokens travel clockwise around the 52-square track, then turn into their own colour's home run and finish in the centre.
- A six earns another roll — but three sixes in a row forfeits the turn.
- Landing on an opponent knocks that token back to its base and earns another roll. Nothing can be captured on a star square or a start square.
- The last square must be reached exactly: a roll larger than the distance left cannot be played.
- Bringing a token home earns another roll. First player with all four home wins.
- With only one legal move available the game plays it for you, since there is no decision to make.

## Controls

| Action | Input |
| --- | --- |
| Roll | The Roll button, or Space / Enter |
| Move | Tap a highlighted token — the ones that can move bob up and down |

## Players

Two players sit opposite each other; three or four fill the seats in order. Opponents can be the computer or other people on the same screen.

| Difficulty | Behaviour |
| --- | --- |
| Easy | Picks at random almost half the time, and barely notices danger |
| Normal | Plays the best move it sees, weighing risk sensibly |
| Hard | Never blunders, and weighs the chance of being captured heavily |

The computer scores every legal move: progress made, getting a token out, reaching the home run or the centre, capturing, landing on a star, and how many opponent tokens sit within a die roll behind the square it would land on.

## Implementation notes

- The track is generated from the board's geometry rather than a hand-typed list of 52 coordinates: it is the outer two lanes of each arm plus the tip, walked clockwise, which is 13 squares per arm.
- Each player's position is stored as a distance from their own start rather than a board square, so the four routes are the same arithmetic with a different offset. Squares 0 to 50 are the shared track, 51 to 55 the home run, and 56 the centre.
- Tokens walk the board a square at a time so a move can be followed, and several tokens on one square shrink and sit side by side.
- Sound is synthesised with the Web Audio API — no audio files.

## Licence

MIT
