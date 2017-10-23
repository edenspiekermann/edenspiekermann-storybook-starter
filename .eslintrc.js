module.exports = {
  extends: ['airbnb', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
  plugins: ['jest', 'prettier'], // activating esling-plugin-prettier (--fix stuff)
  rules: {
    // we don't require all files containing JSX code to end with ,jsx, e.g. test files and stories
    'react/jsx-filename-extension': 0,
    // we don't error when files from devDependencies are imported, since we need them in the .stories.js files,
    // and we want these files to be linted, but not to be exported with the repository
    "import/no-extraneous-dependencies": 0
  },
  env: {
    "jest/globals": true
  }
};
