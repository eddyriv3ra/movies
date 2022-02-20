const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
  {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  },
  {
    test: /\.html$/,
    use: [
      {
        loader: "html-loader",
      },
    ],
  },
];

module.exports = (env, argv) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
      filename: "bundle.js",
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "build"),
      },
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
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve("./src/index.html"),
        filename: "./index.html",
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        },
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
  };
};
