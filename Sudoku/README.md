# Sudoku

Sudoku with puzzles generated in the browser, so there is no fixed library to work through — every game is a new grid. Single HTML file, no build step and no libraries.

## Playing

Tap a cell, then a number. Wrong digits turn red straight away and count as a mistake; there is no losing, only a tally.

| Action | Input |
| --- | --- |
| Select a cell | Tap it, or the arrow keys |
| Enter a digit | The number pad, or 1–9 |
| Clear a cell | Erase, Backspace, or 0 |
| Pencil marks | Notes, or N — then digits toggle small marks instead |
| Undo | Undo, or U |
| Hint | Fills the selected cell, or a random one, from the solution |

The board shades the row, column and box you are working in, and highlights every cell holding the same digit as the one you selected. Each pad key shows how many of that digit are still missing and greys out when all nine are placed. Placing a digit rubs that pencil mark out of every cell it can see.

Your progress is saved as you go, so closing the tab and coming back resumes the same grid. Best times are kept per difficulty, but only for clean solves — no hints and no mistakes.

## Difficulty

Puzzles are graded by what it takes to solve them logically, not by clue count alone:

| Difficulty | Solvable with |
| --- | --- |
| Easy | Naked and hidden singles alone |
| Medium | Also needs locked candidates — a digit confined to one line inside a box |
| Hard | Also needs naked pairs |
| Expert | Beats all of the above; the solver runs out of technique and it needs guessing |

## Implementation notes

- Candidates are nine-bit masks, so the solver's inner loops are a few bit operations rather than array scans.
- Generating a puzzle starts from a complete grid built by randomised backtracking, then digs holes one at a time, keeping a hole only while the grid still has exactly one solution. Uniqueness is checked by counting solutions with an early exit at two.
- What is left is then run through a solver that only knows human techniques, in tiers. The hardest tier it needs is the puzzle's grade. Anything that grades wrong is thrown away and the process repeats; after ten attempts the closest grade is used rather than making you wait.
- The backtracking search always takes the cell with the fewest candidates first, which is what keeps generation fast enough to run while you watch.

## Licence

MIT
