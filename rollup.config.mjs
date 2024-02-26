import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const config = [
  {
    input: "build/compiled/main.js",
    output: {
      file: "lib/main.esm.js",
      format: "es",
      sourcemap: true,
    },
    plugins: [typescript()],
  },
  {
    input: "build/compiled/main.js",
    output: {
      file: "lib/main.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [typescript()],
  },
  {
    input: "build/compiled/main.d.ts",
    output: {
      file: "lib/main.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];

export default config;
