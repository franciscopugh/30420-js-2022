/*function asignarOperacion(operacion) {
    if(operacion == "+") {
        return (a,b) => a + b
    } else if(operacion == "-") {
        return (a,b) => a - b
    }
}


const suma = asignarOperacion("+") 
const resta = asignarOperacion("-")

console.log(suma(5,10))
console.log(resta(5,10))

const suma = (a,b) => a + b

function mostrarSuma(res) {
    console.log(res)
}

mostrarSuma(suma(5,10))

function mostrarReceta(ingrediente1, ingrediente2, ingrediente3) {
    console.log(`El primer ingrediente ${ingrediente1} son 500 gramos`)
    console.log(`El segundo ingrediente ${ingrediente2} son 250 gramos`)
    console.log(`El tercer ingrediente ${ingrediente3} son 120 gramos`)
    console.log(`Juntarlos en un tupper y hornearlo por 50 minutos`)
}

mostrarReceta(prompt("Ingrese el ingrediente numero 1"), prompt("Ingrese el ingrediente numero 2"), prompt("Ingrese el ingrediente numero 3"))*/

class Animal {
    constructor(id, nombre, especie , color, peso) {
        this.id = id
        this.nombre = nombre
        this.especie = especie
        this.color = color
        this.peso = peso
    }
}

const animal1 = new Animal(1, "Firulais", "Lobo", "Gris", 60)
const animal2 = new Animal(2, "Flipper", "Delfin", "Negro", 600)
const animal3 = new Animal(3, "Leoncito", "Leon", "Amarillo", 150)
const animal4 = new Animal(4, "Rulo", "Oso", "Marron", 300)
const animal5 = new Animal(5, "Manuelita", "Tortuga", "Verde", 20)
const animal6 = new Animal(6, "Box boony", "Conejo", "Gris", 12)

const animales = [animal1, animal3, animal2, animal4, animal5, animal6]

//Reemplazo del for of
/*animales.forEach((animal, i) => {
    console.log(i)
    console.log(animal)
})*/

/*
console.log(animales.find(cosa => cosa.nombre === "Rulo"))

console.log(animales.filter(cosita => cosita.peso > 700))

console.log(animales.some(esto => esto.nombre === "Pedro"))

const animalesPeso = animales.map(bicho => bicho = bicho.peso)
*/

function generarNombreEspecie(animal) {
    return `Nombre: ${animal.nombre} - Especie ${animal.especie}`
}

const animalesNombreEspecie = animales.map(aquello => aquello = generarNombreEspecie(aquello))

console.log(animalesNombreEspecie)

const pesosAnimales = animales.map(animal => animal.peso)

console.log(pesosAnimales.sort((num1,num2) => num2 - num1))

let resultado = pesosAnimales.reduce((acum, sig) => acum * sig, 1)
Math.round(resultado)

console.log(Math.pow(5, 3))
console.log(Math.round(5.5))