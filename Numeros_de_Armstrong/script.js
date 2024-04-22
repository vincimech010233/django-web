// script.js
function checkArmstrong() {
    const number = document.getElementById('numberInput').value;
    if (number === "") {
        document.getElementById('result').innerText = "Por favor, ingresa un número.";
        return;
    }

    const digits = number.split('').map(Number);
    const numDigits = digits.length;
    let sum = 0;

    for (let digit of digits) {
        sum += Math.pow(digit, numDigits);
    }

    if (sum === Number(number)) {
        document.getElementById('result').innerText = `${number} es un número de Armstrong.`;
    } else {
        document.getElementById('result').innerText = `${number} no es un número de Armstrong.`;
    }
}
