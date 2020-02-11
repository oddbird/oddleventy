import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/js/index.js',
  output: {
    file: '_built/js/scripts.js',
    format: 'iife',
  },
  plugins: [resolve({ browser: true }), commonjs(), babel()],
};
