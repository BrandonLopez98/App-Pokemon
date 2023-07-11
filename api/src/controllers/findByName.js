const { Pokemon, Type } = require('../db')

const findByNameDb = require('./findByNameDb')

module.exports = async (name) => {
    try {
      let pokeByNameDB = await Pokemon.findAll({
        where: {
          name: name.toLowerCase(),
        },
        include: {
          model: Type,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      })
      if (!pokeByNameDB.length) {
        return findByNameDb(name.toLowerCase())
      }
  
      pokeByNameDB = pokeByNameDB.map((p) => {
        return {
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
      })
      return pokeByNameDB
    } catch (error) {
      return 'That pokemon does not exist'
    }
  }