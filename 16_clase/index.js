//Arrays
//forma 1
const numeros =[10,100,30,40,50];

//forma 2
const meses = new Array('Enero','Febrero','Marzo')
const deTodo =['Hola', 10, null, true,{nombre:"Juan", trabajo:"Programador"},[1,2,3]];
console.table(deTodo)
console.log(deTodo[3]);
console.log(deTodo[4].nombre);
console.log(deTodo[5][1]);


//modificamos los valores al arreglo
numeros[1]=80
console.log(numeros)

//Agrega un nuevo dato al final 
meses.push('Abril');
console.log(meses)

//Elimina el ultimo dato agregado
meses.pop()
console.log(meses)

//Eliminar el primer elemento de un arreglo
meses.shift()
console.log(meses)

//Agregar un elemento al inicio del arreglo
meses.unshift('Enero')
console.log(meses)


for(i=0;i<meses.length;i++){
    console.log(meses[i]);
}

//clase 2
numeros.splice(2,0,80);
console.log(numeros)

//Imprimir el primero y ultimo dia de la semana 
const dias =["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
let primer = dias[0];
let ultimo = dias[dias.length -1];
console.log(primer)
console.log(ultimo)