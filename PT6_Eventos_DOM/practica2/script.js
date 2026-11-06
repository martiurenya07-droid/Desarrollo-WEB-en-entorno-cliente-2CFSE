        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const errorEmail = document.getElementById("errorEmail");
        const errorPassword = document.getElementById("errorPassword");
        const enviar = document.getElementById("enviar");
        const resultado = document.getElementById("resultado");
        let emailRevisado = false;
        let passwordRevisado = false;

        function emailValido() {
            // Compruebo que tenga texto, @, dominio y extensión
            return /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/.test(email.value);
        }

        function passwordValido() {
            return password.value.length >= 8 && password.value.length <= 10;
        }

        function comprobarBoton() {
            enviar.disabled = !(emailRevisado && passwordRevisado && emailValido() && passwordValido());
        }

        email.addEventListener("focus", function () {
            errorEmail.textContent = "";
        });
        password.addEventListener("focus", function () {
            errorPassword.textContent = "";
        });

        email.addEventListener("input", function () {
            resultado.textContent = "";
            comprobarBoton();
        });
        password.addEventListener("input", function () {
            resultado.textContent = "";
            comprobarBoton();
        });

        email.addEventListener("blur", function () {
            emailRevisado = true;
            if (!emailValido()) {
                errorEmail.textContent = "El email debe tener el formato xxxx@yyyy.zzzz";
            } else {
                errorEmail.textContent = "";
            }
            comprobarBoton();
        });

        password.addEventListener("blur", function () {
            passwordRevisado = true;
            if (!passwordValido()) {
                errorPassword.textContent = "La contraseña debe tener entre 8 y 10 caracteres";
            } else {
                errorPassword.textContent = "";
            }
            comprobarBoton();
        });

        document.getElementById("formulario").addEventListener("submit", function (event) {
            event.preventDefault(); // El ejercicio solo pide validar, no enviar datos a un servidor
            comprobarBoton();
            if (!enviar.disabled) {
                resultado.textContent = "Formulario válido. Datos preparados para enviar.";
            }
        });
    
