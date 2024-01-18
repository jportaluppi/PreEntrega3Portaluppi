let stockPerros = 50;
let stockGatos = 50;
let stockOtros4patas = 50;


function iniciarAdopcionDesdeBoton() {
    let nombre = bienvenida();
    iniciarAdopcion(nombre);
}

function bienvenida() {
    let nombre = prompt("Completa con tu nombre:");
    alert("Bienvenido, " + nombre + "!");
    return nombre;
}

function iniciarAdopcion(nombre) {
    alert("Estás a punto de hacer feliz a un animalito, " + nombre + "!");
    mostrarOpcionesAdopcion();
}

function mostrarOpcionesAdopcion() {
    let opcionSeleccionada = prompt("Selecciona una opción:\n1- Perros\n2- Gatos\n3- Otros 4 patas\n0- Finalizar adopción");

    switch (opcionSeleccionada) {
        case "1":
            adoptar("perros");
            break;
        case "2":
            adoptar("gatos");
            break;
        case "3":
            adoptar("otros4patas");
            break;
        case "0":
            mostrarTotalAdoptado();
            break;
        default:
            alert("Opción no válida. Por favor, elige nuevamente.");
            mostrarOpcionesAdopcion();
    }
}

function adoptar(tipoAnimal) {
    switch (tipoAnimal) {
        case "perros":
            alert("Gran elección, un perro es todo lo que necesitas en tu vida.");
            stockPerros--;
            break;
        case "gatos":
            alert("¡Los gatos son maravillosos compañeros!");
            stockGatos--;
            break;
        case "otros4patas":
            alert("Cualquier animal de 4 patas es especial. ¡Buena elección!");
            stockOtros4patas--;
            break;
        default:
            break;
    }

    mostrarOpcionesAdopcion();
}

function mostrarTotalAdoptado() {
    let totalPerros = 50 - stockPerros;
    let totalGatos = 50 - stockGatos;
    let totalOtros4patas = 50 - stockOtros4patas;

    alert("Total de animalitos salvados:\nPerros: " + totalPerros + "\nGatos: " + totalGatos + "\nOtros 4 patas: " + totalOtros4patas);
}
