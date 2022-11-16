import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default [{
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      name: 'Dragee'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}, {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.min.js',
      format: 'iife',
      name: 'Dragee'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    terser()
  ]
}, {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'Dragee'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    terser()
  ]
}]
