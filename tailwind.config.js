const { theme } = require("tailwindcss/defaultConfig");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...theme.fontFamily.sans],
        script: ["Lobster"],
      },
    },
  },
};
