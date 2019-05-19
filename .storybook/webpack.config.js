// https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode--default
const path = require('path');
const projectRoot = path.resolve(__dirname, '../')

module.exports = async ({ config, _ }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(projectRoot),
  });

  config.resolve.alias['@'] = `${projectRoot}/src`;

  return config;
};
