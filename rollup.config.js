import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

module.exports = {
  input: 'src/js/index.js',
  output: {
    file: '_built/js/scripts.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
