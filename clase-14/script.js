/*const persona = {

    nombre: "Fran",
    apellido: "Pugh",
    edad: 20
}

let {nombre:n, apellido:a, edad:e} = persona

n = "Pepe"
a = "Perez"
e = 30
console.log(persona)
console.log(n, a, e)

setTimeout(() => {
    console.log("Buenas noches")
}, 3000)

setTimeout(() => {
    console.log("Buenas tardes")
}, 3000)

setTimeout(() => {
    console.log("Buenos dias")
}, 3000)

setInterval(() => {
    setTimeout(() => {
        console.log("Buenos dias")
    }, 3000)
}, 10000)*/
class Persona {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre
        this.edad = edad
        this.apellido = apellido
        this.sueldo = sueldo
    }
}

const persona1 = new Persona("Francisco", "Pugh", 17, 10000)
const persona2 = new Persona("Ale", "Santos", 19, 12000)
const persona3 = new Persona("Cris", "Ovejero", 20, 14000)
const persona4 = new Persona("Emanuel", "Achar", 21, 15000)

const personas = [persona1, persona2, persona3, persona4]

const consultaDatos = (condicion) => {
    return new Promise((resolve, reject) => {
        if(condicion == true) {
            resolve(personas)
        } else {
            reject("Promesa rechazada")
        }

    })
}

setInterval(() => {
    consultaDatos(true)
    .then((personas) => {
        console.table(personas)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log("Promesa terminada")
    })
}, 4000)


//console.log(consultaDatos(true))