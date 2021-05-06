const webpack = require("webpack");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "test",
    projectName: "test-proj",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      hot: true,
      liveReload: false,
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.API_URL": JSON.stringify(webpackConfigEnv.API_URL),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  });
};
