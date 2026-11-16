function temporizador(milisegundos) {
    return new Promise(function (resolve, reject) {
        const inicio = Date.now();
        let terminado = false;

        // Si algo va mal y pasa el doble de tiempo, rechazamos la promesa.
        const limite = setTimeout(function () {
            if (!terminado) {
                terminado = true;
                reject("El tiempo no va bien");
            }
        }, milisegundos * 2);

        setTimeout(function () {
            if (terminado) return;
            terminado = true;
            clearTimeout(limite);
            if (Date.now() - inicio >= milisegundos * 2) {
                reject("El tiempo no va bien");
            } else {
                resolve("Tiempo concluido");
            }
        }, milisegundos);
    });
}

// Llamamos al temporizador con 5000 milisegundos.
temporizador(5000)
    .then(mensaje => {
        document.getElementById("mensaje").textContent = mensaje;
    })
    .catch(error => {
        document.getElementById("mensaje").textContent = error;
    });
