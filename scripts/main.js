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
        productoExistente.cantidad += cantidad;
        console.log(`Producto actualizado: ${productoExistente.nombre}`);
        console.log("productos:", productos);
      } else {
        productos.push(newProduct);
        console.log(`Producto agregado: ${newProduct.nombre}`);
        console.log("productos:", productos);
      }
    },
    eliminarProducto: (nombre) => {
      productos = productos.filter((product) => product.nombre !== nombre);
      console.log("productos:", productos);
    },
    actualizarPrecio: (nombre, nuevoPrecio) => {
      const productoExistente = productos.find(
        (producto) => producto.nombre === nombre,
      );
      if (productoExistente) {
        productoExistente.precio = nuevoPrecio;
        console.log(`Producto actualizado: ${productoExistente.nombre}`);
        console.log("productos:", productos);
      } else {
        console.log(`El producto ${nombre} no existe.`);
      }
    },
    consultarProducto: (nombre) => {
      let USDollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      const productoExistente = productos.find(
        (producto) => producto.nombre === nombre,
      );
      if (productoExistente) {
        console.log(
          `${productoExistente.nombre} - Cantidad: ${productoExistente.cantidad}, Precio: ${USDollar.format(productoExistente.precio)}`,
        );
      } else {
        console.log(`El producto ${nombre} no existe`);
      }
    },
    mostrarInventario: () => {
      let USDollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      console.log("--- INVENTARIO ---");
      productos.forEach((producto, index) => {
        console.log(
          `${index + 1}. ${producto.nombre} - Cantidad: ${producto.cantidad}, Precio: ${USDollar.format(producto.precio)}`,
        );
      });
    },
    calcularValorTotal: () => {
      // let total
    },
  };
}

const miInventario = crearInventario();

miInventario.agregarProducto("Peras", 5, 3);
miInventario.agregarProducto("Sandias", 3, 3);
miInventario.eliminarProducto("Naranjas");
miInventario.actualizarPrecio("Kiwis", 10);
miInventario.actualizarPrecio("Manzanas", 10);
miInventario.consultarProducto("Manzanas");
miInventario.mostrarInventario();
