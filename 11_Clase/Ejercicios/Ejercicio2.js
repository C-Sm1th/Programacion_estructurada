import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Generador de Números Aleatorios");
const randNum = Math.floor(Math.random() * 29 + 1);
console.log(`El número aleatorio generado entre 0 y 29 es: ${randNum}`);
rl.close();