import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'demos/', 'coverage/']
  },
  js.configs.recommended,
  {
    plugins: { '@stylistic': stylistic },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        Node: 'readonly',
        NodeList: 'readonly',
        MouseEvent: 'readonly',
        ResizeObserver: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        requestIdleCallback: 'readonly',
        cancelIdleCallback: 'readonly'
      }
    },
    rules: {
      'no-console': 'off',
      'no-extra-boolean-cast': 'off',
      'no-prototype-builtins': 'off',

      '@stylistic/eol-last': ['warn', 'always'],
      '@stylistic/indent': ['warn', 2, { MemberExpression: 'off' }],
      '@stylistic/linebreak-style': ['warn', 'unix'],
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/no-multiple-empty-lines': ['warn', { max: 1 }],

      '@stylistic/key-spacing': ['warn', { mode: 'minimum' }],
      '@stylistic/arrow-spacing': 'warn',
      '@stylistic/block-spacing': ['warn', 'always'],
      '@stylistic/comma-spacing': 'warn',
      '@stylistic/keyword-spacing': 'warn',
      '@stylistic/space-in-parens': 'warn',
      '@stylistic/space-unary-ops': 'warn',
      '@stylistic/function-call-spacing': ['warn', 'never'],
      '@stylistic/rest-spread-spacing': 'warn',
      '@stylistic/space-before-blocks': 'warn',
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/array-bracket-spacing': ['warn', 'never', { arraysInArrays: false, objectsInArrays: false }],
      '@stylistic/computed-property-spacing': 'warn',
      '@stylistic/space-before-function-paren': ['warn', { anonymous: 'never', named: 'ignore', asyncArrow: 'always' }],
      '@stylistic/no-whitespace-before-property': 'warn',

      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-unused-vars': ['warn', { args: 'all', argsIgnorePattern: '^_', caughtErrors: 'all', caughtErrorsIgnorePattern: '^_' }],
      'no-unused-expressions': ['warn', { allowTernary: true }],
      'no-shadow-restricted-names': 'error',

      '@stylistic/semi': ['warn', 'never'],
      curly: ['warn', 'multi-line', 'consistent'],
      eqeqeq: ['warn', 'always'],
      '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
      '@stylistic/wrap-iife': 'warn',
      '@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-style': 'warn',
      '@stylistic/quote-props': ['warn', 'as-needed'],
      '@stylistic/comma-dangle': ['warn', 'never'],
      '@stylistic/no-extra-parens': ['warn', 'functions'],
      'no-new-wrappers': 'warn',
      'no-useless-call': 'warn',
      'no-throw-literal': 'warn',
      'no-empty-function': 'off',
      'no-useless-escape': 'warn',
      'no-useless-rename': 'warn',
      'no-useless-computed-key': 'warn',
      'no-template-curly-in-string': 'warn',
      'no-misleading-character-class': 'warn',

      '@stylistic/new-parens': 'error',
      'guard-for-in': 'error',
      'array-callback-return': 'error',
      'no-eval': 'error',
      'no-void': 'error',
      'no-with': 'error',
      'no-labels': 'error',
      'no-bitwise': 'error',
      'no-loop-func': 'error',
      'no-multi-str': 'error',
      'no-sequences': 'error',
      'no-lone-blocks': 'error',
      'no-implied-eval': 'error',
      'no-octal-escape': 'error',
      'no-self-compare': 'error',
      'no-useless-catch': 'error',
      'no-useless-return': 'error',
      '@stylistic/no-floating-decimal': 'error',
      'no-use-before-define': ['error', { classes: false, variables: false, functions: false }],
      'no-unmodified-loop-condition': 'error',

      'no-alert': 'warn',
      'no-debugger': 'warn'
    }
  }
]
