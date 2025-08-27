import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Ingrese el primer numero: ",(num1) =>{
//     rl.question("Ingrese el segundo numero: ",(num2) =>{
//         let suma = parseFloat(num1) + parseFloat(num2)
//     console.log(`El resultado es: ${suma}`);
//     rl.close()
//     })
// })

rl.question("Ingrese una temperatura en Celcius: ",(celcius) =>{
        let temParse = parseFloat(celcius)
        let fah = (temParse * 9/5)+32
    console.log(`La conversion de al temperatura es: ${fah}`);
    rl.close()
})

