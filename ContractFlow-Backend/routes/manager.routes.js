const express = require('express')
const router = express.Router()

const handleValidation = require('../middleware/validate')
const managerRules = require('../validators/manager.validation')
const {
  createManager,
  getManagers,
  updateManager,
  deleteManager
} = require('../controllers/manager.controller')

router.post('/', managerRules, handleValidation, createManager)
router.get('/', getManagers)
router.put('/:id', managerRules, handleValidation, updateManager)
router.delete('/:id', deleteManager)

module.exports = router
