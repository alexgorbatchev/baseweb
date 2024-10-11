/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env node */
module.exports = require('../eslint.config.cjs');

module.exports.push({
  files: ['documentation-site/**/*.js'],
  rules: {
    'react/display-name': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [`${__dirname}/..`, __dirname],
      },
    ],
  },
});
