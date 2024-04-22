// script.js
function calculateFactorial() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = "Por favor, ingresa un número entero no negativo.";
        return;
    }
    const factorialResult = factorial(number);
    document.getElementById('result').innerText = `El factorial de ${number} es: ${factorialResult}`;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
