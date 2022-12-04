let image = document.querySelector('.starbucks')
let circle = document.querySelector('.circle')

function changeImage(endereço) { 
    image.src = endereço
}

function changeColor(cor) { 
    circle.style.background = cor
}