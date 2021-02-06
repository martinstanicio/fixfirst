export default {
  head: {
    htmlAttrs: { lang: "en" },
    title: "LandOff",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Your landing page, taking off.",
      },
    ],
  },
  components: true,
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
  ],
  modules: ["@nuxtjs/axios"],
};
