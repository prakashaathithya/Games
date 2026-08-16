# Sling Puck

The wooden fast sling puck board, in the browser. A board split by a centre divider with one gap in the middle, a handful of pucks on each side, and both players slinging at once. Clear your own half first and you win.

Single HTML file, no build step. Open `index.html`, or visit the deployed site.

## Rules

- Each side starts with the same number of pucks — 3, 5 or 7.
- **The elastic does the work.** A puck only shoots if it is hooked on the band strung across your half; a ring marks one that is. Pucks off the band can be slid around freely, but releasing one away from the elastic just repositions it.
- Hook a puck, draw it back against the band, release. The band throws forward — you can angle up to 60° either side of straight ahead, but never sideways or backwards.
- The only route to the other side is the gap in the middle. Pucks that miss it bounce off the divider and stay with you.
- There are no turns. Both players sling whenever they like, as fast as they like.
- The first player with an empty half wins. Pucks are shared property — whatever is on your side is yours to fire, whichever colour it is.

## Controls

| Action | Input |
| --- | --- |
| Load the band | Drag a puck onto the elastic and let go |
| Draw and sling | Drag a hooked puck back, release |
| Power | How far you drew it back, up to the band's stretch |
| Settings | The gear button, top left |

In two-player mode both halves are live at the same time and the board tracks each finger separately, so two people can sling simultaneously on one screen. The far scoreboard is inverted to read the right way up from the other side.

## Implementation notes

- Pucks slide on a flat board, so the simulation is 2D and hand-written. Puck-on-puck response is the exact equal-mass impulse along the contact normal, and the rounded ends of the divider are treated as collision posts so a puck can clip the mouth of the gap and deflect the way it would on wood.
- Motion is substepped against the fastest puck on the board, so a hard sling cannot pass through the divider between frames.
- A puck held under a finger is pinned: it acts as a wall to anything that hits it, rather than being shoved out of the player's grip.
- The elastic is drawn as two segments meeting at the pull point, so it bends into a V behind a drawn-back puck and snaps straight on release. The computer plays through its own band the same way, hooking a puck and drawing it back over half a second before letting go.
- Velocity decays exponentially, which matches a puck on a wooden board far better than a constant deceleration. Wood absorbs a lot, so the rails are much less bouncy than the pucks.
- Rendering is [three.js](https://threejs.org) from a CDN. Every sound — the band twang, puck clacks, rail thuds and the win chime — is synthesised with the Web Audio API. There are no audio files.

## Licence

MIT
