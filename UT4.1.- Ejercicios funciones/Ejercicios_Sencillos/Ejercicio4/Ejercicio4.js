//creamos función flecha
const isPar = (numero) => {
    if (numero % 2 == 0){
        return true;
    }else{
        return false;
    }
};

//número de prueba
let numero = 3;

//probamos la función que hemos creado
console.log("Es par el número 3: ", isPar(numero));