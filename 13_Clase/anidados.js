const estudiante ={
    nombre: "Juan",
    apellido: "Cruz",
    edad: "27 años",
    direccion:{
        pais: "El Salvador",
        calle: "Los Almendros",
        numCasa: 27
    }
}

//Acceso al objeto
console.log(estudiante);
console.log(estudiante.direccion)

console.log(estudiante['direccion'])


//Agrefamos una nueva propiedad al objeto
estudiante.colorojos="azules"
console.log(estudiante)

//Agregamos propiedad al objeto anidado
estudiante.direccion.postal=503;
console.log(estudiante['direccion'])

//modificamos propiedad al objeto anidado
estudiante.direccion.numCasa=20
console.log(estudiante.direccion)

//eliminando propiedades del objeto anidado
delete estudiante.direccion.numCasa
console.log(estudiante.direccion)