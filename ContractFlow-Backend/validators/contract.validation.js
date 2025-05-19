const { body } = require('express-validator');

const contractRules = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('please add a title'),

  body('counterparty')
    .notEmpty()
    .withMessage('counterparty field is needed'),

  body('owner')
    .notEmpty()
    .withMessage('owner must be provided'),

  body('value')
    .optional()
    .isNumeric()
    .withMessage('value should be a number'),

  body('currency')
    .optional()
    .isIn(['USD', 'BHD', 'EUR'])
    .withMessage('currency must be usd, bhd or eur only'),

  body('status')
    .optional()
    .isIn(['draft', 'in-review', 'signed', 'expired'])
    .withMessage('invalid status'),

  body('startDate')
    .optional()
    .isISO8601()
    .withMessage('startDate should be a valid date'),

  body('endDate')
    .optional()
    .is
