const Company = require('../models/Company')

const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body)
    res.status(201).json(company)
  } catch (err) {
    res.status(500).json({ error: 'could not create company', details: err.message })
  }
}

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
    res.json(companies)
  } catch (err) {
    res.status(500).json({ error: 'could not fetch companies' })
  }
}

const updateCompany = async (req, res) => {
  try {
    const updated = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!updated) {
      return res.status(404).json({ error: 'Company not found' })
    }

    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: 'could not update company', details: err.message })
  }
}

const deleteCompany = async (req, res) => {
  try {
    const deleted = await Company.findByIdAndDelete(req.params.id)

    if (!deleted) {
      return res.status(404).json({ error: 'Company not found' })
    }

    res.json({ message: 'Company deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: 'could not delete company', details: err.message })
  }
}

module.exports = {
  createCompany,
  getCompanies,
  updateCompany,
  deleteCompany
}
