const path = require("path");

module.exports = {
  stories: ["../ui/**/*.stories.mdx", "../ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    path.resolve("./.storybook/vanilla-extract.js"),
    path.resolve("./.storybook/svgr.js"),
  ],
  framework: "@storybook/react",
  staticDirs: ["../public"],
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
