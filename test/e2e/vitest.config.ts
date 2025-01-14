import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    include: ["./test/e2e/*.test.{ts,tsx}"],
    reporters: ["verbose"],
    coverage: {},
    // biome-ignore lint/style/useNamingConvention: needed for vitest
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: [],
  },
});
