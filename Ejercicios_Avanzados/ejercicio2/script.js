function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

const resultado = document.getElementById("resultado");

try {
    const division = divide(12, 3);
    console.log("12 / 3 =", division);
    resultado.textContent = "12 / 3 = " + division;

    // Pruebo también el caso que da error.
    console.log(divide(12, 0));
} catch (error) {
    console.log("Error: " + error.message);
    resultado.textContent += " | Error: " + error.message;
}
