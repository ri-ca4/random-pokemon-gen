const genBtn    = document.getElementById('gen');

const nameDiv   = document.getElementById('name');
const levelDiv  = document.getElementById('level');
const typeDiv   = document.getElementById('type');
const imageDiv  = document.getElementById('image');
const lengthDiv = document.getElementById('length');
const weightDiv = document.getElementById('weight');

const moveDiv  = document.getElementById('move');


const generateCard = ()=>{
    var pkmn = Math.floor(Math.random() * 151);
    var lvl = Math.floor(Math.random() * 100);
    levelDiv.innerHTML = lvl

    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`)
    .then((response) => response.json())
    .then((data) => {
        let types = data.types
        let moves = data.moves
        var moveNum = Math.floor(Math.random() * moves.length)
        console.log(moves[moveNum].move.name)

        nameDiv.innerHTML = data.name
        typeDiv.innerHTML = types[0].type.name
        imageDiv.innerHTML = `<img src='${data.sprites.front_default}' alt="${data.name}"/>`
        lengthDiv.innerHTML = data.height
        weightDiv.innerHTML = data.weight
        moveDiv.innerHTML = moves[moveNum].move.name
    });

}

genBtn.addEventListener('click', generateCard)