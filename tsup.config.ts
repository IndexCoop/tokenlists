import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  tsconfig: "./tsconfig.json",
  splitting: false,
  format: ["cjs", "esm"],
  minify: true,
  clean: true,
  sourcemap: true,
  dts: true,
  publicDir: "./dist",
  external: ["node:crypto"],
  esbuildOptions(options) {
    options.plugins = [
      {
        name: "replace-node-crypto",
        setup(build) {
          build.onResolve({ filter: /^node:crypto$/ }, (args) => {
            if (build.initialOptions.platform === "browser") {
              return { path: require.resolve("crypto-browserify") };
            } else {
              return { path: "crypto" };
            }
          });
        },
      },
    ];
  },
});
