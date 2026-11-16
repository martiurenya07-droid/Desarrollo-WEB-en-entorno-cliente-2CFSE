// Mismo temporizador de la práctica 2, ahora en un módulo.
export function temporizador(milisegundos) {
    return new Promise(function (resolve, reject) {
        const inicio = Date.now();
        let terminado = false;
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

// La función es async y permite cambiar elemento, intervalo y callback.
export async function cuenta(inicio, elemento = document.body, intervalo = 1000, callback = null) {
    for (let numero = inicio; numero >= 0; numero--) {
        elemento.textContent = numero;
        if (numero > 0) {
            // Espero a la siguiente cifra con una promesa.
            await new Promise(resolve => setTimeout(resolve, intervalo));
        }
    }
    if (typeof callback === "function") {
        callback();
    }
}
