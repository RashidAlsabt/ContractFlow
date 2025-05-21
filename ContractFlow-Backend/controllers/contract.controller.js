const Contract = require('../models/Contract')

const createContract = async (req, res) => {
  try {
    const contract = await Contract.create(req.body)
    res.status(201).json(contract)
  } catch (err) {
    res.status(500).json({ error: 'could not create contract', details: err.message })
  }
}

const getContracts = async (req, res) => {
  try {
    const contracts = await Contract.find()
    res.json(contracts)
  } catch (err) {
    res.status(500).json({ error: 'could not fetch contracts' })
  }
}

// UPDATE Contract
const updateContract = async (req, res) => {
  console.log('Incoming update payload:', req.body)

  try {
    const updated = await Contract.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!updated) {
      return res.status(404).json({ error: 'Contract not found' })
    }

    res.json(updated)
  } catch (err) {
    console.error('Update error:', err)
    res.status(500).json({ error: 'could not update contract', details: err.message })
  }
}


//DELETE contract
const deleteContract = async (req, res) => {
  try {
    const deleted = await Contract.findByIdAndDelete(req.params.id)

    if (!deleted) {
      return res.status(404).json({ error: 'Contract not found' })
    }

    res.json({ message: 'Contract deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: 'could not delete contract', details: err.message })
  }
}
const getOneContract = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id)

    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' })
    }

    res.json(contract)
  } catch (err) {
    res.status(500).json({ error: 'could not fetch contract', details: err.message })
  }
}



module.exports = {
  createContract,
  getContracts,
  updateContract,
  deleteContract,
  getOneContract
}
