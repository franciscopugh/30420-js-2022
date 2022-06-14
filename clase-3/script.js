/*console.log(1)
console.log(2)
console.log(3)
console.log(4)
... 
console.log(1000)*/
//1 + 1 = 2
//2 + 1 = 3
//3 + 1 = 4
                     
for(let i = 0; i <= 10;i++) { // i = i + 1
    
    if( i === 5) {
        continue
    }
    console.log(i)

}
/*
let repetir = true
let numero1, numero2

//let numero = parseFloat(prompt("Ingrese un numero"))

//console.log(numero)
/*
while(repetir) {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))

    //isNaN() //Verdadero si numero es NaN
    //!isNaN() // Verdadero si numero no es NaN
    //F   False       V      V
    //V    False       F      False
  if(!(isNaN(numero1) || isNaN(numero2))) {
    repetir = false
    } 

}



let palabra
//"salir" != "Salir"
do {
    palabra = prompt("Ingrese palabra").toLowerCase() //Paso a miniscula
} while(palabra != "salir")

console.log(numero1 + numero2)

*/


let numero1, numero2, operacion


do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion (+,-,/,*)")
} while((isNaN(numero1) || isNaN(numero2)))

switch(operacion) {
    case "+":
        alert(numero1 + numero2)
        break
    case "-":
        alert(numero1 - numero2)
        break
    case "/":
        alert(numero1 / numero2)
        break
    case "*":
        alert(numero1 * numero2)
        break
    default:
        alert("Operacion no valida")
        break
    
}





