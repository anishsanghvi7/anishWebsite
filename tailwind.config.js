const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        rsms: [InterVariable, ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
