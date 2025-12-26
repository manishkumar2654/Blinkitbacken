const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  adders: String,
  pincode: Number,
  phone: Number,
  password: String,
});

module.exports = mongoose.model("userlog", userLoginSchema);
