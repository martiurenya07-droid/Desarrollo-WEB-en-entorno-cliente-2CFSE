
// Función para contar cuántas veces aparece cada palabra
function contarPalabras(palabras) {
    let contador = new Map();

    palabras.forEach(palabra => {
        if (contador.has(palabra)) {
            contador.set(palabra, contador.get(palabra) + 1);
        } else {
            contador.set(palabra, 1);
        }
    });

    return contador;
}

function pedirPalabras() {
    let palabras = [];

    // Vamos guardando las palabras introducidas
    while (true) {
        let palabra = prompt("Introduce una palabra:");

        if (palabra === null || palabra.trim() === "") {
            break;
        }

        palabras.push(palabra.trim());
    }

    // Llamamos a la función que cuenta las palabras
    let resultado = contarPalabras(palabras);

    let texto = "";

    resultado.forEach((cantidad, palabra) => {
        texto += palabra + ": " + cantidad + " veces\n";
    });

    document.getElementById("resultado").textContent =
        texto || "No has introducido ninguna palabra.";
}
