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
  federationCode: String,
  playerId: {
    type: Number,
    required: true
  },
  height: Number,
  heightFeet: Number,
  heigthFeet: Number,
  birthDate: Date,
  tournaments: [
    {
      tournamentName: String,
      tournament_id: String,
      tournamentNo: Number,
      tournamentCountry: String,
      // season Number refers to year (sometimes first tournament of a season is in the previous calender year)
      season: String,
      rank: Number,
      positionInEntry: Number,
      partnerName: String,
      partnerFirstName: String,
      partnerLastName: String,
      partnerNo: Number,
      startDate: Date,
      endDate: Date,
      isInMainDraw: Boolean,
      isInQualification: Boolean,
      earnings: Number
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
      date: String,
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
        enum: ['Win', 'Loss', 'Win by Forfeit', 'Loss by Forfeit']
      },
      score: String,
      matchLength: String
    }
  ]
}, { timestamps: true })

module.exports = model('Player', Player)