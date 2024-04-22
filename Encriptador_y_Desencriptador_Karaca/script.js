function encrypt() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = '';

    // Paso 1: Invertir el texto
    encryptedText = inputText.split('').reverse().join('');

    // Paso 2: Reemplazar las vocales según las reglas
    encryptedText = encryptedText.replace(/a/g, '0');
    encryptedText = encryptedText.replace(/e/g, '1');
    encryptedText = encryptedText.replace(/i/g, '2');
    encryptedText = encryptedText.replace(/o/g, '2');
    encryptedText = encryptedText.replace(/u/g, '3');

    // Paso 3: Agregar "aca" al final del texto
    encryptedText += 'aca';

    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = '';

    // Paso 1: Eliminar "aca" del final del texto
    inputText = inputText.replace('aca', '');

    // Paso 2: Reemplazar los números con las vocales originales
    decryptedText = inputText.replace(/0/g, 'a');
    decryptedText = decryptedText.replace(/1/g, 'e');
    decryptedText = decryptedText.replace(/2/g, 'o');
    decryptedText = decryptedText.replace(/3/g, 'u');

    // Paso 3: Invertir el texto nuevamente
    decryptedText = decryptedText.split('').reverse().join('');

    document.getElementById('outputText').value = decryptedText;
}
