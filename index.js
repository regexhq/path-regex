/*!
 * path-regex <https://github.com/jonschlinkert/path-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Match groups:
 *
 *   0 => full path
 *   1 => dirname
 *   2 => basename (name with ext)
 *   3 => name (without ext)
 *   4 => extname
 *   5 => ext (without .)
 */

var re = module.exports = function () {
  // return /^([\s\S]*?)(([^\\\/]+?)(?:(?:(\.(?:\.{1,2}|([^.\\\/]*))|)(?:[\\\/]*))$))|$/;
  return /^(([\s\S]*)([^\\\/]+?[\\\/]+?))*(([\s\S]*?)(\.(?:\.{1,2}|([^.\\\/]*|)|)|)|)$/;
};


// console.log(re().exec('a/b/c.md'));
console.log(re().exec('/a/b/c/d/e.md'));
console.log(re().exec('a/b/c'));
console.log(re().exec('a/b/c/'));
// console.log(re().exec('/a/b/c'));
// console.log(re().exec('/a/b/c/'));
console.log(re().exec('a'));
console.log(re().exec('a.md'));
