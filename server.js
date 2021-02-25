require('dotenv').config()

const express = require('express')
const { join } = require('path')

const app = express()

app.get('/', (req, res) => res.json({ msg: 'Welcome to the beach volley match finder API!' }))


app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

const PORT = process.env.PORT || 3001

require('./db')
  .then(() => app.listen(PORT))
  .then(() => console.log(`Server started on port ${PORT}`))
  .catch(err => console.log(err))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})