const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    draggable: './src/draggable.js',
    arcslider: './src/arcslider.js',
    chart: './src/chart.js',
    list: './src/list.js',
    listswitcher: './src/listswitcher.js',
    sortable: './src/sortable.js',
    spider: './src/spider.js'
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Dragee', //libraryName, //todo make it consistant
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new CleanWebpackPlugin()
    // new HtmlWebpackPlugin({
    //   title: 'Production',
    // }),
  ],
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }, 'eslint-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      })
    ]
  }
}
