const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const nombre = document.getElementById("nombre");

// Busco una cookie por su nombre.
function leerCookie(clave) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const partes = cookie.split("=");
        if (partes[0] === clave) {
            return decodeURIComponent(partes.slice(1).join("="));
        }
    }
    return null;
}

function mostrarNombre() {
    const guardado = leerCookie("nombreUsuario");
    if (guardado !== null) {
        formulario.style.display = "none";
        mensaje.textContent = "Bienvenido, " + guardado;
    }
}

document.getElementById("guardar").addEventListener("click", function () {
    const valor = nombre.value.trim();
    if (valor === "") {
        mensaje.textContent = "Escribe primero tu nombre.";
        return;
    }

    // La cookie caduca dentro de 7 días.
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + 7);
    document.cookie = "nombreUsuario=" + encodeURIComponent(valor) +
        "; expires=" + fecha.toUTCString() + "; path=/";
    mostrarNombre();
});

mostrarNombre();
