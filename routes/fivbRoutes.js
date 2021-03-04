const router = require('express').Router()
// const { Player, Tournament } = require('../models')
const auth = require('../middleware/auth')
const axios = require('axios')

// // @route   POST api/tournament
// // @desc    Post new player in DB
// // @access  Private
// router.post('/tournament', auth, async (req, res) => {

//   const addTournament = req.body

//   try {
//     const newTournament = new Tournament(addTournament)
//     console.log(newTournament)
//     const tournament = await newTournament.save()
//     res.send(`${newTournament.name} added`)
//   } catch (err) {
//     console.error(err.messge)
//     res.status(500).send('Server Error')
//   }
// })


// @route   GET FIVB Vis2009
// @desc    get all tournaments from FIVB Website
// @access  Private
var xmlTournamentRequestBody = `<?xml version="1.0" encoding="UTF-8"?>
       <req:KnownTrackingRequest xmlns:req="http://www.example.com" 
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                xsi:schemaLocation="http://www.example.com
                TrackingRequestKnown.xsd">
                <Request Type="GetBeachTournamentList"
         Fields="No Season Title Name Type Gender CountryCode EndDateMainDraw Version">
</Request>`
let tournamentArray = []
let filteredTournaments = []
const tournamentList = async () => {
  const res = await axios.get('https://www.fivb.org/vis2009/XmlRequest.asmx?Request=%3CRequests%3E%3CRequest%20Type=%27GetBeachTournamentList%27%20Fields=%27Season%20Title%20Name%20Type%20Gender%20CountryCode%20EndDateMainDraw%20Version%27/%3E%3C/Requests%3E')

  tournamentArray.push(res.data.responses[0].data)

  console.log(tournamentArray)
  
  for (let i = 0; i <tournamentArray[0].length; i++) {
    console.log('hi');
  }
  
  myArray = [[{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }]]
  for (let i = 0; i < myArray[0].length; i++) {
    console.log('hello');
  }
}
tournamentList()
