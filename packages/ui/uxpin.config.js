module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: [
          "src/avatar/avatar.tsx",
          "src/badge/badge.tsx",
          "src/button/merge/Button.tsx",
          "src/breadcrumbs/breadcrumbs.tsx",
          "src/card/card.tsx",
          "src/typography/sub-heading.tsx",
        ],
      },
    ],
    wrapper: "src/UXPinWrapper/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "Example Design System",
};
