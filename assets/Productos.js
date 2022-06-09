let showCar = document.getElementById("collapseOne");
let buttonToggle = document.getElementById("buttonToggle")

buttonToggle.addEventListener("mouseover", function(){
    buttonToggle.click()
    buttonToggle.addEventListener("mouseout", function(){
    buttonToggle.click() 
    })
});