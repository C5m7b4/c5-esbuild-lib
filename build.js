/* eslint-disable no-undef */
const { build } = require("esbuild");
const { devDependencies } = require("./package.json");
const { Generator } = require("npm-dts");

const shared = {
  entryPoints: ["./src/index.ts"],
  bundle: true,
  minify: false,
  sourcemap: true,
  external: Object.keys(devDependencies),
};

new Generator({
  entry: "./src/index.ts",
  output: "./dist/index.d.ts",
}).generate();

// build({
//   ...shared,
//   outfile: "./dist/index.js",
// });

build({
  ...shared,
  outfile: "./dist/esm/index.esm.js",
  format: "esm",
});

// build({
//   ...shared,
//   outfile: "./dist/cjs/index.cjs.js",
//   platform: "node",
//   target: ["node10.4"],
// });
