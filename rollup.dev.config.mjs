import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.dev.js',
    format: 'iife',
    name: 'Dragee',
    sourcemap: 'inline'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
}
