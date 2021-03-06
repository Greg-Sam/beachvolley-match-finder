const router = require('express').Router()
const { Player, Tournament } = require('../models')
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
  const res = await axios.get('https://www.fivb.org/vis2009/XmlRequest.asmx?Request=%3CRequests%3E%3CRequest%20Type=%27GetBeachTournamentList%27%20Fields=%27Season%20No%20EndDateMainDraw%20Title%20Name%20Type%20Gender%20EndDateMainDraw%20StartDateQualification%20StartDateMainDraw%20CountryCode%20Version%27/%3E%3C/Requests%3E')

  tournamentArray.push(res.data.responses[0].data)

  filteredTypes = tournamentArray[0].map(tournament => {
    switch (tournament.type) {
      case 0:
        tournament.title = 'Grand Slam'
        filteredTournaments.push(tournament)
        break
      case 1:
        tournament.title = 'Open'
        filteredTournaments.push(tournament)
        // console.log(tournament)
        break
      case 3:
        tournament.title = 'World Series'
        filteredTournaments.push(tournament)
        break
      case 4:
        tournament.title = 'World Championship'
        filteredTournaments.push(tournament)
        break
      case 32:
        tournament.title = 'Major Series'
        filteredTournaments.push(tournament)
        break
      case 32:
        tournament.title = 'World Tour Finals'
        filteredTournaments.push(tournament)
        break
      case 38:
        tournament.title = '5 Star'
        filteredTournaments.push(tournament)
        break
      case 39:
        tournament.title = '4 Star'
        filteredTournaments.push(tournament)
        break
      case 40:
        tournament.title = '3 Star'
        filteredTournaments.push(tournament)
        break
      case 41:
        tournament.title = '2 Star'
        filteredTournaments.push(tournament)
        break
      case 42:
        tournament.title = '1 Star'
        filteredTournaments.push(tournament)
        // console.log(tournament)
        break
      default:
    }
  })

  filteredGender = filteredTournaments.map(tournament => {
    switch (tournament.gender) {
      case 0:
        tournament.gender = 'Male'
        break
      case 1:
        tournament.gender = "Female"
        break
      default:
    }
  })
  
  fixEndDates = filteredTournaments.map(tournament => {
    tournament.endDate = tournament.endDateMainDraw
  })

  fixStartDates = filteredTournaments.map(tournament => {
    if (tournament.startDateQualification === '') {
      tournament.startDateQualification = null
    }

    switch (tournament.startDateQualification) {
      case null:
        tournament.startDate = tournament.startDateMainDraw
        break
      case '':
        tournament.startDate = tournament.startDateMainDraw
        break
      default:
        tournament.startDate = tournament.startDateQualification
    }

    // if (tournament.startDateQualification !== '' || tournament.startDateQualification !== null) {
    //   tournament.startDate = tournament.startDateQualification
    // } else {
    //   tournament.startDate = tournament.startDateMainDraw
    // }
  })
  // console.log(filteredTournaments)
  // let testPost = {
  //   "no": 4,
  //   "season": "2009",
  //   "title": "String"
  // }

  // await axios.post(`http://localhost:3001/api/tournament`, testPost)

  for (let i = 0; i < filteredTournaments.length; i++) {

    await axios.post(`http://localhost:3001/api/tournament`, filteredTournaments[i])
  }


}
tournamentList()
