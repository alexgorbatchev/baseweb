/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @ts-check
// eslint-env node

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/test',
    '<rootDir>/documentation-site',
  ],
  rootDir: '.',
  cache: true,
  cacheDirectory: '<rootDir>/.cache/jest',
  coverageDirectory: '<rootDir>/coverage',
  globalSetup: '<rootDir>/jest.global-setup.js',
  setupFiles: ['<rootDir>/src/test/test-setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/test/test-framework-setup.ts'],
  testEnvironment: 'jest-environment-jsdom-global',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/packages/'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testRegex: '(.|-)test\\.(js|ts|tsx|jsx)$',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
};

module.exports = config;
