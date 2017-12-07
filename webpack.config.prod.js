const webpack = require('webpack');
const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: `${srcPath}/index.prod.js`,

  output: {
    filename: 'index.js',
    path: distPath,
    publicPath: '',
    library: '@aglet/cartographer',
    libraryTarget: 'umd',
  },

  module: {
    rules: [{
      test: /\.js$/,
      include: /(src)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react'],
        },
      },
    }, {
      test: /\.svg/,
      use: [{
        loader: 'url-loader',
      }],
    }, {
      test: /(\.scss)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]',
            minimize: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    }],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: true,
      sourceMap: true,
    }),
  ],
};
