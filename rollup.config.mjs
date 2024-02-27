import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const config = [
  {
    input: "build/compiled/main.js",
    output: {
      file: "lib/main.esm.js",
      format: "es",
      sourcemap: false,
      exports: "auto",
    },
    plugins: [typescript(), terser()],
  },
  {
    input: "build/compiled/main.js",
    output: {
      file: "lib/main.cjs.js",
      format: "cjs",
      sourcemap: false,
      exports: "auto",
    },
    plugins: [typescript(), terser()],
  },
];

export default config;
