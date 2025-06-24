import process from "node:process";
import react from "@vitejs/plugin-react";
import { mergeConfig, type UserConfig as ViteConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import type { ViteUserConfig as VitestConfig } from "vitest/config";

const { PORT = "3000" } = process.env;

const viteConfig: ViteConfig = {
  plugins: [react(), tsconfigPaths()],

  server: {
    port: Number(PORT),
    allowedHosts: true,
  },

  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
};

const vitestConfig: VitestConfig = {
  plugins: [tsconfigPaths()],

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
};

export default mergeConfig(viteConfig, vitestConfig);
