// src/utils.js

/**
 * Checks if the given text contains Nepali Unicode characters.
 *
 * @param {string} text - The text to check.
 * @returns {boolean} True if the text contains Nepali Unicode characters, false otherwise.
 */
function containsNepaliUnicode(text) {
  return /[०-९]/.test(text);
}

/**
 * Counts the number of Nepali characters in the given text.
 *
 * @param {string} text - The text to count.
 * @returns {number} The count of Nepali characters.
 */
function countNepaliCharacters(text) {
  const nepaliCharacterRegex = /[०-९]/g;
  const matches = text.match(nepaliCharacterRegex);
  return matches ? matches.length : 0;
}

/**
 * Removes Nepali Unicode characters from the given text.
 *
 * @param {string} text - The text to remove Nepali Unicode characters from.
 * @returns {string} The text without Nepali Unicode characters.
 */
function removeNepaliUnicode(text) {
  return text.replace(/[०-९]/g, '');
}

/**
 * Translates numerals between Arabic and Nepali in the given text.
 *
 * @param {string} text - The text to translate numerals in.
 * @param {string} from - The source numeral system ('arabic' or 'nepali').
 * @param {string} to - The target numeral system ('arabic' or 'nepali').
 * @returns {string} The text with translated numerals.
 */
function translateNumerals(text, from, to) {
  const numeralMap = {
    'arabic': /[0-9]/g,
    'nepali': /[०-९]/g,
  };

  return text.replace(numeralMap[from], match => {
    if (from === 'arabic' && to === 'nepali') {
      // Translate Arabic numerals to Nepali
      return String.fromCharCode(match.charCodeAt(0) + 235);
    } else if (from === 'nepali' && to === 'arabic') {
      // Translate Nepali numerals to Arabic
      return String.fromCharCode(match.charCodeAt(0) - 235);
    }
    return match;
  });
}

/**
 * Generates a random Nepali Unicode word.
 *
 * @param {number} length - The length of the generated word.
 * @returns {string} The random Nepali Unicode word.
 */
function generateRandomNepaliWord(length) {
  const nepaliCharacters = Array.from({ length: 13 }, (_, i) => String.fromCharCode(2309 + i)); // Nepali Unicode characters ० to ९ and १० to १२
  let randomWord = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * nepaliCharacters.length);
    randomWord += nepaliCharacters[randomIndex];
  }

  return randomWord;
}

/**
 * Returns an object for each word containing its English Unicode points, Nepali representation, and Nepali Unicode points.
 *
 * @param {string} text - The input text.
 * @returns {Object} An object for each word with English Unicode points, Nepali representation, and Nepali Unicode points.
 */
function wordsBreakdown(text) {
  const words = text.split(/\s+/); // Split text into words
  const resultObject = {};

  words.forEach(word => {
    const englishCodePoints = [];
    const nepaliRepresentation = [];
    const nepaliUnicodeCodePoints = [];

    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      englishCodePoints.push(char.charCodeAt(0));
      // Convert each character to Nepali Unicode
      const nepaliChar = String.fromCharCode(char.charCodeAt(0) - 235);
      nepaliRepresentation.push(nepaliChar);
      nepaliUnicodeCodePoints.push(nepaliChar.charCodeAt(0));
    }

    resultObject[word] = {
      points: englishCodePoints,
      inNepali: nepaliRepresentation.join(''),
      nepaliUnicodePoint: nepaliUnicodeCodePoints,
    };
  });

  return resultObject;
}


module.exports = {
  containsNepaliUnicode,
  countNepaliCharacters,
  removeNepaliUnicode,
  translateNumerals,
  generateRandomNepaliWord,
  wordsBreakdown
};
