// index.js

const ExtendedNepaliUnicode = require('./src/extendedNepaliUnicode');

/**
 * Create an instance of ExtendedNepaliUnicode with the given text.
 *
 * @param {string} text - The input text.
 * @returns {ExtendedNepaliUnicode} An instance of ExtendedNepaliUnicode.
 */
function unicodeNepali(text) {
  return new ExtendedNepaliUnicode(text);
}

module.exports = unicodeNepali;