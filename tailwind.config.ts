import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        forest: "#0a3d2e",
        green: "#0e7a56",
        emerald: "#16b07e",
        mint: "#4ddaaa",
        fog: "#edfbf5",
        ink: "#07100d",
        night: "#0d1a14",
        dark: "#121f18",
        panel: "#182419",
        slate: "#8ba89a",
        gold: "#d4a843",
        blue: "#2d6dc9",
        line: "rgba(255,255,255,0.07)",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "14px",
        lg: "22px",
        xl: "36px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
