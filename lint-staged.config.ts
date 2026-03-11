export default {
  "*.{ts,tsx}": ["tsc-files vite-env.d.ts", "pnpm biome-check", "pnpm test-staged"],
  "*.{json,jsonc}": ["pnpm biome-check"],
};
