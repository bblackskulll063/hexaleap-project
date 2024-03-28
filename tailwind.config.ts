import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
          'lightGray':'#525965',
          'lightzinc':'#F7F7F8',
          'lightBlue':'#2C9CF0',
          'Gray1' : '#292B32',
          'Gray2' : '#3B3E47',
          'Gray3' : '#DFDFDF',
          'Gray4' : '#18282A',
          'Gray5' : '#221A2C',
      },
    },
  },
  plugins: [],
};
export default config;
