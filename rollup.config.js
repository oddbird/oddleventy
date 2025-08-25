import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/js/index.js',
  output: {
    dir: '_built/js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser(),
  ],
};
