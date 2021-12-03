const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
            'style-loader',
            { 
                loader: 'css-loader',
                options: { importLoaders: 1 } 
            },
            'less-loader'
        ]
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
//   plugins: [new webpack.HotModuleReplacementPlugin()]
  plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
};