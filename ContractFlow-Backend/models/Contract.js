const mongoose = require('mongoose')

const contractSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    counterparty: { type: String, required: true, trim: true }, // keep as plain text for MVP
    owner: { type: String, required: true, trim: true },        // whoever’s responsible internally
    value: { type: Number, min: 0 },
    currency: { type: String, default: 'USD' },
    status: {
    type: String,
    enum: ['draft', 'in-review', 'signed', 'expired'],
    default: 'draft'
}
,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contract', contractSchema)
