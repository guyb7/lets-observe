const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const hasArg = arg => {
  for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === arg) {
      return true
    }
  }
  return false
}

const webpackAppConfig = {
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
    new UglifyJSPlugin({
      uglifyOptions: {
        mangle: true,
        compress: {
          unused: true
        }
      }
    })
  ]
}

const webpackHomepageConfig = {
  entry: {
    homepage: path.join(__dirname, '/src/homepage.js')
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'homepage.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '/src/*'),
        to: path.join(__dirname, '/build/[name].[ext]')
      }, {
        from: path.join(__dirname, '/src/app/app.html'),
        to: path.join(__dirname, '/build/app.html')
      }
    ])
  ]
}

const onAppCompiled = (err, stats) => {
  if (err) {
    console.error(err)
  } else {
    console.log('App compiled')
  }
}

const onHomepageCopied = (err, stats) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Homepage copied')
  }
}

const webpackAppCompiler = webpack(webpackAppConfig)
const webpackHomepageCompiler = webpack(webpackHomepageConfig)

if (hasArg('--watch')) {
  webpackAppCompiler.watch({
    aggregateTimeout: 300,
    poll: true
  }, onAppCompiled)
  webpackHomepageCompiler.watch({
    aggregateTimeout: 300,
    poll: true
  }, onHomepageCopied)
} else {
  webpackAppCompiler.run(onAppCompiled)
  webpackHomepageCompiler.run(onHomepageCopied)
}
