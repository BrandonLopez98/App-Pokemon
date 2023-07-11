const axios = require('axios')

module.exports = async () => {
  let id = 1
  let pokemons = []
  while (id < 80) {
    let dataApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    pokemons.push(dataApi)
    id++
  }
  pokemons = (await Promise.all(pokemons)).map((results) => {
    return {
      id: results.data.id,
      name: results.data.name,
      hp: results.data.stats[0].base_stat,
      attack: results.data.stats[1].base_stat,
      defense: results.data.stats[2].base_stat,
      image: results.data.sprites.other.home.front_default,
      types: results.data.types.map((type) => type.type.name),
      speed: results.data.stats[5].base_stat,
      height: results.data.height,
      weight: results.data.weight,
    }
  })
  return pokemons
}