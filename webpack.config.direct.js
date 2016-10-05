module.exports = {
  entry: `${__dirname}/src_direct/index.js`,
  output: {
    path: `${__dirname}/dist/direct`,
    filename: 'bundle-webpack.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      },
    ]
  }
};
