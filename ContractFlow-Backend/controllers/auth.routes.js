const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Manager = require('../models/Manager')

router.post('/signup', async (req, res) => {
  try {
    const { email, password, departmentName } = req.body
    const existing = await Manager.findOne({ email })
    if (existing) return res.status(400).json({ error: 'Email already exists' })

    const hashed = await bcrypt.hash(password, 10)
    const newManager = await Manager.create({ email, password: hashed, departmentName })

    res.status(201).json({ message: 'Signup success' })
  } catch (err) {
    res.status(500).json({ error: 'Signup failed', details: err.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const manager = await Manager.findOne({ email }).select('+password')
    if (!manager) return res.status(401).json({ error: 'Invalid credentials' })

    const match = await bcrypt.compare(password, manager.password)
    if (!match) return res.status(401).json({ error: 'Invalid credentials' })

    const token = jwt.sign({ id: manager._id, email: manager.email }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    })

    res.json({ token })
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message })
  }
})

module.exports = router
