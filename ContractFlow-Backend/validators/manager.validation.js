const { body } = require('express-validator')

const managerRules = [
  body('departmentName')
    .notEmpty()
    .withMessage('department name is required'),

  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('not a valid email'),

  body('password')
    .notEmpty()
    .withMessage('password is missing')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters')
]

module.exports = managerRules
