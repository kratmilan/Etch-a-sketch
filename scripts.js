let darab = 16
let lastSize = darab
const container = document.querySelector("#container")



function insertTable(darab) {
    let size = 560/ darab
    for (let i= 0;i<darab;i++) {
        const sor = document.createElement("div")
        sor.className = "sor"
        container.appendChild(sor)
        for (let j = 0;j<darab;j++) {
            const oszlop = document.createElement("div")
            oszlop.classList.add("oszlop")
 
            oszlop.style.width = `${size}px`
            oszlop.style.height = `${size}px`
            oszlop.addEventListener( "mouseover" ,function () {
                let r = Math.floor(Math.random() * (255));
                let g = Math.floor(Math.random() * (255));
                let b = Math.floor(Math.random() * (255));
                oszlop.style.backgroundColor = `rgb(${r},${g},${b})`
            })
            sor.appendChild(oszlop)
        }
    }
    lastSize = darab
}
function removeTable() {
    for (let i = 0; i<lastSize; i++) {
        const remContainer = document.querySelector(".sor")
        for (let j = 0;j<lastSize;j++) {
            const pixel = remContainer.querySelector(".oszlop")
            if (pixel) {remContainer.removeChild(pixel)}
        }
        container.removeChild(remContainer)

    }
}
function newTable() {
    size = prompt("Enter grid size: ")
    if (!(size <=100)) size = 16
    removeTable()
    insertTable(size)
}
insertTable(darab)
console.log("helloo")
const sizeButton = document.querySelector("#size")
sizeButton.onclick = () => newTable()
const cleaBtn = document.querySelector("#clear")
cleaBtn.onclick = () => {removeTable(), insertTable(lastSize)
}