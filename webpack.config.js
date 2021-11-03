const CopyWebPackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sharp = require('sharp');

const webpack = require('webpack');
require('dotenv').config();

const path = require('path');

module.exports = (env, argv) => { 
return {
    output: {
      filename: '[name].bundle.js', // 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: "/",
      chunkFilename: 'chunks/[name].js'
    },
    module: {
      rules: [
        // {
        //   test: /\.(jpg|wav|gif|png|svg)$/,
        //   exclude: /node_modules/,
        //   loader: 'file-loader',
        //   options: {
        //     outputPath: 'static/assets/'
        //   }
        // },
        // {
        //   test: /\.svg$/,
        //   exclude: /node_modules/,
        //   use: [
        //     '@svgr/webpack', 
        //     {loader: 'file-loader',
        //     options: {
        //       outputPath: 'static/assets/'
        //     }}
        //   ],
        // },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/transform-runtime']
            }
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                    localIdentName: '[folder]_[local]_[hash:base64:5]',
                    exportLocalsConvention: "camelCase"
                }
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.css$/,
          // exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
          options: {
            minimize : false
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        template: './public/index.html',
        favicon: "./public/me-favicon.jpg",
        minify : {
          collapseWhitespace: false,
          removeComments: false,
          // keepClosingSlash: true,
          // removeRedundantAttributes: true,
          // removeScriptTypeAttributes: true,
          // removeStyleLinkTypeAttributes: true,
          // useShortDoctype: true
        }
      }),
      // new MiniCssExtractPlugin(),
      // new ESLintPlugin(),
      new CopyWebPackPlugin({
        patterns: [
          { // copying README into the master branch of the repo
            from: 'README.md'
          },
          { // files in static should be transfered 1:1 directly to new static in dist
            from: 'static',
            to: "static",
          },
          //  https://stackoverflow.com/questions/54217627/using-webpack-to-optimise-unreferenced-images-img-loader
          { // files in static/images need a created thumbnail version of the original (i.e. 300px wide)
            from: 'static/images/*.(png|jpg)',
            to: '[path][name]_thumb[ext]',
            transform: content => sharp(content).resize(300).toBuffer(),
          },
        ]
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env)
      }),
    ]
  }
};
