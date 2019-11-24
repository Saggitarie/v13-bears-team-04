const withSass = require("@zeit/next-sass");
require("dotenv").config();

const globalSass = ["sass/main.scss"];

module.exports = withSass({
  env: {
    API_URL: process.env.API_URL,
  },
  // this makes our SASS variables global eliminating the
  // need to import the files in other .scss files
  webpack: config => {
    config.module.rules.push({
      enforce: "pre",
      test: /\.scss$/,
      loader: "sass-resources-loader",
      options: {
        resources: globalSass,
      },
    });

    return config;
  },
});
