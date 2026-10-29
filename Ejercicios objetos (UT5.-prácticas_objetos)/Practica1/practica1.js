//creamos clase rectángulo
class Rectangulo {
    //definimos el contructor
    constructor(width, height) {
        //comprobación si es mayor a 0 para el ancho
        if (width > 0) {
            this.width = width;
        } else {
            this.width = 1;
        }

        //comprobación si es mayor a 0 para la altura
        if (height > 0) {
            this.height = height;
        } else {
            this.height = 1;
        }
    }

    //método cambiarDimensiones
    cambiarDimensiones(width, height) {
        //comprobación si es mayor a 0 para el ancho
        if (width > 0) {
            this.width = width;
        } else {
            this.width = 1;
        }

        //comprobación si es mayor a 0 para la altura
        if (height > 0) {
            this.height = height;
        } else {
            this.height = 1;
        }
    }

    //método calcularArea
    calcularArea() {
        //devolvemos area del rectangulo
        return this.width * this.height;
    }

    //método copia
    copia() {
        //creamos copia del objeto actual
        let copia = new Rectangulo(this.width, this.height);

        //devolvemos la copia
        return copia;
    }

    //método comparar
    comparar(rectangulo) {
        if (rectangulo instanceof Rectangulo) {
            if (rectangulo.calcularArea() < this.calcularArea()) {
                return "mayor";
            } else if (rectangulo.calcularArea() > this.calcularArea()) {
                return "menor";
            } else {
                return "igual";
            }
        } else {
            return "No es de la clase rectangulo";
        }
    }
}

// Verificamos todos los requisitos en el DOM
let contenedor = document.getElementById("contenedor");

// Creamos un rectángulo y calculamos su área
let rectangulo = new Rectangulo(1, 2);
contenedor.innerHTML += "Área del rectángulo: " + rectangulo.calcularArea() + "<br>";

// Comprobamos los valores por defecto del constructor
let rectanguloInvalido = new Rectangulo(-5, 0);
contenedor.innerHTML += "Dimensiones con valores inválidos: " +
    rectanguloInvalido.width + " x " + rectanguloInvalido.height + "<br>";

// Comprobamos el método cambiarDimensiones
rectangulo.cambiarDimensiones(3, 4);
contenedor.innerHTML += "Dimensiones modificadas: " +
    rectangulo.width + " x " + rectangulo.height + "<br>";

// Comprobamos cambiarDimensiones con valores inválidos
rectangulo.cambiarDimensiones(-2, 0);
contenedor.innerHTML += "Dimensiones modificadas con valores inválidos: " +
    rectangulo.width + " x " + rectangulo.height + "<br>";

// Comprobamos el método copia
let rectangulo2 = rectangulo.copia();
contenedor.innerHTML += "Dimensiones de la copia: " +
    rectangulo2.width + " x " + rectangulo2.height + "<br>";

// Modificamos la copia para comprobar que es independiente
rectangulo2.cambiarDimensiones(1, 4);
contenedor.innerHTML += "Área del original: " + rectangulo.calcularArea() +
    " | Área de la copia: " + rectangulo2.calcularArea() + "<br>";

// Comprobamos el método comparar (menor)
contenedor.innerHTML += "Comparación menor: " +
    rectangulo.comparar(rectangulo2) + "<br>";

// Comprobamos el método comparar (mayor)
contenedor.innerHTML += "Comparación mayor: " +
    rectangulo2.comparar(rectangulo) + "<br>";

// Comprobamos el método comparar (igual)
let rectangulo3 = new Rectangulo(1, 1);
contenedor.innerHTML += "Comparación igual: " +
    rectangulo.comparar(rectangulo3) + "<br>";

// Comprobamos la comparación con un objeto que no es Rectangulo
contenedor.innerHTML += "Comparación inválida: " +
    rectangulo.comparar({}) + "<br>";