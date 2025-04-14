import process from "node:process";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const { PORT = "3000" } = process.env;

export default defineConfig({
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  plugins: [react()],

  server: {
    port: Number(PORT),
    allowedHosts: true,
  },

  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
});
