const { model, Schema } = require('mongoose')

const Admin = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}
, { timestamps: true })

module.exports = model('Admin', Admin)