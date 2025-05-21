const Manager = require('../models/Manager')

exports.list = async (req, res) => {
  const all = await Manager.find().select('-password')
  res.json(all)
}

exports.getOne = async (req, res) => {
  const one = await Manager.findById(req.params.id).select('-password')
  res.json(one)
}

exports.update = async (req, res) => {
  const updated = await Manager.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).select('-password')
  res.json(updated)
}

exports.remove = async (req, res) => {
  await Manager.findByIdAndDelete(req.params.id)
  res.status(204).end()
}
