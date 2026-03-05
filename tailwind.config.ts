import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0c10",
        surface: "#111318",
        surface2: "#181c24",
        surface3: "#1e2330",
        border: "#252b38",
        border2: "#2e3547",
        accent: "#e8c84a",
        accent2: "#f0d878",
        text1: "#e8eaf0",
        text2: "#9ba3b8",
        text3: "#5c6478",
        emerald: "#3ecf8e",
        crimson: "#f04b4b",
        cobalt: "#4b8ef0",
        tangerine: "#f07a4b",
        violet: "#9b6cf0",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        serif: ["Instrument Serif", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
