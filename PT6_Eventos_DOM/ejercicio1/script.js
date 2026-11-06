        const boton = document.getElementById("nuevo");
        const lista = document.getElementById("lista");

        boton.addEventListener("click", function () {
            // Creo un número del 1 al 100 y lo añado a la lista
            const numero = Math.floor(Math.random() * 100) + 1;
            const elemento = document.createElement("li");
            elemento.textContent = numero;
            lista.appendChild(elemento);
        });
    
