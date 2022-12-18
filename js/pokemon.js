const infoDiv = document.getElementById('info');
const genBtn = document.getElementById('gen');

const generateCard = ()=>{
    var pkmn = Math.floor(Math.random() * 1010);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`)
    .then((response) => response.json())
    .then((data) => 
        console.log(data)
        
        
        
    );

}

genBtn.addEventListener('click', generateCard)