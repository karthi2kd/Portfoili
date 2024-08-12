module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber: { 900: "#fd6f00", "900_99": "#fd6f0099" },
        black: { 900: "#000000", "900_33": "#00000033", "900_77": "#00000077" },
        blue_gray: { 100: "#d9d9d9", 700: "#535353" },
        deep_orange: { a200: "#ff8132" },
        gray: { 100: "#f7f7f7", 200: "#ecebeb", 400: "#afafaf", 600: "#797878", 800: "#414141", 900: "#1e1e1e" },
        orange: { 50: "#ffeada", "50_01": "#ffebdb" },
        white: { a700: "#ffffff", a700_00: "#ffffff00" },
      },
      boxShadow: {
        xs: "0 4px 7px 0 #00000033",
        bs: "inset 0 6.74px 6px 0 #00000077",
        bs1: "inset 0 6px 6px 0 #00000077",
      },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
