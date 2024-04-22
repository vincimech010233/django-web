function ordenarMatriz(array, orden) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if ((orden === "Asc" && array[j] > array[j + 1]) || (orden === "Desc" && array[j] < array[j + 1])) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function ordenarYMostrar() {
    const inputArray = document.getElementById('arrayInput').value.split(',').map(Number);
    const orden = document.getElementById('orderType').value;
    const arrayOrdenado = ordenarMatriz(inputArray, orden);
    document.getElementById('resultado').innerHTML = `Array ordenado: ${arrayOrdenado.join(', ')}`;
}
