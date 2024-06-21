/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunitoFont: ["nunito", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home-bg": "url('./assets/i/bg.jpg')",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    colors: {
      primary: "#F4E041",
      hover: "#FFE302",
      secondary: "#00BDD3",
      background: "#F8F8F8",
      disabled: "#B4B4B4",
      gray: "#7E7E7E",
      black: "#000000",
      white: "#fff",
      red: "#f00",
    },
    fontSize: {
      xs: ["12px", "14px"],
      sm: "0.8rem",
      base: ["16px", "26px"],
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": ["40px", "40px"],
      "5xl": "3.052rem",
    },
  },
};
