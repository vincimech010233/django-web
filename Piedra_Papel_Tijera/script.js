function calcularGanador() {
    const jugadas = document.getElementById('jugadas').value.split(';').map(jugada => {
        return jugada.split(',').map(j => j.trim());
    });

    let victoriasJugador1 = 0;
    let victoriasJugador2 = 0;

    jugadas.forEach(([j1, j2]) => {
        if (!j1 || !j2 || j1 === j2) return; // Ignorar empates o jugadas incompletas

        if ((j1 === 'R' && j2 === 'S') || (j1 === 'S' && j2 === 'P') || (j1 === 'P' && j2 === 'R')) {
            victoriasJugador1++;
        } else {
            victoriasJugador2++;
        }
    });

    let resultado;
    if (victoriasJugador1 > victoriasJugador2) {
        resultado = "Player 1";
    } else if (victoriasJugador1 < victoriasJugador2) {
        resultado = "Player 2";
    } else {
        resultado = "Tie";
    }

    document.getElementById('resultado').innerHTML = `The winner is: ${resultado}`;
}
