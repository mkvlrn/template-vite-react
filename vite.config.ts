import process from "node:process";
import baseTestConfig from "@mkvlrn/config/vitest";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";

const { PORT = "3000", GITHUB_ACTIONS } = process.env;
let viteBase = "/";
if (GITHUB_ACTIONS) {
  viteBase = "/template-vite-react/";
}

const config = defineConfig({
  base: viteBase,
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

const testConfig = mergeConfig(
  baseTestConfig,
  defineTestConfig({
    test: {
      include: ["**/**/*.{test,spec}.{ts,tsx}"],
      coverage: {
        exclude: [
          "**/*.{test,spec}.{ts,tsx}",
          "src/main.tsx",
          "src/{generated,routes,assets}",
          "**/*.{css,svg}",
        ],
      },
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
    },
  }),
);

export default mergeConfig(config, testConfig);
