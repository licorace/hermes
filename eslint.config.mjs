import styleGuide from 'semistandard'
import js from '@eslint/js'

export default [
  ...[].concat(styleGuide),
  js.configs.recommended,
  {
    extends: ['eslint:recommended', 'prettier'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error'
    },
    overrides: [
      {
        files: ['**/*.ts'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module'
        },
        plugins: ['@typescript-eslint'],
        extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended']
      }
    ]
  }
]
