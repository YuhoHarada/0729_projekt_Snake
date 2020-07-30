const field = document.getElementById("snakeField")
for (let i = 0; i < 100; i++){
    let div = document.createElement("div")
    div.classList = "item"
    div.addEventListener("mouseover", colorChange)
    field.appendChild(div)
}

function colorChange() {
    let div = event.target
    div.style.background = "orange"
    setTimeout(() => {
        div.style.background = "lightblue"
    }, 1000)
}