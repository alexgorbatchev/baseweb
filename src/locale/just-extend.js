/**
 * agorbatchev:
 *
 * This is a copy of the `extend` function from the `just-extend@4.0.2` package.
 * Higher versions of the package for some reason break the documentation site,
 * specifically `next build` command which fails with the following error:
 *
 * TypeError: Cannot read properties of undefined (reading '__STYLETRON__') at withStyleDeep
 *
 * The root cause is unclear, but for whatever reason a compiled file is eveluated
 * twice and on the second time the imported value is a promise of a module, which
 * results in the error above.
 *
 * To work around this issue, I've copied the `extend` function here.
 *
 * https://github.com/angus-c/just
 */

//
// The MIT License (MIT)
//
// Copyright (c) 2016 angus croll
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
module.exports = extend;

/*
  var obj = {a: 3, b: 5};
  extend(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 4, b: 5, c: 8}

  var obj = {a: 3, b: 5};
  extend({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 3, b: 5}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(true, obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3]}

  extend({a: 4, b: 5}); // {a: 4, b: 5}
  extend({a: 4, b: 5}, 3); {a: 4, b: 5}
  extend({a: 4, b: 5}, true); {a: 4, b: 5}
  extend('hello', {a: 4, b: 5}); // throws
  extend(3, {a: 4, b: 5}); // throws
*/

function extend(/* [deep], obj1, obj2, [objn] */) {
  var args = [].slice.call(arguments);
  var deep = false;
  if (typeof args[0] == 'boolean') {
    deep = args.shift();
  }
  var result = args[0];
  if (!result || (typeof result != 'object' && typeof result != 'function')) {
    throw new Error('extendee must be an object');
  }
  var extenders = args.slice(1);
  var len = extenders.length;
  for (var i = 0; i < len; i++) {
    var extender = extenders[i];
    for (var key in extender) {
      if (extender.hasOwnProperty(key)) {
        var value = extender[key];
        if (deep && isCloneable(value)) {
          var base = Array.isArray(value) ? [] : {};
          result[key] = extend(true, result.hasOwnProperty(key) ? result[key] : base, value);
        } else {
          result[key] = value;
        }
      }
    }
  }
  return result;
}

function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}
