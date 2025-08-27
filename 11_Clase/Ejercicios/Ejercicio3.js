import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precios = [30, 52, 35, 1, 12, -3];
 const precioMin = Math.min(...precios);
 const precioMax = Math.max(...precios);
 console.log(`El precio más barato es: ${precioMin}`);
 console.log(`El precio más caro es: ${precioMax}`);
rl.close();

