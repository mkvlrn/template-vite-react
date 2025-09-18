import process from "node:process";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";

const { PORT = "3000", NODE_ENV } = process.env;

function getConfig() {
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

  const withIntegration = process.env["INTEGRATION"] === "true";
  const testFiles = withIntegration
    ? ["./src/**/*.{test,spec}.{ts,tsx}"]
    : ["./src/**/*.test.{ts,tsx}"];

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
        exclude: ["src/**/*.{test,spec}.{ts,tsx}", "src/main.{ts,tsx}"],
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
