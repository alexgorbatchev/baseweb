/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// Sets local package.json to current baseui version.

/* eslint-env node */

const publishToNpm = require('./publish-to-npm.js');

publishToNpm({
  tag: 'next',
  commit: process.env.BUILDKITE_COMMIT,
});
