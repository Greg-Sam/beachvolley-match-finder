const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({msg: 'Welcome to the beach volley match finder API!'}))

// Define Routes
app.use(require('./routes'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))