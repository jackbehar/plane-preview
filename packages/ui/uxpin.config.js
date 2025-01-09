module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: [
          "src/UXPin/Avatar/Avatar.jsx",
          "src/UXPin/AvatarGroup/AvatarGroup.jsx",
          "src/UXPin/Badge/Badge.jsx",
          "src/UXPin/Button/Button.jsx",
          "src/UXPin/Breadcrumbs/Breadcrumbs.jsx",
          "src/UXPin/Card/Card.jsx",
          "src/UXPin/ToggleSwitch/ToggleSwitch.jsx",
          // "src/typography/sub-heading.tsx",
        ],
      },
    ],
    wrapper: "src/UXPinWrapper/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "Example Design System",
};
