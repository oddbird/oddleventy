'use strict';

const terser = require('rollup-plugin-terser');

const rollupConfig = require('./rollup.config');

rollupConfig.plugins.push(terser.terser());

module.exports = rollupConfig;
