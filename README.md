# Roman Numeral Converter

This project is a responsive web application built as part of the freeCodeCamp JavaScript Algorithms and Data Structures Certification. The app converts numbers into Roman numerals, supporting numbers between 1 and 3999.

## Table of contents

- [Roman Numeral Converter](#roman-numeral-converter)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Features](#features)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

This project includes the following features:
- Converts numbers into Roman numerals for values between 1 and 3999.
- Validates user input and provides feedback for invalid entries.
- Displays results dynamically with a simple and clean interface.

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [DT Code](https://roman-numeral-converter.dtcode.se/)

### Features

- Interactive Conversion: Users can enter a number and see its Roman numeral equivalent.
- Validation: Provides error messages for invalid input, including numbers outside the supported range.
- Responsive Design: Adapts seamlessly to various screen sizes.

### Built with

- HTML5: For the structure of the application.
- CSS3: For styling and layout.
  - Google Fonts for modern typography.
  - CSS Variables for consistent theming.
- JavaScript (ES6+): For the core functionality.
  - DOM manipulation for interactivity.
  - Array methods for efficient Roman numeral conversion.

### What I learned

In this project, I learned:
- Developing efficient logic for converting numbers into Roman numerals using validation and JavaScript's reduce method.
- Designing a clean and responsive user interface with minimal CSS.

Example code for converting numbers to Roman numerals:

```js
const check = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];

const toRomanNumeral = num =>
    check.reduce((acc, [k, v]) => {
        acc += k.repeat(Math.floor(num / v));
        num = num % v;
        return acc;
    }, '');
```

### Useful resources

- [MDN Web Docs: Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - Helped in implementing the Roman numeral conversion logic.
- [Roman Numerals Guide](https://www.romannumerals.org/) - Provided reference for Roman numeral values and rules.

## Author

- GitHub - [@dantvi](https://github.com/dantvi)
- LinkedIn - [@danieltving](https://www.linkedin.com/in/danieltving/)

## Acknowledgments

Special thanks to freeCodeCamp for the JavaScript Algorithms and Data Structures Certification. This project provided valuable experience in working with array methods, validation logic, and building responsive web interfaces.
