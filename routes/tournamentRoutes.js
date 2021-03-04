const router = require('express').Router()
const { Player, Admin, Tournament } = require('../models')
const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator')

// @route   POST api/tournament
// @desc    Create new tournament in DB
// @access  Private
// **** add auth as second parameter before deploy
router.post('/tournament', async (req, res) => {

  const addTournament = req.body
console.log(`${addTournament}-----------------------------------------------------------------------------------------`)
  try {
    const newTournament = new Tournament(addTournament)
    console.log(newTournament)
    const tournament = await newTournament.save()
    res.send(`${newTournament.name} added`)
  } catch (err) {
    console.error(err.messge)
    res.status(500).send('Server Error')
  }
})

module.exports = router

// @route   POST api/tournament
// @desc    Create new tournament in DB
// @access  Private
// **** add auth as second parameter before deploy
router.post('/tournament', async (req, res) => {

  const addTournament = req.body
  console.log(`${addTournament}-----------------------------------------------------------------------------------------`)
  try {
    const newTournament = new Tournament(addTournament)
    console.log(newTournament)
    const tournament = await newTournament.save()
    res.send(`${newTournament.name} added`)
  } catch (err) {
    console.error(err.messge)
    res.status(500).send('Server Error')
  }
})

module.exports = router