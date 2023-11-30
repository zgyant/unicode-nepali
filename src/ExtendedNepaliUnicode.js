const NepaliUnicode = require('./NepaliUnicode');
const {
  containsNepaliUnicode,
  countNepaliCharacters,
  removeNepaliUnicode,
  translateNumerals,
  generateRandomNepaliWord,
  wordDetailsObject
} = require('./utils');

class ExtendedNepaliUnicode extends NepaliUnicode {
  // Additional utility functions

  /**
   * Checks if the stored text contains Nepali Unicode characters.
   *
   * @returns {boolean} True if the text contains Nepali Unicode characters, false otherwise.
   */
  containsNepaliUnicode() {
    return containsNepaliUnicode(this.text);
  }

  /**
   * Counts the number of Nepali characters in the stored text.
   *
   * @returns {number} The count of Nepali characters.
   */
  countNepaliCharacters() {
    return countNepaliCharacters(this.text);
  }

  /**
   * Removes Nepali Unicode characters from the stored text.
   *
   * @returns {ExtendedNepaliUnicode} The current instance for chaining.
   */
  removeNepaliUnicode() {
    this.text = removeNepaliUnicode(this.text);
    return this;
  }

  /**
   * Translates numerals between Arabic and Nepali in the stored text.
   *
   * @param {string} from - The source numeral system ('arabic' or 'nepali').
   * @param {string} to - The target numeral system ('arabic' or 'nepali').
   * @returns {ExtendedNepaliUnicode} The current instance for chaining.
   */
  translateNumerals(from, to) {
    this.text = translateNumerals(this.text, from, to);
    return this;
  }

  /**
   * Generates a random Nepali word.
   *
   * @param {number} length - The length of the generated word.
   * @returns {string} The random Nepali word.
   */
  generateRandomNepaliWord(length) {
    return generateRandomNepaliWord(length);
  }

  /**
   * Returns an object for each word containing its English Unicode points, Nepali representation, and Nepali Unicode points.
   *
   * @returns {Object} An object for each word with English Unicode points, Nepali representation, and Nepali Unicode points.
   */
  wordDetailsObject() {
    return wordDetailsObject(this.text);
  }
}

module.exports = ExtendedNepaliUnicode;
