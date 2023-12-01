# Nepali Unicode Converter
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Nepali Unicode Converter is a JavaScript library for converting text to Nepali Unicode and providing additional utilities for working with Nepali Unicode characters.

## Installation

```bash
npm install nepali-unicode-converter
```

## Usage

```javascript
const nepaliUnicode = require('nepali-unicode-converter'); // Example usage
const result = nepaliUnicode("k cha").convert().getText();
console.log("Converted Text:", result);
```


## Features

* Convert text to Nepali Unicode: Convert standard text to Nepali Unicode characters.
* Reverse Nepali Unicode text: Reverse the order of Nepali Unicode characters.
* Check for Nepali Unicode characters: Determine if the text contains Nepali Unicode characters.
* Count Nepali characters: Count the number of Nepali characters in the text.
* Remove Nepali Unicode characters: Remove Nepali Unicode characters from the text.
* Translate numerals: Translate numerals between Arabic and Nepali in the stored text.
* Generate random Nepali word: Generate a random Nepali word with a specified length.
* Word details breakdown: Get details for each word in terms of English Unicode points, Nepali representation, and Nepali Unicode points.

## API Reference

### `nepaliUnicode(text)`

Creates an instance of ExtendedNepaliUnicode with the given text.

**Parameters:**

* `text` (string): The input text.

**Example:**

javascript
const instance = nepaliUnicode("k cha");

**Description:** Converts the stored text to Nepali Unicode.

**Example:**

```javascript
const result = instance.convert().getText();

const randomWord = instance.generateRandomNepaliWord(5);
```


**Return Value:** A randomly generated Nepali word with the specified length.

**Usage Considerations:**

- Use this method to generate a random Nepali word with a specific length.

### `instance.wordsBreakdown()`

**Description:** Returns an object for each word containing its English Unicode points, Nepali representation, and Nepali Unicode points.

**Example:**

```javascript
const detailsObject = instance.wordsBreakdown();
```


**Return Value:** An object containing details for each word, including English Unicode points, Nepali representation, and Nepali Unicode points.

**Usage Considerations:**

- Use this method to get details for each word in the text, including its English Unicode points, Nepali representation, and Nepali Unicode points.

## Methods

### `instance.convert()`
### `instance.reverse()`
### `instance.countNepaliCharacters()`
### `instance.removeNepaliUnicode()`
### `instance.translateNumerals()`
### `instance.generateRandomNepaliWord()`
### `instance.containsNepaliUnicode()`
### `instance.wordsBreakdown()`



## Contributing

If you would like to contribute, please follow the Contributing Guidelines.

## Issues

If you encounter any issues or have suggestions, please open an issue on the Issues page.

## License

This project is licensed under the MIT License.


