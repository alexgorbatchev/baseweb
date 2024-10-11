/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

export default function deepMerge(
  target?: object | null,
  ...sources: Array<null | object | undefined | null>
): // eslint-disable-next-line @typescript-eslint/no-explicit-any
any {
  target = target || {};
  const len = sources.length;
  let obj;
  let value;
  for (let i = 0; i < len; i++) {
    obj = sources[i] || {};
    for (let key in obj) {
      if (typeof obj[key] !== undefined) {
        value = obj[key];
        if (isCloneable(value)) {
          target[key] = deepMerge(target[key] || (Array.isArray(value) && []) || {}, value);
        } else {
          target[key] = value;
        }
      }
    }
  }
  return target;
}

function isCloneable(obj: unknown) {
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}
