// script.js
function calculateArea() {
    const type = document.getElementById('type').value;
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    let area;
    switch (type) {
        case 'triangle':
            area = (width * height) / 2;
            break;
        case 'square':
            area = width * width;
            break;
        case 'rectangle':
            area = width * height;
            break;
        default:
            area = 'Tipo de polígono no válido';
    }

    document.getElementById('result').innerText = `El área del ${type} es: ${area}`;
}
