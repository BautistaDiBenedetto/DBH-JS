
class Producto{
    constructor(id, numero, imagen, desc, precio, stock, cantidad){
        this.id = id;
        this.numero = numero;
        this.imagen = imagen;
        this.desc = desc;
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock)
        this.cantidad = cantidad;
    }
}

const stockProductos = [
new Producto (1, 9018, "../imagenes/item1.jpg", "90x30x60 <br> int x ext x diam", 189, 1000, 1),
new Producto (2, 6818, "../imagenes/item2.jpg", "90x30x60 <br> int x ext x diam", 250, 1000, 1),
new Producto (3, 5819, "../imagenes/item3.jpg", "90x30x60 <br> int x ext x diam", 305, 1000, 1),
new Producto (4, 6456, "../imagenes/item4.jpg", "90x30x60 <br> int x ext x diam", 405, 1000, 1),
new Producto (5, 8461, "../imagenes/item1.jpg", "90x30x60 <br> int x ext x diam", 605, 1000, 1),
new Producto (6, 5436, "../imagenes/item2.jpg", "90x30x60 <br> int x ext x diam", 805, 1000, 1),
new Producto (7, 7462, "../imagenes/item3.jpg", "90x30x60 <br> int x ext x diam", 310, 1000, 1),
new Producto (8, 1224, "../imagenes/item4.jpg", "90x30x60 <br> int x ext x diam", 153, 1000, 1),
new Producto (9, 1854, "../imagenes/item1.jpg", "90x30x60 <br> int x ext x diam", 180, 1000, 1),

]

// const stockProductos = [
//     {"id": 1, "numero":9018,"imagen":"../imagenes/item1.jpg","desc": "90x30x60 <br> int x ext x diam","precio": 189,"stock": 1000},
//     {"id": 2, "numero":6818,"imagen":"../imagenes/item2.jpg","desc": "90x30x60 <br> int x ext x diam","precio": 250,"stock": 1000},
//     {"id": 3, "numero":5819,"imagen":"../imagenes/item3.jpg","desc": "90x30x60 <br> int x ext x diam","precio": 305,"stock": 1000},
//     {"id": 4, "numero":6456,"imagen":"../imagenes/item4.jpg","desc": "90x30x60 <br> int x ext x diam","precio": 405,"stock": 1000},
//     {"id": 5, "numero":8461,"imagen":"../imagenes/item1.jpg","desc": "90x30x60 <br> int x ext x diam","precio": 605,"stock": 1000},
//     {"id": 6, "numero":5436,"imagen":"../imagenes/item2.jpg","desc": "90x30x60 <br> int x ext x diam","precio": 805,"stock": 1000},
//     {"id": 7, "numero":7462,"imagen":"../imagenes/item3.jpg","desc": "90x30x60 <br> int x ext x diam","precio": 310,"stock": 1000},
//     {"id": 8, "numero":1224,"imagen":"../imagenes/item4.jpg","desc": "90x30x60 <br> int x ext x diam","precio": 153,"stock": 1000},
//     {"id": 9, "numero":1854,"imagen":"../imagenes/item1.jpg","desc": "90x30x60 <br> int x ext x diam","precio": 180,"stock": 1000}
// ]