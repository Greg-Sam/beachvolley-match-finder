const router = require('express').Router()

router.use('/api', require('./playerRoutes.js'))

module.exports = router
