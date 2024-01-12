module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_3f": "#0000003f",
          "900_33": "#00000033",
          "900_cc": "#000000cc",
        },
        gray: {
          100: "#f5f5f5",
          300: "#e5e5e5",
          400: "#c4c4c4",
          500: "#999494",
          "500_01": "#aba9a9",
          "500_02": "#a9a4a4",
        },
        blue_gray: { 100: "#d9d9d9", "100_01": "#cccccc" },
        blue: { 500: "#18a0fb" },
        white: { A700: "#ffffff" },
        cyan: { 700: "#0d82a7" },
      },
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
        comfortaa: "Comfortaa",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
