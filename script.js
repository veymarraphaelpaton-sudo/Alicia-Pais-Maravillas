document.getElementById("formularioPocion").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularPocion();
});

function calcularPocion() {
    let alturaInicial = Number(document.getElementById("alturaInicial").value);
    let cantidadPocion = Number(document.getElementById("cantidadPocion").value);
    let resultado = document.getElementById("resultadoPocion");

    if (alturaInicial <= 0 || !Number.isFinite(alturaInicial)) {
        resultado.textContent = "Error: la altura inicial debe ser mayor que cero.";
    } else if (
        cantidadPocion < 0 ||
        cantidadPocion > 100 ||
        !Number.isFinite(cantidadPocion)
    ) {
        resultado.textContent = "Error: la poción debe estar entre 0 y 100 ml.";
    } else {
        let alturaFinal = alturaInicial - (2 * cantidadPocion);

        if (alturaFinal <= 0) {
            resultado.textContent =
                "Los datos producen una altura final no válida. Intenta con otros valores.";
        } else if (alturaFinal <= 140) {
            resultado.textContent =
                "¡Poción calculada! Alicia medirá " +
                alturaFinal.toFixed(2) +
                " cm y podrá pasar por la puerta de 140 cm.";
        } else {
            resultado.textContent =
                "Alicia medirá " +
                alturaFinal.toFixed(2) +
                " cm y no podrá pasar por la puerta de 140 cm.";
        }
    }
}

document.getElementById("formularioMerienda").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularMerienda();
});

function calcularMerienda() {
    let nombre = document.getElementById("nombreInvitado").value.trim();
    let bebida = document.getElementById("bebida").value;
    let cantidadTazas = Number(document.getElementById("cantidadTazas").value);
    let resultado = document.getElementById("resultadoMerienda");

    if (nombre === "") {
        resultado.textContent = "Error: escribe el nombre del invitado.";
        return;
    }

    if (
        !Number.isInteger(cantidadTazas) ||
        cantidadTazas < 1 ||
        cantidadTazas > 20
    ) {
        resultado.textContent = "Error: la cantidad debe ser un número entero entre 1 y 20.";
        return;
    }

    let precioUnitario;

    switch (bebida) {
        case "te":
            precioUnitario = 5;
            break;

        case "chocolate":
            precioUnitario = 8;
            break;

        case "cafe":
            precioUnitario = 6;
            break;

        case "jugo":
            precioUnitario = 4;
            break;

        default:
            resultado.textContent = "Error: selecciona una bebida válida.";
            return;
    }

    let subtotal = precioUnitario * cantidadTazas;
    let descuento = 0;

    if (cantidadTazas >= 10) {
        descuento = subtotal * 0.10;
    }

    let total = subtotal - descuento;

    resultado.textContent =
        "Invitado: " + nombre +
        " | Bebida: " + bebida +
        " | Precio por taza: Bs " + precioUnitario.toFixed(2) +
        " | Cantidad: " + cantidadTazas +
        " | Subtotal: Bs " + subtotal.toFixed(2) +
        " | Descuento: Bs " + descuento.toFixed(2) +
        " | Total a pagar: Bs " + total.toFixed(2);
}


document.getElementById("formularioCartas").addEventListener("submit", function(event) {
    event.preventDefault();
    analizarCartas();
});

function analizarCartas() {
    let cantidadCartas = Number(document.getElementById("cantidadCartas").value);
    let resultado = document.getElementById("resultadoCartas");

    if (
        !Number.isInteger(cantidadCartas) ||
        cantidadCartas < 1 ||
        cantidadCartas > 100
    ) {
        resultado.textContent = "Error: introduce un número entero entre 1 y 100.";
        return;
    }

    let pares = [];
    let impares = [];

    let cantidadPares = 0;
    let cantidadImpares = 0;

    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 1; i <= cantidadCartas; i++) {

        if (i % 2 === 0) {
            pares.push(i);
            cantidadPares++;
            sumaPares = sumaPares + i;
        } else {
            impares.push(i);
            cantidadImpares++;
            sumaImpares = sumaImpares + i;
        }
    }

    let mensajeFinal;

    if (sumaPares > sumaImpares) {
        mensajeFinal = "El grupo de los pares tiene la suma mayor.";
    } else if (sumaImpares > sumaPares) {
        mensajeFinal = "El grupo de los impares tiene la suma mayor.";
    } else {
        mensajeFinal = "Ambos grupos tienen la misma suma.";
    }

    resultado.textContent =
        "Secuencia analizada: del 1 al " + cantidadCartas +
        " | Números pares: " + (pares.length > 0 ? pares.join(", ") : "Ninguno") +
        " | Cantidad de pares: " + cantidadPares +
        " | Suma de pares: " + sumaPares +
        " | Números impares: " + impares.join(", ") +
        " | Cantidad de impares: " + cantidadImpares +
        " | Suma de impares: " + sumaImpares +
        " | " + mensajeFinal;
}



