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
  gender: String,
  countryCode: String,
  startDate: Date,
  endDate: Date,
  version: Number
}
  , { timestamps: true })

module.exports = model('Tournament', Tournament)