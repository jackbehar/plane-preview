module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: ["src/avatar/avatar.tsx", "src/badge/badge.tsx", "src/button/button.tsx"],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "Example Design System",
};
