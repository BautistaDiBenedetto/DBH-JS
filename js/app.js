const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')

const precioTotal = document.getElementById('precioTotal')

const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        agregarAlCarrito();
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

function renderizarCarrito() {   //PRIMER PASO
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

 
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    
    if (existe){ 
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarrito()
    console.log(carrito)
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    actualizarCarrito() 
  
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ''

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <h5>${producto.numero}</h5>
        <img class="card_image__modal" src=${producto.imagen}>
        <div>${producto.desc}</div>
        <div>$${producto.precio}</div>
        <div>${producto.cantidad}</div>
        <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar"><i class='bx bx-trash'></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito)) // GUARDAR EN LOCAL STORAGE

    })

    contadorCarrito.innerText = carrito.length

   

    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
}


//fetch

// const lista = document.querySelector("#listado")
// fetch("../stock.json")
//     .then( (response) => response.json() )
//     .then( (data) => {
//         console.log(resultado)
//         data.forEach ((producto) => {
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

