// import tailwind from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig as defineTestConfig } from "vitest/config";

const { PORT = "3000" } = process.env;

const baseConfig = defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { port: Number(PORT), allowedHosts: true },
  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
});

export const testConfig = defineTestConfig({
  test: {
    include: ["./src/**/*.test.{ts,tsx}"],
    reporters: ["verbose"],
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      reportsDirectory: "coverage",
      reporter: ["lcov", "html", "text"],
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

export default mergeConfig(baseConfig, testConfig);
