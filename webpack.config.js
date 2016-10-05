const directory = process.env.DIRECTORY;

module.exports = {
  entry: `${__dirname}/src_${directory}/index.js`,
  output: {
    path: `${__dirname}/dist/${directory}`,
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
