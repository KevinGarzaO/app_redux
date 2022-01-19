const estadoInicial = {
    productos: [
        { id: 1, nombre: "Producto A" },
        { id: 2, nombre: "Producto 2" },
        { id: 3, nombre: "Producto 3" },
        { id: 4, nombre: "Producto 4" }
    ],
    carrito: []
}

const reducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO':
            const { nombre, idProductoAgregar } = accion;

            //Si el carrito no tiene elementos entonces agregamos uno.
            if (estado.carrito.length === 0) {
                return {
                    ...estado,
                    carrito: [{ id: idProductoAgregar, nombre, cantidad: 1 }]
                }
            } else {
                //De otra forma tenemos que revisar que el carrito no tenga ya el producto que queremos agregar.
                //Si ya lo tiene entonces queremos actualizar a su valor.
                //si no tiene el producto entonces lo agregamos.

                //Para editar el arreglo tenemos que clonarlo.
                const nuevoCarrito = [...estado.carrito];

                //Comprobamos si el carrito ya tiene el ID del producto a agregar.
                const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
                    return productoDeCarrito.id === idProductoAgregar
                }).length > 0;

                if (yaEstaEnCarrito) {
                    //Para ello tenemos que buscarlo, obtener su posición en el arreglo.
                    //y en base a su posición ya actualizamos el valor.
                    nuevoCarrito.forEach((productoDeCarrito, index) => {
                        if (productoDeCarrito.id === idProductoAgregar) {
                            const cantidad = nuevoCarrito[index].cantidad
                            nuevoCarrito[index] =
                            {
                                id: idProductoAgregar,
                                nombre: nombre,
                                cantidad: cantidad + 1
                            }
                        }
                    })
                    //De otra forma entonces agregamos el producto al arreglo
                } else {
                    nuevoCarrito.push({
                        id: idProductoAgregar,
                        nombre: nombre,
                        cantidad: 1
                    });
                }

                return {
                    ...estado,
                    carrito: nuevoCarrito
                }
            }

            return estado;
        default:
            return estado;
    }
}
export default reducer;
