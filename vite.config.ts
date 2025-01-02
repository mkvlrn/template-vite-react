import react from "@vitejs/plugin-react-swc";
import { defineConfig, mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig as defineTestConfig } from "vitest/config";

const { PORT = "3000" } = process.env;

const baseConfig = defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { port: Number(PORT) },
  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
});

const testConfig = defineTestConfig({
  test: {
    reporters: ["verbose"],
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      reportsDirectory: "coverage",
      reporter: ["lcov", "html", "text"],
      include: ["src"],
    },
    // biome-ignore lint/style/useNamingConvention: needed for vitest
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});

// biome-ignore lint/style/noDefaultExport: needed for vitest
export default mergeConfig(baseConfig, testConfig);
