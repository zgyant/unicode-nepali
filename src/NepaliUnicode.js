/**
 * Class representing a Nepali Unicode converter.
 */
class NepaliUnicode {
  /**
   * Initializes a new instance of the NepaliUnicode class with the given text.
   *
   * @param {string} text - The input text to be converted.
   */
  constructor(text) {
    this.text = text;
  }

  /**
   * Converts the stored text to Nepali Unicode.
   *
   * @returns {NepaliUnicode} The current instance for chaining.
   */
  convert() {
    var unicodeText = "";
    for (var i = 0; i < this.text.length; i++) {
      var charCode = this.text.charCodeAt(i);
      if (charCode >= 2309 && charCode <= 2431) {
        // Convert Nepali Unicode characters
        unicodeText += String.fromCharCode(charCode + 864);
      } else if (charCode >= 48 && charCode <= 57) {
        // Convert Arabic numerals to Nepali Unicode numerals
        unicodeText += String.fromCharCode(charCode + 235);
      } else {
        unicodeText += this.text.charAt(i);
      }
    }
    this.text = unicodeText;
    return this;
  }

  /**
   * Reverses the stored Nepali Unicode text.
   *
   * @returns {NepaliUnicode} The current instance for chaining.
   */
  reverse() {
    this.text = this.text.split('').reverse().join('');
    return this;
  }

  /**
   * Gets the final converted text.
   *
   * @returns {string} The converted text.
   */
  getText() {
    return this.text;
  }
}

module.exports = NepaliUnicode;
