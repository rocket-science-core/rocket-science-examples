const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".md"],
  },

  output: {
    publicPath: "http://localhost:3001/",
  },

  devServer: {
    port: 3001,
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
      exposes: {},
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
