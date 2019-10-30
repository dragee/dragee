import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

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
    commonjs(),
    sizeSnapshot()
  ]
}]
