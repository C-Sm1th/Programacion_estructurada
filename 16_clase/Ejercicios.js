// const carrito =[]

// const producto ={
//     nombre:"camisa",
//     precio:2.50
// }
// carrito.push(producto)
// console.log(carrito)

// const producto2 ={
//     nombre:"zapato",
//     precio: 120
// }

// carrito.unshift(producto2)
// console.log(producto2)

//Ejercicio 1
// 1. Solicitar tres nombres al usuario para ser guardados en un array y mostrar luego cada uno
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
     output: process.stdout
})
// let nombres =[]
// rl.question("Ingrese el primer nombre ",(nombre1)=>{
//     nombres.push(nombre1);

//     rl.question("Ingrese el segundo nombre ",(nombre2)=>{
//         nombres.push(nombre2)

//         rl.question("Ingrese el tercer nombre ",(nombre3)=>{
//             nombres.push(nombre3)

//             console.log("Los nombre ingresados son: ")
//               console.log("Primer nombre: ", nombres[0])
//                 console.log("Segundo nombre: ", nombres[1])
//                   console.log("Tercer nombre: ", nombres[2])
//                   rl.close()
//         })
//     })


// })
let numero =[]
rl.question("Ingrese la primera nota: ",(nota1)=>{
    numero[0]=parseFloat(nota1)

    rl.question("Ingrese la segunda nota: ",(nota2)=>{
        numero[1]=parseFloat(nota2)

        rl.question("Ingrese la tercera nota ",(nota3)=>{
            numero[2]=parseFloat(nota3)

            // let promedio =(numero[0]) + (numero[1]) + (numero[2]) / 3
            // console.log(`El promedio es: ${promedio}`)

            let max = Math.max(numero[0],numero[1],numero[2]);
            console.log(`La temperatura mayor es ${max}`)

            rl.close()
        })
    })
})