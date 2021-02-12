const { theme } = require("tailwindcss/defaultConfig");
const accent = theme.colors.blue;

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
      colors: { accent },
      fontFamily: {
        sans: ["Montserrat", ...theme.fontFamily.sans],
        script: ["Lobster"],
      },
    },
  },
};
