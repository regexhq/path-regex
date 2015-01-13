/*!
 * path-regex <https://github.com/jonschlinkert/path-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var re = require('./');

function match(str) {
  return str.match(re());
}

it('should match a path with an extension:', function () {
  assert.equal(match('a/b/c.md')[0], 'a/b/c.md');
  assert.equal(match('a/b/c.md')[1], 'a/b/');
  assert.equal(match('a/b/c.md')[2], 'c.md');
  assert.equal(match('a/b/c.md')[3], 'c');
  assert.equal(match('a/b/c.md')[4], '.md');
  assert.equal(match('a/b/c.md')[5], '.md');
  assert.equal(match('a/b/c.md')[6], 'md');
  assert.equal(match('c.md')[0], 'c.md');
  assert.equal(match('c.md')[1], '');
  assert.equal(match('c.md')[2], 'c.md');
  assert.equal(match('c.md')[3], 'c');
  assert.equal(match('c.md')[4], '.md');
  assert.equal(match('c.md')[5], '.md');
  assert.equal(match('c.md')[6], 'md');
});

it('should match a path with multiple extensions:', function () {
  assert.equal(match('a/b/c.min.js')[0], 'a/b/c.min.js');
  assert.equal(match('a/b/c.min.js')[1], 'a/b/');
  assert.equal(match('a/b/c.min.js')[2], 'c.min.js');
  assert.equal(match('a/b/c.min.js')[3], 'c');
  assert.equal(match('a/b/c.min.js')[4], '.min.js');
  assert.equal(match('a/b/c.min.js')[5], '.js');
  assert.equal(match('a/b/c.min.js')[6], 'js');
});

it('should work with paths that have dots in the dirname:', function () {
  assert.equal(match('a/b/c/d.e.f/g.min.js')[0], 'a/b/c/d.e.f/g.min.js');
  assert.equal(match('a/b/c/d.e.f/g.min.js')[1], 'a/b/c/d.e.f/');
  assert.equal(match('a/b/c/d.e.f/g.min.js')[2], 'g.min.js');
  assert.equal(match('a/b/c/d.e.f/g.min.js')[3], 'g');
  assert.equal(match('a/b/c/d.e.f/g.min.js')[4], '.min.js');
  assert.equal(match('a/b/c/d.e.f/g.min.js')[5], '.js');
  assert.equal(match('a/b/c/d.e.f/g.min.js')[6], 'js');
});

it('should match a path with a dotfile:', function () {
  assert.equal(match('a/b/.gitignore')[0], 'a/b/.gitignore');
  assert.equal(match('a/b/.gitignore')[1], 'a/b/');
  assert.equal(match('a/b/.gitignore')[2], '.gitignore');
  assert.equal(match('a/b/.gitignore')[3], '');
  assert.equal(match('a/b/.gitignore')[4], '.gitignore');
  assert.equal(match('a/b/.gitignore')[5], '.gitignore');
  assert.equal(match('a/b/.gitignore')[6], 'gitignore');
});

it('should match a path without an extension:', function () {
  assert.equal(match('a')[0], 'a');
  assert.equal(match('a')[1], '');
  assert.equal(match('a')[2], 'a');
  assert.equal(match('a')[3], 'a');
  assert.equal(match('a')[4], '');
  assert.equal(match('a')[5], undefined);
  assert.equal(match('a')[6], undefined);
});

it('should match a file path ending with an extension:', function () {
  assert.equal(match('a/b/c/d.md')[0], 'a/b/c/d.md');
  assert.equal(match('a/b/c/d.md')[1], 'a/b/c/');
  assert.equal(match('a/b/c/d.md')[2], 'd.md');
  assert.equal(match('a/b/c/d.md')[3], 'd');
  assert.equal(match('a/b/c/d.md')[4], '.md');
  assert.equal(match('a/b/c/d.md')[5], '.md');
  assert.equal(match('a/b/c/d.md')[6], 'md');
});

it('should match a file path ending with an extension:', function () {
  assert.equal(match('a/b/c.d/e.md')[0], 'a/b/c.d/e.md');
  assert.equal(match('a/b/c.d/e.md')[1], 'a/b/c.d/');
  assert.equal(match('a/b/c.d/e.md')[2], 'e.md');
  assert.equal(match('a/b/c.d/e.md')[3], 'e');
  assert.equal(match('a/b/c.d/e.md')[4], '.md');
  assert.equal(match('a/b/c.d/e.md')[5], '.md');
  assert.equal(match('a/b/c.d/e.md')[6], 'md');
});

it('should match a file path without a trailing slash:', function () {
  assert.equal(match('a/b/c')[0], 'a/b/c');
  assert.equal(match('a/b/c')[1], 'a/b/');
  assert.equal(match('a/b/c')[2], 'c');
  assert.equal(match('a/b/c')[3], 'c');
  assert.equal(match('a/b/c')[4], '');
  assert.equal(match('a/b/c')[5], undefined);
  assert.equal(match('a/b/c')[6], undefined);
});

it('should match a file path with a trailing slash:', function () {
  assert.equal(match('a/b/c/')[0], 'a/b/c/');
  assert.equal(match('a/b/c/')[1], 'a/b/c/');
  assert.equal(match('a/b/c/')[2], '');
  assert.equal(match('a/b/c/')[3], '');
  assert.equal(match('a/b/c/')[4], '');
  assert.equal(match('a/b/c/')[5], undefined);
  assert.equal(match('a/b/c/')[6], undefined);
});

it('should match a file path with a leading slash:', function () {
  assert.equal(match('/a/b/c')[0], '/a/b/c');
  assert.equal(match('/a/b/c')[1], '/a/b/');
  assert.equal(match('/a/b/c')[2], 'c');
  assert.equal(match('/a/b/c')[3], 'c');
  assert.equal(match('/a/b/c')[4], '');
  assert.equal(match('/a/b/c')[5], undefined);
  assert.equal(match('/a/b/c')[6], undefined);
});

it('should match a file path with trailing and leading slashes:', function () {
  assert.equal(match('/a/b/c/')[0], '/a/b/c/');
  assert.equal(match('/a/b/c/')[1], '/a/b/c/');
  assert.equal(match('/a/b/c/')[2], '');
  assert.equal(match('/a/b/c/')[3], '');
  assert.equal(match('/a/b/c/')[4], '');
  assert.equal(match('/a/b/c/')[5], undefined);
  assert.equal(match('/a/b/c/')[6], undefined);
});
