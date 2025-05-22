/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://puigdo.dev",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  i18n: {
    locales: ["es", "en", "ca"],
    defaultLocale: "es",
  },
};
