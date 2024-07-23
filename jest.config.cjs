// export default {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   transform: {
//     // "^.+\\.tsx?$": "ts-jest",
//     "^.+\\.scss$": "jest-css-modules-transform",
//     '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.jest.js' }],
//   },
//   moduleNameMapper: {
//     "\\.(css|less|sass|scss)$": "identity-obj-proxy",
//   },
// };


/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  // ...other Jest configuration options
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ['./setup-tests.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
};