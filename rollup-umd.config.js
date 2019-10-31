import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

export default [{
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
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          '@babel/env', {
            useBuiltIns: "usage",
            corejs: '3'
          }
        ]
      ]
    }),
    resolve(),
    commonjs(),
    uglify(),
    sizeSnapshot()
  ]
}]
