const {Schema, model} = require("mongoose")

const ManagerSchema = new Schema({
    departmentName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Manager = model('Manager', ManagerSchema)

module.exports = Manager
