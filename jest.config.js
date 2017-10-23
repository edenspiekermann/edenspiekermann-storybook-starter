module.exports = {
  collectCoverageFrom: [
    "components/**/*.jsx" // only consider components, not stories or setup stuff
  ],
  coverageDirectory: '<rootDir>/.coverage', // generate coverage report in 'hidden' folder
  snapshotSerializers: [
    "<rootDir>/node_modules/enzyme-to-json/serializer" // enable creation of snapshots from enzyme wrappers
  ],
  testPathIgnorePatterns: [
    "<rootDir>/(build|internal|node_modules|flow-typed|public)/"
  ],
  setupFiles: [
    "<rootDir>/.setup/jest/shim.js",
    "<rootDir>/.setup/jest/adapter.js"
  ],
  moduleNameMapper: {
    // we mock all external files that are not relevant for the tests, but might be imported in the files that are tested
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$": "<rootDir>/.setup/jest/mocks/fileMock.js",
    // we mock all external styles because our code does not rely on them (we don't use CSS modules or CSS in JS)
    "\\.(css|scss)$": "<rootDir>/.setup/jest/mocks/styleMock.js"
  }
};
