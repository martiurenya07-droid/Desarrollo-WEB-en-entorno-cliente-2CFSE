        const posicion = document.getElementById("posicion");

        document.addEventListener("mousemove", function (event) {
            // clientX y clientY son las coordenadas dentro de la ventana
            posicion.textContent = "Posición en la ventana: X = " + event.clientX +
                ", Y = " + event.clientY + " | Pantalla: X = " + event.screenX +
                ", Y = " + event.screenY;
        });
    
