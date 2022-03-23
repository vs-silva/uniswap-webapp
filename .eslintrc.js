module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'strict': ['error', 'global'],
    'no-var': 'error',
    'quotes': ['error', 'single'],
    'no-unused-vars': 'error',
    'no-multi-assign': 'error',
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-extra-boolean-cast': 'error',
    'eqeqeq': 'error',
    'yoda': 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
  },
};
