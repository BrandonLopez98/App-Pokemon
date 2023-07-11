const { Pokemon, Type } = require('../db')


module.exports = async () => {
    let pokemonsDb = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    })
    pokemonsDb = pokemonsDb.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((t) => t.name),
        image: pokemon.image,
      }
    })
    return pokemonsDb
  }