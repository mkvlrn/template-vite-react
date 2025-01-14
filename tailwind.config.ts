import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      keyframes: {
        logoSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: { logoSpin: "logoSpin 20s linear infinite" },
    },
  },
} satisfies Config;
