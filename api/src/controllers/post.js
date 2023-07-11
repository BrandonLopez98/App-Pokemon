const { Pokemon, Type } = require('../db')

module.exports = async (name,hp,attack,defense,speed,height,weight,types) => {
    try {
      const random = Math.floor(Math.random() * 151 + 1)
      let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${random}.png`
  
     

      let newPokemon = await Pokemon.create({
        name: name.toLowerCase(),
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types,
      })
  
      const typeInDb = await Type.findAll({ where: { name: types } })
      newPokemon.addType(typeInDb)
      return newPokemon
    } catch (error) {
      return { error: error.message }
    }
  }