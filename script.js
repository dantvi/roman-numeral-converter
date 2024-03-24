const numberEl = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

function validateNumber(num) {
    if (num === '') {
        outputEl.textContent = "Please enter a valid number";
    } else if (num < 1) {
        outputEl.textContent = "Please enter a number greater than or equal to 1";
    } else if (num > 3999) {
        outputEl.textContent = "Please enter a number less than or equal to 3999";
    } else {
        return num;
    }
}

function convertNumber() {
    const inputNum = numberEl.value;
    validateNumber(inputNum);
}

// Event Listeners
btn.addEventListener('click', convertNumber);

/* 
Pseudokod

Om skriver in 9 => Convertera till "IX"
osv...

*/