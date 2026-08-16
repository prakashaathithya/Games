# 2048

Slide the tiles, merge the matching ones, reach 2048. Single HTML file, no build step and no libraries.

## Playing

| Action | Input |
| --- | --- |
| Slide | Swipe, arrow keys, or WASD |
| Undo | The Undo button, or U |
| New game | The button, or change the board size |

Every move drops a new tile — a 2 nine times out of ten, a 4 otherwise. Two tiles of the same value slide together into one worth double, and a tile can only take part in one merge per move. The game ends when nothing can slide or merge.

Reaching the target does not stop the game: take the win and keep going for a bigger tile. Undo goes back up to twelve moves, and is offered again on the game over screen — the last move being fatal is not much of an ending.

Boards come in 3×3 through 6×6, with the target set to 1024, 2048 or 4096. Best score is kept per board size, and the game in progress is saved as you go, so closing the tab and coming back resumes it.

## Implementation notes

- Tiles are objects with an identity, not values in a grid, so a tile keeps its DOM element as it travels. Position is a CSS transform, which is what makes the sliding smooth rather than a redraw per move.
- A merged tile is not deleted at the moment of the merge — it keeps its element, slides into the square it is being absorbed by, and is removed once the animation has finished. Without that, tiles would vanish before they visibly arrive.
- Each move walks the board from the leading edge inwards, so a tile never jumps past one that has not moved yet.
- Merge sounds ring higher as the numbers climb, so the board sounds like it is going up.

## Licence

MIT
