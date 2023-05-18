import { display } from "./Display.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await display()
}

renderAllHTML()

document.addEventListener("facility-Inventory", (event) => {
    renderAllHTML()
})

document.addEventListener("mineralChosen", (event) => {
    renderAllHTML()
})