//creamos funcion que suma de forma iterativa
function sumarIterativo(array) {
    //declaramos variable de suma
    let suma = 0;

    //sumamos todos los índices del array mediante un for
    for (let index = 0; index < array.length; index++) {
        suma += array[index];
    }

    //finalmente devolvemos la suma
    return suma;
}

//creamos función de forma recursiva
function sumarRecursivo(array, indice = 0) {
    //caso base
    if (indice == array.length) {
        return 0;
    }

    //caso recursivo: sumamos el valor actual + el resultado del resto del array
    return array[indice] + sumarRecursivo(array, indice + 1);
}

//mostramos por pantalla
let numeros = [1, 2, 3, 4, 5];
console.log("Suma iterativa:", sumarIterativo(numeros));
console.log("Suma recursiva:", sumarRecursivo(numeros));

/*¿Cuál es mejor?

¿Qué solución es mejor?

En mi opinión, la solución iterativa es mejor para este ejercicio, ya que es más sencilla de entender y utiliza menos recursos.

La solución recursiva también funciona correctamente, pero necesita llamarse a sí misma varias veces, lo que aumenta el consumo de memoria y puede afectar al rendimiento cuando el array es muy grande.

Por tanto, considero que la solución iterativa es la opción más eficiente y adecuada para este caso.

*/