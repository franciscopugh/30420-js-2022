/*const persona1 = {
    id: 1,
    nombre: "Francisco",
    apellido: "Pugh",
    edad: 18,
    peso: 70
}

const persona2 = {
    id: 2,
    nombre: "Alejandro",
    apellido: "Santos",
    edad: 19,
    peso: 72,
    sueldo: 20000
}



console.log(persona1.sueldo)
console.table(persona1)



persona1.sueldo = 15000
console.log(persona1)

persona1.edad = 17

console.table(persona1["edad"])

function Persona(nombreParam, apellidoParam, edadParam, sueldoParam, estadoCivilParam = "Soltero/a") {
    this.nombre = nombreParam
    this.apellido = apellidoParam
    this.edad = edadParam
    this.sueldo = sueldoParam
    this.estadoCivil = estadoCivilParam

    this.saludar = () => console.log(this)
}

const persona1 = new Persona("Francisco", "Pugh", 18, 15000, "Casado")
const persona2 = new Persona("Alejandro", "Santos", 19, 20000, undefined)

persona1.saludar()
persona2.saludar()*/

class Producto {
    constructor(id, nombre, marca ,precio, stock) {
        this.id = id
        this.nombre = nombre;
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    //Ingresar 1.cantidadAumento
    aumentarPrecio(porcentajeAumento = 1) {
        this.precio *= porcentajeAumento //this.precio = this.precio * porcentajeAumento 
    }

    disminuirStock(nuevoStock = 0) {
        this.stock -= nuevoStock
    }

    aumentarStock(nuevoStock = 0) {
        this.stock += nuevoStock
    }
}

const producto1 = new Producto(1, "Yerba Mate", "La yerbita", 100, 10)
const producto2 = new Producto(2, "Cafe", "Le Cafe", 200, 15)

console.log(producto1.precio)

producto1.aumentarPrecio(1.10)

console.log(producto1.precio)

console.log(producto2.stock)

producto2.disminuirStock(10)

console.log(producto2.stock)
