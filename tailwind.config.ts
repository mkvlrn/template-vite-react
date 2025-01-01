import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      keyframes: {
        logoSpin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(-360deg)" } },
      },
      animation: { logoSpin: "logoSpin 20s linear infinite" },
    },
  },
};

// biome-ignore lint/style/noDefaultExport: needed for tailwind
export default config;
