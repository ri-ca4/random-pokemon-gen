const genBtn    = document.getElementById('gen');
const pkmnCard  = document.getElementById('pkmnCard')

const nameDiv   = document.getElementById('name');
const typeDiv   = document.getElementById('type');
const imageDiv  = document.getElementById('image');
const lengthDiv = document.getElementById('length');
const weightDiv = document.getElementById('weight');
const moveDiv   = document.getElementById('move');

const bkgrColors = {
    'bug': '#9DA735',
    'dragon': '#7038F8', 
    'dark': '#705848',
    'electric': '#F8D030', 
    'fairy': '#F0B6BC',
    'fighting': '#C03028', 
    'fire': '#F08030',
    'flying': '#9987C0', 
    'ghost': '#74608E', 
    'grass': '#78C850',
    'ground': '#E0C068', 
    'ice': '#98D8D8', //change
    'normal': '#A8A878', 
    'poison': '#974F92', 
    'psychic': '#F85888', //change
    'rock': '#A5924B',
    'steel': '#B8B8D0',
    'water': '#6890F0'
}


const generateCard = ()=>{
    var pkmn = Math.floor(Math.random() * 905);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`)
    .then((response) => response.json())
    .then((data) => {
        let types = data.types
        var type = types[0].type.name
        let moves = data.moves
        var moveNum = Math.floor(Math.random() * moves.length)

        var height = data.height * 3.937 //convert decimeters to inches
        var heightIn = Math.floor(height % 12) //remaining inches after convert to feet
        var heightFt = Math.floor(height / 12) //convert to feet

        var weight =  Math.floor(data.weight / 4.536) //convert hectograms to lbs


        nameDiv.innerHTML = `<p>${data.name}</p>`
        typeDiv.innerHTML = `<p>${type}</p>`
        imageDiv.innerHTML = `<img id='pkmnImage' src='${data.sprites.front_default}' alt="${data.name}"/>`
        lengthDiv.innerHTML = heightFt + "'" + heightIn
        weightDiv.innerHTML = weight + ' lbs'
        moveDiv.innerHTML = `<p>${moves[moveNum].move.name}</p>`

        pkmnCard.style.backgroundColor = bkgrColors[type]
    });

}

genBtn.addEventListener('click', generateCard)