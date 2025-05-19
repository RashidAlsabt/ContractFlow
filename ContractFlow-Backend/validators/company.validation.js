const { body } = require('express-validator')

const companyRules = [
  body('name')
    .notEmpty()
    .withMessage('name is required'),

  body('email')
    .optional()
    .isEmail()
    .withMessage('not a valid email'),

  body('phoneNumber')
    .optional()
    .matches(/^\d{7,15}$/)
    .withMessage('phone should be 7 to 15 digits')
]

module.exports = companyRules
