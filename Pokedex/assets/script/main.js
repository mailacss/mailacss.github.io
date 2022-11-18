const pokemonUl = document.getElementById('container');
pokemonUl.innerHTML = '';
const loadMore = document.getElementById("loadMore")
const loadBack = document.getElementById("loadBack")

let offset = 0
const limit = 12


function loadPokemonItens(offset,limit) {
    function convert(pokemon){
        document.getElementById("container").style.display = 'grid'
        var teste = ''
        if (pokemon.pNumber < 10) {
            teste = '00'+pokemon.pNumber
        } else if (pokemon.pNumber < 100) {
            teste = '0'+pokemon.pNumber
        } else{
            teste = pokemon.pNumber
        }
    
        return `    
        <li class="pokemons ${pokemon.type}" >
                <h2>${pokemon.name}</h2>
                <ol>
                    ${pokemon.types.map((type) => `<li class="${type}">${type}</li>`).join('')}
                </ol>
                <span>#${teste}</span>
                <img src='${pokemon.photo}'></img>
        </li>
    `
    }

    pokeApi.getPokemons(offset,limit).then((pokList = []) => {
        pokemonUl.innerHTML = pokList.map((convert)).join('')
    })
}

loadPokemonItens(offset,limit)

loadMore.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset,limit)
    loadBack.style.display = 'block'
    console.log(offset)
})

loadBack.addEventListener('click', () => {
    console.log(offset)
    if (offset>=limit) {
        offset -= limit
        loadPokemonItens(offset,limit)
        if (offset<limit) {
            loadBack.style.display = 'none'
        }   
    }

})