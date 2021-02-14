const path = require('path');
const webpack = require('webpack');
const os = require('os');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './index.js',
  ],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      // dir
      resources: path.resolve(__dirname, 'resources'),
      app: path.resolve(__dirname, 'app'),
      utils: path.resolve(__dirname, 'app/utils'),
      components: path.resolve(__dirname, 'app/components'),
      router: path.resolve(__dirname, 'app/router'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    noParse:[/jquery/],
    rules: [
      {
        test: /\.m?js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: ['happypack/loader?id=babel']
      },
      {
        test: /\.css$/,
        use: ['happypack/loader?id=css'],
      },
      {
        test: /\.less$/,
        use: ['happypack/loader?id=less'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(png|jpg|gif|svg|ico|woff|eot|ttf|woff2|icns)$/,
        use: ['happypack/loader?id=file'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HappyPack({
      id: 'babel',
      threadPool: happyThreadPool,
      loaders: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", {"loose": true}],
            "@babel/plugin-proposal-function-sent",
            "@babel/plugin-proposal-export-namespace-from",
            "@babel/plugin-proposal-numeric-separator",
            "@babel/plugin-proposal-throw-expressions",
          ]
        }
      }],
    }),
    new HappyPack({
      id: 'css',
      threadPool: happyThreadPool,
      loaders: ['style-loader', 'css-loader'],
    }),
    new HappyPack({
      id: 'less',
      threadPool: happyThreadPool,
      loaders: ['style-loader', 'css-loader', 'less-loader'],
    }),
    new HappyPack({
      id: 'file',
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      minify: true
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    compress: true,
    contentBase: '.',
    historyApiFallback: true,
    hot: true,
    inline: true,
    liveReload: false
  }
};
