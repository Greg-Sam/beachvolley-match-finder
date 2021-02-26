const router = require('express').Router()
const { Player, Admin } = require('../models')
const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator')

// @route   GET api/player
// @desc    GET all data for one player
// @access  Public
router.get('/player/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id)
    res.json(player)
  } catch (error) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }

})


// @route   POST api/player
// @desc    Create new player in DB
// @access  Private
router.post('/player', auth, async (req, res) => {

  const addPlayer = req.body

  try {
    const newPlayer = new Player(addPlayer)
    console.log(newPlayer)
    const player = await newPlayer.save()
    res.send(`${newPlayer.name} added`)
  } catch (err) {
    console.error(err.messge)
    res.status(500).send('Server Error')
  }
})
// @route   PUT api/player
// @desc    Update a player in DB
// @access  Private

router.put('/player', (req, res) => {
  res.send('Update a player')
})


module.exports = router