module.exports = {
  extends: ['airbnb', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
  plugins: ['jest', 'prettier'], // activating esling-plugin-prettier (--fix stuff)
  rules: {
    'react/jsx-filename-extension': 0 // we don't require all files containing JSX code to end with ,jsx, e.g. test files and stories
  },
  env: {
    "jest/globals": true
  }
};