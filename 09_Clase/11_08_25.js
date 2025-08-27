import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una frase: ", (frase) => {
    console.log(`=== tratamiento de cadena ===`)

    //l.length
    const fraseLength = frase.length;
    console.log(`La longitud de la frase es: ${fraseLength}`);

    //toUpperCase
    const fraseMayus = frase.toUpperCase();
    console.log(`La frase en mayusculas es: ${fraseMayus}`);

    //toLowerCase
    const fraseMinus = frase.toLowerCase();
    console.log(`La frase en minusculas es: ${fraseMinus}`);

    //trim
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios al inicio y al final es: ${fraseTrim}`);

    //subString
    const subCadena = frase.substring(2,6);
    console.log(`Los primeros 5 caracteres de la frase son: ${subCadena}`);

    //slice
    const subCadenaSlice2 = frase.slice(-5)
    console.log(`Los ultimos 5 caracteres de la frase son: ${subCadenaSlice2}`)

    //replace
    const fraseRemplazo = frase.replace('hola', 'adios');
    console.log(`La frase con 'hola' remplazado con 'adios' es: ${fraseRemplazo}`)

    //replaceAll
    const fraseRemplazoAll = frase.replaceAll('hola', 'adios')
    console.log(`La frase con todas las ocurrencias de 'hola' remplazadas por 'adios' es: ${fraseRemplazoAll}`)

    //split divide la frase en palabras separadas por un espacio
    const fraseArray = frase.split(` `);
    console.log(`La frase dividida en palabras es: ${fraseArray}`)

    //includes
    const incluyeHola = frase.includes('hola');
    console.log(`La frase incluye la palabras 'hola': ${incluyeHola}`)

    //indexof
    const indiceHola = frase.indexOf('hola');
    console.log(`El indice de la primera ocurrencia de 'hola' es: ${indiceHola}`)

    //starWith
    const empiezaConHola = frase.startsWith('hola')
    console.log(`La frase empieza por 'hola': ${empiezaConHola}`)

    //endsWith
    const terminaConHola = frase.endsWith('adios')
    console.log(`La frase termina por 'adios': ${terminaConHola}`)



    rl.close()
})