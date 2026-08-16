// Syntax-checks the module script inside every game's index.html.
//
// A duplicate function declaration or a stray bracket is a parse error, which
// means the whole script never runs and the page loads dead — with nothing in
// the served HTML to suggest anything is wrong. This catches that before a
// deploy does.
//
//   node tools/check-syntax.mjs

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const work = mkdtempSync(join(tmpdir(), 'games-check-'));

const games = readdirSync(root, { withFileTypes: true })
  .filter(entry => entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'tools')
  .map(entry => entry.name)
  .filter(name => existsSync(join(root, name, 'index.html')));

let failed = 0;

for (const game of games) {
  const html = readFileSync(join(root, game, 'index.html'), 'utf8');
  const match = html.match(/<script type="module">([\s\S]*?)<\/script>/);

  if (!match) {
    console.log(`  –  ${game}: no module script`);
    continue;
  }

  const file = join(work, `${game}.mjs`);
  writeFileSync(file, match[1]);

  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
    console.log(`  ok ${game}`);
  } catch (err) {
    failed++;
    const detail = String(err.stderr || err.message)
      .split('\n')
      .filter(line => line.includes('Error') || line.includes('^') || line.match(/^\s*\d/))
      .slice(0, 4)
      .join('\n      ');
    console.log(`  !! ${game}\n      ${detail}`);
  }
}

console.log(failed ? `\n${failed} game(s) will not run.` : `\nAll ${games.length} games parse.`);
process.exit(failed ? 1 : 0);
