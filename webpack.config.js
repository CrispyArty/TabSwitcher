const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = path.join(__dirname, 'src');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const explain = process.argv.includes("--explain");

module.exports = (env) => {
  return {
    devtool: env.dev ? 'inline-source-map' : false,
    mode: env.dev ? 'development' : 'production',
    entry: {
      // popup: {
      //   import: path.join(srcDir, 'popup/index.tsx'),
      //   layer: 'extention',
      // },
      window: {
        import: path.join(srcDir, 'window/index.ts'),
        layer: 'extention',
      },
      background: {
        import: path.join(srcDir, 'background/index.ts'),
        layer: 'background',
      },
      inject: {
        import: path.join(srcDir, 'inject/index.ts'),
        layer: 'inject',
      },
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'js/[name].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          issuerLayer: 'extention',
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                modules: {
                  localIdentName: '[local]--[hash:base64:5]',
                  namedExport: true,
                },
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.css$/,
          issuerLayer: 'inject',
          use: [
            'style-loader',
            {
              loader: 'css-loader',
            },
            'postcss-loader',
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks(chunk) {
          return chunk.name == 'popup' || chunk.name == 'window';
        },
      },
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: '.', to: '.', context: 'public' }],
        options: {},
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
    ],
  };
};
