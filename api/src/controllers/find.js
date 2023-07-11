const { Pokemon, Type } = require('../db')
const axios = require('axios')

module.exports = async (id) => {
    let pokeById
    if (isNaN(id)) {
      pokeById = await Pokemon.findAll({
        where: {
          id: id,
        },
        include: {
          model: Type,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      })
    }
    if (pokeById) {
      const p = pokeById.pop()
      const buildPokemon = {
        id: p.id,
        name: p.name,
        hp: p.hp,
        attack: p.attack,
        defense: p.defense,
        speed: p.speed,
        height: p.height,
        weight: p.weight,
        types: p.types.map((t) => t.name),
        image: p.image,
      }
      return buildPokemon
    } else {
      try {
        const results = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
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
  
        if (pokeDetail) return pokeDetail
      } catch (error) {
        throw new Error(`Pokemon not found with id ${id}`)
      }
    }
  }