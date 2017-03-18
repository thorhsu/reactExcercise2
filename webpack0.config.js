var path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry:{
    bundle: 'app.jsx'
  },
  output:{
    path: path.resolve('dist'),
    filename: '[name].js'
  },

  resolve:{
    root: [
      path.resolve('src'),
      path.resolve('src/components'),
      path.resolve('node_modules')
    ],
    extensions:['','.js','.jsx']
  },
  resolveLoader:{
    root: path.resolve('node_modules')
  },

  module:{
    loaders:[{
      test: /\.jsx$/,
      loader: 'babel?presets[]=react',
      include: path.resolve('src')
    }]
  }

};
