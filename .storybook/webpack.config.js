// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
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
        options: {
          stripdeclarations: true,
        },
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
};
