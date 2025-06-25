import process from "node:process";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const { PORT = "3000" } = process.env;

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  server: {
    port: Number(PORT),
    allowedHosts: true,
  },

  build: {
    sourcemap: true,
    outDir: "./build",
    emptyOutDir: true,
  },

  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    reporters: ["verbose"],
    watch: false,
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      include: ["src"],
      exclude: ["src/**/*.test.{ts,tsx}", "src/main.{ts,tsx}"],
    },
    // biome-ignore lint/style/useNamingConvention: needed for vitest
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./.vite/vitest.setup.ts"],
  },
});
