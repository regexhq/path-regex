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

module.exports = function pathRegex() {
  return /([\s\S]*?)(([^\\\/.]*?)(\.([^.\\\/]*)$|$))/;
};
