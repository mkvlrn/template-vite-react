import react from "@vitejs/plugin-react-swc";
import { defineConfig, mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig as defineTestConfig } from "vitest/config";

const { PORT = "3000" } = process.env;

const baseConfig = defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { port: Number(PORT) },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
  },
});

const testConfig = defineTestConfig({
  test: {
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      reportsDirectory: "coverage",
      reporter: ["lcov", "html", "text"],
      include: ["src"],
    },
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./test/_setup/vitest.setup.ts"],
  },
});

export default mergeConfig(baseConfig, testConfig);
