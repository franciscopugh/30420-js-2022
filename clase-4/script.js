/*function sumar(numero1, numero2) {
    return numero1 + numero2
}

let numero1, numero2

do {
    numeroUno= parseFloat(prompt("Ingrese un numero"))
    numeroDos = parseFloat(prompt("Ingrese otro numero"))
} while(isNaN(numeroUno) || isNaN(numeroDos))

let resultado = sumar(numeroUno,numeroDos)

alert(resultado)

const IVA1 = 1.21
const IVA2 = 1.10
const precio = 100

function calcularIVA(precio) {
    //const IVA = 1.30
    return (precio * (IVA1)) * IVA2
}

//alert(IVA)
//alert(precio)
alert(calcularIVA(100))

//alert(IVA)*/
/*
function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}


const sumar = function (num1,num2) { return num1 + num2}
const restar = function (num1,num2) { return num1 - num2}
const multiplicar = function (num1,num2) { return num1 * num2}
const dividir = function (num1,num2) { return num1 / num2}
*/

const sumar = (num1,num2) => num1 + num2
const restar = (num1,num2) => num1 - num2
const multiplicar = (num1,num2) => num1 * num2
const dividir = (num1,num2) => num1 / num2

let numero1, numero2, operacion

do {
    numero1= parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion")
} while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion == "/"))

switch(operacion) {
    case "+":
        alert(sumar(numero1, numero2))
        break
    case "-":
        alert(restar(numero1, numero2))
        break
    case "*":
        alert(multiplicar(numero1, numero2))
        break
    case "/":
        alert(dividir(numero1, numero2))
        break  
    default:
        alert("Operacion no valida")
        break
}
