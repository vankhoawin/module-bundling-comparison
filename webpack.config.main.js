module.exports = {
  entry: `${__dirname}/src_main/index.js`,
  output: {
    path: `${__dirname}/dist/main`,
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
