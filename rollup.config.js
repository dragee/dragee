import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import visualizer from 'rollup-plugin-visualizer'
import { uglify } from 'rollup-plugin-uglify'

export default [{
  input: 'src/index.js',
  output: [
    {
      file: `dist/index.esm.js`,
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
    sizeSnapshot(),
    visualizer()
  ]
}, {
  input: 'src/index.js',
  output: [
    {
      file: `dist/index.min.js`,
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
    uglify(),
    sizeSnapshot(),
    visualizer()
  ]
}]
