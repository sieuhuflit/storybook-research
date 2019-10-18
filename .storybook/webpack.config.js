const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const extractCss = new MiniCssExtractPlugin({
  filename: '[name].[hash:8].css',
});

module.exports = ({ config, mode }) => {
  /**
   * Add rules
   */

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    sideEffects: false,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: mode === 'development',
        },
      },
      {
        loader: 'css-loader',
        options: {
          localsConvention: 'camelCase',
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
      },
      {
        loader: 'sass-loader',
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: './src/styles/resource.scss',
        },
      },
    ],
  });

  /**
   * Add Plugins
   */

  config.plugins.push(extractCss);

  return config;
};