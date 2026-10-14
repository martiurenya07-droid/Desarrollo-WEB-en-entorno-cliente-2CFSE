// Creamos un Map que almacena nombres como claves y edades como valores
let mapa = new Map();

// Añadimos las entradas al Map
mapa.set("Jose", 21);
mapa.set("Marti", 18);
mapa.set("Rafa", 6);
mapa.set("Mel", 30);

// Actualizamos la edad de Marti
mapa.set("Marti", 19);

// Recorremos el Map y mostramos cada nombre con su edad por consola
for (let [nombre, edad] of mapa) {
    console.log(nombre, "tiene:", edad, "años");
}