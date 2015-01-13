/*!
 * path-regex <https://github.com/jonschlinkert/path-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

module.exports = function pathRegex() {
  return /([\s\S]*?)(([^\\\/.]*?)((\.([^\\\/.]*))*)|$)$/;
};
