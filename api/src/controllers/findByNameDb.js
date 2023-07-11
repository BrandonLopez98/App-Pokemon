const axios = require('axios')

module.exports = async (name) => {
    try {
      let results = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`
      )
  
      let pokeDetail = {
        name: results.data.name,
        id: results.data.id,
        height: results.data.height,
        weight: results.data.weight,
        hp: results.data.stats[0].base_stat,
        attack: results.data.stats[1].base_stat,
        defense: results.data.stats[2].base_stat,
        speed: results.data.stats[5].base_stat,
        types: results.data.types.map((p) => p.type.name),
        image: results.data.sprites.other.home.front_default,
      }
      let pokeArray = []
      pokeArray.push(pokeDetail)
      return pokeArray
    } catch (err) {
      return 'That pokemon does not exist'
    }
  }