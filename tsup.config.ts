import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  tsconfig: './tsconfig.json',
  splitting: false,
  format: ['cjs', 'esm'],
  minify: true,
  clean: true,
  sourcemap: true,
  dts: true,
  publicDir: './dist',
  external: ['node:crypto'],
});
