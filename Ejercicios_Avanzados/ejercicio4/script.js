import { suma, resta, multiplica, divide } from "./calculadora.js";

const operaciones = [
    "5 + 3 = " + suma(5, 3),
    "9 - 4 = " + resta(9, 4),
    "6 × 2 = " + multiplica(6, 2),
    "20 / 5 = " + divide(20, 5)
];

for (let operacion of operaciones) {
    console.log(operacion);
    const li = document.createElement("li");
    li.textContent = operacion;
    document.getElementById("resultados").appendChild(li);
}
