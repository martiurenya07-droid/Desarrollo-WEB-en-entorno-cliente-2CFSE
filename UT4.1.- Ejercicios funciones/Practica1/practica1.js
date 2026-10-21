const pedirPalabras = () => {
    let palabras = [];
    let palabra;

    // Pedimos palabras hasta que se cancele o se deje vacío
    while (true) {
        palabra = prompt("Introduce una palabra:");

        if (palabra === null || palabra.trim() === "") {
            break;
        }

        palabras.push(palabra.trim());
    }

    // Quitamos las palabras repetidas
    let sinRepetir = [...new Set(palabras)];

    // Ordenamos de la Z a la A en español
    sinRepetir.sort((a, b) => b.localeCompare(a, "es"));

    // Mostramos las palabras por pantalla
    document.getElementById("resultado").textContent =
        sinRepetir.length > 0
            ? sinRepetir.join(", ")
            : "No has introducido ninguna palabra.";
};