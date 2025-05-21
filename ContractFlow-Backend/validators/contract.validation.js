const { body } = require('express-validator')

const contractRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('counterparty').notEmpty().withMessage('Counterparty is required'),
  body('owner').notEmpty().withMessage('Owner is required'),
  body('value').optional().isFloat({ min: 0 }).withMessage('Value must be a number'),
  body('currency')
    .optional()
    .isIn(['USD', 'BHD', 'EUR'])
    .withMessage('Currency must be USD, BHD, or EUR'),
  body('status')
    .optional()
    .isIn(['draft', 'in-review', 'signed', 'expired'])
    .withMessage('Invalid status'),
  body('startDate')
    .optional()
    .isISO8601()
    .withMessage('Start date must be a valid date'),
  body('endDate')
    .optional()
    .isISO8601()
    .withMessage('End date must be a valid date')
]

module.exports = contractRules
