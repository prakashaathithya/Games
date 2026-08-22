# Tetris

Seven shapes, ten columns, twenty visible rows. Single HTML file, no build step and no libraries.

## Playing

| Action | Input |
| --- | --- |
| Move | Arrow left/right, A/D, or drag sideways |
| Soft drop | Arrow down, S, or drag down |
| Hard drop | Space, or flick down |
| Rotate | Arrow up or X clockwise, Z anticlockwise, or tap |
| Hold | C or Shift, or flick up |
| Pause | P or Escape |

On a touch screen the on-screen buttons appear under the board as well, for when a flick is not precise enough.

Pieces arrive seven at a time in a shuffled bag, so the longest an I can hide is twelve pieces. Five are shown ahead. Hold parks a piece for later and refuses to be used twice in a row.

Start level runs from 1 to 15, and every ten lines adds one, up to twenty. The ghost outline and the hold slot can both be switched off. The game in progress is saved as you go, so closing the tab and coming back resumes it.

## Scoring

| Clear | Points |
| --- | --- |
| Single / double / triple / tetris | 100 / 300 / 500 / 800 |
| T-spin, no lines | 400 |
| T-spin single / double / triple | 800 / 1200 / 1600 |
| T-spin mini, no lines / single / double | 100 / 200 / 400 |
| Soft drop | 1 a row |
| Hard drop | 2 a row |

All of it multiplies by the level. A tetris or a T-spin is a difficult clear, and two of them with nothing ordinary in between is worth half as much again. Clearing on consecutive pieces builds a combo worth 50 × combo × level.

## Implementation notes

- Rotation is the Super Rotation System. Each state is the spawn shape turned a quarter at a time inside its own box — `(r, c)` becomes `(c, size - 1 - r)` — which is what makes the standard kick tables line up. A rotation tries five offsets in order and takes the first that fits, so a piece can twist out of a well instead of refusing to turn.
- The well is 22 rows but only the bottom 20 are drawn. Pieces spawn straddling that line, so a new piece slides into view rather than appearing out of nowhere, and a piece that locks entirely above it ends the game — the same two ways to lose as the original.
- A landed piece has half a second before it sets, and moving or rotating renews that grace up to fifteen times. Falling to a new lowest row resets the count, so a piece can be slid along the floor but not stalled there forever.
- A T-spin is three of the four corners around the T's centre being filled after a rotation. Both corners on the face it points at makes it the full thing; otherwise a mini, unless the rotation needed the last kick to fit.
- Level speed is the guideline curve: a second a row at level one, `(0.8 - (level - 1) × 0.007) ^ (level - 1)` seconds by the end.
- Held left or right steps once, waits, then repeats — the same delayed auto-shift a keyboard gives you, so a tap is one column and a hold slides across.
- More rows cleared at once rings higher and longer, so a tetris sounds like one.

## Licence

MIT
