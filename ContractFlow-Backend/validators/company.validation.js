const { body } = require('express-validator')

const rules = [
  body('name').notEmpty().withMessage('Name required'),
  body('email').optional().isEmail().withMessage('Invalid email'),
  body('phonenumber')
    .optional()
    .isMobilePhone()
    .withMessage('Invalid phone')
]

module.exports = rules
