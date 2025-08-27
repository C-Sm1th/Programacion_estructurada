//Un sistema de gestion de medidas recibe codigos de seguimiento en el formato PED-2025-00045. Se necesita extraer el ano del pedido y el numero de orden usando el metodo substring().
//Requisitos:
//1. Extraer el ano del pedido (2025) y el numero de orden (00045) usando substring().

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese el codigo de orden del pedido (ej: PED-2025-00045): ", (codigo) => {

    const sinEspCodigo = codigo.trim()
    const anoCodigo = sinEspCodigo.substring(4,8);
    const noCodigo = sinEspCodigo.substring(9);

    console.log(`Ano del codigo: ${anoCodigo}`)
    console.log(`Numero de orden: ${noCodigo}`)

    rl.close()
})

