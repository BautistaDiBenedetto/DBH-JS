
class Producto{
    constructor(id, numero, imagen, desc, precio, stock){
        this.id = id;
        this.numero = numero;
        this.imagen = imagen;
        this.desc = desc;
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock)
    }
}

const stockProductos = [
new Producto (1, 9018, "../imagenes/item1.jpg", "90x30x60 <br> int x ext x diam", 189, 1000),
new Producto (2, 6818, "../imagenes/item2.jpg", "90x30x60 <br> int x ext x diam", 250, 1000),
new Producto (3, 5819, "../imagenes/item3.jpg", "90x30x60 <br> int x ext x diam", 305, 1000),
new Producto (4, 6456, "../imagenes/item4.jpg", "90x30x60 <br> int x ext x diam", 405, 1000),
new Producto (5, 8461, "../imagenes/item1.jpg", "90x30x60 <br> int x ext x diam", 605, 1000),
new Producto (6, 5436, "../imagenes/item2.jpg", "90x30x60 <br> int x ext x diam", 805, 1000),
new Producto (7, 7462, "../imagenes/item3.jpg", "90x30x60 <br> int x ext x diam", 310, 1000),
new Producto (8, 1224, "../imagenes/item4.jpg", "90x30x60 <br> int x ext x diam", 153, 1000),
new Producto (8, 1854, "../imagenes/item1.jpg", "90x30x60 <br> int x ext x diam", 180, 1000),

]