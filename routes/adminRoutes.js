const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator')


const Admin = require('../models/Admin')

// @route   POST api/admins
// @desc    Register an admin
// @access  Public
router.post('/admin', [body('name', 'Please enter your name').not().isEmpty(),
body('email', 'Please include a valid email').isEmail(),
body('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { name, email, password } = req.body

  try {
    let admin = await Admin.findOne({ email })

    if (admin) {
      return res.status(400).json({ msg: 'Admin already exists' })
    }

    admin = new Admin({
      name,
      email,
      password
    })

    const salt = await bcrypt.genSalt(10)

    admin.password = await bcrypt.hash(password, salt)

    await admin.save()

    const payload = {
      admin: {
        id: admin.id
      }
    }

    jwt.sign(payload, process.env.jwtSecret, {
      expiresIn: 3600
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