const openModalBtn = document.getElementById("open-modal")
const closeModalBtn = document.getElementById("close-modal")
openModalBtn.addEventListener("click", openModal)
closeModalBtn.addEventListener("click", closeModal)

const modal = document.getElementById("modal")


function openModal(){
   modal.classList.remove("hidden")
}

function closeModal(){
    modal.classList.add("hidden")
}