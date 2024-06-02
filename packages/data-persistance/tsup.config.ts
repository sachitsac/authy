import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/client.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  ...options,
}));
