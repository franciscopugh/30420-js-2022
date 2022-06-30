/*console.log(document.getElementById(`parrafo1`))
console.log(document.getElementsByClassName('parrafos')[0].children[0])
console.log(document.getElementsByTagName('p')[0])

const parrafo4 = document.getElementById('parrafo4')

parrafo4.innerText = "Hola coders, buenas noches!"

const divParrafos = document.getElementsByClassName('parrafos')[1]

console.log(divParrafos)

divParrafos.innerHTML += '<p> Hola, soy el ultimo parrafo!</p>'

*/

class Persona {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }
}

const persona1 = new Persona(1, "Francisco", "Pugh", 38, 12000)
const persona2 = new Persona(2, "Dario", "Britos", 20, 22000)
const persona3 = new Persona(3, "Alejandro", "Santos", 19, 17000)
const persona4 = new Persona(4, "Gaston", "Sosa", 21, 13000)
const persona5 = new Persona(5, "Maria", "Parodi", 19, 24000)

const personas = [persona1, persona2, persona3, persona4, persona5]

const divPersonas = document.getElementById('divPersonas')

personas.forEach(persona => {
    divPersonas.innerHTML += `
        <div class="stylePersonas" id="persona${persona.id}">
            <p>Nombre: ${persona.nombre} </p>
            <p>Apellido: ${persona.apellido} </p>
            <p>Edad: ${persona.edad} </p>
            <p>Sueldo: ${persona.sueldo} </p>
        </div>
    `
})

const parrafo = document.createElement("p")
parrafo.innerText = "Hola, como estan?"
parrafo.id = "parrafo1"

document.body.append(parrafo)

document.getElementById('persona1').remove()

divPersonas.removeChild(document.getElementById('persona2'))
