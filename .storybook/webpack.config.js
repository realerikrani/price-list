// https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode--default
const path = require('path');

module.exports = async ({ config, _ }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
