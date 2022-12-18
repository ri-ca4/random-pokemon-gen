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
    levelDiv.innerHTML = 'lvl ' + lvl

    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`)
    .then((response) => response.json())
    .then((data) => {
        let types = data.types
        let moves = data.moves
        var moveNum = Math.floor(Math.random() * moves.length)

        var height = data.height * 3.937 //convert decimeters to inches
        var heightIn = Math.floor(height % 12) //remaining inches after convert to feet
        var heightFt = Math.floor(height / 12) //convert to feet

        var weight =  Math.floor(data.weight / 4.536) //convert hectograms to lbs


        nameDiv.innerHTML = data.name
        typeDiv.innerHTML = types[0].type.name
        imageDiv.innerHTML = `<img src='${data.sprites.front_default}' alt="${data.name}"/>`
        lengthDiv.innerHTML = heightFt + "'" + heightIn
        weightDiv.innerHTML = weight + ' lbs'
        moveDiv.innerHTML = moves[moveNum].move.name
    });

}

genBtn.addEventListener('click', generateCard)