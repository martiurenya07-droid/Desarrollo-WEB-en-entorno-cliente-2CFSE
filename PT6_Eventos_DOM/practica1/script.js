        const fondo = document.getElementById("imagen");

        document.addEventListener("keydown", function (event) {
            // También dejo Ctrl+B por si Alt+F12 no funciona en el portátil
            const altF12 = event.altKey && event.key === "F12";
            const ctrlB = event.ctrlKey && event.key.toLowerCase() === "b";

            if (altF12 || ctrlB) {
                event.preventDefault();
                // Cambio la URL para que salga una foto diferente cada vez
                fondo.style.backgroundImage = "url('https://picsum.photos/1600/900?random=" + Date.now() + "')";
            }
        });
    
