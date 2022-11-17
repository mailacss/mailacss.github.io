var offset = 0
const limit = 12
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`



function convert(pokemon){

    return `    
    <li class="pokemons">
            <h2>${pokemon.name}</h2>
            <div id='categorias'>
                <p>hab1</p>
                <p>hab2</p>
            </div>
            <span>#num</span>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png'></img>
    </li>
`
}

const pokemonUl = document.getElementById('container');
pokemonUl.innerHTML = '';


pokeApi.getPokemons().then((pokList = []) => {
        pokemonUl.innerHTML += pokList.map((convert)).join('')

    })









    function pula() {
        return 0
    }
