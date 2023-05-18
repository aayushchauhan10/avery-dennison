/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "290px",
        xxl: "1540px",
        ssm: "374px",
        // min-width
      },
      fontFamily: {
        aktifoaBold: ["aktifoa-bold", "sans-serif"],
        aktifoaBoldOblique: ["aktifoa-boldoblique", "sans-serif"],
        aktifoaBook: ["aktifoa-book", "sans-serif"],
        aktifoaBookOblique: ["aktifoa-bookoblique", "sans-serif"],
        aktifoaLight: ["aktifoa-light", "sans-serif"],
        aktifoaLightOblique: ["aktifoa-lightoblique", "sans-serif"],
        aktifoaMedium: ["aktifoa-medium", "sans-serif"],
        aktifoaMediumOblique: ["aktifoa-mediumoblique", "sans-serif"],
        aktifoaSemibold: ["aktifoa-semibold", "sans-serif"],
        aktifoasemiBoldOblique: ["aktifoa-semiboldoblique", "sans-serif"],
      },
    },
  },
  plugins: [],
};
