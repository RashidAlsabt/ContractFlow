const express = require('express')
const router = express.Router()

const contractRules = require('../validators/contract.validation')
const handleValidation = require('../middleware/validate')
const {
  createContract,
  getContracts,
  getOneContract,
  updateContract,
  deleteContract
} = require('../controllers/contract.controller')

router.post('/', contractRules, handleValidation, createContract)
router.get('/', getContracts)
router.get('/:id', getOneContract)
router.put('/:id', contractRules, handleValidation, updateContract)
router.delete('/:id', deleteContract)

module.exports = router
