/*!
 * path-regex <https://github.com/regexps/path-regex>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

module.exports = function pathRegex() {
  return /([\s\S]*?)(([^\\\/.]*?)((\.([^\\\/.]*))*)|$)$/;
};
