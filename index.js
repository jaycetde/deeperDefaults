/**
 * Expose `defaults`.
 */
module.exports = defaults;

/**
 * Merge default values.
 *
 * @param {Object} dest
 * @param {Object} defaults
 * @return {Object}
 * @api public
 */
function defaults (dest, src) {
  for (var prop in src) {
		if (src.hasOwnProperty(prop) {
			if (! (prop in dest)) {
				dest[prop] = src[prop];
			}
			if (dest[prop] instanceof Object && src[prop] instanceof Object) {
				defaults(dest[prop], src[prop]);
			}
		}
  }

  return dest;
};
