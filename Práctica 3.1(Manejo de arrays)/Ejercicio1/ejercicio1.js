//creamos array
let data = [
    { name: "Nacho", telephone: "966112233", age: 40 },
    { name: "Ana", telephone: "911223344", age: 35 },
    { name: "Mario", telephone: "611998877", age: 15 },
    { name: "Laura", telephone: "633663366", age: 17 },
];

//añadimos 2 elementos al final
data.push({name: "Pedro", telephone: "611944444", age: 25});
data.push({name: "Julia", telephone: "633232323", age: 37});

//comprobamos con console.log(data) que se han añadido correctamente
console.log(data);

//ordenamos el vector por su edad
data.sort((a, b) => a.age - b.age);

//comprobamos que se ha ordenado correctamente por edad
console.log(data);

//odenamos el vector por su nombre
data.sort((a, b) => a.name.localeCompare(b.name));

//comprobamos que se ha ordenado correctamente por nombre
console.log(data);

//creamos nuevo vector que solo mostrará los mayores de 30 años
let dataNuevo = [];

for (let index = 0; index < data.length; index++) {
    if (data[index].age > 30){
        dataNuevo.push(data[index]);
    }
}

//comprobamos que nuevo vector solo contenga mayores de 30 años
console.log(dataNuevo);

