const router = require('express').Router()
const { Player } = require('../models')

// @route   GET api/player
// @desc    GET all data for one player
// @access  Public
router.get('/player', (req, res) => {
  res.send('Get a player')
})

// @route   POST api/player
// @desc    Create new player in DB
// @access  Private
router.post('/player', (req, res) => {
  res.send('Add a new player to database')
})

// @route   PUT api/player
// @desc    Update a player in DB
// @access  Private

router.put('/player', (req, res) => {
  res.send('Update a player')
})


module.exports = router