
let carrito = []


function renderizarCarrito() {
    const container = document.getElementById("container_productos");
    stockProductos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <h5 class="card_numero">${producto.numero}</h5>
        <img class="card_image" src=${producto.imagen}>
        <div class="card_desc">${producto.desc}</div>
        <div class="card_precio">${producto.precio}</div>
        <button id=${producto.id} class="btn_agregar">Agregar al Carrito</button>
        `
        container.appendChild(div)

        const boton = document.getElementById(`${producto.id}`)

            boton.addEventListener("click", () => {
                carroAlerta()
                agregarAlCarrito(producto.id);

            })
    })

}

 renderizarCarrito()

 
function agregarAlCarrito(prodId) {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito)) // GUARDAR EN LOCAL STORAGE
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        agregarAlCarrito();
    }
})

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ''

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <h5 class="card_numero">${producto.numero}</h5>
        <img class="card_image" src=${producto.imagen}>
        <div class="card_desc">${producto.desc}</div>
        <div class="card_precio">${producto.precio}</div>
        <button id=${producto.id} class="btn_agregar">Agregar al Carrito</button>
        `
        contenedorCarrito.appendChild(div)

        let boton = document.getElementById('botonEliminar');
        boton.addEventListener('click', () => {
            eliminarDelCarrito()
        })
    })
}

// const eliminarDelCarrito = (prodId) => {
//     const item = carrito.find((prod) => prod.id === prodId)
//     const indice = carrito.indexOf(item)
//     carrito.splice(indice, 1)
//     actualizarCarrito()
// }




//fetch

// const lista = document.querySelector("#listado")
// fetch("../stock.json")
//     .then( (response) => response.json() )
//     .then( (resultado) => {
//         console.log(resultado)
//         resultado.forEach ((producto) => {
//             const li = document.createElement("li")
//             li.innerHTML = `
//             <div>

//             <h5 class="card_numero">${producto.numero}</h5>
//             <img class="card_image" src=${producto.imagen}>
//             <div class="card_desc">${producto.desc}</div>
//             <div class="card_precio">${producto.precio}</div>
//             <button id=${producto.id} class="btn_agregar" >Agregar al Carrito</button>
            
//             </div>
//             `
//             lista.append(li);
//         })
// })

