'use strict';

/**
 * Expose `defaults`.
 */
module.exports = defaults;

/**
 * Merge default values.
 *
 * @param {Object} dest
 * @param {Object} src
 * @return {Object}
 * @api public
 */
function defaults (dest, src) {
	var prop;
  for (prop in src) {
		if (src.hasOwnProperty(prop)) {
			if (dest[prop] === undefined) {
				dest[prop] = src[prop];
			} else if (dest[prop] instanceof Object && src[prop] instanceof Object) {
				defaults(dest[prop], src[prop]);
			}
		}
  }

  return dest;
}
