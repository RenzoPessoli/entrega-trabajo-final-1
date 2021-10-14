let arrayProductos = [];

function impExterior(valor) {
  return valor * 1.65
}

class Hardware {
  constructor(id, nombre, precio, stock, origen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.origen = origen
  }
}

for (i = 1; i <= 5; i++) {
  let id = parseInt(prompt("ingrese id"));
  let nombre = prompt("ingrese nombre del producto");
  let precio = parseInt(prompt("ingrese el precio"));
  let stock = parseInt(prompt("ingrese el stock"));
  let origen = prompt("ingrese el país de manufactura");

  
  arrayProductos.push(new Hardware(id, nombre, impExterior(precio), stock, origen));
  
}

arrayProductos.sort(function (a, b) {
  if (a.precio > b.precio) {
    return 1;
  }
  if (a.precio < b.precio) {
    return -1;
  }
})

console.log(arrayProductos)
