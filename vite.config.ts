import process from "node:process";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";

const { PORT = "3000", NODE_ENV } = process.env;

function getConfig() {
  const config = defineConfig({
    base: NODE_ENV === "production" ? "/template-vite-react/" : "/",

    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
        generatedRouteTree: "./src/generated/router.gen.ts",
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

  const testFiles = ["./src/**/*.{test,spec}.{ts,tsx}"];
  if (process.env["E2E"] === "true") {
    testFiles.push("./e2e/**/*.{test,spec}.{ts,tsx}");
  }

  const testConfig = defineTestConfig({
    test: {
      include: testFiles,
      reporters: ["verbose"],
      watch: false,
      coverage: {
        all: true,
        clean: true,
        cleanOnRerun: true,
        include: ["src"],
        exclude: ["**/*.{test,spec}.{ts,tsx}"],
      },
      // biome-ignore lint/style/useNamingConvention: needed for vitest
      env: { NODE_ENV: "test" },
      environment: "jsdom",
      passWithNoTests: true,
      setupFiles: ["./vitest.setup.ts"],
    },
  });

  return mergeConfig(config, testConfig);
}

export default getConfig();
