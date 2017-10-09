const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
const definePlugin = new webpack.DefinePlugin({
  ENV_NAME: JSON.stringify("development"),
  APP_NAME: JSON.stringify("a simple app here")
});

console.log(`__dirname = ${__dirname}`);
const root = path.resolve(__dirname, '../');
console.log(`root = ${root}`);

const rootJoin = path.join(__dirname, '../');
console.log(`rootJoin = ${rootJoin}`);
module.exports = {
     resolve: {
       modules: [path.resolve(root, "node_modules"), path.resolve(root, "src")],
     },
     entry: path.resolve(root, 'src/app.js'),
     devtool: 'inline-source-map',
     devServer: {
        contentBase: path.resolve(root, 'dist')
     },
     plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin("styles.css"), definePlugin],
     output: {
         path: path.resolve(root, 'dist'),
         filename: 'app.bundle.js',
         publicPath: '/'
     },
      module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: path.resolve(root, "node_modules"),
            use: ['babel-loader', 'eslint-loader']
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/'
                }  
              }
            ]
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
      ]
     }
 };

