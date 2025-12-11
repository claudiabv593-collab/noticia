let numeroActual = "";
let numeroAnterior = "";
let operacion = null;

// Mostrar números en pantalla
function agregarNumero(num) {
    numeroActual += num;
    actualizarPantalla();
}

// Guardar operación
function seleccionarOperacion(op) {
    if (numeroActual === "") return;
    operacion = op;
    numeroAnterior = numeroActual;
    numeroActual = "";
}

// Calcular resultado
function calcular() {
    let resultado;

    const anterior = parseFloat(numeroAnterior);
    const actual = parseFloat(numeroActual);

    if (isNaN(anterior) || isNaN(actual)) return;

    switch (operacion) {
        case "+":
            resultado = anterior + actual;
            break;
        case "-":
            resultado = anterior - actual;
            break;
        case "*":
            resultado = anterior * actual;
            break;
        case "/":
            resultado = anterior / actual;
            break;
        default:
            return;
    }

    numeroActual = resultado.toString();
    operacion = null;
    numeroAnterior = "";
    actualizarPantalla();
}

// Limpiar pantalla
function limpiarPantalla() {
    numeroActual = "";
    numeroAnterior = "";
    operacion = null;
    actualizarPantalla();
}

// Mostrar en input
function actualizarPantalla() {
    document.getElementById("pantalla").value = numeroActual;
}
