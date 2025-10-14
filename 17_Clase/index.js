// function mifuncion() {
//     //Proceso a realizar

// }

// mifuncion();


// function misaludo() {
//     console.log("Hola desde javascript")
// }

// misaludo();



// function saludar(nombre) {
//     console.log("hola " + nombre + " bienvenido")
// }

// saludar("Chris");



// function misaludoobtenido(nombre) {
//     let mensaje = "Hola " + nombre;

//     return mensaje;
// }

// let EnviarNombre = misaludoobtenido("chris")

// console. log (EnviarNombre)




// let saludo = function(nombre) {
//     saludar = `Hola ${nombre}`

//     return saludar
// }

// console.log(saludo(`Smith`))




////Funciones de Flecha

// let saludo = (nombre) => {
//     return `Saludos ${nombre}`
// }

// console.log(saludo("Chris"))


// let saludo2 = nombre2 => `Saludos ${nombre2}`
// console.log(saludo2(`Chris`))



//funcion de flecha para realizar una suma

let sumar = (num1, num2) => {
    let resultado = num1 + num2;
    return resultado
}

console.log("El resultado de la suma es: " + sumar(2,3));


let suma = (num1, num2) => num1 + num2

console.log(suma(2,5))