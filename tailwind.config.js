/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono_700Bold: ["SpaceMono_700Bold"],
      },
      colors: {
        primary: "#00474B",
        secondary: "#26C2AD",
        text: {
          primary: "white",
          secondary: "#667B7C",
        },
      },
    },
  },
  plugins: [],
};
