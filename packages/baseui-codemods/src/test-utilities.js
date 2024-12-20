/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { writeFile, readFile, removeFile } from '@dubstep/core';

export class Fixture {
  constructor() {
    // hacky way to generate a uuid, but seems stable for now
    this.dir = `fixtures/${Math.random()}-${Math.random()}.js`;
    this.fixture = `${this.dir}/fixture.js`;
  }
  async write(content) {
    return writeFile(this.fixture, content);
  }
  async read() {
    return readFile(this.fixture);
  }
  async remove() {
    return removeFile(this.dir);
  }
}
