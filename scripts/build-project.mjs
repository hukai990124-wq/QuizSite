import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
for (const args of [
  ['scripts/build-banks.mjs'],
  ['scripts/build-frontend.mjs'],
  ['node_modules/typescript/bin/tsc', '-p', 'tsconfig.site.json', '--noEmitOnError'],
  ['node_modules/typescript/bin/tsc', '-p', 'tsconfig.worker.json', '--noEmitOnError'],
]) execFileSync(process.execPath, args, { cwd: root, stdio: 'inherit' });
