import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#131313",
      primary: "#37D8FA",
      primaryDark: "#07AAFF",
      secondary: "#FF7A00",
      lightButtonBg: "#C3F4F4",
      secondaryButtonBg: "#FFEDEB",
      borderLight: "#EEEEEE",
      bgPage: "#131313",
      text1: "#ffffff",
      text2: "#D9D9D9",
      text3: "#D9D9D9",
      textBlack: "#131313",
    },
    fontSize: {
      xs: "0.65rem",
      sm: "0.75rem",
      base: "0.88rem",
      xl: "1rem",
      "2xl": "1.2rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
    },
    extend: {
      screens: {
        largeScreen: "1920px",
      },
      spacing: {
        contentWidth: "1440px",
        contentWidthLarge: "1800px",
        headerHeight: "60px",
        headerHeightLarge: "98px",
      },
      gridTemplateColumns: {
        auto2: "repeat(2, auto)",
        auto3: "repeat(3, auto)",
        auto4: "repeat(4, auto)",
        auto6: "repeat(6, auto)",
        layout3: "10% 80% 10%",
        layout3Medium: "10% 80% 10%",
        layout3Large: "12% 76% 12%",
        layout2: "90% 10%",
        layout2Medium: "90% 10%",
        layout2Large: "88% 12%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
