function convertTemperature() {
    let input = document.getElementById('inputTemperature').value.trim();
    let resultElement = document.getElementById('result');

    if (!input.includes('°') || !(input.endsWith('C') || input.endsWith('F'))) {
        resultElement.textContent = 'Error: Formato incorrecto. Use "°C" o "°F".';
        return;
    }

    let number = parseFloat(input.substring(0, input.length - 2));
    let unit = input.slice(-1);

    if (isNaN(number)) {
        resultElement.textContent = 'Error: No es un número válido.';
        return;
    }

    if (unit === 'C') {
        let fahrenheit = (number * 9/5) + 32;
        resultElement.textContent = `${fahrenheit.toFixed(2)}°F`;
    } else {
        let celsius = (number - 32) * 5/9;
        resultElement.textContent = `${celsius.toFixed(2)}°C`;
    }
}
