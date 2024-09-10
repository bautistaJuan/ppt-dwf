const piedraImg = require("url:../../assets/piedra.svg");
const papelImg = require("url:../../assets/papel.svg");
const tijerasIMG = require("url:../../assets/tijera.svg");

export function initIndexPage(params){
 const div = document.createElement("main")

 div.innerHTML = `
 <in-title>Presioná jugar
 y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</in-title>
 <menu-button class="welcome-button">Jugar!</menu-button>
 <div class="hands-container">
 <img class="welcome-hands" src=${tijerasIMG}>
 <img class="welcome-hands" src=${piedraImg}>
 <img class="welcome-hands" src=${papelImg}>
 </div>
 `

 div.classList.add("welcome-container")

 const welcomeButton = div.querySelector(".welcome-button")
 welcomeButton.addEventListener("click",()=>{
   params.goTo("/game")
 })

  return div
}