//bucle de 50 vueltas que representa cada linea de loteria
for (let index = 0; index < 50; index++) {
    let set = new Set();
    while (set.size!==6) {
        //sacamos número aleatorio
        const numero = Math.floor(Math.random() * 49) + 1;
        
        //añadimos al set
        set.add(numero);
    }

    //pasamos el set a array para que tenga indices
    let array = Array.from(set);
    
    //finalmente mostramos por pantalla
    console.log(array[0], array[1], array[2], array[3], array[4], array[5]); 
    
    //salto de línea
    console.log();
}