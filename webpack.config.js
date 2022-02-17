const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

dotenv.config();

const rules = [
  {
    test: /\.js|jsx$/,
    loader: "babel-loader",
    options: {
      presets: [
        [
          "@babel/preset-react",
          {
            runtime: "automatic",
          },
        ],
      ],
    },
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },
];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    //   entry: "./src/index.js",
    output: {
      filename: isProduction ? "[name].[contenthash" : "main.js",
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
    },
    devServer: {
      open: true,
      port: 4000,
      client: {
        overlay: true,
      },
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".js", ".jsx"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    module: {
      rules,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "src/index.html" }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
  };
};
