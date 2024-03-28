module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'error',
    'no-alert': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'lines-between-class-members': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['vite.config.js', '**/*.config.js'] },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
