import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const frontendRoot = fileURLToPath(new URL('.', import.meta.url));

const htmlInputs = Object.fromEntries(
  readdirSync(frontendRoot)
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace(/\.html$/, ''), resolve(frontendRoot, file)])
);

export default {
  root: frontendRoot,
  build: {
    outDir: resolve(frontendRoot, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: htmlInputs,
    },
  },
};
