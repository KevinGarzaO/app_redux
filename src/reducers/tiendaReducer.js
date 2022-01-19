const estadoInicial =  {
    productos: [
    {   id:1, nombre: "Producto A" },
    {   id:2, nombre: "Producto 2" },
    {   id:3, nombre: "Producto 3" },
    {   id:4, nombre: "Producto 4" }
    ],
    carrito: []
}

const reducer = (estado = estadoInicial, accion) =>{
      switch(accion.type){
            case 'AGREGAR_PRODUCTO_AL_CARRITO':
                console.log(accion.nombre)
           return estado;
            default:
                return estado;
      }
} 

{
    type: 'AGREGAR_PRODUCTO_AL_CARRITO'
}

export default reducer;
