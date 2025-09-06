import process from "node:process";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";

const { PORT = "3000", NODE_ENV } = process.env;

const config = defineConfig({
  base: NODE_ENV === "production" ? "https://mkvlrn.github.io/template-vite-react/" : "",

  plugins: [react()],

  server: {
    port: Number(PORT),
    allowedHosts: true,
  },

  build: {
    target: "esnext",
    sourcemap: true,
    outDir: "./build",
    emptyOutDir: true,
  },
});

const testConfig = defineTestConfig({
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
    setupFiles: ["./vitest.setup.ts"],
  },
});

export default mergeConfig(config, testConfig);
