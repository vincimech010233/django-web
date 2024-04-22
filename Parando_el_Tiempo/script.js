function sumaAsincrona(num1, num2, segundos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, segundos * 1000); // Convertir segundos a milisegundos
  });
}

function realizarSumaAsincrona() {
  const num1 = parseInt(document.getElementById('numero1').value);
  const num2 = parseInt(document.getElementById('numero2').value);
  const segundos = parseInt(document.getElementById('segundos').value);

  sumaAsincrona(num1, num2, segundos).then(resultado => {
    document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}`;
  });
}
