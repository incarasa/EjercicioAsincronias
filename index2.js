/* Este es un archivo para verificar que la lógica si estuviese sumando
    bien los datos que entran por el JSON */

const productos = [
    {"idproducto":"1","nombreProducto":"Té de frutos rojos","idProveedor":"1","idCategoria":"1","cantidadPorUnidad":"10 cajas x 20 bolsas","precioUnidad":"18","unidadesEnExistencia":"39","unidadesEnPedido":"0","nivelNuevoPedido":"10","suspendido":"0","categoriaProducto":"Categoria D"},
    {"idproducto":"2","nombreProducto":"Cerveza tibetana Barley","idProveedor":"1","idCategoria":"1","cantidadPorUnidad":"24   bot. 12 l","precioUnidad":"19","unidadesEnExistencia":"17","unidadesEnPedido":"40","nivelNuevoPedido":"25","suspendido":"0","categoriaProducto":"Categoria D"},
    {"idproducto":"3","nombreProducto":"Sirope de regaliz","idProveedor":"1","idCategoria":"2","cantidadPorUnidad":"12   bot. 550 ml","precioUnidad":"10","unidadesEnExistencia":"13","unidadesEnPedido":"70","nivelNuevoPedido":"25","suspendido":"0","categoriaProducto":"Categoria D"},
    {"idproducto":"4","nombreProducto":"Especias Cajun del chef Anton","idProveedor":"2","idCategoria":"2","cantidadPorUnidad":"48   frascos 6 l","precioUnidad":"22","unidadesEnExistencia":"53","unidadesEnPedido":"0","nivelNuevoPedido":"0","suspendido":"0","categoriaProducto":"Categoria D"}
]

const detallePedido = [
    {"idpedido":"10248","idproducto":"1","preciounidad":"10","cantidad":"10","descuento":"0"},
{"idpedido":"10248","idproducto":"1","preciounidad":"10","cantidad":"10","descuento":"0"},
{"idpedido":"10248","idproducto":"1","preciounidad":"35","cantidad":"15","descuento":"0"},
{"idpedido":"10249","idproducto":"1","preciounidad":"19","cantidad":"10","descuento":"0"},
{"idpedido":"10249","idproducto":"1","preciounidad":"42","cantidad":"10","descuento":"0"},
{"idpedido":"10250","idproducto":"1","preciounidad":"8","cantidad":"10","descuento":"0"},
{"idpedido":"10250","idproducto":"2","preciounidad":"15","cantidad":"35","descuento":"0"}
]

//se crea la lista de la respuesta
let listaFinal = []; 
//console.log(productos);

for(let pedido of detallePedido) {
    ({idpedido, idproducto, preciounidad, cantidad, descuento} = pedido);
    
    
    // buscar en lista final el producto

    let existe = listaFinal.find((item => Number(item.id) === Number(idproducto)));

    if(existe !== undefined) {
        existe.cantidad += Number(cantidad);
    }
    
    else {
        let productoInfo = productos.find((item => item.idproducto === idproducto));
        let nombreProducto = productoInfo.nombreProducto;

        let nuevo = {id: idproducto,
                        nombre: nombreProducto,
                        cantidad: Number(cantidad)
        }
        listaFinal.push(nuevo);
    }


    
}

console.log(listaFinal);