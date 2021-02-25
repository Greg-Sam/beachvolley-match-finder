const { model, Schema } = require('mongoose')

const Player = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  name: String,
  gender: String,
  nationality: String,
  playerId: {
    type: String,
    required: true
  },
  birthDate: String,
  tournaments: [
    {
      tournamentName: String,
      tournamentId: String,
      tournamentCountry: String,
      // season Number refers to year (sometimes first tournament of a season is in the previous calender year)
      season: Number,
      finish: Number,
      seed: String,
      partnerName: String,
      partnerFirstName: String,
      partnerLastName: String,
      partnerBVId: String,
      date: String
    }
  ],
  matches: [
    {
      tournament: String,
      tournamentId: String,
      season: Number,
      round: String,
      partner: String,
      partnerId: String,
      opponents: {
        opponentA: String,
        opponentAId: String,
        opponentB: String,
        opponentBId: String,
        opponentNationality: String,
        opponentNationalityCode: String
      },
      result: {
        type: String,
        enum: ['Win', 'Loss']
      },
      score: String,
      matchLength: String
    }
  ]
}, { timestamps: true })

module.exports = model('Player', Player)