import process from "node:process";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const { PORT = "3000" } = process.env;

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  server: {
    port: Number(PORT),
    allowedHosts: true,
  },

  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
});
