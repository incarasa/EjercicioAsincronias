//tarea

Promise.all([
    fetch("https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json")
      .then(response => response.json()),
    fetch("https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json")
      .then(response => response.json())
  ])
  .then(([detallePedido, productos]) => {

    //se crea la lista de la respuesta
    let listaFinal = []; 
    console.log(productos);

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
    listaFinal.sort((element1, element2) => element2.cantidad - element1.cantidad)
    console.log(listaFinal);
    
    //agregar los elementos a la tabla

    const tbody = document.querySelector("#tablaDatos tbody");
    let counter = 1;

    listaFinal.forEach(producto => {

        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = counter;
        tdId.style.fontWeight = "bold";
        tr.appendChild(tdId);

        const tdNombre = document.createElement("td");
        tdNombre.textContent = producto.nombre;
        tr.appendChild(tdNombre);

        const tdCantidad = document.createElement("td");
        tdCantidad.textContent = producto.cantidad;
        tr.appendChild(tdCantidad);

        tbody.appendChild(tr);

        counter++;
    })

  })
