
let carrito = document.getElementById("carrito") 

let precio =Number(document.getElementById("precioIva").innerHTML)

carrito.addEventListener("click", function() {
    alert(`El precio de su vino es $ ${precio*1.21}`)
})
