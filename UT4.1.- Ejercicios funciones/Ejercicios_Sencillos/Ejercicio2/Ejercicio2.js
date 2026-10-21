/*Crea una función anónima autoinvocada que defina una variable llamada
contador y la incremente en cada invocación. Luego, intenta acceder a la
variable contador fuera de la función y observa lo que sucede. */

//creamos funcion
(function() {
    let contador = 0;

    contador++;
    console.log(contador);
})();

//intentamos acceder a la variable contador
console.log(contador);