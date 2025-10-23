import process from "node:process";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";

const { PORT = "3000", NODE_ENV } = process.env;

const config = defineConfig({
  base: NODE_ENV === "production" ? "/template-vite-react/" : "/",

  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      generatedRouteTree: "./src/generated/router.gen.ts",
    }),
    react(),
    tsconfigPaths(),
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
  plugins: [tsconfigPaths()],

  test: {
    include: ["**/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules"],
    reporters: ["verbose"],
    watch: false,
    coverage: {
      // all: true,
      clean: true,
      cleanOnRerun: true,
      include: ["src"],
      exclude: ["**/*.{test,spec}.{ts,tsx}", "src/main.tsx", "src/generated"],
    },
    // biome-ignore lint/style/useNamingConvention: needed for vitest
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});

export default mergeConfig(config, testConfig);
