const libro ={
    informacion: {
        titulo: "El saber del hoy",
        autor: "Jose Miguel Castro",
        genero: "Terror"
    },

    disponibilidad: {
        copias: 15,
        prestados: 11,
        ubicacion: "el salvador"
    },

    registro: {
        fechaPublicacion: new Date("1/1/2005"),
        fechaIngreso: new Date("1/1/2022"),
        ultimaRevision: new Date("1/1/2024")
    }

}

//Informacionn del autor
console.log(libro.informacion.autor)

//Calcular ejemplares disponibles

libro.disponibilidad.copias = libro.disponibilidad.copias - libro.disponibilidad.prestados
console.log(libro.disponibilidad)

//actualizar ultima revision
libro.registro.ultimaRevision = new Date()
console.log(libro.registro)

//Actualizar genero
libro.informacion.genero = "romance"
console.log(libro.informacion)

//Extraer titulo y ubicacion
const {titulo} = libro.informacion;
const {ubicacion} = libro.disponibilidad;
console.log(titulo)
console.log(ubicacion)

//Mostrar todo actualizado
console.log(libro)