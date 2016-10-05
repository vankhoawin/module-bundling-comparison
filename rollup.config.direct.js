const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');


module.exports = {
  entry: `${__dirname}/src_direct/index.js`,
  targets: [
    {
      dest: `${__dirname}/dist/direct/bundle-rollup.js`,
      format: 'iife'
    }
  ],
  plugins: [
    babel(),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    })
  ],
  external: [
    'lodash'
  ],
  globals: {
    lodash: 'lodash'
  }
};
