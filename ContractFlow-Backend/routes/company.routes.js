const express = require('express')
const router = express.Router()
const controller = require('../controllers/company.controller')
const validate = require('../middleware/validate')
const rules = require('../validators/company.validation')

// list
router.get('/', controller.list)
// get one
router.get('/:id', controller.getOne)
// create
router.post('/', rules, validate, controller.create)
// update
router.put('/:id', rules, validate, controller.update)
// delete
router.delete('/:id', controller.remove)

module.exports = router
