import process from "node:process";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";

const { PORT = "3000", GITHUB_ACTIONS } = process.env;

const config = defineConfig({
  base: GITHUB_ACTIONS ? "/template-vite-react/" : "/",
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      generatedRouteTree: "./src/generated/router.gen.tsx",
    }),
    react(),
  ],
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
    include: ["**/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules"],
    watch: false,
    coverage: {
      // all: true,
      clean: true,
      cleanOnRerun: true,
      include: ["src"],
      exclude: ["**/*.{test,spec}.{ts,tsx}", "src/main.tsx", "src/generated", "src/routes"],
    },
    // biome-ignore lint/style/useNamingConvention: needed for vitest
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});

export default mergeConfig(config, testConfig);
