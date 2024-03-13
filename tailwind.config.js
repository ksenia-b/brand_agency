/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
      },
    },
    screens: {
      // sm: "480px",
      // md: "768px",
      // lg: "976px",
      // xl: "1440px",
    },
    colors: {
      primary: "#F4E041",
      hover: "#FFE302",
      secondary: "#00BDD3",
      background: "#F8F8F8",
      disabled: "#B4B4B4",
      gray: "#7E7E7E",
      black: "#000000",
      white: "#fff"

    },
    //
    // extend: {
    //   spacing: {
    //     128: "32rem",
    //     144: "36rem",
    //   },
    //   borderRadius: {
    //     "4xl": "2rem",
    //   },
    // },
  },
  plugins: [],
}