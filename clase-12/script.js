/*let num = 2

if(num % 2 == 0) {
    console.log("V")
} else {
    console.log("F")
}

let esPar = (num % 2 == 0) ? "Es numero par" : "Es numero impar"

console.log(esPar)

let arrayPersonas = (localStorage.getItem('personas')) ? JSON.parse(localStorage.getItem('personas')) : []

console.log(arrayPersonas)

let arrayP = []

if(localStorage.getItem('personas')) {
    arrayP = JSON.parse(localStorage.getItem('personas'))
} 

const arrayPersonas = (localStorage.getItem('personas')) ? JSON.parse(localStorage.getItem('personas')) : []

const personas = JSON.parse(localStorage.getItem('personas')) ?? []

console.log(personas)
let acumulador = 0

const persona1 = {
    nombre: undefined,
    apellido:undefined, 
    sueldo: undefined
}

const persona2 = null

acumulador += persona1?.sueldo ?? 0
acumulador += persona2?.sueldo ?? 0
console.log(persona2?.sueldo)
console.log(acumulador)*/

class Producto {
    constructor(id,nombre,marca, precio,stock) {
        this.i = id
        this.n = nombre
        this.m = marca
        this.p = 150
        this.s = 20
    }

    mostrarComprado() {
        console.log("Hola, estoy comprado")
    }
}

const producto1 = new Producto(1,"Arroz","Arrocin",150,20)
  
/*
const {n:nombre, m: marca, mostrarComprado} = producto1

//nombre = "Pan"
console.log(nombre)
console.log(producto1.nombre)
console.log(marca)
mostrarComprado()

function mostrarPrecio({p:precio}) {
        console.log(precio)
}

mostrarPrecio(producto1)


const producto2 = {...producto1}

producto2.n = null

console.log(producto2)
console.log(producto1)*/


const user1 = {
    nombre: "Fran",
    email: "f@f.com",
    juegos: [
        {
            nombre: "Age of Empires III",
            año: 2020
        },
        {
            nombre: "Dark Souls",
            año: 2011
        }
    ]
}

const user2 = structuredClone(user1) 

user2.juegos[1] = null

console.log(user1)
console.log(user2)
