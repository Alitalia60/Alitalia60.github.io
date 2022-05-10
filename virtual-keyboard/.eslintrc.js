module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': 0,
    'no-console': 0,
    'consistent-return': 1,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
  },
  extends: 'airbnb-base',
};
