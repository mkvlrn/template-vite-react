import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const { PORT = "3000" } = process.env;

export default defineConfig({
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
