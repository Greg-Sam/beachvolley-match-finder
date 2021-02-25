const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
// const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator')

const Admin = require('../models/Admin')

// // @route   Get api/auth
// // @desc    Get logged in admin
// // @access  Private
// router.get('/auth', auth, async (req, res) => {
//   try {
//     const admin = await Admin.findById(req.admin.id).select('-password')
//     res.json(admin)
//   } catch (error) {
//     console.error(err.message)
//     res.status(500).send('Server Error')
//   }
// })

// @route   Post api/auth
// @desc    Auth admin & get token
// @access  Public
router.post('/auth',
  [
    body('email', 'Plese include a valid email').isEmail(),
    body('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body

    try {
      let admin = await Admin.findOne({ email })
      if (!admin) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      const isMatch = await bcrypt.compare(password, admin.password)

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      const payload = {
        admin: {
          id: admin.id
        }
      }

      jwt.sign(payload, process.env.jwtSecret, {
        expiresIn: 360000
      }, (err, token) => {
        if (err) throw err
        res.json({ token })
      })

    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')

    }

  })

module.exports = router