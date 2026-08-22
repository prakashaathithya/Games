# Connect Four

Seven columns, six rows, four in a line. Single HTML file, no build step and no libraries.

## Playing

| Action | Input |
| --- | --- |
| Drop | Tap or click a column, or press 1 to 7 |
| Aim | Arrow left/right, then Enter or Space |
| Undo | The Undo button, or U |

Play against the computer at easy, medium or hard, or hand the device back and forth for two players. You can take red and go first or yellow and go second. Undoing against the computer takes back both moves, since taking back one would only hand the turn straight back to it.

The tally beside the title counts wins, draws and losses, kept separately for each difficulty and for two-player games. Taking back a finished game takes its result off the tally with it. The game in progress is saved as you go, so closing the tab and coming back resumes it.

## The computer

A negamax search with alpha-beta pruning over the plain board.

- **Easy** looks two moves ahead — enough to take a win and block one — and plays at random three times in ten.
- **Medium** searches six moves ahead.
- **Hard** deepens until its budget of 700ms runs out, keeping the last answer it finished, and stops early when it finds a forced win. In practice that is eleven or twelve moves ahead in the opening and rather more once the board thins out.

Positions are scored by looking at every run of four on the board — 69 of them, worked out once at startup. A window with both colours in it is dead and scores nothing; otherwise three of yours in a window is worth 60, two is worth 12. Threats against you count for slightly more than your own, which keeps it from walking into a loss while chasing a win, and discs in the middle column are worth an extra 8 each because more lines run through them.

## Implementation notes

- A win only ever runs through the disc that was just played, so the check walks out from that one square in four directions rather than sweeping the board. The same routine returns the four squares, which is what gets the pulsing highlight at the end.
- The board is drawn as a single path — the outline plus all 42 holes — filled with the even-odd rule. The discs are drawn underneath and show through the holes, so a disc still falling is half hidden behind the board exactly as it would be on a real one.
- Moves are stored as a list of columns rather than board states. Undo replays nothing: it just pops the column and lifts the top disc back off.
- The computer waits a beat before answering so the move reads as a reply rather than a reflex, and a token cancels that reply if you undo or start a new game while it is waiting.

## Licence

MIT
