const router = require('express').Router()
const {
  convertIocCode,
  convertIso2Code,
  convertIso3Code
} = require("convert-country-codes");
const { Player, Tournament } = require('../models')
const auth = require('../middleware/auth')
const axios = require('axios')



tournamentNumber = '1976'

let teamsArray = []
let actuallyPlayed = []

const getPlayersFromTournament = async () => {
  const res = await axios.get(`https://www.fivb.org/vis2009/XmlRequest.asmx?Request=%3CRequests%3E%3CRequest%20Type=%27GetBeachTeamList%27%20Fields=%27FederationCode%20NoPlayer1%20Player1FirstName%20Player1LastName%20NoPlayer2%20Player2FirstName%20Player2LastName%20Rank%20EarnedPointsTeam%20Player1Birthdate%20Player2Birthdate%20EarningsTeam%20PositionInEntry%20Player1Height%20Player2Height%20IsInMainDraw%20IsInQualification%27%3E%3CFilter%20NoTournament=%27${tournamentNumber}%27/%3E%3C/Request%3E%3C/Requests%3E`)

  teamsArray.push(res.data.responses[0].data)
  // console.log(teamsArray)

  filterPlayed = teamsArray[0].map(team => {
    if (team.rank !== null) {
      actuallyPlayed.push(team)
    }
  })
  prepTeam = actuallyPlayed.map(team => {

    team.federationCode = convertIocCode(team.federationCode).iso2
    team.player1Name = team.player1FirstName + ' ' + team.player1LastName
    team.player2Name = team.player2FirstName + ' ' + team.player2LastName


    team.player1Height = team.player1Height / 10000
    team.player1HeightFeet = parseInt(team.player1Height / 30.48)
    team.player1HeightInches = Math.round(((team.player1Height / 30.48) - team.player1HeightFeet) * 12)
    if (team.player1Height === 0) {
      team.player1Height = null
    }
    if (team.player1Height === null) {
      team.player1HeightFeet = null, team.player1HeightInches = null
    }
    team.player2Height = team.player2Height / 10000
    team.player2HeightFeet = parseInt(team.player2Height / 30.48)
    team.player2HeightInches = Math.round(((team.player2Height / 30.48) - team.player2HeightFeet) * 12)
    if (team.player2Height === 0) {
      team.player2Height = null
    }
    if (team.player2Height === null) {
      team.player2HeightFeet = null, team.player2HeightInches = null
    }
  })


  // player1Object = {
  //   firstName: ,
  //   lastName: ,
  //   name: ,
  //   gender: ,
  //   federationCode:,
  //   playerId: ,
  //   height: ,
  //   heightFeet: ,
  //   heigthFeet: ,
  //   birthDate: ,
  //   tournaments:  {
  //       tournamentName:,
  //       tournament_id: ,
  //       tournamentNo: ,
  //       tournamentCountry: ,
  //       season: ,
  //       rank: ,
  //       positionInEntry: ,
  //       partnerName: ,
  //       partnerFirstName: ,
  //       partnerLastName: ,
  //       partnerNo: ,
  //       startDate: ,
  //       isInMainDraw: ,
  //       isInQualification: ,
  //       earnings:
  //   }
  // }

  // player2Object = {
  //   firstName: ,
  //   lastName: ,
  //   name: ,
  //   gender: ,
  //   federationCode:,
  //   playerId: ,
  //   height: ,
  //   heightFeet: ,
  //   heigthFeet: ,
  //   birthDate: ,
  //   tournaments: {
  //     tournamentName:,
  //     tournament_id: ,
  //     tournamentNo: ,
  //     tournamentCountry: ,
  //     season: ,
  //     rank: ,
  //     positionInEntry: ,
  //     partnerName: ,
  //     partnerFirstName: ,
  //     partnerLastName: ,
  //     partnerNo: ,
  //     startDate: ,
  //     isInMainDraw: ,
  //     isInQualification: ,
  //     earnings:
  //   }
  // }

  console.log(actuallyPlayed)
}


getPlayersFromTournament()