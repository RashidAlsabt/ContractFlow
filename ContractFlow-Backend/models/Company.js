const {Schema, model} = require("mongoose")

const companySchema = new Schema({
    name: {
        type: String,
        required:[ true, "Company name is requried" ],
        trim:true,
        unique:true,
    },
    phonenumber: {
        type: String,
    },email: {
        type: String,
    },
}, {
    timestamps: true
})

const Company = model("Company", companySchema)

module.exports = Company