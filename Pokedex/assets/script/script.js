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

/*
function converta(habilidades){

    return `    
    ${habilidades.base_stat}
    ${habilidades.stat.name}

`
}  

            fetch(urlteste)
                .then((resposta) => resposta.json())
                .then((corpo) => corpo.stats)
                .then((final) => {
                 for (let inn = 0; inn < final.length; inn++) {
                   const habilidades = final[inn]
                   console.log(final[inn])
                   pokemonsta.innerHTML += converta(habilidades)
                    }
                }
            )
*/

const pokemonUl = document.getElementById('container');
pokemonUl.innerHTML = ''
const pokemonsta = document.getElementById('static');

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokList) => {
        for (let index = 0; index < pokList.length; index++) {
            const pokemon = pokList[index];
            const urlteste = pokemon.url;
            pokemonUl.innerHTML += convert(pokemon)
        }
    
    })
    .catch((error) => console.error(error))

function pula() {
    offset = offset+limit;
    console.log("OKKKKKKKKKKKKKKKKKKKKKK")
}