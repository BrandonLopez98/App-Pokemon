const express = require('express')
const router = express.Router()
const getAll = require('../controllers/getAll')
const getAllDb = require('../controllers/getAllDb')
const find = require('../controllers/find')
const findByName = require('../controllers/findByName')
const post = require('../controllers/post')
const deletee = require('../controllers/deletee')


router.get('/', async (req, res) => {
  try {
    let { name } = req.query
    if (name) {
      let pokeByName = await findByName(name)
      res.status(200).send(pokeByName)
    } else {
      let pokemonsDb = await getAllDb()
      let pokemons = await getAll()
      res.status(200).send([...pokemons, ...pokemonsDb])
    }
  } catch (err) {
    res.status(400).send(err.message)
  }
})

router.get('/:idPokemon', async (req, res) => {
  try {
    const { idPokemon } = req.params
    let finded = await find(idPokemon)
    res.status(200).json(finded)
  } catch (error) {
    res.status(404).send(error.message)
  }
})

router.post('/', async (req, res) => {
  let { name, hp, attack, defense, speed, height, weight, types } = req.body
  try {
    if (!name || !hp || !attack || !defense || !types) {
      throw new Error('Please complete the required information.')
    }
    post(name, hp, attack, defense, speed, height, weight, types)
    res.status(200).send(`Pokemon ${name} created successfully!`)
  } catch (error) {
    return { error: error.message }
  }
})

router.delete('/:idPokemon', async (req, res) => {
  const { idPokemon } = req.params
  try {
    await deletee(idPokemon)
    res.status(200).json('Pokemon Deleted')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})


module.exports = router
