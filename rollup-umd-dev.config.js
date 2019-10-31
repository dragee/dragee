import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [{
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index-dev.umd.js',
      format: 'umd',
      name: 'Dragee',
      sourcemap: 'inline'
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
    commonjs()
  ]
}]
