        const capa1 = document.getElementById("capa1");
        const capa2 = document.getElementById("capa2");

        capa1.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("text/plain", "capa1");
            event.dataTransfer.effectAllowed = "move";
            capa1.style.opacity = "0.5";
        });

        capa1.addEventListener("dragend", function () {
            capa1.style.opacity = "1";
            capa2.style.backgroundColor = "white";
        });

        capa2.addEventListener("dragover", function (event) {
            event.preventDefault(); // Sin esto no se puede soltar
            event.dataTransfer.dropEffect = "move";
            capa2.style.backgroundColor = "red";
        });

        capa2.addEventListener("dragleave", function () {
            capa2.style.backgroundColor = "white";
        });

        capa2.addEventListener("drop", function (event) {
            event.preventDefault();
            if (event.dataTransfer.getData("text/plain") === "capa1") {
                capa1.style.display = "none";
                capa2.style.backgroundColor = "white";
                capa2.textContent = "Lo has logrado";
            }
        });
    
