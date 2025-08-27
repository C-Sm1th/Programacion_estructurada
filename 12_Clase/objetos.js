//const nombre = "Eli";
//const edad = 30;
const altura = 1.60

//Creacion de objetos con object literal
const persona = {
    nombre: "Eli",
    edad: 30,
    altura: 1.60
}

//imprimir el objeto
console.log(persona)



////Acceder a las propiedades del objeto

//Acceso por punto
console.log(persona.nombre)

//Acceso a las propiedades por corchetes
console.log(persona['edad'])


//Agregamos mas propiedades al objeto
persona.imagen = "imagen.jpg"

console.log(persona)

//Eliminar propiedades del objeto
delete persona.altura;
console.log(persona);

//Modificamos el valor de una propiedad o llave
persona.nombre = "Elizabeth";
console.log(persona);

//Asignando el valor de la propiedad del objeto a una nueva variable
const nom = persona.nombre
console.log(nom);


//Destructuring
//const {nombre} = persona;
//console.log(nombre);

//const {edad} = persona;
//console.log(edad);

const {nombre,edad} = persona;
console.log(nombre)
console.log(edad)