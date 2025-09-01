const perfilUsuario = {
    infoPersonal: {
        nombre: "juan",
        edad: 20,
        email: "juan123@gmail.com"
    },

    prefeAplicacion: {
        idioma: "español",
        notificaciones: "activas",
        tema: "oscuro"
    },

    estadisUso: {
        fechaRegistro: new Date("8/16/2025"),
        ultimoAcceso: new Date("9/1/2025"),
        numeroSesiones: 12
    }
}


//Cadaseccion de informacion por separado
console.log(perfilUsuario.infoPersonal)
console.log(perfilUsuario.prefeAplicacion)
console.log(perfilUsuario.estadisUso)

//Cambiar el idioma
perfilUsuario.prefeAplicacion.idioma = "ingles"
console.log(perfilUsuario.prefeAplicacion)

//Cambiar fecha de acceso a la actual
perfilUsuario.estadisUso.ultimoAcceso = new Date()
console.log(perfilUsuario.estadisUso)

//Eliminar preferencia
delete perfilUsuario.prefeAplicacion.tema
console.log(perfilUsuario.prefeAplicacion)

//Extraer email e idioma
const {email} = perfilUsuario.infoPersonal;
const {idioma} = perfilUsuario.prefeAplicacion;
console.log(email)
console.log(idioma)

//perfil completo
console.log(perfilUsuario)