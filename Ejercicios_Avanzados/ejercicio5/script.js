function primeraTarea() {
    return Promise.resolve(10);
}

function segundaTarea(numero) {
    return Promise.resolve(numero * 2);
}

function terceraTarea(numero) {
    return Promise.resolve(numero + 5);
}

// Voy pasando el resultado de una tarea a la siguiente.
primeraTarea()
    .then(numero => segundaTarea(numero))
    .then(numero => terceraTarea(numero))
    .then(resultado => {
        console.log("Resultado final:", resultado);
        document.getElementById("resultado").textContent = "Resultado final: " + resultado;
    })
    .catch(error => console.log("Ha ocurrido un error:", error));
