/*!
 * path-regex <https://github.com/jonschlinkert/path-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var pathRegex = require('./');

describe('pathRegex', function () {
  it('should parse a basename with an extension:', function () {
    var path = pathRegex().exec('c.md');
    assert.equal(path[0], 'c.md');
    assert.equal(path[1], '');
    assert.equal(path[2], 'c.md');
    assert.equal(path[3], 'c');
    assert.equal(path[4], '.md');
    assert.equal(path[5], 'md');
  });

  it('should parse a basename without an extension:', function () {
    var path = pathRegex().exec('a');
    assert.equal(path[0], 'a');
    assert.equal(path[1], '');
    assert.equal(path[2], 'a');
    assert.equal(path[3], 'a');
    assert.equal(path[4], '');
    assert.equal(path[5], undefined);
  });

  it('should parse a file path ending with an extension:', function () {
    var path = pathRegex().exec('a/b/c/d.md');
    assert.equal(path[0], 'a/b/c/d.md');
    assert.equal(path[1], 'a/b/c/');
    assert.equal(path[2], 'd.md');
    assert.equal(path[3], 'd');
    assert.equal(path[4], '.md');
    assert.equal(path[5], 'md');
  });

  it('should parse a file path ending with an extension:', function () {
    var path = pathRegex().exec('a/b/c.d/e.md');
    assert.equal(path[0], 'a/b/c.d/e.md');
    assert.equal(path[1], 'a/b/c.d/');
    assert.equal(path[2], 'e.md');
    assert.equal(path[3], 'e');
    assert.equal(path[4], '.md');
    assert.equal(path[5], 'md');
  });

  it('should parse a file path without a trailing slash:', function () {
    var path = pathRegex().exec('a/b/c');
    assert.equal(path[0], 'a/b/c');
    assert.equal(path[1], 'a/b/');
    assert.equal(path[2], 'c');
    assert.equal(path[3], 'c');
    assert.equal(path[4], '');
    assert.equal(path[5], undefined);
  });

  it('should parse a file path with a trailing slash:', function () {
    var path = pathRegex().exec('a/b/c/');
    assert.equal(path[0], 'a/b/c/');
    assert.equal(path[1], 'a/b/c/');
    assert.equal(path[2], '');
    assert.equal(path[3], '');
    assert.equal(path[4], '');
    assert.equal(path[5], undefined);
  });

  it('should parse a file path with a leading slash:', function () {
    var path = pathRegex().exec('/a/b/c');
    assert.equal(path[0], '/a/b/c');
    assert.equal(path[1], '/a/b/');
    assert.equal(path[2], 'c');
    assert.equal(path[3], 'c');
    assert.equal(path[4], '');
    assert.equal(path[5], undefined);
  });

  it('should parse a file path with trailing and leading slashes:', function () {
    var path = pathRegex().exec('/a/b/c/');
    assert.equal(path[0], '/a/b/c/');
    assert.equal(path[1], '/a/b/c/');
    assert.equal(path[2], '');
    assert.equal(path[3], '');
    assert.equal(path[4], '');
    assert.equal(path[5], undefined);
  });
});
