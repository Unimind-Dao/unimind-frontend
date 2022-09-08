module.exports = {
  reloadOnPrerender: process.env.NODE_ENV === "development",
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["default", "en", "pl"],
    defaultLocale: "default",
    // temporally add for development
    // localeDetection: false,
  },
};
