import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const { PORT = "3000" } = process.env;

// biome-ignore lint/style/noDefaultExport: needed for vitest
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { port: Number(PORT) },
  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
});
