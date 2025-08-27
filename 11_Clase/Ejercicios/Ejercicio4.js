import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("#4 - Calcular el piso de una habitación en un edificio");
rl.question("Ingrese el número de la habitación: \n", (input) => {
    const roomNumber = parseInt(input);
    const floor = Math.ceil(roomNumber / 10);
    console.log(`La habitación ${roomNumber} está en el piso ${floor}.`);
    rl.close();
});