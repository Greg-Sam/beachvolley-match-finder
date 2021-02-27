const router = require('express').Router()
const Player = require('./models/Player')
import axios from 'axios'
// Filter in App after Get
const playerId = '602c53e0c004f7608c295129'
const getPlayer = async () => {
  try {
    const res = await axios.get(`/api/player/${playerId}`)
    console.log(res)
  }
  catch (err) {
    console.log('oops')
  }
}

getPlayer()

// router.get('/player/:id', async (req, res) => {
//   try {
//     const player = await Player.findById(req.params.id)
//     res.json(player)
//   } catch (error) {
//     console.error(err.message)
//     res.status(500).send('Server Error')
//   }

// })