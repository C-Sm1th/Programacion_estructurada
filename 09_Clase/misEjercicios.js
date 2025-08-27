import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

///////Solicitar tres notas y sacar promedio
// rl.question("Ingrese la primera nota: ",(nota1) =>{
//     rl.question("Ingrese la segunda nota: ",(nota2) =>{
//         rl.question("Ingrese la tercera nota: ",(nota3) =>{
//             let prom = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3
//     console.log(`El promedio es: ${prom}`);
//     rl.close()
//     })
//  })
// })


///////Kilometros a millas
// rl.question("Ingrese la distancia en Km (decimales): ",(kilom) =>{
//         let kilometros = parseFloat(kilom)
//         let convMillas = 0.621371
//         let millas = kilometros * convMillas
//     console.log(`Los kilometros ingresados convertidos en millas son: ${millas.toFixed(2)}`);
//     rl.close()
// })


////////Calcular total compra
rl.question("Ingrese el precio unitario del producto: ",(preU) =>{
    rl.question("Ingrese la cantidad que lleva de este producto: ",(cantPro) =>{
        let totalCom = parseFloat(preU) * parseInt(cantPro)
    console.log(`El total de la compra es: ${totalCom}`);
    rl.close()
    })
})