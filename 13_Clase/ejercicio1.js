const producto ={
    detalles: {
        nombre: "Iphone 14 pro",
        precio: "$1,200",
        categoria: "dispositivo movil"
    },

    inventario: {
        stock: "15 unidades",
        proveedor: "Apple INC",
        ubicacion: "United States"
    },

    historial: {
        fechaIngreso: "16 de agosto",
        ultimaVenta: "1 de septiembre",
        ventasTotales: "20 unidades"
    }
}


//Mostrar solo los detalles
console.log(producto.detalles)

//Aumentar stock a 50u
producto.inventario.stock = "50 unidades";
console.log(producto.inventario)

//Cambiar categoria
producto.detalles.categoria = "electronica"

//Extraer nombre y precio en variables separadas
const {nombre,precio} = producto.detalles;
console.log(nombre)
console.log(precio)


//mostrar objeto actualizado
console.log(producto)