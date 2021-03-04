const { model, Schema } = require('mongoose')

const Tournament = new Schema({
  no: {
    type: Number,
    required: true,
    unique: true
  },
  season: {
    type: String,
    required: true
  },
  title: String,
  name: String,
  type: Number,
  gender: Number,
  countryCode: String,
  endDateMainDraw: String,
  version: Number
}
  , { timestamps: true })

module.exports = model('Tournament', Tournament)