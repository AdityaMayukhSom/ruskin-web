import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "circular-std": ["var(--font-circular-std)"],
      },
      colors: {
        "primary-background-color": "#080808",
        "secondary-background-color": "#17231A",
        "primary-font-color": "#FFFFFF",
        "secondary-font-color": "#69FFAD",
        "tertiary-font-color": "#AAAAAA",
      },
      height: {
        "120": "30rem",
        "128": "32rem",
      },
      width: {
        "120": "30rem",
        "128": "32rem",
      },
      size: {
        "120": "30rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};
export default config;
