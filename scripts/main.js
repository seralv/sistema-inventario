function crearInventario() {
  let productos = [
    {
      nombre: "Manzanas",
      cantidad: 13,
      precio: 5,
    },
    {
      nombre: "Naranjas",
      cantidad: 11,
      precio: 4,
    },
    {
      nombre: "Sandias",
      cantidad: 7,
      precio: 8,
    },
  ];
  return {
    agregarProducto: (nombre, cantidad, precio) => {
      const newProduct = { nombre, cantidad, precio };
      const productoExistente = productos.find(
        (producto) => producto.nombre === nombre,
      );

      if (productoExistente) {
        productoExistente.cantidad++;
        console.log("productos:", productos);
      } else {
        productos.push(newProduct);
        console.log(
          `Producto ${JASON.stringify(productoExistente.name)} agregado`,
        );
        console.log("productos:", productos);
      }
    },
  };
}

const miInventario = crearInventario();

miInventario.agregarProducto("Sandias", 5, 3);
