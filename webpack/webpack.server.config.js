module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: './source/server.js',
  output:{
    path: './build/server',
    filename: '[name].js',
    publicPath: '/build/'
  },
  module:{
    loaders:[
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query:{
          presets:['latest-minimal','react']
        }
      }
    ]
  },
  target: 'node',
};
