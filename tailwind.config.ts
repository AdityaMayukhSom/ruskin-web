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
      },
    },
  },
  plugins: [],
};
export default config;
