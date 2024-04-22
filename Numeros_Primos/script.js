// script.js
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function displayPrimes() {
    const primeContainer = document.getElementById('primeNumbers');
    for (let i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            primeContainer.innerHTML += i + ' ';
        }
    }
}

window.onload = displayPrimes;
