
const giocatore = document.getElementById("giocatore")
const ostacolo = document.getElementById("ostacolo")

giocatore.addEventListener("click", (e) => {
        giocatore.classList.add("animate")
        setTimeout( () => {giocatore.classList.remove("animate")} , 500)
})

/* console.log(giocatore.getBoundingClientRect()) */
/* 
setInterval(() => {
    console.log(ostacolo.getBoundingClientRect())

},400) 
 */
function controllo () {
    console.log("sono nel controllo")
    console.log(giocatore.getBoundingClientRect().bottom)
    console.log(ostacolo.getBoundingClientRect().top)
   if(giocatore.getBoundingClientRect().right >= ostacolo.getBoundingClientRect().x
    && giocatore.getBoundingClientRect().bottom >= ostacolo.getBoundingClientRect().top){
    alert("perso")
  }
}
setInterval(controllo, 50)



