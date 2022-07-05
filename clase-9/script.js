/*
    Click: cuando den click
    dblclick: cuando dan doble click

const boton1 = document.getElementById('boton1')
const input1 = document.getElementById('input1')
const inputColor = document.getElementById('inputColor')

boton1.addEventListener('click', () => {
    console.log(input1.value)
})

input1.addEventListener('input', function() {
    console.log(input1.value)
}) 

input1.addEventListener('change', function() {
    console.log(input1.value)
}) 

inputColor.addEventListener('input', function() {
    console.log(inputColor.value)
    document.body.style.backgroundColor = inputColor.value
}) 



boton1.addEventListener('click', () => {
    console.log("Hola coders,buenas noches!")
})

boton1.onclick = () => {
    console.log("Hola coders desde onclick!")
}

boton1.onclick = () => {
    console.log("Hola coders desde otro onclick!")
}*/

class User {
    constructor(id, username, email, password) {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
    }
}

const formulario = document.getElementById('idForm')
const usuarios = []
let id = 1;

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('exampleInputUser1').value
    let email = document.getElementById('exampleInputEmail1').value
    let password = document.getElementById('exampleInputPassword1').value
    const user = new User(id, username, email, password)
    usuarios.push(user)
    console.log(usuarios)
    formulario.reset()
    id++
    //document.getElementById('exampleInputUser1').value = ""
})