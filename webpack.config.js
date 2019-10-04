const path = require('path')
const env = require('yargs').argv.mode
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const libraryName = 'dragee'

let outputFile

if (env === 'build') {
  outputFile = libraryName + '.min.js'
} else {
  outputFile = libraryName + '.js'
}

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    draggable: './src/draggable.js'
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
    //   title: 'Development',
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
    // TODO
    minimize: false
  }
}
