/*const IVA = 1.21
const sinNada = []

const cosas = ["Hola", 1, true, "Chau", false, 1212, null]

cosas[10] = "Adios"  

for(let i = 0; i < cosas.length; i++) {
    //console.log(i)
    console.log(cosas[i]) //i = 0, 1, 2, 3 ... 10
}



//console.table(cosas)
console.log(sinNada)
sinNada.push("Calefactor")
console.log(sinNada)
sinNada.push("Frazada")
console.log(sinNada)
sinNada.unshift("Buzo")
console.log(sinNada)
sinNada.pop()
console.log(sinNada)*/



//            indice, cantElementos
//tutoresProfe.splice(1,0)
/*
let nombreEliminar = prompt("Ingrese el nombre a eliminar").toLowerCase()

let indice = tutoresProfe.indexOf(nombreEliminar) //index o -1 si no lo encuentra

if(indice >= 0) {
    tutoresProfe.splice(indice,1)
} else {
    alert("Nombre no encontrado")
}
*/

const tutoresProfe = ["francisco", "alejandro", "cristian", "emanuel"]
const alumnos = ["Nicolas", "Dario", "Maria"]

const comision = alumnos.concat(tutoresProfe)

console.log(comision)
console.log(comision.slice(2,5))
//console.log(tutoresProfe.join(","))
console.log(comision.includes("Ignacio"))

console.log(comision.reverse())

//const array1 = array2.slice(1,5) Hacer copias de esta forma

class Producto {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    aumentarPrecio(porcentaje) {
        this.precio *= porcentaje
    }
}

const producto1 = new Producto(1, "Yerba mate", "La yerbita", 500, 20)
const producto2 = new Producto(2, "Cafe", "Cafecito", 400, 18)
const producto3 = new Producto(3, "Fideos", "Fideito", 100, 30)
const producto4 = new Producto(4, "Yogur", "Yogurte", 200, 15)
const producto5 = new Producto(5, "Lentejas", "Lentejin feliz", 180, 22)

const arrayProductos = [producto1, producto2, producto3, producto4, producto5]

//console.table(productos)

for(let productoArray of arrayProductos) {
    productoArray.aumentarPrecio(1.20)
}

console.log(arrayProductos)