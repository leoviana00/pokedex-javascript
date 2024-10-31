
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?${offset}=0&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}" >
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    //Encadeamento de thens (Sempre o que vai para o segundo then, é o return do primeiro e o que vai para o primeiro é a promise da fetch url)
    .then((response) => response.json()) //TRansformando o response em uma promessa do body convertido em json
    .then((jsonBody) => jsonBody.results) //Recebendo o body convertido e printando ele.
    .then((pokemons) => {
        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)

            
        }
    })
    .catch((error) => console.error(error))
