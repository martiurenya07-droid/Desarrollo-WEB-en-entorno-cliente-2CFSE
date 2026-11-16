function simulaProceso(exito) {
    return new Promise(function (resolve, reject) {
        if (exito) {
            resolve("Proceso exitoso");
        } else {
            reject("Hubo un error");
        }
    });
}

function mostrar(texto) {
    console.log(texto);
    const li = document.createElement("li");
    li.textContent = texto;
    document.getElementById("resultados").appendChild(li);
}

// Primero pruebo las promesas con then y catch.
simulaProceso(true)
    .then(mensaje => mostrar("Then (true): " + mensaje))
    .catch(error => mostrar("Then (true): " + error));

simulaProceso(false)
    .then(mensaje => mostrar("Then (false): " + mensaje))
    .catch(error => mostrar("Catch (false): " + error));

// Después hago las dos pruebas con async/await.
async function probarAsync(exito) {
    try {
        const mensaje = await simulaProceso(exito);
        mostrar("Async/await (" + exito + "): " + mensaje);
    } catch (error) {
        mostrar("Async/await (" + exito + "): " + error);
    }
}

probarAsync(true);
probarAsync(false);
