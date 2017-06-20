import webpack from 'webpack'
import base from './webpack.base.config'

base.devtool = 'source-map'

base.plugins = base.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "'development'"
    }
  })
])

module.exports = base
