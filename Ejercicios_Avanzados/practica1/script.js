function obtenerCookie(nombre) {
    const lista = document.cookie.split("; ");
    for (let item of lista) {
        const partes = item.split("=");
        if (partes[0] === nombre) {
            return partes[1];
        }
    }
    return null;
}

let visitas = Number(obtenerCookie("visitas")) || 0;
visitas++;

if (visitas > 10) {
    // En la visita 11 borro la cookie y empiezo otra vez desde cero.
    visitas = 0;
    document.cookie = "visitas=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
} else {
    const caducidad = new Date();
    caducidad.setDate(caducidad.getDate() + 30);
    document.cookie = "visitas=" + visitas + "; expires=" + caducidad.toUTCString() + "; path=/";
}

document.getElementById("visitas").textContent = "Has visitado esta página " + visitas + " veces.";
