'use strict';

const babel = require('rollup-plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'src/js/index.js',
  output: {
    file: '_built/js/scripts.js',
    format: 'iife',
  },
  plugins: [resolve({ browser: true }), commonjs(), babel()],
};
