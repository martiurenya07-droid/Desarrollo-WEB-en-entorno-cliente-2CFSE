/*
    Tienes un array de objetos que representan productos. Usa forEach() para
    incrementar en un 10% el precio de cada producto.
*/

//array de objetos que representa productos
const productos = [ { nombre: "Camiseta", precio: 20 }, { nombre: "Pantalón",
precio: 30 }, { nombre: "Zapatos", precio: 50 } ];

//mediante forEach incrementamos un 10% el precio de cada producto
productos.forEach(producto => {
    producto.precio += producto.precio * 0.10; 
});

//mostramos por pantalla
console.log(productos);