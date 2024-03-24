const numberEl = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

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

function convertNumber() {
    const inputNum = numberEl.value;
    if (inputNum === '') {
        outputEl.textContent = "Please enter a valid number";
    } else if (inputNum < 1) {
        outputEl.textContent = "Please enter a number greater than or equal to 1";
    } else if (inputNum > 3999) {
        outputEl.textContent = "Please enter a number less than or equal to 3999";
    } else {
        outputEl.textContent = toRomanNumeral(inputNum);
    }
}

// Event Listeners
btn.addEventListener('click', convertNumber);