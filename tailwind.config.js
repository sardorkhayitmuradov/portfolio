/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      InterRegular: ["InterRegular"],
      InterMedium: ["InterMedium"],
      InterSemiBold: ["InterSemiBold"],
      InterBold: ["InterBold"],
      InterExtraBold: ["InterExtraBold"],

      MontserratRegular: ["MontserratRegular"],
      MontserratMedium: ["MontserratMedium"],
      MontserratSemibold: ["MontserratSemibold"],
      MontserratBold: ["MontserratBold"],
      MontserratExtraBold: ["MontserratExtraBold"],
    },
    extend: {

    },
  },
  plugins: [],
}
