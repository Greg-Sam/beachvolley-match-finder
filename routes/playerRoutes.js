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

// @route   GET api/players
// @desc    GET all players
// @access  Public
router.get('/players/', async (req, res) => {
  try {
    let playerArray = []
    const players = await Player.find()
    players.map(player => (
      playerArray.push(
        {
          name: player.name,
          firstName: player.firstName,
          lastName: player.lastName,
          nationality: player.nationality,
          _id: player._id
        })
    ))
    res.json(playerArray)
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
// @desc    Update a player tournaments in DB
// @access  Private
router.put('/player/tournament', auth, async (req, res) => {
  console.log(req.body)
  try {
    let player = await Player.findOne({ playerId: req.body.playerId })

    if (!player) return res.status(404).json({ msg: 'Player not found' })

    player = await Player.findOneAndUpdate({ playerId: req.body.playerId }, { $push: { tournaments: req.body.tournaments } })

    res.send(`${player.playerId} updated`)
  } catch (err) {
    console.error(err.messge)
    res.status(500).send('Server Error')
  }
})

// @route   PUT api/player
// @desc    Update a player matches in DB
// @access  Private
router.put('/player/matches', auth, async (req, res) => {
  console.log(req.body)
  try {
    let player = await Player.findOne({ playerId: req.body.playerId })

    if (!player) return res.status(404).json({ msg: 'Player not found' })

    player = await Player.findOneAndUpdate({ playerId: req.body.playerId }, { $push: { matches: req.body.matches } })

    res.send(`${player.playerId} updated`)
  } catch (err) {
    console.error(err.messge)
    res.status(500).send('Server Error')
  }
})


module.exports = router