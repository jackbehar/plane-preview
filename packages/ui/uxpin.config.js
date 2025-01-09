module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: [
          "src/UXPin/Avatar/Avatar.jsx",
          "src/UXPin/Badge/Badge.jsx",
          "src/UXPin/Button/Button.jsx",
          "src/UXPin/Breadcrumbs/Breadcrumbs.jsx",
          "src/UXPin/Card/Card.jsx",
          // "src/typography/sub-heading.tsx",
        ],
      },
    ],
    wrapper: "src/UXPinWrapper/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "Example Design System",
};
