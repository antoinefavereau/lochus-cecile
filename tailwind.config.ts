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
        veryLight: "var(--veryLight)",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui"],
      },
      keyframes: {
        scrollDot: {
          "0%, 20%": {
            top: "8px",
            left: "8px",
            height: "8px",
          },
          "40%": {
            top: "8px",
            left: "8px",
            height: "24px",
          },
          "60%, 80%": {
            top: "24px",
            left: "8px",
            height: "8px",
          },
          "100%": {
            top: "8px",
            left: "8px",
            height: "8px",
          },
        },
        scrollDashes: {
          "0%, 20%": {
            top: "8px",
            height: "24px",
          },
          "40%, 80%": {
            top: "32px",
            height: "0px",
          },
          "100%": {
            top: "8px",
            height: "24px",
          },
        },
        customSpin: {
          "0%": { transform: "rotateZ(-15deg) skewX(35deg) rotate(0deg)" },
          "100%": { transform: "rotateZ(-15deg) skewX(35deg) rotate(360deg)" },
        },
        centeredSpin: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(-360deg)" },
        },
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        horizontalMarquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
