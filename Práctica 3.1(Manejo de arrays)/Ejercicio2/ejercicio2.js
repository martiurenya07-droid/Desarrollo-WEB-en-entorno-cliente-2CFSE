// Creamos un array con valores duplicados
let valores = [10, 10, 30, 25, 1, 1, 2];

// Creamos un Set para eliminar los valores duplicados
let set = new Set(valores);

// Convertimos el Set en un nuevo array mediante un bucle for
let nuevoValores = [];

for (let valor of set) {
    nuevoValores.push(valor);
}

// Mostramos por consola el array sin duplicados
console.log(nuevoValores);