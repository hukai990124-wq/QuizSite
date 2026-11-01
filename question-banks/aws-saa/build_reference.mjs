// Compatibility entry point; the TypeScript publisher owns SAA pages.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
if (process.argv.length !== 2) throw new Error('Use node scripts/build-banks.mjs --bank aws-saa');
execFileSync(process.execPath, [fileURLToPath(new URL('../../scripts/build-banks.mjs', import.meta.url)), '--bank', 'aws-saa'], { stdio: 'inherit' });
