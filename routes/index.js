const router = require('express').Router()

router.use('/api', require('./playerRoutes.js'))
router.use('/api', require('./tournamentRoutes.js'))

router.use('/api', require('./adminRoutes.js'))
router.use('/api', require('./authRoutes.js'))

module.exports = router
