import { display } from "./Display.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = async () => {
  mainContainer.innerHTML = await display();
};

renderAllHTML();

// listen for the "colony-choosen" custom event
document.addEventListener("colony-choosen", (event) => {
  //re render the html
  renderAllHTML();
});

document.addEventListener("facility-Inventory", (event) => {
  renderAllHTML();
});

document.addEventListener("mineralChosen", (event) => {
  renderAllHTML();
});
