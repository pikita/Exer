let pokemon;

fetch("pokemon.json-master/pokedex.json")
    .then(response => {
        return response.json()
    })
    .then(dati => {
        pokemon = dati.slice(0, 151)
        createCard(pokemon)
    })
    .catch()

function createCard(pokemonJson) {
    const pokedex = document.getElementById("pokedex")
    //console.log(pokemonJson[0].name.english)
    pokemonJson.forEach(pokemon => {
    //console.log(formatID(pokemon.id));
    const card = `<div class="iniline-block rounded-xl m-auto max-w-[200px] p-5 hover:bg-slate-200">
    <img src="pokemon.json-master/images/${formatID(
        pokemon.id
    )}.png">
    <h3>${pokemon.name.english}</h3>
    </div>`;
    
    pokedex.insertAdjacentHTML("beforeend", card)
    });
}

function formatID(id){
    if (id.toString().length == 1) return `00${id}`
    if (id.toString().length == 2) return `0${id}`
    return id
}


//leggere gli imput 
const searchBar = document.getElementById("search-bar")
searchBar.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    e.target.value = e.target.value.substring(0,1).toUpperCase() + e.target.value.slice(1,e.target.value.length)
    
})




























































/* const array = []

for (let i = 1; i <= 76; i++){
    array.push(i)
}

console.log(array)

const btn = document.getElementById("btn");

btn.onclick = function() {
    let number = Math.floor(Math.random() * array.length); 
    
} */




/* let number = Math.floor(Math.random() * array.length);
return console.log(number) */