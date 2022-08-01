/*let divProductos = document.getElementById('divProductos')

async function obtenerProductos() {
    const response = await fetch('./json/productos.json')
    return await response.json()
}

obtenerProductos().then(productos => {
    productos.forEach((producto) => {
        divProductos.innerHTML += `
            <div class="card border-primary mb-3" id="producto${producto.id}" style="max-width: 20rem;">
            <img src="./img/${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-header">${producto.nombre}</div>
            <div class="card-body">
          <h4 class="card-title">${producto.marca}</h4>
          <p class="card-text">$${producto.precio}</p>
          <p class="card-text">Stock: ${producto.stock}</p>
          <button class="btn btn-dark" id="boton${producto.id}">Comprar</button>
        </div>
      </div>
        `
    })})

    
*/


const divProductos = document.getElementById("divProductos")

fetch('./json/productos.json')
.then(promise  => promise.json())
.then(data =>  {
    data.forEach(producto => {
        divProductos.innerHTML += `
        <div class="card border-primary mb-3" id="producto${producto.id}" style="max-width: 20rem;">
            <img src="./img/${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-header">${producto.nombre}</div>
            <div class="card-body">
          <h4 class="card-title">${producto.marca}</h4>
          <p class="card-text">$${producto.precio}</p>
          <p class="card-text">Stock: ${producto.stock}</p>
          <button class="btn btn-dark">Comprar</button>
        </div>
      </div>
    `
    });
    
})

async function obtenerProductos () {
    const datos = await fetch('./json/productos.json')
    const datosConv = await datos.json()
    return datosConv
}

const array = obtenerProductos()

array.then(data => console.log(data))