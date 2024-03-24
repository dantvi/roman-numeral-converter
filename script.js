const numberEl = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

function validateNumber(num) {
    if (num === '') {
        outputEl.textContent = `Please enter a valid number`;
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

Om klickar på knappen utan att skriva in ett värde => "Please enter a valid number" i outputEl
Om skriver in -1 => "Please enter a number greater than or equal to 1"
Om skriver in 4000 => "Please enter a number less than or equal to 3999"
Om skriver in 9 => Convertera till "IX"
osv...

*/