//array con las personas
const personas = [ { nombre: "Juan", edad: 17 }, { nombre: "Ana", edad:
22 }, { nombre: "Pedro", edad: 19 }, { nombre: "Laura", edad: 16 } ];

//array con personas solo de 18 años con la función filter
const personas18 = personas.filter(personas => personas.edad > 18);

//mostramos por pantalla solo personas mayores de 18 años
console.log(personas18);

//multiplicamos edad * 2 con la función map
const personasEdadDoble = personas18.map(personas => personas.edad * 2);

//mostramos pantalla con edad doble
console.log(personasEdadDoble);

//sumamos todas las edades con la función reduce
const sumaTotal = personasEdadDoble.reduce((acc, num) => {
    return acc + num;
}, 0);

//finalmente mostramos por pantalla esta última operación
console.log(sumaTotal);