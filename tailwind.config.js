/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgb(51,51,51)",
        secondary: "rgb(102,102,102)",
        lightGray: "rgb(153,153,153)",
        lightBlue: "rgb(0,123,255)",
        hoverBlue: "#6c7ae0",
      },
      backgroundImage: {
        aboutBanner: " url(./assets/bg-01.jpg)",
        blogBanner: " url(./assets/bg-02.jpg)",
        bgBanner: " url(./assets/slide-01.jpg)",
      },
    },
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "768px",
      md: "1020px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
