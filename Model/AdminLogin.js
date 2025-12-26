const mongoose = require("mongoose");

const adminLoginSchema = new mongoose.Schema({

    adminEmail:String,
    adminID:String,
    adminName:String,
    adminPassword:String,
})

module.exports = mongoose.model("adminn",adminLoginSchema)