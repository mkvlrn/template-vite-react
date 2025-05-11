import { env } from "node:process";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// biome-ignore lint/nursery/useExplicitType: false positive https://github.com/biomejs/biome/issues/5932
const PORT: string = env.PORT ?? "3000";

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
