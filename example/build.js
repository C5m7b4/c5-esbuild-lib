// eslint-disable-next-line no-undef
const { build } = require("esbuild");

build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: false,
  sourcemap: true,
  outdir: "./public/dist",
});
