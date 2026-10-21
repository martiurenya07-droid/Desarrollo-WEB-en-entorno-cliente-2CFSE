// Función que aplica otra función a cada elemento
function filtro(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

// Función para calcular el factorial
function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

function hacerEjercicios() {

    // Primer ejemplo: multiplicar por 2
    let numeros = [1, 2, 3, 4];

    filtro(numeros, numero => numero * 2);

    // Segundo ejemplo: convertir a mayúsculas
    let palabras = ["hola", "casa", "perro", "gato"];

    filtro(palabras, palabra => palabra.toUpperCase());

    // Tercer ejemplo: calcular factoriales
    let otrosNumeros = [3, 4, 5, 6];

    filtro(otrosNumeros, numero => factorial(numero));

    // Mostramos todos los resultados
    document.getElementById("resultado").innerHTML =
        "<p>Multiplicar por 2: " + numeros.join(", ") + "</p>" +
        "<p>Palabras en mayúsculas: " + palabras.join(", ") + "</p>" +
        "<p>Factoriales: " + otrosNumeros.join(", ") + "</p>";
}