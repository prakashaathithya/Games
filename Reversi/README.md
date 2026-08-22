# Reversi

Othello on an eight by eight board. Single HTML file, no build step and no libraries.

## Playing

| Action | Input |
| --- | --- |
| Play a disc | Tap or click a marked square |
| Undo | The Undo button, or U |

Play on a square that traps a line of your opponent's discs between the one you lay and another of yours; every disc in that line turns over. A move that turns nothing is not a move. With no legal move you pass, and the status line says so; when neither side can move the game is over and whoever has more discs wins.

Legal squares are marked with a dot, which can be switched off. The disc counts sit beside the title and the side to play is the one with the lit border. Against the computer, undo steps back past its reply so the move comes back to you. The game in progress is saved as you go.

## The computer

A negamax search with alpha-beta pruning, moves tried corners-first.

- **Easy** looks two moves ahead and plays at random about a third of the time. It will hand you a corner.
- **Medium** searches four moves ahead.
- **Hard** deepens up to nine moves within a budget of 900ms, and once thirteen squares or fewer are empty it stops guessing and plays the rest of the game out exactly.

Positions are scored on three things. Where the discs sit matters most: a corner is worth 120, the square diagonally inside one is worth −40, because giving that away is usually how a corner goes. Mobility — how many moves you have against how many they have — is worth 10 a move. Disc count is worth almost nothing until the board starts filling, since being ahead on discs in the middle game usually means you have run out of safe squares.

## Implementation notes

- One routine does all the work: given a square and a colour it returns the discs that would turn over, or nothing if the move is illegal. Running it across all 64 squares is what builds the legal move list, so there is no second copy of the rules to keep in step.
- The search makes and unmakes moves on one board rather than copying it, and unmaking is exact: the flipped discs are simply flipped back.
- A pass is not a special case in the search either — a side with no moves hands over without decrementing the depth, and two passes in a row means the position is final and gets scored on discs alone.
- Discs turn by drawing an ellipse whose width follows a cosine, so it passes through nothing at all halfway; that is the frame where the colour changes. Flips are staggered outwards from the square played, so the turn ripples along the line.
- The computer waits for the discs to finish turning before it answers, so one move finishes on screen before the next begins.

## Licence

MIT
