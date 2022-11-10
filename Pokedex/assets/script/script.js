const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=5'

function convert(pokemon){
    return `    
    <ol>
        <li>
            <a href="${pokemon.url}">${pokemon.name}</a>
        </li>
    </ol>
`
}

const pokemonUl = document.getElementById('pokemonss');


fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokList) => {
        for (let index = 0; index < pokList.length; index++) {
            const pokemon = pokList[index];
            pokemonUl.innerHTML += convert(pokemon)
        }
    })

    .catch((error) => console.error(error))

    