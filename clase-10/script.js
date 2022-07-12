/*const botonDarkMode = document.getElementById('botonDarkMode')
const botonLightMode = document.getElementById('botonLightMode')
console.log(localStorage.getItem('darkMode'))

let darkMode 

if(localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
} else {
    localStorage.setItem('darkMode', 'light')
}

if(darkMode == 'dark') {
    document.body.classList.add('darkMode')
}

botonDarkMode.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#000000"
    //document.body.style.color = "#ffffff"
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', "dark")
})

botonLightMode.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#ffffff"
    //document.body.style.color = "#000000"
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', "light")
    //localStorage.removeItem('darkMode')
})
*/
//sessionStorage.setItem('buenas_noches',"Adios" )

class Persona {
    constructor(id, nombre, apellido, edad, altura, peso) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura= altura
        this.peso = peso
    }

    existir() {
        console.log("Estoy existiendo!")
    }
}

const persona1 = new Persona(1,"Pancho", "Pancha", 24, 180, 90)
const persona2 = new Persona(2,"Juan", "Juanez", 30, 175, 70)
const persona3 = new Persona(3,"Lucia", "Luz", 32, 170, 60)
const persona4 = new Persona(4,"Yamila", "Yasol", 18, 182, 80)

const personas = [persona1,persona2,persona3,persona4]
const personas2 = []
localStorage.setItem('personas', JSON.stringify(personas)) //Pasar Objeto a JSON

const personasParseadas = JSON.parse(localStorage.getItem('personas')) //Pasar JSON a Objeto

personasParseadas.forEach(persona => {
    const personaNueva = new Persona(persona.id, persona.nombre, persona.apellido, persona.edad,persona.altura,persona.peso)

    personas2.push(personaNueva)
    console.log(personas2)
});

