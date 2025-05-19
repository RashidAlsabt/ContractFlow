const express = require('express')
const router = express.Router()

const handleValidation = require('../middleware/validate')
const companyRules = require('../validators/company.validation')
const {
  createCompany,
  getCompanies,
  updateCompany,
  deleteCompany
} = require('../controllers/company.controller')

router.post('/', companyRules, handleValidation, createCompany)
router.get('/', getCompanies)
router.put('/:id', companyRules, handleValidation, updateCompany)
router.delete('/:id', deleteCompany)

module.exports = router
