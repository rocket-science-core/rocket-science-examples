const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".md"],
  },

  output: {
    publicPath: "http://localhost:3002/",
  },

  devServer: {
    port: 3002,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "ab_manager",
      library: { type: "var", name: "ab_manager" },
      filename: "remoteEntry.js",
      remotes: {
        "ab-manager": "ab_manager",
      },
      exposes: {
        "./tests": "./src/tests",
        "./VariantChooser": "./src/components/VariantChooser",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
      },
    }),
  ],
};
