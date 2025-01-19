import { defineConfig } from "vitest/config";
import { testConfig as baseConfig } from "../vite.config";

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    include: ["./e2e/**/*.test.{ts,tsx}"],
  },
});
