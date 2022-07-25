const container = document.getElementById("container_productos");

let carrito = []



stockProductos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <h5 class="card_numero">${producto.numero}</h5>
    <img class="card_image" src=${producto.imagen}>
    <div class="card_desc">${producto.desc}</div>
    <div class="card_precio">${producto.precio}</div>
    <button id=${producto.id} class="btn_agregar" onclick="renderizarProductos(${producto.id}); carroAlerta()">Agregar al Carrito</button>
    `
    container.appendChild(div)
})

function renderizarProductos(prodId) {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito)) // GUARDAR EN LOCAL STORAGE
}







