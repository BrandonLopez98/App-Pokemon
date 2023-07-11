const { Pokemon } = require('../db')

module.exports = async (id) => {
    await Pokemon.destroy({
      where: { id: id },
    })
  } 