/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        white: "#ffffff",
        black: "#000000",
        lightBlack: "#1F2327",
        darkGray: "#292E33",
        blue: "#588CF3",
        green: "#29CB97",
        purple: "#B558F6",
        yellow: "#FEC400",
        gray: "#F5F6FA",
      },
      textColor: {
        white: "#ffffff",
        black: "#000000",
        blue: "#588CF3",
        green: "#29CB97",
        purple: "#B558F6",
        yellow: "#FEC400",
        gray: "#F5F6FA",
      },
      borderColor: {
        white: "#ffffff",
        black: "#000000",
        blue: "#588CF3",
        green: "#29CB97",
        purple: "#B558F6",
        yellow: "#FEC400",
        gray: "#F5F6FA",
      },
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
