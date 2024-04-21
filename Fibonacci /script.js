// script.js
function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function displayFibonacci() {
    const fibonacciNumbers = generateFibonacci(50);
    const container = document.getElementById('fibonacci');
    container.innerHTML = fibonacciNumbers.join(', ');
}

window.onload = displayFibonacci;
