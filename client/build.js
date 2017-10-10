const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const hasArg = arg => {
  for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === arg) {
      return true
    }
  }
  return false
}

const webpackConfig = {
  entry: {
    app: path.join(__dirname, '/src/app/index.js')
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: [ 'babel-loader' ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '/src/index.html'),
        to: path.join(__dirname, '/build/index.html')
      }, {
        from: path.join(__dirname, '/src/app/app.html'),
        to: path.join(__dirname, '/build/app.html')
      }
    ])
  ]
}

const copyStaticFiles = (err, stats) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Client build updated')
  }
}

const webpackCompiler = webpack(webpackConfig)

if (hasArg('--watch')) {
  webpackCompiler.watch({
    aggregateTimeout: 300,
    poll: true
  }, copyStaticFiles)
} else {
  webpackCompiler.run(copyStaticFiles)
}
