//creamos variables para usar en función
let cadena = "Nací el año: ";
let numero = 2007;

//creamos funcion
(function(cadena, numero) {
    let concatenacion = cadena + numero;
    console.log(concatenacion);
})(cadena, numero);