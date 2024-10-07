/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* global module, process */

module.exports = async () => {
  // Set the node process timezone for all jest tests, for consistent testing locally/ci
  process.env.TZ = 'UTC';
};
