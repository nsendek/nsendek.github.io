const CopyWebPackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      //   test: /\.(jpg|wav|gif|png)$/,
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
            presets: ['@babel/preset-env', '@babel/preset-react']
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
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                  exportLocalsConvention: "camelCase"
              }
            }
          },
          'sass-loader'
        ]
      },
      
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                  localIdentName: '[name]_[local]_[hash:base64:5]',
                  exportLocalsConvention: "camelCase"
              },
            }
          }
        ]
      },
      // some libraries in node_modules REQUIRE that you don't use exclusively CSS-modules
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        include: /node_modules/,
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './public/index.html' 
    }),
    // new CopyWebPackPlugin({
    //   patterns: [
    //     { // files in static should be transfered 1:1 directly to new static in build
    //       from: 'static',
    //       to: "static"
    //     },
    //   ]
    // }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ],
}};
