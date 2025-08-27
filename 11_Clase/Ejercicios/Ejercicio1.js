import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Cuadrado y Raíz Cuadrada de un Número ingresado por el usuario");
rl.question("Ingrese un número:", (numero) => {
    console.log(`El número ${numero} elevado al cuadrado es: ${Math.pow(numero, 2)}`);
    console.log(`La raíz cuadrada de ${numero} es: ${Math.sqrt(numero)}`);
    rl.close();
})