var offset = 0
const limit = 12
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokTypes(pokType) {
    return pokType.map((typesSlot) => `<li >${typesSlot.type.name}</li>`)
}

function convert(pokemon){

    return `    
    <li class="pokemons">
            <h2>${pokemon.name}</h2>
            <ol>
                ${convertPokTypes(pokemon.types).join('')}
            </ol>
            <span>#${pokemon.order}</span>
            <img src='${pokemon.sprites.other.home.front_default}'></img>
    </li>
`
}

const pokemonUl = document.getElementById('container');
pokemonUl.innerHTML = '';


pokeApi.getPokemons().then((pokList = []) => {
        pokemonUl.innerHTML += pokList.map((convert)).join('')
        document.getElementById("container").style.display = 'grid'



    })

