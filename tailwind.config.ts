import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      sans: ["Jost", "serif"],
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(111.02deg, #f5693f, #f53f71)",
        "text-gradient": "linear-gradient(to right, #f5693f, #f53f71)",
      },
      colors: {
        background: "#ffffff",
        foreground: "var(--foreground)",
        sec: "#6a6d77",
        secondaryBg: "#F5EEE9",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-out": "fadeOut 0.5s ease-in",
        "scale-up": "scaleUp 0.5s ease-out",
        "scale-down": "scaleDown 0.5s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.9)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.9)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          backgroundImage: "linear-gradient(to right, #f97316, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      });
    }),
  ],
} satisfies Config;
