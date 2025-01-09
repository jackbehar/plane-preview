module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: [
          "src/UXPin/Avatar/Avatar.jsx",
          // "src/badge/badge.tsx",
          "src/UXPin/Button/Button.jsx",
          // "src/breadcrumbs/breadcrumbs.tsx",
          // "src/card/card.tsx",
          // "src/typography/sub-heading.tsx",
        ],
      },
    ],
    wrapper: "src/UXPinWrapper/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "Example Design System",
};
