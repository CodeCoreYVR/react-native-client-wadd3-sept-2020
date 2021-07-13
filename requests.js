const POKEMON_API = `https://pokeapi.co/api/v2/`
const LIMIT_POKEMON_PATH = `pokemon?limit=`
export const getPokemons = (length = 200) => {
  return fetch(`${POKEMON_API}${LIMIT_POKEMON_PATH}${length}`)
}
export const getPokemon = (name) => {
  return fetch(`${POKEMON_API}pokemon/${name}`)
}