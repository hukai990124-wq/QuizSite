// Bootstrap the strictly checked TypeScript publisher with the installed compiler.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
execFileSync(process.execPath, ['node_modules/typescript/bin/tsc', '-p', 'tsconfig.banks.json', '--noEmitOnError'], { cwd: root, stdio: 'inherit' });
execFileSync(process.execPath, ['.build/banks/quiz_kit/typescript/build.mjs', ...process.argv.slice(2)], { cwd: root, stdio: 'inherit' });
