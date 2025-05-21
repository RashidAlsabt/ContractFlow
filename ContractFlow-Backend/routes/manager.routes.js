const express = require('express')
const router = express.Router()
const controller = require('../controllers/manager.controller')
const validate = require('../middleware/validate')
const rules = require('../validators/manager.validation')

// list managers
router.get('/', controller.list)
// get one
router.get('/:id', controller.getOne)
// update
router.put('/:id', rules, validate, controller.update)
// delete
router.delete('/:id', controller.remove)

module.exports = router
