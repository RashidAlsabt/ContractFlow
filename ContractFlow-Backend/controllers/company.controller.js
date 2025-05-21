const Company = require('../models/Company')

exports.list = async (req, res) => {
  const all = await Company.find()
  res.json(all)
}

exports.getOne = async (req, res) => {
  const one = await Company.findById(req.params.id)
  res.json(one)
}

exports.create = async (req, res) => {
  const saved = await Company.create(req.body)
  res.status(201).json(saved)
}

exports.update = async (req, res) => {
  const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updated)
}

exports.remove = async (req, res) => {
  await Company.findByIdAndDelete(req.params.id)
  res.status(204).end()
}
