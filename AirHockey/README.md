# Sling Air Hockey

Air hockey played with a slingshot instead of a paddle. Pull back from the puck, release, and it fires the opposite way — turns alternate, and an own goal counts against you.

Single HTML file, no build step. Open `index.html`, or visit the deployed site.

## Rules

- Players take turns firing the puck. Whoever is shooting fires it from wherever it came to rest.
- A puck that reaches the far goal mouth scores. A puck that reaches your own goal scores for your opponent.
- After a goal, the player who conceded shoots next from their own half.
- First to the target score wins — 5, 7 or 11 goals.

## Controls

| Action | Input |
| --- | --- |
| Aim and fire | Drag away from the puck, release |
| Power | Length of the drag, up to the cap |
| Settings | The gear button, top left |

## Modes

**vs Computer** on easy, normal or hard. Difficulty controls the computer's aim error and how hard it hits — easy misses by up to 0.3 radians and rarely fires at full power, hard is accurate to 0.06 radians.

**2 players** on one device, taking turns on the same screen. The far scoreboard is inverted so it reads the right way up from the other side.

## Implementation notes

- The puck slides on a plane, so the simulation is 2D and hand-written rather than a general 3D physics engine: reflecting a circle off an axis-aligned rail is exact, and there is no solver drift to fight.
- Motion is substepped when the puck is fast, so it cannot tunnel through a rail between frames. Velocity decays exponentially, which matches a puck on air far better than a constant deceleration.
- The table is rebuilt on every resize, staying between 1.25:1 and 2:1 so it reads as a hockey table in portrait and landscape alike, and the camera then frames whatever shape that produced.
- Rendering is [three.js](https://threejs.org) loaded from a CDN. Impact and goal sounds are synthesised with the Web Audio API — no audio files.

## Licence

MIT
