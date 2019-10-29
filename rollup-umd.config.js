import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import { sizeSnapshot } from "rollup-plugin-size-snapshot"

export default [{
  input: 'src/index.js',
  output: [
    {
      file: 'dist/umd/index.js',
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
    uglify(),
    sizeSnapshot()
  ]
}]
