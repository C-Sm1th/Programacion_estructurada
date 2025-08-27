import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//////Longitud de nombre sin espacios//////
// rl.question("Ingrese su nombre completo: ", (nombreComp) => {
//     const sinEspIF = nombreComp.trim()
//     const nomReplace = sinEspIF.replaceAll(' ','')
//     const nomLong = nomReplace.length

//     console.log(`La longitud del nombre sin espaccios es: ${nomLong}`)

//     rl.close()
// })


//////Verificacion de correo electronico//////
// rl.question("Ingresa tu correo electronico: ", (correoE) => {
//     const correoMin = correoE.toLowerCase();
//     const correoDom = correoMin.endsWith('@gmail.com');

//     console.log(`Su correo electronico en minusculas es: ${correoMin}`)
//     console.log(`Su correo es valido? ${correoDom}`)

//     rl.close()
// })


//////Ultimos 4 digitos de codigo automatico//////
// rl.question("Ingrese el codigo generado automaticamente: ", (codigo) => {
//     const codigoDigitos = codigo.slice(-5);

//     console.log(`Los ultimos cinco digitos son: ${codigoDigitos}`)

//     rl.close()
// })


//////Saber donde aparecce error///////
rl.question("Ingrese el mensaje para ubicar error: ", (mensaje) => {
    const ubiError = mensaje.indexOf('error');

    console.log(`La palabra "error" aparece justo despues del caracter numero: ${ubiError}`)

    rl.close()
})