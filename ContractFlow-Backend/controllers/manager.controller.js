const Manager = require('../models/Manager')

const createManager = async (req, res) => {
  try {
    const manager = await Manager.create(req.body)
    res.status(201).json(manager)
  } catch (err) {
    res.status(500).json({ error: 'could not create manager', details: err.message })
  }
}

const getManagers = async (req, res) => {
  try {
    const managers = await Manager.find()
    res.json(managers)
  } catch (err) {
    res.status(500).json({ error: 'could not fetch managers' })
  }
}

const updateManager = async (req, res) => {
  try {
    const updated = await Manager.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!updated) {
      return res.status(404).json({ error: 'Manager not found' })
    }

    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: 'could not update manager', details: err.message })
  }
}

const deleteManager = async (req, res) => {
  try {
    const deleted = await Manager.findByIdAndDelete(req.params.id)

    if (!deleted) {
      return res.status(404).json({ error: 'Manager not found' })
    }

    res.json({ message: 'Manager deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: 'could not delete manager', details: err.message })
  }
}

module.exports = {
  createManager,
  getManagers,
  updateManager,
  deleteManager
}
