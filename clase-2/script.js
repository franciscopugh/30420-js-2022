/*let numero = 10 // = Asignacion

if(numero == 5) { // == Comparacion
    console.log("Numero igual a 5")
} else {
    console.log("Numero no es igual a 5")
}

console.log(numero)

let numero = parseInt(prompt("Por favor, ingrese un numero")) //10,77777 = 10

console.log(numero)
console.log(numero + 5) 

//console.log(5 + "") //Concatenacion "5"
//console.log("5" * "5") // 5 + "5" = "55"  5 * "5" = 25

let numero = parseInt(prompt("Ingrese un numero"))

if(numero % 2) { //4 / 2 = 2 Resto = 0
    console.log("Numero impar")
} else {
    console.log("Numero es par")
}


//1 = True
//0 = False

if(0) {
    console.log("V")
} else {
    console.log("F")
}

let desayuno = "Chocolate"

let esCafe = (desayuno == "Cafe")
let esTe = (desayuno == "Te")
let esChoc = (desayuno == "Chocolate")

if(esCafe) {
    console.log("Desayuno Cafe con leche")
} else if(esTe) {
    console.log("Desayuno Te con leche")
} else if(esChoc) {
    console.log("Desayuno Chocolatada")
} else {
    console.log("Desayuno mate")
}

*/


/*
if(numero >= 5) {
    console.log("Numero mayor a 5")
}

5 y "5" distinto tipo, mismo valor 

== compara si 5 y "5" tienen el mismo valor
=== compara si 5 , "5" tienen el mismo valor y el mismo tipo (Estrictamente igual)
!= es al reves del ==
!== es al reves del ===

if(5 !== "5") {
    console.log("V")
} else {
    console.log("F")
}*/

//&& (And)
//|| (Or)
/*
let numero1 = 5
let numero2 = 10


if(numero1 === 10 && numero2 === 20) {
    console.log("V")
} else {
    console.log("F")
}


    numero1     &&      numero2
        V        V          V
        V        F          F
        F        F          V
        F        F          F


let numero1 = 5
let numero2 = 1


if(numero1 === 10 || numero2 === 20) {
    console.log("V")
} else {
    console.log("F")
}


    numero1     ||      numero2
        V        V          V
        V        V          F
        F        V          V
        F        F          F
*/

/*
    1 - 5 "Desaprueba"
    6 o 7 "Aprobado con nota de Bien"
    8 o 9 "Aprobado con nota de Muy Bien"
    10 "Aprobado con nota de Sobresaliente"
*/

let nota = parseInt(prompt("Ingrese una nota"))


if(nota >= 1 && nota <= 5) {
    console.log("Alumno/a desaprobado/a")
} else if(nota === 6 || nota === 7) { //nota >= 6 && nota <= 7
    console.log("Alumno/a aprobado/a nota de Bien")
} else if(nota === 8 || nota === 9) {
    console.log("Alumno/a aprobado/a nota de Muy Bien")
} else if(nota === 10) {
    console.log("Alumno/a aprobado/a nota de Sobresaliente")
} else {
    console.log("Numero no valido")
}