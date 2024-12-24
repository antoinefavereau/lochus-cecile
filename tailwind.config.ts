import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        light: "var(--light)",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui"],
      },
      keyframes: {
        customSpin: {
          "0%": { transform: "skewX(30deg) rotate(0deg)" },
          "100%": { transform: "skewX(30deg) rotate(360deg)" },
        },
        centeredSpin: {
          "0%": { transform: "translate(-50%, -50%) skewX(-30deg) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) skewX(-30deg) rotate(-360deg)" },
        },
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
