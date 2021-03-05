const router = require('express').Router()
const {
  convertIocCode,
  convertIso2Code,
  convertIso3Code
} = require("convert-country-codes");
// const { Player, Tournament } = require('../models')
const auth = require('../middleware/auth')
const axios = require('axios')

const getTournaments = async () => {
  await axios.get(`http://localhost:3001/api/tournaments`)
    .then(data => {
      let tournaments = data.data
      // console.log(tournaments)

      
      tournaments.map(tournament => {
        tournamentNumber = tournament.no
        
        player1Object = {
          firstName: '',
          lastName: '',
          name: '',
          gender: '',
          federationCode: '',
          playerId: '',
          height: '',
          heightFeet: '',
          heightInches: '',
          birthDate: '',
          tournaments: {
            tournamentName: '',
            tournamentTitle: '',
            tournament_id: '',
            tournamentNo: '',
            tournamentCountry: '',
            season: '',
            rank: '',
            seed: '',
            partnerName: '',
            partnerNo: '',
            startDate: '',
            endDate: '',
            isInMainDraw: '',
            isInQualification: '',
            earnings:''
                }
        }
  
        player2Object = {
          firstName: '',
          lastName: '',
          name: '',
          gender: '',
          federationCode: '',
          playerId: '',
          height: '',
          heightFeet: '',
          heightInches: '',
          birthDate: '',
          tournaments: {
            tournamentName: '',
            tournamentTitle: '',
            tournament_id: '',
            tournamentNo: '',
            tournamentCountry: '',
            season: '',
            rank: '',
            seed: '',
            partnerName: '',
            partnerNo: '',
            startDate: '',
            endDate: '',
            isInMainDraw: '',
            isInQualification: '',
            earnings:''
                }
        }
        

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
            console.log(tournament.name, tournament.season, team.player1LastName)
            if (team.federationCode === 'ENG') {
              team.federationCode = 'GBR'
            } else if (team.federationCode === 'MLD') {
              team.federationCode = 'MDA'
            } else if (team.federationCode === 'XXX') {
              team.federationCode = 'VEN'
            } else if (team.federationCode === 'ZZZ') {
              team.federationCode = 'UKR'
            } else if (team.federationCode === 'SCO') {
              team.federationCode = 'GBR'
            }
            team.federationCode = convertIocCode(team.federationCode).iso2
            player1Object.firstName= team.player1FirstName
            player1Object.lastName= team.player1LastName
            player1Object.name = team.player1FirstName + ' ' + team.player1LastName
            player2Object.firstName = team.player2FirstName
            player2Object.lastName = team.player2LastName
            player2Object.name = team.player2FirstName + ' ' + team.player2LastName
            player1Object.tournaments.earnings = team.earningsTeam / 200
            player2Object.tournaments.earnings = team.earningsTeam / 200

            player1Object.height = team.player1Height / 10000
            player1Object.heightFeet = parseInt(player1Object.height / 30.48)
            player1Object.heightInches = Math.round(((player1Object.height / 30.48) - player1Object.heightFeet) * 12)
            if (player1Object.height === 0) {
              player1Object.height = null
            }
            if (player1Object.height === null) {
              player1Object.heightFeet = null, player1Object.heightInches = null
            }
            player2Object.height = team.player1Height / 10000
            player2Object.heightFeet = parseInt(player2Object.height / 30.48)
            player2Object.heightInches = Math.round(((player2Object.height / 30.48) - player2Object.heightFeet) * 12)
            if (player2Object.height === 0) {
              player2Object.height = null
            }
            if (player2Object.height === null) {
              player2Object.heightFeet = null, player2Object.heightInches = null
            }
            player1Object.gender = tournament.gender
            player2Object.gender = tournament.gender
            player1Object.playerId = team.noPlayer1
            player2Object.playerId = team.noPlayer2
            player1Object.birthDate = team.player1Birthdate
            player2Object.birthDate = team.player2Birthdate
            player1Object.tournaments.tournamentName = tournament.name
            player1Object.tournaments.tournamentTitle = tournament.title
            player1Object.tournaments.tournament_id = tournament._id
            player1Object.tournaments.tournamentNo = tournament.no
            player1Object.tournaments.tournamentCountry = tournament.countryCode
            player1Object.tournaments.season = tournament.season
            player1Object.tournaments.rank = team.rank
            player1Object.tournaments.seed = team.positionInEntry
            player1Object.tournaments.rank = team.rank
            player1Object.tournaments.partnerName = player2Object.name 
            player1Object.tournaments.partnerNo = player2Object.playerId
            player1Object.tournaments.startDate = tournament.startDate
            player1Object.tournaments.endDate = tournament.endDate
            player1Object.tournaments.isInMainDraw = team.isInMainDraw
            player1Object.tournaments.isInQualification = team.isInQualification
            player2Object.tournaments.tournamentName = tournament.name
            player2Object.tournaments.tournamentTitle = tournament.title
            player2Object.tournaments.tournament_id = tournament._id
            player2Object.tournaments.tournamentNo = tournament.no
            player2Object.tournaments.tournamentCountry = tournament.countryCode
            player2Object.tournaments.season = tournament.season
            player2Object.tournaments.rank = team.rank
            player2Object.tournaments.seed = team.positionInEntry
            player2Object.tournaments.rank = team.rank
            player2Object.tournaments.partnerName = player1Object.name 
            player2Object.tournaments.partnerNo = player1Object.playerId
            player2Object.tournaments.startDate = tournament.startDate
            player2Object.tournaments.endDate = tournament.endDate
            player2Object.tournaments.isInMainDraw = team.isInMainDraw
            player2Object.tournaments.isInQualification = team.isInQualification

            console.log(player2Object)
          })


   



        }

        getPlayersFromTournament()

      }
      )
      // .catch(err => console.log(err))
    })
}
getTournaments()