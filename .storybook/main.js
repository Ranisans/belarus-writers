const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.resolve.extensions.push('.ts');
    config.resolve.extensions.push('.tsx');
    config.resolve.extensions.push('.js');
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH, STORIES_PATH],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['react-app', { flow: false, typescript: true }]],
            },
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
      {
        test: /\.scss$/,
        loader: 'sass-loader',
        options: {
          includePaths: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../../../../node_modules'),
            path.resolve(__dirname, '../src/components'),
          ],
        },
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
