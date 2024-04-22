function convertirADecimal() {
    const binario = document.getElementById('binarioInput').value;
    let decimal = 0;
    let exponente = 0;

    for (let i = binario.length - 1; i >= 0; i--) {
        if (binario[i] === '1') {
            decimal += Math.pow(2, exponente);
        }
        exponente++;
    }

    document.getElementById('resultado').innerHTML = `El número decimal es: ${decimal}`;
}
