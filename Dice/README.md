# 3D Dice Roller

A physics-driven 3D dice roller that runs in the browser. Single HTML file, no build step.

Open `index.html` directly, or visit the deployed site.

## Features

- **Real physics.** Dice are thrown with random velocity and spin, bounce off the table and walls, and the result is read from whichever face comes to rest pointing up. Nothing is decided in advance.
- **Six die types.** d4, d6, d8, d10, d12 and d20, built as true polyhedral meshes. The d10 is a proper pentagonal trapezohedron.
- **1–8 dice at once,** with each value listed and the total shown large.
- **Face markings** as numbers or dots. Dots use the standard 3×3 pip layouts for values 1–9; higher values fall back to a numeral.
- **Custom colours** for the dice, the table and the backdrop. The ink on each face flips between dark and light automatically so every die colour stays readable, and the settings are remembered between visits.
- **A table that matches the screen.** The felt is re-shaped on every resize — tall and narrow in portrait, wide in landscape — so the play area fills the view instead of floating in a margin of empty backdrop.
- **Orbit camera.** Drag to swing around the table, pinch or scroll to zoom, tap to roll.
- **Sound and haptics.** Impact noise is synthesised with the Web Audio API and scaled by collision speed; supported devices vibrate on throw and on settle.
- **Mobile friendly,** with a settings panel that folds away behind one button, safe-area insets, and touch gestures that never fight the page.

## Controls

| Action | Input |
| --- | --- |
| Roll | Tap or click anywhere, or press Space / Enter |
| Orbit | Drag |
| Zoom | Pinch, or scroll wheel |

## Implementation notes

- Rendering is [three.js](https://threejs.org), physics is [cannon-es](https://pmndrs.github.io/cannon-es/), both loaded from a CDN through an import map.
- Each die's collision hull is built from the exact triangles being rendered, so the visible mesh and the physics shape can never drift apart.
- The triangle soup from each base geometry is grouped into flat faces by normal, so a dodecahedron's pentagons and a d10's kites each become a single numbered face with its own centred texture.
- Opposite faces sum to *sides + 1*, matching a real die. The d4 has no antipodal faces, so it is numbered sequentially and read from the face lying down, as a physical d4 is.
- If a die lands cocked — on an edge, or stacked on another die — it is nudged back into the air and allowed to settle again, up to a seven second cap.

## Licence

MIT
