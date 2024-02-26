import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const config = [
  {
    input: "build/compiled/main.js",
    output: {
      file: "lib/main.js",
      format: "es",
      sourcemap: true,
    },
    plugins: [typescript()],
  },
  {
    input: "build/compiled/main.js",
    output: {
      file: "lib/main.umd.js",
      format: "umd",
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
