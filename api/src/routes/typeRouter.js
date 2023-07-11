const { Router } = require('express')
const getTypes = require('../controllers/getTypes')
const router = Router()

router.get('/', async (req, res) => {
  try {
    let allTypes = await getTypes()
    res.status(200).send(allTypes)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = router
