const mongoose= require("mongoose");
const orderSchema= new mongoose.Schema({
    amount:Number,
    products:String, 
    clientname:String,
     email:String,
    city:String, 
    address:String,
    phone:Number, 
   
}, { timestamps: true })
module.exports = mongoose.model("order", orderSchema);