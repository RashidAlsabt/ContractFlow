const { body } = require('express-validator')

const rules = [
  body('departmentName').notEmpty().withMessage('Department required'),
  body('email').isEmail().withMessage('Valid email required')
]

module.exports = rules
