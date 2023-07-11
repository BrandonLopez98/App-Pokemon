const { Type } = require('../db')
const axios = require('axios')

module.exports = async () => {
    let typesApiURL = await axios.get('https://pokeapi.co/api/v2/type')
  
    typesApiURL.data.results.map((item) =>
      Type.findOrCreate({
        where: {
          name: item.name,
        },
      })
    )

    let types = await Type.findAll()
    return types
  }