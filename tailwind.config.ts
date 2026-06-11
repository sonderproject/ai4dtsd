import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy reserved for headings + the immersive hero
        navy: {
          DEFAULT: "#0a1929",
          deep: "#071320",
        },
        // Light theme surfaces
        surface: {
          DEFAULT: "#f5f8fc", // page background
          alt: "#eaf1f8", // alternating band
          card: "#ffffff", // cards
        },
        // Teal accent — deep tone for legibility on light, plus a bright tint
        accent: {
          DEFAULT: "#0e7490", // primary accent on light surfaces
          ink: "#0b5a70",
          bright: "#7dd3fc", // bright tint used on the dark hero
        },
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
