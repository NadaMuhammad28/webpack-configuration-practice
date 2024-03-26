const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//for dependency graph
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const HtmlWebpackPluginInstance = new HtmlWebpackPlugin({
  filename: 'index.[contenthash].html',
  template: './src/index.html',
  hash: true,
});
module.exports = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //adds hash, useful for chaching
    filename: 'bundle.[contenthash].js',
    //cleans output directory
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match TypeScript files
        use: 'ts-loader', // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images', // Specify output directory for images
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname)],
    // TsconfigPathsPlugin will automatically add this
    // alias: {
    //   packages: path.resolve(__dirname, 'packages/'),
    // },
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({})],
  },
  plugins: [HtmlWebpackPluginInstance, new BundleAnalyzerPlugin()],
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    compress: true,
    port: 3000,
  },
};
