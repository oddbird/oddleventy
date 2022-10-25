import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-minification';

export default {
  input: 'src/js/index.js',
  output: {
    file: '_built/js/scripts.js',
    format: 'iife',
    sourcemap: false,
  },
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser(),
  ],
};
