        const parrafos = document.querySelectorAll(".parrafo");

        parrafos.forEach(function (parrafo) {
            parrafo.addEventListener("click", function () {
                parrafo.style.display = "none";
            });

            parrafo.addEventListener("contextmenu", function (event) {
                event.preventDefault(); // Evito el menú del botón derecho
                parrafo.remove();
            });
        });

        document.getElementById("reaparecer").addEventListener("click", function () {
            // Los eliminados no vuelven porque ya no están en la página
            parrafos.forEach(function (parrafo) {
                if (parrafo.isConnected) {
                    parrafo.style.display = "block";
                }
            });
        });
    
