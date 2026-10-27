const inventario = [
{ nombre: "Producto 1", categoria: "Electronica", stock: 5 },
{ nombre: "Producto 2", categoria: "Hogar", stock: 0 },
{ nombre: "Producto 3", categoria: "Electronica", stock: 0 },
{ nombre: "Producto 4", categoria: "Ropa", stock: 10 },
{ nombre: "Producto 5", categoria: "Hogar", stock: 0 }
];

// Filtrar productos agotados (stock === 0)
const productosAgotados = inventario.filter(producto => producto.stock === 0);

// Mapear para obtener solo nombre y categoria
const nombresYCategorias = productosAgotados.map(producto => ({
nombre: producto.nombre,
categoria: producto.categoria
}));

console.log(nombresYCategorias);