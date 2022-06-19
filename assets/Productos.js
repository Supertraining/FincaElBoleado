let showCar = document.getElementById("collapseOne");
let buttonToggle = document.getElementById("buttonToggle")

buttonToggle.addEventListener("mouseover", function(){
    buttonToggle.click()
    buttonToggle.addEventListener("mouseout", function(){
    buttonToggle.click() 
    })
});

let carrito = document.getElementById("carrito") //link carrito

let precio =Number(document.getElementById("precioIva").innerHTML)

carrito.addEventListener("click", function() {
    alert(`El precio de su vino es $ ${precio*1.21}`)
})








