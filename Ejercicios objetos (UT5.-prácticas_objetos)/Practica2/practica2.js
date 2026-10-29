//creamos objeto ordenador
class Ordenador {
    //definimos el constructor
    constructor(marca, modelo, capacidadRAM = 4, capacidadDisco = 512, numPulgadas = 17) {
        this.marca = marca;
        this.modelo = modelo;
        this.capacidadRAM = capacidadRAM;
        this.capacidadDisco = capacidadDisco;
        this.numPulgadas = numPulgadas;
    }

    //método toString
    toString() {
        return this.marca + ", " + this.modelo + ", " + this.capacidadRAM + ", " + this.capacidadDisco + ", " + this.numPulgadas;
    }
}

//creamos clase ordenadoresPortatiles que hereda de Orenador
class OrdenadorPortatil extends Ordenador {
    //definimos constructor
    constructor(marca, modelo, capacidadRAM = 4, capacidadDisco = 256, numPulgadas = 12, autonomia = 4) {
        super(marca, modelo, capacidadRAM, capacidadDisco, numPulgadas);
        this.autonomia = autonomia;
    }

    //método toString
    toString() {
        return super.toString() + ", " + this.autonomia;
    }   
}

//Validamos que todos los requisitos funcionan correctamente y lo añadimos al DOM
let contenedor = document.getElementById("contenedor");

// Creamos un ordenador con todos sus valores
let ordenador1 = new Ordenador("HP", "Pavilion", 16, 1000, 24);
contenedor.innerHTML += "Ordenador con todos los valores: " +
    ordenador1.toString() + "<br>";

// Comprobamos los valores por defecto del ordenador
let ordenador2 = new Ordenador("Lenovo", "IdeaCentre");
contenedor.innerHTML += "Ordenador con valores por defecto: " +
    ordenador2.toString() + "<br>";

// Comprobamos que podemos indicar solo algunos valores opcionales
let ordenador3 = new Ordenador("Dell", "OptiPlex", 8);
contenedor.innerHTML += "Ordenador con RAM personalizada: " +
    ordenador3.toString() + "<br>";

// Comprobamos el método toString del ordenador
contenedor.innerHTML += "Método toString del ordenador: " +
    ordenador1.toString() + "<br>";

// Creamos un portátil con todos sus valores
let portatil1 = new OrdenadorPortatil("ASUS", "ZenBook", 16, 512, 14, 8);
contenedor.innerHTML += "Portátil con todos los valores: " +
    portatil1.toString() + "<br>";

// Comprobamos los valores por defecto del portátil
let portatil2 = new OrdenadorPortatil("Acer", "Aspire");
contenedor.innerHTML += "Portátil con valores por defecto: " +
    portatil2.toString() + "<br>";

// Comprobamos que podemos personalizar la autonomía
let portatil3 = new OrdenadorPortatil("HP", "EliteBook", 4, 256, 12, 10);
contenedor.innerHTML += "Portátil con autonomía personalizada: " +
    portatil3.toString() + "<br>";

// Comprobamos que el portátil hereda de Ordenador
contenedor.innerHTML += "¿El portátil hereda de Ordenador?: " +
    (portatil1 instanceof Ordenador) + "<br>";

// Comprobamos el método toString del portátil
contenedor.innerHTML += "Método toString del portátil: " +
    portatil1.toString() + "<br>";