import readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function calculoArea(base,altura) {
    let calculo = parseFloat(base*altura);

    return calculo
}

rl.question("Ingrese la base del regtangulo: ", (base) => {
    rl.question("Ingrese la altura del regtangulo: ", (altura) => {
        
        let resul = calculoArea(base, altura);
        console.log(`El area del regtangulo es: ${resul}`);

        // console.log(`El area del regtangulo es: `, calculoArea(base, altura));

        rl.close()
    })
})