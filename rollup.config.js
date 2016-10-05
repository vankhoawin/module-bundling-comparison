const babel = require('rollup-plugin-babel');


module.exports = {
  entry: `${__dirname}/src/index.js`,
  targets: [
    {
      dest: `${__dirname}/dist/bundle-rollup.js`,
      format: 'iife'
    }
  ],
  plugins: [
    babel()
  ],
  external: [
    'lodash'
  ],
  globals: {
    lodash: 'lodash'
  }
};
